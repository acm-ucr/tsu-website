import EventCard from "@/components/events/eventcard";

const Events = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      Events
      <EventCard
        title="Event Name"
        date="Weekday, Month Day Year"
        time="h:mm AM/PM"
        location="Location: PlaceHolder"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
      />
    </div>
  );
};

export default Events;
