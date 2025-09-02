"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  Calendar,
  GoogleEventProps,
  CalendarEventProps,
} from "@/components/ui/calendar";
import EventCard from "@/components/events/eventcard";
import Header from "@/components/header";

const CalendarCall = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const { data, isLoading } = useQuery({
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

      const events: CalendarEventProps[] = response.items.map(
        ({ start, end, location, description, summary }: GoogleEventProps) => ({
          start: start.dateTime,
          end: end.dateTime,
          location,
          description,
          title: summary,
        }),
      );

      const upcomingEvents = events.filter(
        (event) => new Date(event.start) >= new Date(),
      );

      return {
        events,
        upcomingEvents,
      };
    },
  });

  return (
    <div className="flex flex-col items-center gap-8">
      {isLoading ? (
        <Header header="Loading Events..." />
      ) : (
        <>
          <Calendar
            mode="single"
            className="w-[90vw]"
            selected={date}
            onSelect={(day) => setDate(day)}
            showOutsideDays={true}
            events={data?.events ?? []}
            required={true}
          />
          <div className="flex w-full flex-col items-center gap-10">
            {data?.upcomingEvents.length ? (
              data.upcomingEvents.map(
                ({ start, location, description, title }, index: number) => (
                  <EventCard
                    key={index}
                    title={title}
                    date={new Date(start).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    time={new Date(start as string).toLocaleTimeString(
                      "en-US",
                      { hour: "2-digit", minute: "2-digit" },
                    )}
                    location={location}
                    description={description}
                  />
                ),
              )
            ) : (
              <Header header="No Upcoming Events" />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CalendarCall;
