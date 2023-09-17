import { View, Text, ScrollView } from 'react-native';

import FindCarForm from '@/components/Forms/FindCarForm';
import HistoryList from '@/components/HistoryList';
import TipsList from '@/components/TipsList';

export default function MotoRental() {
  return (
    <ScrollView>
      <View className="mx-4 mt-4 border-4 border-yellow-400 rounded">
        <FindCarForm />
      </View>
      <View className="mt-10">
        <Text className="mx-5 mb-2 text-xl font-medium">Continue your search</Text>
        <HistoryList />
      </View>
      <View className="mt-10">
        <Text className="mx-5 mb-2 text-xl font-medium">Travel more, spend less</Text>
        <TipsList />
      </View>
    </ScrollView>
  );
}
