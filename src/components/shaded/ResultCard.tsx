import React from 'react';
import VehicleModels from './VehicleModels';
import { VehicleModel } from '../../types';

interface ResultCardProps {
  make: string;
  year: number;
  models: VehicleModel[];
}

const ResultCard: React.FC<ResultCardProps> = ({ year, models, make }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-2">{`${make} - ${year}`}</h2>
      {models.length > 0 ? (
        <ul className="list-disc list-inside">
          {models.map((model) => (
            <li key={model.Model_ID} className="text-lg">
              {model.Model_Name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No models available for this selection.</p>
      )}
    </div>
  );
};

export default ResultCard;
