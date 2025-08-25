interface EventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const EventCard = ({
  title,
  date,
  time,
  location,
  description,
}: EventProps) => {
  return (
    <div className="w-10/12 lg:w-4/5">
      <div className="font-tsu-sahitya flex flex-col justify-start border-x-2 border-t-2 border-b-2">
        <div className="bg-tsu-beige-300 p-2 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl xl:p-4 xl:text-4xl">
          {title}
        </div>
        <div className="border-t-2 bg-white p-2 md:p-5 xl:p-10">
          <div className="flex flex-row gap-x-5 font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            <div>{date}</div>
            <div>{time}</div>
            <div>{location}</div>
          </div>
          <div className="mr-5 mt-5 text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
