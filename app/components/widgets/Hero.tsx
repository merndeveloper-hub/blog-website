import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import HeroPoster from "../assests/images/hero-poster.png";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center ">

        
        <div className="flex-1">
          {/* Left-Side */}
          <h4 className="text-teal-800 font-semibold text-lg">
            Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)
          </h4>
          <h1 className="text-5xl sm:text-6xl font-bold ">Certified Web 3.0 and Metaverse Developer</h1>
          <p className="mt-6 text-xl text-slate-600">
            A One and Quarter Years Panaverse DAO Earn as you Learn Program
            Getting Ready for the Next Generation of the Internet Consolidating
            Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge,
            Ambient Computing/IoT, Network Automation, and Bioinformatics
            Technologies
          </p>
    
          <div className="mt-5">
        <Button text={"Load More"} />
      </div>
       </div>

        <div className="flex-1">
          {/* Right-Side */}
          <Image src={HeroPoster} alt="hero poster" />
        </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
