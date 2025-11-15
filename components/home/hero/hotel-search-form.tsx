"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar"; 
import { format } from "date-fns";

export function HotelSearchForm() {
  return (
    <div className="bg-green-opaque grid grid-cols-1 md:grid-cols-4 gap-4 items-center p-2 md:p-4">
      <Input placeholder="Destination" className="h-14 bg-white text-gray-900" />
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="h-14 justify-start text-left font-normal text-green-opaque border hover:border-yellow-opaque hover:text-yellow-opaque overflow-hidden">
            {format(new Date(), "PPP")} - {format(new Date(Date.now() + 86400000), "PPP")}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0"><Calendar mode="range" /></PopoverContent>
      </Popover>
      <Input placeholder="2 Adult(s) and 0 Child(s)" className="h-14 bg-white text-gray-900" />
      <Button className="h-14 bg-yellow-opaque text-green-opaque hover:bg-green-opaque hover:text-yellow-opaque border hover:border-yellow-opaque">Search</Button>
    </div>
  );
}