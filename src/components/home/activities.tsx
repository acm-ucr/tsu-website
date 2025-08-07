"use client";
import Image, { StaticImageData } from "next/image";

type ActivitiesProps = {
  backgroundColor: string; 
  borderColor: string;  
  image: StaticImageData;
  eventName: string;
  eventDescription: string;
};
const Activities = ({ backgroundColor, borderColor, image, eventName, eventDescription }: ActivitiesProps) => {
    return (
       <div className= {`flex h-auto w-screen ${ backgroundColor }`}>
            <Image
              src={image}
              alt={eventName}
              className="ml-17 w-1/3 p-13"
            />
      
            <div className="font-tsu-sahitya text-white mt-10 mb-4">
                <div className="mb-4 flex items-baseline gap-3">
                    <div className={`h-10 border-l-8 ${ borderColor }`} />
                    <p className="text-5xl">{eventName}</p>
                </div>
              <p className="text-2xl text-white mr-30">
                {eventDescription}
              </p>
            </div>
        </div>
    );
  };
  
  export default Activities;

  // add eventName & eventDescription