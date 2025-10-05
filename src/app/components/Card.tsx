import Image from "next/image";
import React from "react";

/**
 * Feature Card Component
 * Displays service offerings with icon, heading, and bullet points
 * Used in the main offerings section
 */
const Card = ({img, heading, listItems}:{img: string, heading: string, listItems: string[]}) => {
  return (
    <div className="card p-6 rounded-2xl shadow-2xl inset-shadow-xs shadow-[#e4e4e4]">
      <div className=" flex justify-start items-start">
        <Image src={img} alt="Card Image" width={1000} height={1000}    className=" align-start w-[60px] h-[60px] object-contain" />
      </div>
        <div className="content mt-4 leading-normal">
            <h1 className="text-[2rem] poppins font-[500] leading-normal pb-4">{heading}</h1>
            <ul className="text-[1.235rem] font-[400] text-gray-500 list-disc pl-6 space-y-4">
                {listItems.map((item, index) => (
                    <li key={index} className="tracking-[0.15] leading-normal">{item} </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default Card;
