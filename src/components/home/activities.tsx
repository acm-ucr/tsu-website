"use client";
import Image from "next/image";
import placeholder from "@/public/placeholder.webp";

const Activities = () => {
    return (
       <div className="bg-tsu-pink-100 flex h-auto w-screen">
            <Image
              src={placeholder}
              alt="Placeholder Image"
              className="ml-17 w-1/3 p-13"
            />
      
            <div className="font-tsu-sahitya text-white mt-10 mb-4">
                <div className="mb-4 flex items-baseline gap-3">
                    <div className="h-10 border-l-8" style={{ borderColor: "#C95171" }} />
                    <p className="text-5xl">Loy Krathong</p>
                </div>
              <p className="text-2xl text-white mr-30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi
              </p>
            </div>
        </div>
    );
  };
  
  export default Activities;