import { useState } from 'react';

import { View, ScrollView, Text } from 'react-native';

import { Button } from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import HistoryList from '@/components/HistoryList';
import TextField from '@/components/TextField';
import TipsList from '@/components/TipsList';

export default function CarRental() {
  const [date, setDate] = useState(new Date(Date.now()));

  return (
    <ScrollView>
      <View className="mx-4 mt-4 border-4 border-yellow-400 rounded">
        <TextField placeholder="Car location" />
        <View className="w-full h-0.5 bg-gray-200" />
        <DatePicker value={date} label="Pick up" handleValue={() => setDate} />
        <View className="w-full h-0.5 bg-gray-200" />
        <DatePicker value={date} label="Drop off" handleValue={() => setDate} />
        <Button>Search</Button>
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
