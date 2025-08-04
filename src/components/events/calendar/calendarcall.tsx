"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import CalendarHeader from "@/components/events/calendar/calendarheader";

interface GoogleEventProps {
  start: {
    dateTime: Date;
  };
  end: {
    dateTime: Date;
  };
  location: string;
  description: string;
  summary: string;
}

const CalendarCall = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const { data, error } = useQuery({
    queryKey: ["calendarEvents"],
    queryFn: async () => {
      const response =
        await fetch(`https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
           &singleEvents=true&orderBy=startTime&timeMin=${new Date(
             new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
           ).toISOString()}&timeMax=${new Date(
             new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
           ).toISOString()}`).then((res) => res.json());

      const events = response.items.map(
        ({ start, end, location, description, summary }: GoogleEventProps) => ({
          start: start.dateTime,
          end: end.dateTime,
          location,
          description,
          title: summary,
        }),
      );
      console.log(events);

      return events;
    },
  });

  return (
    <div className="flex flex-col">
      {/* <CalendarHeader /> */}
      <Calendar
        className="w-full"
        selected={date}
        onSelect={setDate}
        showOutsideDays={true}
        // captionLayout="dropdown"
        buttonVariant="ghost"
      />
    </div>
  );
};

export default CalendarCall;
