"use client";

import { format, differenceInYears, addDays, setHours } from "date-fns";
import { es } from "date-fns/locale";
import { useState, useEffect } from "react";
import { Calendar as CalendarPrimitive } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  className?: string;
  isClose?: boolean;
  dataInit?: Date;
  dateEnd?: Date;
  disabled?: boolean;
}

export const CalendarTime = ({
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
  disabled = false,
}: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(selected || new Date());
  const [selectedHour, setSelectedHour] = useState(
    selected ? selected.getHours() : 0
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (selected) {
      setCurrentDate(selected);
      setSelectedHour(selected.getHours());
    }
  }, [selected]);

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

  const onHourSelect = (hour: string) => {
    setSelectedHour(parseInt(hour));
    if (selected) {
      const newDate = setHours(selected, parseInt(hour));
      onSelect(newDate);
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const newDate = setHours(date, selectedHour);
      onSelect(newDate);
      if (isClose) setOpen(false);
    } else {
      onSelect(undefined);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          disabled={disabled}
          variant={"outline"}
          className={`w-full justify-start text-left font-normal ${
            !selected && "text-muted-foreground"
          }`}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selected ? (
            format(selected, "PPP HH:mm", { locale: es })
          ) : (
            <span>Seleccionar una fecha y hora</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="space-y-4 p-3">
          <div className="flex items-center justify-center gap-3">
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
                    const year = dataInit.getFullYear() + i;
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
            onSelect={handleDateSelect}
            month={currentDate}
            onMonthChange={setCurrentDate}
            className={className}
            locale={es}
            disabled={(date) =>
              date >= addDays(dateEnd, 1) || date <= addDays(dataInit, -1)
            }
          />
          <div className="flex items-center justify-center gap-3">
            <Clock className="h-4 w-4" />
            <Select
              onValueChange={onHourSelect}
              defaultValue={selectedHour.toString()}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Hora" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 24 }, (_, i) => (
                  <SelectItem key={i} value={i.toString()}>
                    {i.toString().padStart(2, "0")}:00
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
