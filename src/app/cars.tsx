import { useEffect, useState } from 'react';

import { useLocalSearchParams } from 'expo-router';
import { ScrollView, View } from 'react-native';

import FiltersList from '@/components/FiltersList';
import ResultsLayout from '@/components/Layout/ResultsLayout';
import VehicleCard from '@/components/VehicleCard';
import findCarService from '@/services/cars';
import type { VehicleType } from '@/types/vehicles';

const SORT_VALUES = ['Price', 'Rating'];

export default function Cars() {
  const [sortBy, setSortBy] = useState(SORT_VALUES[0]);
  const [carsList, setCarsList] = useState<VehicleType[]>([]);
  const { getCars } = findCarService;
  const params = useLocalSearchParams();

  useEffect(() => {
    async function getSearchedCarsList() {
      const cars = await getCars();
      setCarsList(cars);
    }
    getSearchedCarsList();
  }, [getCars, params]);

  useEffect(() => {
    setCarsList((prev) => {
      if (sortBy === SORT_VALUES[0]) {
        return prev.sort((a, b) => a.name.localeCompare(b.name)); // Ascending order
      } else {
        return prev.sort((a, b) => a.price - b.price); // Descending order
      }
    });
  }, [sortBy]);

  return (
    <ResultsLayout>
      <FiltersList actualSort={sortBy} handleSource={setSortBy} sortValues={SORT_VALUES} />
      <ScrollView>
        <View className="flex flex-col gap-4 pt-6 mx-4 pb-80">
          {carsList.map((item: VehicleType) => (
            <VehicleCard key={item.id} {...item} />
          ))}
        </View>
      </ScrollView>
    </ResultsLayout>
  );
}
