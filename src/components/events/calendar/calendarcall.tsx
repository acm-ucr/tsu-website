"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Calendar, GoogleEventProps } from "@/components/ui/calendar";

const CalendarCall = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const { data } = useQuery({
    queryKey: ["calendarEvents"],
    queryFn: async () => {
      const timeMin = new Date(
        new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();

      const timeMax = new Date(
        new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();

      const response =
        await fetch(`https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
           &singleEvents=true&orderBy=startTime&timeMin=${timeMin}&timeMax=${timeMax}`).then(
          (res) => res.json(),
        );

      const events = response.items.map(
        ({ start, end, location, description, summary }: GoogleEventProps) => ({
          start: start.dateTime,
          end: end.dateTime,
          location,
          description,
          title: summary,
        }),
      );

      return events;
    },
  });

  return (
    <div className="flex flex-col">
      <Calendar
        mode="single"
        className="w-[90vw]"
        selected={date}
        onSelect={(day) => setDate(day)}
        showOutsideDays={true}
        events={data ?? []}
        required={true}
      />
    </div>
  );
};

export default CalendarCall;
