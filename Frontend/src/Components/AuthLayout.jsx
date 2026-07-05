import { Link } from "react-router-dom";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-[#030712] flex">

      {/* Left Section */}

      <div className="hidden lg:block w-1/2 relative overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1600&q=80"
          alt="Art Community"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/70 to-[#020617]/40"></div>

        {/* Content */}

        <div className="relative z-10 h-full flex flex-col justify-end p-16">

          <span className="text-blue-500 font-semibold tracking-[5px] uppercase">
            Kala Community
          </span>

          <h1 className="text-6xl font-bold text-white mt-4 leading-tight">
            Join a Community
            <br />
            Built for
            <span className="text-blue-500"> Artists.</span>
          </h1>

          <p className="text-gray-300 mt-8 text-lg leading-8 max-w-lg">
            Discover talented creators, share your artwork,
            collaborate with artists and inspire people through creativity.
          </p>

          <div className="flex gap-12 mt-14">

            <div>
              <h2 className="text-3xl font-bold text-blue-400">
                10K+
              </h2>

              <p className="text-gray-400 mt-2">
                Artists
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-400">
                25K+
              </h2>

              <p className="text-gray-400 mt-2">
                Artworks
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-400">
                120+
              </h2>

              <p className="text-gray-400 mt-2">
                Cities
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Right Section */}

      <div className="w-full lg:w-1/2 flex justify-center items-center p-8">

        <div className="w-full max-w-md">

          <Link
            to="/"
            className="text-5xl font-bold text-white"
          >
            Ka<span className="text-blue-500">la</span>
          </Link>

          <h2 className="text-4xl font-bold text-white mt-10">
            {title}
          </h2>

          <p className="text-gray-400 mt-3 mb-10">
            {subtitle}
          </p>

          <div className="bg-[#0B1120]/90 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl">

            {children}

          </div>

        </div>

      </div>

    </div>
  );
};

export default AuthLayout;