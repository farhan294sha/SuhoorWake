import React, { useEffect, useState } from "react";
import DatePicker from "react-native-date-picker";
type DatePickerProps = {
  onChange: (date: Date) => void;
};

export function DatePickerInline({ onChange }: DatePickerProps) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    onChange(date);
  }, [date]);

  return (
    <DatePicker minimumDate={new Date()} date={date} onDateChange={setDate} />
  );
}
