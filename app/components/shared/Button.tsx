import { FC } from "react"

const Button:FC<{ text: string }> = ({ text }) => {
  return (
    <button className=" py-4 rounded-full bg-slate-600 font-medium shadow-lg text-xl text-white px-7 hover:scale-105 duration-300 ">{text}</button>
  )
}
 
export default Button