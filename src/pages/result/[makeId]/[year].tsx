import React, { Suspense } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getVehicleMakes,
  getVehicleModels,
} from '../../../services/vehicleService';
import { VehicleModel } from '../../../types';
import ResultCard from '@/components/shaded/ResultCard';
import { getYearsRange } from '@/libs/helpers';
import { startFromYear } from '@/components/shaded/VehicleSelector';
import Button from '@/components/UI/Button';
import { useRouter } from 'next/navigation';
import Loader from '@/components/UI/Loader';

interface ResultPageProps {
  makeId: string;
  year: number;
  models: VehicleModel[];
}

const ResultPage: React.FC<ResultPageProps> = ({ makeId, year, models }) => {
  const router = useRouter();
  return (
    <Suspense fallback={<Loader />}>
      <div className="container mx-auto p-4">
        <Button onClick={() => router.back()}>Back</Button>
        <h1 className="text-2xl font-bold mb-4">Vehicle Models</h1>
        <ResultCard make={makeId} year={year} models={models} />
      </div>
    </Suspense>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const makes = await getVehicleMakes();
  const years = getYearsRange(startFromYear, new Date().getFullYear());

  const paths = makes.flatMap((make) =>
    years.map((year) => ({
      params: {
        makeId: make.MakeId.toString(),
        year: year.toString(),
      },
    }))
  );
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { makeId, year } = context.params as { makeId: string; year: string };
  const models = await getVehicleModels(makeId, Number(year));

  return {
    props: {
      makeId,
      year: Number(year),
      models,
    },
  };
};

export default ResultPage;
