import { VehicleMake, VehicleModel } from "@/types";
import { useState } from "react";

export const useFetching = (
    callback: () => Promise<VehicleMake[] | VehicleModel[]>
): [fetchData: () => Promise<VehicleMake[] | VehicleModel[] | null>, isError: string] => {
    const [isError, setIsError] = useState<string>('');

    const fetchData = async () => {
        setIsError(''); // Очищення помилки перед новим викликом
        try {
            const data = await callback(); // Виклик асинхронної функції
            return data; // Повернення отриманих даних
        } catch (error: any) {
            setIsError(`${error.name}: ${error.message}`); // Збереження помилки у стані
            return null; // Повернення null у разі помилки
        }
    };

    return [fetchData, isError]; // Повернення функції та помилки
};
