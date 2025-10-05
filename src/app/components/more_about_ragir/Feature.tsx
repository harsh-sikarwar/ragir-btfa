import Image from "next/image";
import React from "react";

export default function Feature({ img, title, description }: { img: string, title: string, description: string }): React.JSX.Element {
  return (
    <div className="rounded-2xl border-1 border-[#e4e4e4] p-6 pb-[4rem]">
      <Image src={img} alt="Feature Image" width={300} height={300} className="w-[60px] h-auto rounded-lg" />
      <h3 className="text-[1.225rem] text-gray-500 font-[400] mt-8">{title}</h3>
      <p className="text-gray-500 text-[1rem] font-[500]">{description}</p>
    </div>
  )
}

    