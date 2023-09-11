import { ScrollView } from 'react-native';

import TipItem from './TipItem';

const TipItemsFirstRow = [
  { title: 'Co-pilot', subtitle: 'Hey! You are at Level 2 in our loyalty program' },
  { title: 'Driver', subtitle: 'Enjoy our discounts in any rent in level 3 of our program' },
  { title: 'Master', subtitle: 'You will save a lot of money in level 4' },
];

export default function TipsList() {
  return (
    <ScrollView
      className="pb-2 bg-transparent"
      contentContainerStyle={{ paddingHorizontal: 16, backgroundColor: 'transparent' }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {TipItemsFirstRow.map((item) => (
        <TipItem
          key={item.title}
          title={item.title}
          subtitle={item.subtitle}
          active={item.title === 'Co-pilot'}
        />
      ))}
    </ScrollView>
  );
}
