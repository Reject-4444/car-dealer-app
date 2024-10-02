import Loader from '@/components/UI/Loader';
import VehicleSelector from '@/components/shaded/VehicleSelector';
import { getVehicleMakes } from '@/services/vehicleService';
import { VehicleMake } from '@/types';
import { GetStaticProps } from 'next';
import { Suspense } from 'react';

interface Props {
  makes: VehicleMake[];
}

const Home = ({ makes }: Props) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Car Dealer App</h1>
      <Suspense fallback={<Loader />}>
        <VehicleSelector makes={makes} />
      </Suspense>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const makesData = await getVehicleMakes();

  return {
    props: {
      makes: makesData,
    },
  };
};

export default Home;
