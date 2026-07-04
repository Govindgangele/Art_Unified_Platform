import {
  Image,
  Heart,
  Users,
  Eye,
  Star,
} from "lucide-react";

const ProfileStats = ({ artist }) => {
  const stats = [
    {
      icon: <Image size={28} className="text-blue-400" />,
      value: artist.artworks,
      label: "Artworks",
    },
    {
      icon: <Heart size={28} className="text-red-400" />,
      value: artist.likes,
      label: "Likes",
    },
    {
      icon: <Users size={28} className="text-cyan-400" />,
      value: artist.followers,
      label: "Followers",
    },
    {
      icon: <Eye size={28} className="text-green-400" />,
      value: artist.views,
      label: "Profile Views",
    },
    {
      icon: (
        <Star
          size={28}
          fill="#FACC15"
          color="#FACC15"
        />
      ),
      value: artist.rating,
      label: "Rating",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mt-10">

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

        {stats.map((item, index) => (

          <div
            key={index}
            className="bg-[#0B1120] border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/20"
          >

            <div className="flex justify-center mb-4">

              {item.icon}

            </div>

            <h2 className="text-3xl font-bold text-white">

              {item.value}

            </h2>

            <p className="text-gray-400 mt-2">

              {item.label}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default ProfileStats;