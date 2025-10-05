import Image from "next/image";
import React from "react";


export default function Tile({ img, title }: { img: string, title: string}): React.JSX.Element {
  return (
    <div className="flex items-center gap-x-6 rounded-full border-1 border-[#e4e4e4] p-5 my-4">
      <Image src={img} alt={title} width={200} height={200} className="w-[60px] h-auto" />
      <h3 className="text-[1.5rem] text-gray-500 font-[400]">{title}</h3>
    </div>
  )
}
