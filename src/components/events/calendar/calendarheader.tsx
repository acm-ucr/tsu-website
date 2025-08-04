const CalendarHeader = () => {
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  return (
    <div className="font-tsu-sahitya text-tsu-brown-300 relative flex justify-between">
      <p className="font-tsu-labelle mb-4 w-1/3 -rotate-5 text-center text-8xl">
        {month}
      </p>
      <p className="mr-10 flex items-end text-7xl font-bold">{year}</p>
    </div>
  );
};

export default CalendarHeader;
