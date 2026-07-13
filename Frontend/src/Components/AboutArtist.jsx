import {
  Palette,
  MapPin,
  Calendar,
  Globe,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const AboutArtist = ({ artist }) => {

  return (

    <section className="max-w-7xl mx-auto px-6 mt-10">

      <div className="grid lg:grid-cols-3 gap-8">

        {/* About */}

        <div className="lg:col-span-2 bg-[#0B1120] border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition">

          <h2 className="text-3xl font-bold text-white mb-6">

            About Artist

          </h2>

          <p className="text-gray-300 leading-8 text-lg">

            {artist.bio || "This artist hasn't added a bio yet."}

          </p>

        </div>

        {/* Details */}

        <div className="bg-[#0B1120] border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition">

          <h2 className="text-2xl font-bold text-white mb-8">

            Details

          </h2>

          <div className="space-y-6">

            {/* Specialization */}

            <div className="flex items-center gap-4">

              <Palette className="text-blue-400" />

              <div>

                <p className="text-gray-500 text-sm">

                  Specialization

                </p>

                <h3 className="text-white">

                  {artist.specialization?.length
                    ? artist.specialization.join(", ")
                    : "Not Added"}

                </h3>

              </div>

            </div>

            {/* Location */}

            <div className="flex items-center gap-4">

              <MapPin className="text-blue-400" />

              <div>

                <p className="text-gray-500 text-sm">

                  Location

                </p>

                <h3 className="text-white">

                  {artist.address?.city}

                  {artist.address?.state
                    ? `, ${artist.address.state}`
                    : ""}

                  {artist.address?.country
                    ? `, ${artist.address.country}`
                    : ""}

                </h3>

              </div>

            </div>

            {/* Experience */}

            <div className="flex items-center gap-4">

              <Calendar className="text-blue-400" />

              <div>

                <p className="text-gray-500 text-sm">

                  Experience

                </p>

                <h3 className="text-white">

                  {artist.experience || 0} Years

                </h3>

              </div>

            </div>

            {/* Member Since */}

            <div className="flex items-center gap-4">

              <Calendar className="text-blue-400" />

              <div>

                <p className="text-gray-500 text-sm">

                  Member Since

                </p>

                <h3 className="text-white">

                  {new Date(
                    artist.createdAt
                  ).toLocaleDateString("en-IN", {
                    month: "long",
                    year: "numeric",
                  })}

                </h3>

              </div>

            </div>

          </div>

          {/* Social Links */}

          <div className="mt-10">

            <h3 className="text-lg font-semibold text-white mb-5">

              Connect

            </h3>

            <div className="flex gap-4 flex-wrap">

              {artist.socialLinks?.instagram && (

                <a
                  href={artist.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-[#111827] flex justify-center items-center hover:bg-pink-600 transition"
                >

                  <FaInstagram size={22} />

                </a>

              )}

              {artist.socialLinks?.facebook && (

                <a
                  href={artist.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-[#111827] flex justify-center items-center hover:bg-blue-600 transition"
                >

                  <FaFacebook size={22} />

                </a>

              )}

              {artist.socialLinks?.youtube && (

                <a
                  href={artist.socialLinks.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-[#111827] flex justify-center items-center hover:bg-red-600 transition"
                >

                  <FaYoutube size={22} />

                </a>

              )}

              {artist.socialLinks?.website && (

                <a
                  href={artist.socialLinks.website}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-[#111827] flex justify-center items-center hover:bg-cyan-600 transition"
                >

                  <Globe size={22} />

                </a>

              )}

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default AboutArtist;