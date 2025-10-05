import Image from "next/image";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Card from "./components/Card";
import Content from "./components/how_it_works/Content";
import Feature from "./components/more_about_ragir/Feature";
import Tile from "./components/why_choose_ragir/Tile";
import { BsArrowRight } from "react-icons/bs";

/**
 * Home Page Component
 * Main landing page for Ragir platform
 * Showcases services, how it works, features, and call-to-action
 */
export default function Home() {
  return (
    <>  
    <Header />
    <main className="px-[4rem] relative w-full overflow-hidden max-w-[1400px] mx-auto">
      {/* Hero Section */}
      <Hero />


      {/* We are here to Offer you */}
      <Section heading="We are here to Offer you" child={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] max-md:justify-center mt-8">
          <Card 
          heading="Community Growth" 
          img="/community.png" 
          listItems={["Grow your travel community on a platform built exclusively for organized group trips",
            "Be discovered by travelers   searching for destination, budget, dates, and activities that you provide.",
          ]}
          />
          <Card 
          heading="Savings On Marketing Cost" 
          img="/savings.png" 
          listItems={[
            "Save costs on marketing let Ragir bring the audience to you.",
            "Boost your appearance with Ragir's advanced search filters.",
             "Stand out with reviews and community presence that builds trust."
            ]}
          />
          <Card 
          heading="Analytics That Matter" 
          img="/analytics.png" 
          listItems={[
            "See what travelers want, when, and at what price.",
            "Access market trends and demand forecasts.",
            "Turn traveler search trends into smarter trip planning."
          ]}
          />
        </div>
        } />

      {/* How It Works */}
      <Section heading="How It Works" child= {
          <div className="flex flex-col items-center justify-center">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-[80%]">
              {/* Step 1 */}
              <div className="px-6 order-1">
                <Image src="/hiw-1.png" alt="How It Works Image" width={2000} height={1000} className="w-full"/>
              </div>
              <Content Heading="Create Account" content="Quick and seamless organizer account creation" direction="right" optional="order-2" />
             {/* Step 2 */}
              <Content Heading="List Trips " content="List your organized group trips and appear in traveler searches instantly" direction="left" optional="max-sm:order-4 order-3" />
              <div className="px-6 max-sm:order-3 order-4">
                <Image src="/hiw-2.png" alt="How It Works Image" width={2000} height={1000} className="w-full"/>
              </div>
              {/* Step 3 */}
               <div className="px-6 order-5">
                <Image src="/hiw-3.png" alt="How It Works Image" width={2000} height={1000} className="w-full"/>
              </div>
              <Content Heading="Convert" content="View leads and convert them into confirmed bookings" direction="right" optional="order-6" />
             {/* Step 4 */}
              <Content Heading="Grow" content="Use Ragir Analytics for smarter group trip planning" direction="left" optional="order-7 max-sm:order-8" />
              <div className="px-6 order-8 max-sm:order-7">
                <Image src="/hiw-4.png" alt="How It Works Image" width={2000} height={1000} className="w-full"/>
              </div>
             </div>

          </div>
       
      }/>


      {/* More About Ragir */}
      <Section heading={<>More About <span className='grad_txt'>Ragir</span></>} child= {
        <>
        <p className="text-[2rem] barlow font-[550] italic text-center sub-txt opacity-80 mb-[4rem]"> Ragir is the only one in India! That...</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Feature img="/mar-group.png" 
          title="enables you to list your group trips on a platform dedicated to fixed departure group trips."
           description="So that your every seat is booked on time" />
          <Feature img="/mar-travel.png" 
          title="enables travelers to search and filter group trips based on the experience parted during the trip." 
          description="Because it’s not just about the destination, it’s the memories we make there" />
          <Feature img="/mar-insights.png" 
          title="provides you access to data and insights of traveler behavior and market trends."
           description="So that you know what travelers’ actually want" />
          <Feature img="/mar-trust.png" 
          title="puts your brand identity at the forefront."
           description="Because travelers are not just looking for trips, they are looking for brands they can trust" />
        </div>
        </>
      }/> 

      {/* Why Travelers Choose Ragir */}
      <Section heading="Why Travelers Choose Ragir" child={
        <>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
          <Image src="/travellers-ragir.png" alt="Why Travelers Choose Ragir" width={2000} height={1000} className="w-[80%] max-md:mx-auto md:w-full"/>
          <div className="flex flex-col justify-center">
            <Tile img="/wcr-search.png" title="Simple, clutter-free search to find the right group trips" />
            <Tile img="/wcr-fitler.png" title="Filter by destination, moods, budget and duration" />
            <Tile img="/wcr-file.png" title="Transparent view of all organizer options" />
            <Tile img="/wcr-community.png" title="Community driven reviews" />
          </div>
        </div>
        </>
        
        
      }/>

      {/* When travelers choose Ragir, they choose you! Banner section*/}
      <Section heading={<>When travelers choose <span className="grad_txt">Ragir</span>, they <br /><span className="grad_txt">choose you!</span></>} child={ 
        <div className="banner_section mt-[5rem] w-full min-h-[400px] flex max-md:justify-center align-center rounded-[3rem] px-8 py-8 bg-[url('/banner.png')] bg-cover bg-center">
          <div className="w-[90%] max-md:mx-auto md:w-[60%] rounded-[2rem] border border-white py-6 px-8 h-[calc(100%-4rem)] bg-[rgba(0,0,0,0.3)] backdrop-blur-[5px] ">
            <h1 className="text-[4.5rem] font-[700] text-white h-full">
              Join the Moment
            </h1>
            <p className="text-[1.5rem] text-white py-[2rem]">Get started today and be discovered by millions of eager travelers</p>
            <button className="bg-white group rounded-full px-6 py-[0.8rem] text-[1rem] flex items-center gap-2 transition-all duration-500">
             <span className="group-hover:opacity-0 transition-all duration-300 text-[1.25rem] font-[500]"> Join as Partner</span>  
              <BsArrowRight className="inline-block group-hover:block group-hover:translate-x-[-5rem] transition-all duration-500 group-hover:scale-x-150" size={24} />
            </button>
          </div>
        </div>
      } />
    </main>
    <Footer />
    </>
  );
}
