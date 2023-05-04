'use client'

import QuaterBox from "../shared/QuaterBox";
import Wrapper from "../shared/Wrapper";
import Web3Img from "../assests/images/metaverse.webp"
import AiImg from "../assests/images/network.webp"
import Image from "next/image";
import { useState } from "react";

export const programsdata = [
  {
    slug:"wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    desc: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
   image: Web3Img,
    quaters: [
      {
        header: "Quater IV",
        desc: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4,
      },
      {
        header: "Quater V",
        desc: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5,
      },
    ],
  },
  {
    slug:"ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    desc: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image: AiImg,
    quaters: [
      {
        header: "Quater IV",
        desc: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4,
      },
      {
        header: "Quater V",
        desc: "AI-361: Deep Learning and MLOps",
        number: 5,
      },
    ],
  },
];


const SpecializedTracks = () => {

const [selectedItem, setSelectedItem] = useState("wmd")

const selectedItemData = programsdata.find((item) => item.slug === selectedItem)


  return (
    <section>
      <Wrapper>
        <div>
          {/* Header */}
          <h2 className="text-5xl font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-xl text-slate-600 max-w-screen-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:{" "}
          </p>
        </div>

        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
          {/* Content Left */}
          <div className="shadow-xl self-start sticky top-28 basis-8/12 rounded-xl border border-slate-200 py-8 px-8">
            <h4 className="text-primary text-lg font-medium">
              Specialized Program
            </h4>
            <h3 className=" text-2xl font-bold">
             {selectedItemData?.header}
            </h3>
            <p className="text-lg text-slate-600 mt-2 ">
            {selectedItemData?.desc}
            </p>
            <button className="text-primary text-xl mt-4 underline flex gap-x-2 items-end">
              Leran More
              <svg
                width="8"
                height="11"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">


                {
                    selectedItemData?.quaters.map((item) => (

                        <QuaterBox
                        key={item.number}  
                        header={item.header}
                          desc={item.desc} 
                          number={item.number}
                          haveBorder={false}
                        />
                    ))
                }
             
            </div>
          </div>
          {/* Content Right */}
          <div  className="px-4 space-y-4 py-6 basis-4/12 bg-slate-100 flex-1">
            {
                programsdata.map((item, i) => (
                    <div onClick={() => setSelectedItem(item.slug)} key={i} className="flex gap-x-4 items-center cursor-pointer">
                      <div className="flex shrink-0 h-24 w-36">
                        <Image src={item.image} alt={item.header} className={"h-24 object-cover rounded"} />
                      </div>
                      <div>
                      <h4 className="text-primary font-medium">Specialized Program</h4>
                      <h3 className="text-xl font-semibold">
                        Web 3.0 (Blockchain) and Metaverse Specialization
                      </h3>
                    </div>
                  </div>

                ))
            }
        </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
