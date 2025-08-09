"use client";
import Image, { StaticImageData } from "next/image";

type ActivitiesProps = {
  backgroundColor: string;
  borderColor: string;
  image: StaticImageData;
  activityName: string;
  activityDesc: string;
};
const Activities = ({
  backgroundColor,
  borderColor,
  image,
  activityName,
  activityDesc,
}: ActivitiesProps) => {
  return (
    <div className={`flex h-auto w-screen ${backgroundColor}`}>
      <Image src={image} alt={activityName} className="ml-17 w-1/3 p-13" />

      <div className="font-tsu-sahitya mt-30 ml-25">
        <div className="mb-4 flex items-baseline gap-3">
          <div className={`h-10 border-l-8 ${borderColor}`} />
          <p className="text-5xl text-white">{activityName}</p>
        </div>
        <p className="mr-50 mb-14 text-2xl text-white">{activityDesc}</p>
      </div>
    </div>
  );
};

export default Activities;
