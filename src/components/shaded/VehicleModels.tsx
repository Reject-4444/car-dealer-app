import React from 'react';
import { VehicleModel } from '../../types';

interface VehicleModelsProps {
  models: VehicleModel[];
}

const VehicleModels: React.FC<VehicleModelsProps> = ({ models }) => {
  return (
    <div>
      {models.map((model) => (
        <div key={model.Model_ID} className="p-2 border-b">
          {model.Model_Name}
        </div>
      ))}
    </div>
  );
};

export default VehicleModels;
