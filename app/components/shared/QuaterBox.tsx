import { FC } from "react"


interface IProps {
    header: string,
    desc:string,
    number: number,
    haveBorder?: boolean
}



const QuaterBox:FC<IProps> = ( {header, desc, number, haveBorder = true} ) => {
  return (
    <div className={` rounded-md w-4/12 flex-1 relative flex flex-col justify-center px-8 py-12 ${haveBorder && "border"}`}>
    <h4 className="font-bold text-lg">{header}</h4>
    <p className="mt-2 text-slate-600 ">{desc}</p>
    <div className="absolute text-gray-200 top-2 right-10 text-9xl font-bold -z-10">{number}</div>
   </div>
  )
}

export default QuaterBox