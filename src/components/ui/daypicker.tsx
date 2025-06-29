"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"; // default DayPicker styles

export default function CalendarPicker() {
  const [selected, setSelected] = useState<Date | undefined>();

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold">Pick a Date</h2>

      <DayPicker
        mode="single" // for one date
        selected={selected} // the selected date state
        onSelect={setSelected} // updates the state when a user clicks
      />

      {selected && (
        <p className="mt-4">
          📅 You picked: <strong>{selected.toDateString()}</strong>
        </p>
      )}
    </div>
  );
}
