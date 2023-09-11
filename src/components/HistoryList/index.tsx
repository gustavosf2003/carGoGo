import { ScrollView, View } from 'react-native';

import HistoryItem from './HistoryListItem';

const HistoryItemsFirstRow = [
  { title: 'New york', date: '17 - 22', image: 'image' },
  { title: 'Porto', date: '8 - 23', image: 'image' },
  { title: 'Stockholm', date: '8 - 23', image: 'image' },
  { title: 'Rome', date: '6 - 24', image: 'image' },
];
const HistoryItemsSecondRow = [
  { title: 'Prague', date: '30 - 4', image: 'image' },
  { title: 'Vienna', date: '12 - 20', image: 'image' },
  { title: 'Oslo', date: '17 - 23', image: 'image' },
  { title: 'London', date: '22 - 24', image: 'image' },
];

export default function HistoryList() {
  return (
    <ScrollView
      className="pb-2 bg-transparent"
      contentContainerStyle={{ paddingHorizontal: 16, backgroundColor: 'transparent' }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      <View>
        <View className="flex flex-row">
          {HistoryItemsFirstRow.map((item) => (
            <HistoryItem key={item.title} title={item.title} date={item.date} image={item.image} />
          ))}
        </View>
        <View className="flex flex-row mt-2.5">
          {HistoryItemsSecondRow.map((item) => (
            <HistoryItem key={item.title} title={item.title} date={item.date} image={item.image} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
