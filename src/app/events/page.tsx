import CalendarCall from "@/components/events/calendarcall";
import EventHeader from "@/components/events/header";

const Events = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-5">
      <EventHeader />
      <CalendarCall />
    </div>
  );
};

export default Events;
