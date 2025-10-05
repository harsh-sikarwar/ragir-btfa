import React from "react";

/**
 * Content Component for How It Works Section
 * Displays step-by-step content with flexible positioning
 */
export default function Content({Heading, content, direction, optional = ''}: {Heading: string, content: string, direction: "left" | "right", optional?: string}): React.JSX.Element {
  return (
    <div className={`flex flex-col justify-center ${optional} ${direction === "left" ? "items-start pl-8" : "items-center"}`}>
      <div className="sm:max-w-[350px]">
        <h1 className="text-[2.5rem] font-[500] text-[#333333] mb-4">{Heading}</h1>
        <p className="text-[#666666] text-[1.5rem]">{content}</p>
      </div>
      </div>
  );
}
