import React from "react";

/**
 * Reusable Section Component
 * Provides consistent section layout with heading and content
 */
const Section = ({ child, heading }: { child: React.JSX.Element, heading: string | React.JSX.Element }) => {
  return (
    <section className="my-[5rem] w-full ">
      <h2 className="text-[4.5rem] text-center font-[600] text-[#333333] pb-8 barlow ">{heading}</h2>
      {child}
    </section>
  );
};

export default Section;
