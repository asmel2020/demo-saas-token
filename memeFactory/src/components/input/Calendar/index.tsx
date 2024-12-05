"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format, differenceInYears, addDays } from "date-fns";
import { es } from "date-fns/locale";
import { useState } from "react";
import { Calendar as CalendarPrimitive } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

interface CalendarProps {
  selected?: Date;
  onSelect?: (date: any) => void;
  className?: string;
  isClose?: boolean;
  dataInit?: any;
  dateEnd?: Date;
}

export const Calendar = ({
  selected,
  onSelect = () => {},
  className,
  isClose = false,
  dataInit = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  ),
  dateEnd = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  ),
}: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(selected || new Date());
  const onMonthSelect = (month: string) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(parseInt(month));
    setCurrentDate(newDate);
  };

  const onYearSelect = (year: string) => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(parseInt(year));
    setCurrentDate(newDate);
  };
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={() => setOpen(!open)}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={`w-full justify-start text-left font-normal ${
            !selected && "text-muted-foreground"
          }`}
          onClick={() => setOpen(!open)}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selected ? (
            format(selected, "PPP", { locale: es })
          ) : (
            <span>Seleccionar una fecha</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 ">
            <Select
              onValueChange={onMonthSelect}
              defaultValue={currentDate.getMonth().toString()}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Mes" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => (
                  <SelectItem key={i} value={i.toString()}>
                    {format(new Date(0, i), "MMMM", { locale: es })}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              onValueChange={onYearSelect}
              defaultValue={currentDate.getFullYear().toString()}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Año" />
              </SelectTrigger>
              <SelectContent>
                {Array.from(
                  { length: differenceInYears(dateEnd, dataInit) + 1 },
                  (_, i) => {
                    const year = new Date().getFullYear() - 0 + i;
                    return (
                      <SelectItem key={i} value={year.toString()}>
                        {year}
                      </SelectItem>
                    );
                  }
                )}
              </SelectContent>
            </Select>
          </div>
          <CalendarPrimitive
            mode="single"
            selected={selected}
            onSelect={onSelect}
            month={currentDate}
            onMonthChange={setCurrentDate}
            className={className}
            locale={es}
            disabled={(date) =>
              date >= addDays(dateEnd, 1) || date <= addDays(dataInit, -1)
            }
            onDayClick={() => {
              if (isClose) setOpen(!open);
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
