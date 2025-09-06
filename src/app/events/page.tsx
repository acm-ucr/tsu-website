import CalendarCall from "@/components/events/calendarcall";
import Header from "@/components/header";

const Events = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-5">
      <Header header="Events" />
      <CalendarCall />
    </div>
  );
};

export default Events;
