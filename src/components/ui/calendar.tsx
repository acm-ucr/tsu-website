"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayPicker, CalendarDay, Modifiers } from "react-day-picker";
import CalendarHeader from "@/components/events/calendarheader";
import { cn } from "@/lib/utils";

export interface GoogleEventProps {
  start: {
    dateTime?: Date;
  };
  end: {
    dateTime?: Date;
  };
  location: string;
  description: string;
  summary: string;
}

export interface CalendarEventProps {
  start: string;
  end: string;
  location: string;
  description: string;
  title: string;
}

type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: CalendarEventProps[];
};

export interface CalendarHeaderProps {
  date: Date;
}

interface DayProps extends React.ComponentProps<"td"> {
  events: CalendarEventProps[];
  day: CalendarDay;
  modifiers: Modifiers;
}

const Day = ({ events, day, modifiers, ...tdprops }: DayProps) => {
  const { date } = day;
  const { today, outside, selected } = modifiers;

  const filteredEvents = events?.filter(({ start, end }) => {
    if (!start || !end) return false;
    const startDate = new Date(start);
    const endDate = new Date(end);

    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    return date >= startDate && date <= endDate;
  });

  return (
    <td
      {...tdprops}
      className={`border-tsu-brown-300 hide-scrollbar overflow-y-auto flex h-[17vh] flex-col items-end justify-end gap-5 border md:justify-start ${today ? "bg-tsu-beige-100" : ""}`}
    >
      <div
        className={`hidden pr-2 text-xl md:block md:pr-4 md:text-5xl ${outside ? "text-gray-400" : "text-black"} ${selected ? "text-tsu-orange-100" : ""}`}
      >
        {date.getDate()}
      </div>
      {filteredEvents?.map(({ title, start }, index) => {
        const eventDate = new Date(start as string);

        if (
          eventDate.getDate() === date.getDate() &&
          eventDate.getMonth() === date.getMonth() &&
          eventDate.getFullYear() === date.getFullYear()
        ) {
          return (
            <div
              key={index}
              className="bg-tsu-brown-100 w-full text-center text-xs md:text-lg"
            >
              {title} at{" "}
              {start
                ? new Date(start).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : ""}
            </div>
          );
        }
      })}
      <div
        className={`pr-2 text-xl md:hidden md:pr-4 md:text-5xl ${outside ? "text-gray-400" : "text-black"} ${selected ? "text-tsu-orange-100" : ""}`}
      >
        {date.getDate()}
      </div>
    </td>
  );
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  components,
  events,
  ...props
}: CalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  return (
    <div className="flex flex-col gap-2">
      <CalendarHeader date={currentDate} />
      <DayPicker
        month={currentDate}
        onMonthChange={setCurrentDate}
        showOutsideDays={showOutsideDays}
        className={cn("m-auto flex w-full flex-col items-center", className)}
        captionLayout={captionLayout}
        formatters={{
          formatWeekdayName: (date) =>
            date.toLocaleString("default", { weekday: "short" }),
        }}
        classNames={{
          root: "font-tsu-sahitya",
          months: "w-full flex flex-col relative items-center justify-center",
          month: "gap-2 w-full flex flex-col border-b border-tsu-brown-300",
          nav: "space-x-5 md:space-x-12",
          button_previous:
            "text-tsu-brown-300 hover:text-black hover:bg-tsu-orange-100 rounded-lg px-3 py-1 transition-colors hover:cursor-pointer",
          button_next:
            "text-tsu-brown-300 hover:text-black hover:bg-tsu-orange-100 rounded-lg px-3 py-1 transition-colors hover:cursor-pointer",
          month_caption: "",
          dropdowns: "",
          dropdown_root: "",
          dropdown: "",
          caption_label: "hidden",
          table: "",
          weekdays:
            "w-full uppercase text-md md:text-3xl bg-tsu-orange-100 text-center items-center justify-center grid grid-cols-7 border-t border-x border-tsu-brown-300",
          weekday:
            "w-full py-1 border border-tsu-brown-300 flex items-center justify-center font-normal",
          week: "grid grid-cols-7 border-x border-tsu-brown-300",
          week_number_header: "",
          week_number: "",
          day: "",
          range_start: "",
          range_middle: "",
          range_end: "",
          today: "",
          outside: "",
          disabled: "",
          hidden: "",
          ...classNames,
        }}
        components={{
          Chevron: ({ orientation }) => {
            if (orientation === "left") {
              return <ChevronLeftIcon className="size-8 md:size-15" />;
            }

            return <ChevronRightIcon className="size-8 md:size-15" />;
          },

          Day: (props) => <Day {...props} events={events} />,
          ...components,
        }}
        {...props}
      />
    </div>
  );
}

export { Calendar };
