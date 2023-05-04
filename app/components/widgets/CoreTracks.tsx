import Button from "../shared/Button";
import QuaterBox from "../shared/QuaterBox";
import Wrapper from "../shared/Wrapper";

const CoreTracks = () => {
    const header = "Core Courses \n (Common in All Specializations):"

   const CoreTrackData = [
    {
      header: 'Quarter I',
      desc: 'CS-101: Object-Oriented Programming using TypeScript',
      number: 1
    },
    {
      header: 'Quarter II ',
      desc: 'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
      number: 2
    },
    {
      header: 'Quarter III',
      desc: '$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development',
      number: 3
    },
   ]

  return (
    <section className="mt-16 lg:mt-28">

      <Wrapper>
        {/* content */}
        <div className="max-w-screen-md">
          <h4 className="text-teal-800 font-semibold text-lg">
            Program of Studies
          </h4>
          <h2 className="text-5xl sm:text-4xl font-bold whitespace-pre-line">
          {header}
          </h2>
          <p className="mt-6 text-xl text-slate-600">
            
            Every participant of the program will start by completing the
            </p>
            <p className="mt-1 text-xl text-slate-600">

            following three core courses:
          </p>
          <div className="mt-5">
        <Button text={"Learn More"} />
      </div>
        </div>
        {/* Boxes */}
        <div className="my-20 flex flex-col md:flex-row gap-x-8 gap-y-6 ">
{
  CoreTrackData.map((item, i) => (
  
         <QuaterBox key={item.number} header={item.header} desc = {item.desc} number= {i + 1} />
    
  ))
}

        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
