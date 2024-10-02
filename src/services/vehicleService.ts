import { ApiEndpoints } from './endpoints';
import { axiosInstance } from './axiosInstance';
import { VehicleMake, VehicleModel } from '@/types';

export const getVehicleMakes = async (): Promise<VehicleMake[]> => {
  const response = await axiosInstance.get(ApiEndpoints.GET_VEHICLE_MAKES);
  return response.data.Results;
};

export const getVehicleModels = async (makeId: string, year: number): Promise<VehicleModel[]> => {
  const response = await axiosInstance.get(ApiEndpoints.GET_MODELS_BY_MAKE_YEAR.replace('{makeId}', makeId).replace('{year}', year.toString()));
  return response.data.Results;
};
