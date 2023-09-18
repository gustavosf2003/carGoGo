import { useState } from 'react';

import { ScrollView, View } from 'react-native';

import FiltersList from '@/components/FiltersList';
import ResultsLayout from '@/components/Layout/ResultsLayout';

const SORT_VALUES = ['PRICE', 'RATING'];

export default function Cars() {
  const [sortBy, setSortBy] = useState(SORT_VALUES[0]);

  return (
    <ResultsLayout>
      <FiltersList actualSort={sortBy} handleSource={setSortBy} sortValues={SORT_VALUES} />
      <ScrollView>
        <View className="flex flex-col gap-4 pt-6 mx-4 pb-80" />
      </ScrollView>
    </ResultsLayout>
  );
}
