import { ApiEndpoints } from './endpoints';
import { axiosInstance } from './axiosInstance';
import { VehicleMake, VehicleModel } from '@/types';

export const getVehicleMakes = async (): Promise<VehicleMake[]> => {
  try {
    const response = await axiosInstance.get(ApiEndpoints.GET_VEHICLE_MAKES);
    return response.data.Results;
  } catch (error) {
    console.error('Error fetching vehicle makes:', error);
    throw new Error('Unable to fetch vehicle makes. Please try again later.');
  }
};

export const getVehicleModels = async (makeId: string, year: number): Promise<VehicleModel[]> => {
  try {
    const response = await axiosInstance.get(
      ApiEndpoints.GET_MODELS_BY_MAKE_YEAR.replace('{makeId}', makeId).replace('{year}', year.toString())
    );
    return response.data.Results;
  } catch (error) {
    console.error('Error fetching vehicle models:', error);
    throw new Error('Unable to fetch vehicle models. Please try again later.');
  }
};
