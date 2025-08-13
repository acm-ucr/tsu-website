"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayPicker, CalendarDay, Modifiers } from "react-day-picker";
import CalendarHeader from "@/components/events/calendar/calendarheader";
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
      className={`border-tsu-brown-300 flex h-[15vh] flex-col items-end gap-5 border ${today ? "bg-tsu-beige-100" : ""}`}
    >
      <div
        className={`pr-4 text-5xl ${outside ? "text-muted-foreground" : "textblack"} ${selected ? "text-tsu-orange-100" : ""}`}
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
              className="text-md bg-tsu-brown-100 w-full text-center"
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
          nav: "space-x-6",
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
            "w-full uppercase text-3xl bg-tsu-orange-100 text-center items-center justify-center grid grid-cols-7 border-t border-x border-tsu-brown-300",
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
          Chevron: ({ orientation, ...props }) => {
            if (orientation === "left") {
              return <ChevronLeftIcon className="size-7" {...props} />;
            }

            return <ChevronRightIcon className="size-7" {...props} />;
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
