import { CalendarHeaderProps } from "@/components/ui/calendar";

const CalendarHeader = ({ date }: CalendarHeaderProps) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="font-tsu-sahitya text-tsu-brown-300 relative flex justify-between">
      <p className="font-tsu-labelle drop-shadow-tsu-black mb-4 w-1/3 translate-y-[20%] -rotate-5 text-center text-9xl">
        {months[date.getMonth()]}
      </p>
      <p className="mr-10 flex translate-y-[35%] items-end text-7xl font-bold">
        {date.getFullYear()}
      </p>
    </div>
  );
};

export default CalendarHeader;
