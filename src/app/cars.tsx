import { View, Text } from 'react-native';

import FiltersList from '@/components/FiltersList';
import ResultsLayout from '@/components/Layout/ResultsLayout';

export default function App() {
  return (
    <ResultsLayout>
      <FiltersList />
      <View>
        <Text>Cars</Text>
      </View>
    </ResultsLayout>
  );
}
