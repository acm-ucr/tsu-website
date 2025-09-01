import EventCard from "@/components/events/eventcard";
import EventsHeader from "@/components/events/header";
const Events = () => {
  return (
    <>
      <EventsHeader />
      <EventCard
        title="Event Name"
        date="Weekday, Month Day Year"
        time="h:mm AM/PM"
        location="Location: PlaceHolder"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
      />
    </>
  );
};

export default Events;
