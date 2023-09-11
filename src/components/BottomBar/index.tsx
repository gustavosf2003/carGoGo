import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';

import BottomBarItem from '@/components/BottomBar/BottomBarItem';

enum BottomBarItemsNames {
  SEARCH = 'Search',
  SAVED = 'Saved',
  BOOKINGS = 'Bookings',
  PROFILE = 'Profile',
}

const BOTTOM_BAR_ITEMS = [
  {
    title: BottomBarItemsNames.SEARCH,
    icon: <AntDesign name="search1" size={28} color="#3e59aa" />,
  },
  {
    title: BottomBarItemsNames.SAVED,
    icon: <AntDesign name="hearto" size={28} color="gray" />,
  },
  {
    title: BottomBarItemsNames.BOOKINGS,
    icon: <AntDesign name="appstore-o" size={28} color="gray" />,
  },
  {
    title: BottomBarItemsNames.PROFILE,
    icon: <AntDesign name="user" size={28} color="gray" />,
  },
];

export default function BottomBar() {
  return (
    <View className="flex flex-row justify-between w-full px-6 pt-2 border border-b-0 border-x-0 border-t-gray-300 bg-gray-50">
      {BOTTOM_BAR_ITEMS.map((item) => (
        <BottomBarItem
          title={item.title}
          key={item.title}
          icon={item.icon}
          active={item.title === BottomBarItemsNames.SEARCH}
        />
      ))}
    </View>
  );
}
