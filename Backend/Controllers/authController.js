import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";
export const signup = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            phone,
            role,
            address,
        } = req.body;

        // Check existing user

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists",
            });
        }

        // Hash Password

        const hashedPassword = await bcrypt.hash(password, 10);

        let profileImage = {
            url: "",
            public_id: "",
        };

        if (req.file) {

            const uploadedImage = await uploadToCloudinary(
                req.file,
                "Kala/ProfileImages"
            );

            profileImage = {

                url: uploadedImage.secure_url,

                public_id: uploadedImage.public_id,

            };

        }

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
            phone,
            address,
            profileImage,
        });

        const token = generateToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(201).json({
            success: true,
            message: "Signup Successful",
            user,
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error",
        });

    }
};

//Login

export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({
                message: "Invalid Email or Password",
            });

        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {

            return res.status(400).json({
                message: "Invalid Email or Password",
            });

        }

        const token = generateToken(user._id);

        res.cookie("token", token, {

            httpOnly: true,

            secure: false,

            sameSite: "lax",

            maxAge: 7 * 24 * 60 * 60 * 1000,

        });

        res.status(200).json({

            success: true,

            message: "Login Successful",

            user,

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            message: "Server Error",

        });

    }

};

//Logout

export const logout = async (req, res) => {

    res.cookie("token", "", {

        httpOnly: true,

        expires: new Date(0),

    });

    res.status(200).json({

        success: true,

        message: "Logged Out Successfully",

    });

};