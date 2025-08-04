"use client";

import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { DayPicker } from "react-day-picker";
import CalendarHeader from "@/components/events/calendar/calendarheader";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  // const defaultClassNames = getDefaultClassNames();

  return (
    <div className="flex flex-col gap-2">
      <CalendarHeader />
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("m-auto flex w-full flex-col items-center", className)}
        captionLayout={captionLayout}
        formatters={{
          formatWeekdayName: (date) =>
            date.toLocaleString("default", { weekday: "short" }),
        }}
        classNames={{
          root: cn("font-tsu-sahitya"),
          months: cn("w-full flex flex-col md:flex-row relative"),
          month: "gap-2 w-full flex flex-col",
          nav: "space-x-6",
          button_previous: cn(
            buttonVariants({ variant: buttonVariant }),
            "aria-disabled:opacity-50 p-0 select-none hidden",
          ),
          button_next: cn(
            buttonVariants({ variant: buttonVariant }),
            "aria-disabled:opacity-50 p-0 select-none hidden",
          ),
          month_caption: cn("flex items-center justify-center w-full"),
          dropdowns: cn(
            "w-full flex justify-between px-4 text-3xl font-semibold",
          ),
          dropdown_root: cn(
            "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          ),
          dropdown: cn("w-full flex justify-between items-center gap-5 px-4"),
          caption_label: cn("select-none font-medium text-8xl hidden"),
          table: "w-full border-collapse border border-tsu-brown-300",
          weekdays:
            "w-[80vw] uppercase text-3xl bg-tsu-orange-100 text-center items-center justify-center grid grid-cols-7 border-t border-x border-tsu-brown-300",
          weekday:
            "w-full py-1 border border-tsu-brown-300 flex items-center justify-center font-normal",
          week: "grid grid-cols-7 border-x border-tsu-brown-300",
          week_number_header: cn("select-none"),
          week_number: cn("text-[0.8rem] select-none text-muted-foreground"),
          day: "border border-tsu-brown-300 relative flex items-start p-4 text-6xl justify-end w-full h-[15vh]",
          range_start: cn("rounded-l-md bg-accent"),
          range_middle: cn("rounded-none"),
          range_end: cn("rounded-r-md bg-accent"),
          today: cn(
            "bg-accent text-accent-foreground data-[selected=true]:rounded-none",
          ),
          outside: cn(
            "text-muted-foreground aria-selected:text-muted-foreground",
          ),
          disabled: cn("text-muted-foreground opacity-50"),
          hidden: cn("invisible"),
          ...classNames,
        }}
        components={{
          Root: ({ className, rootRef, ...props }) => {
            return (
              <div
                data-slot="calendar"
                ref={rootRef}
                className={cn(className)}
                {...props}
              />
            );
          },
          Chevron: ({ className, orientation, ...props }) => {
            if (orientation === "left") {
              return (
                <ChevronLeftIcon
                  className={cn("size-4", className)}
                  {...props}
                />
              );
            }

            if (orientation === "right") {
              return (
                <ChevronRightIcon
                  className={cn("size-4", className)}
                  {...props}
                />
              );
            }

            return (
              <ChevronDownIcon className={cn("size-4", className)} {...props} />
            );
          },
          // Day: () => (
          // <td>

          // </td>
          // ),
          // DayButton: CalendarDayButton,
          WeekNumber: ({ children, ...props }) => {
            return (
              <td {...props}>
                <div className="flex items-center justify-center text-center">
                  {children}
                </div>
              </td>
            );
          },
          ...components,
        }}
        {...props}
      />
    </div>
  );
}

// function CalendarDayButton({
//   className,
//   day,
//   modifiers,
//   ...props
// }: React.ComponentProps<typeof DayButton>) {
//   const defaultClassNames = getDefaultClassNames();

//   const ref = React.useRef<HTMLButtonElement>(null);
//   React.useEffect(() => {
//     if (modifiers.focused) ref.current?.focus();
//   }, [modifiers.focused]);

//   return (
//     <Button
//       ref={ref}
//       variant="ghost"
//       size="icon"
//       data-day={day.date.toLocaleDateString()}
//       data-selected-single={
//         modifiers.selected &&
//         !modifiers.range_start &&
//         !modifiers.range_end &&
//         !modifiers.range_middle
//       }
//       data-range-start={modifiers.range_start}
//       data-range-end={modifiers.range_end}
//       data-range-middle={modifiers.range_middle}
//       className={cn(
//         "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
//         defaultClassNames.day,
//         className,
//       )}
//       {...props}
//     />
//   );
// }

export { Calendar, CalendarDayButton };
