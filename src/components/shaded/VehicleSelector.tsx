import { getYearsRange } from '@/libs/helpers';
import { VehicleMake } from '@/types';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import Dropdown from '../UI/Dropdown';
import Button from '../UI/Button';

export const startFromYear = 2023;

interface Props {
  makes: VehicleMake[];
}

const VehicleSelector: FC<Props> = ({ makes }) => {
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const years = getYearsRange(startFromYear, new Date().getFullYear());
  const router = useRouter();

  const handleNext = () => {
    if (selectedMake && selectedYear) {
      router.push(`/result/${selectedMake}/${selectedYear}`);
    }
  };
  return (
    <div className="flex gap-3">
      <Dropdown
        placeholder="mark"
        options={makes.map((make) => ({
          value: make.MakeId,
          label: make.MakeName,
        }))}
        onChange={setSelectedMake}
      />
      <Dropdown
        placeholder="year"
        options={years.map((year) => ({
          value: year.toString(),
          label: year.toString(),
        }))}
        onChange={(value) => setSelectedYear(Number(value))}
      />
      <Button onClick={handleNext} disabled={!selectedMake || !selectedYear}>
        Next
      </Button>
    </div>
  );
};

export default VehicleSelector;
