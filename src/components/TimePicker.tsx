import { useState } from 'react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function TimePicker({
  id,
  label,
  value,
  onChange,
  initialTime = '10:00',
  onlyHalfHours = true,
}: {
  id: string;
  label?: string;
  value?: string;
  onChange: (val: string) => void;
  initialTime?: string;
  onlyHalfHours?: boolean;
}) {
  const [hour, setHour] = useState<string>(
    value?.split(':')[0] || initialTime.split(':')[0]
  );
  const [minute, setMinute] = useState<string>(
    value?.split(':')[1] || initialTime.split(':')[1]
  );

  const handleChange = (newHour: string, newMinute: string) => {
    const newVal = `${newHour.padStart(2, '0')}:${newMinute}`;
    onChange(newVal);
  };

  return (
    <div className="space-y-3">
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="flex gap-1">
        {/* Hours */}
        <Select
          value={hour}
          onValueChange={(val) => {
            setHour(val);
            handleChange(val, minute);
          }}
        >
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="HH" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 24 }).map((_, i) => (
              <SelectItem key={i} value={String(i).padStart(2, '0')}>
                {String(i).padStart(2, '0')}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Minutes (00, 30 only) */}
        <Select
          value={minute}
          onValueChange={(val) => {
            setMinute(val);
            handleChange(hour, val);
          }}
        >
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="MM" />
          </SelectTrigger>
          <SelectContent>
            {onlyHalfHours ? (
              <>
                <SelectItem value="00">00</SelectItem>
                <SelectItem value="30">30</SelectItem>
              </>
            ) : (
              Array.from({ length: 60 }).map((_, i) => (
                <SelectItem key={i} value={String(i).padStart(2, '0')}>
                  {String(i).padStart(2, '0')}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
