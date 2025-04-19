import { Helmet } from "react-helmet";
import HeroStar from "../../assets/svgs/HeroStar";
import RadialBlur from "./RadialBlur";

function HeroSection() {
  return (
    <>
    <Helmet>
        <title>Thonglana | Home</title>
        <meta
          name="description"
          content="Discover Thonglana, the meme token on Solana! A fusion of AI, tech, and fun—join the movement today."
        />
        <link rel="canonical" href="https://thonglana.com" />
      </Helmet>
      <section id='home'>
        <RadialBlur />
        <div className="relative z-10 mt-16 max-w-7xl mx-auto" data-aos="fade-up" >
          <div className="text-center flex flex-col space-y-4" >
            <h1 className="font-extrabold text-4xl md:text-6xl lg:text-8xl">
              Thonglana{" "}
              {/* <span className="text-black/25 dark:text-white/25">token</span> */}
            </h1>
            <span className="ext-md md:text-xl lg:text-2xl font-bold md:font-extrabold paddingClass">
              Unleashing laughter with every thread, where <span className="text-[#E01E5A]">memes</span><br></br>{" "} meet utility in the most cheeky and entertaining way on web3 🚀
            </span>
            <span className="mb-0">Contract Address:</span>
            <span className="text-[13px] sm:text-sm md:text-lg lg:text-lg">CF8BETZz76dSX9jArYEaL3jutJoWe3UPLL9CR222pump</span>
          </div>
          <div className="flex mt-16 space-x-4 w-full justify-center" >
            <img
              className="h-[200px] md:h-[340px] lg:h-[400px] w-[130px] md:w-[250px] lg:w-[320px] mt-10"
              src="/img5.png"
              alt="White Thonglana At Party"
            />
            <img
              className="h-[200px] md:h-[340px] lg:h-[400px] w-[130px] md:w-[250px] lg:w-[320px] "
              src="/img6.png"
              alt="White Thonglana At Universe"
            />
            <img
              className="h-[200px] md:h-[340px] lg:h-[400px] w-[130px] md:w-[250px] lg:w-[320px] mt-10"
              src="/img3.jpeg"
              alt="White Thonglana At House"
            />
          </div>
          <div className="absolute z-20 bottom-0 h-[180px] md:h-[250px] lg:h-[320px] w-full bg-gradient-to-t from-[#fff] dark:from-[#0D0720]"></div>

          <span className="absolute right-0 top-14 star-responsive">
            <HeroStar />
          </span>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
