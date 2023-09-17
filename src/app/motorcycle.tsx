import { useEffect, useState } from 'react';

import { ScrollView, View } from 'react-native';

import FiltersList from '@/components/FiltersList';
import ResultsLayout from '@/components/Layout/ResultsLayout';

import VehicleCard from '../components/VehicleCard/index';

const SORT_VALUES = ['PRICE', 'RATING'];

const cars = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default function Cars() {
  const [sortBy, setSortBy] = useState(SORT_VALUES[0]);
  const [carsList, setCarsList] = useState(cars);

  useEffect(() => {
    setCarsList((prevCarsList) => {
      if (sortBy === SORT_VALUES[0]) {
        return [...prevCarsList].sort((a, b) => b - a);
      } else {
        return [...prevCarsList].sort((a, b) => a - b);
      }
    });
  }, [sortBy]);

  return (
    <ResultsLayout>
      <FiltersList actualSort={sortBy} handleSource={setSortBy} sortValues={SORT_VALUES} />
      <ScrollView>
        <View className="flex flex-col gap-4 pt-6 mx-4 pb-80">
          {carsList.map((_, index) => (
            <VehicleCard key={index} />
          ))}
        </View>
      </ScrollView>
    </ResultsLayout>
  );
}
