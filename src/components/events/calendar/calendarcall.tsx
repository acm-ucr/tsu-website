"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import CalendarHeader from "@/components/events/calendar/calendarheader";

const CalendarCall = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col">
      <CalendarHeader />
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
