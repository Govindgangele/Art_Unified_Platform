// import Hero from "../components/Hero";
// import Categories from "../components/Categories";
// import FeaturedArtists from "../components/FeaturedArtists";
// import FeaturedArtworks from "../components/FeaturedArtworks";
// import WhyKala from "../components/WhyKala";
// import Stats from "../components/Stats";
// import CTA from "../components/CTA";

const Home = () => {
  return (
    <>
    <section className="min-h-screen flex items-center justify-center">

<div className="text-center">

<p className="text-blue-500 uppercase tracking-[6px] mb-5">
WELCOME TO KALA
</p>

<h1 className="text-7xl font-black leading-tight">

Discover

<span className="text-blue-500">
 Beautiful
</span>

Art

</h1>

<p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto">

Connect artists, collectors and creativity
on one premium platform.

</p>

<div className="mt-12 flex justify-center gap-6">

<button className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700">

Explore

</button>

<button className="px-8 py-4 rounded-full border border-blue-500 hover:bg-blue-600">

Become Artist

</button>

</div>

</div>

</section>
      {/* <Hero />

      <Categories />

      <FeaturedArtists />

      <FeaturedArtworks />

      <WhyKala />

      <Stats />

      <CTA /> */}
    </>
  );
};

export default Home;