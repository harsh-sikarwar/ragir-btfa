import Image from "next/image"
export default function Hero(): React.JSX.Element {

  return (
  <>

    <section className="hero_section w-full md:w-[57.5%] flex justify-between flex-col-reverse md:flex-row items-center lg:overflow-hidden pb-[5rem]">

    <div className="content mt-[5rem] max-md:text-center">    
    <h1 className="text-[3rem] font-[500]">Are you a <span className="bold text-[4.5rem]">Trip Organizer</span></h1>
    <h1 className="text-[3rem] font-[500]">or a <span className="bold text-[4.5rem]">Trip Leader</span> </h1>    
    <h1 className="text-[3rem] font-[500] pt-4">that organizes fixed departure group trips?</h1>

<div className="md:w-[180%] max-lg:mt-[5rem] lg:w-full z-1">

<h1 className="text-[2.5rem] font-[500] pt-4">We’ve got an offer you’ll love 💖</h1>
<p className="text-[1.25rem] font-[400] text-gray-500 pt-4">
    At Ragir, we are launching a platform that <span className="font-[600] italic text-gray-600 tracking-[1.15]">(exclusively)</span> lists fixed departure
group trips.
</p>
<p className="text-[1.2rem] font-[400] text-gray-500 py-4">
Whether you run treks, expeditions, weekend getaways, creative workshops,
wellness retreats, cultural tours, or adventure camps, <span className="font-[600] italic text-gray-600 tracking-[1.15]">Ragir can be your
digital partner to build community and maximize growth.</span>
</p>
<h1  className="text-[2.5rem] font-[500] poppins pt-4">
    Become one of our first partners and
get lifetime perks of being our Day 1s
</h1>
<div className="max-lg:justify-center flex">
<button className="btn text-[1.5rem] rounded-full font-[500] px-6 py-3 mt-8 poppins"></button>
</div>
</div>
    </div>
    <div className="image max-md:mt-[7rem] ">
    <Image src="/hero.png" alt="Hero Image" width={4000} height={2000} className=" z-[-1] md:absolute w-[80%] max-md:mx-auto md:w-[55%] lg:w-[45%] top-40 right-0"/>
    </div>
    </section>
    <section className="info_section w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-[5rem]">
        <div className="img">
        <Image src="/intro-hero.png" alt="Info Image" width={2412} height={1996} className="w-8/9"/>
        </div>
        <div className="content max-md:text-center">
            <h1 className="text-[4.5rem] font-[700] pb-4 ">What is <span className="grad_txt"> Ragir?</span></h1>
            <h2 className="text-[1.75rem] font-[600] text-[#333333] poppins pt-4">Ragir is India’s first search and discovery
platform that exclusively lists fixed departure
group trips.</h2>
            <p className="text-[1.5rem] font-[400] text-gray-500 pt-4">
                Ragir is designed to showcase your group trips, help
you reach the right audience, and provide actionable
insights to grow your business.
            </p>
        </div>
    </section>
    </> )
}