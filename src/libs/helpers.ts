export const getYearsRange = (start: number, end: number): number[] => {
    const years = [];
    for (let year = start; year <= end; year++) {
      years.push(year);
    }
    return years;
  };