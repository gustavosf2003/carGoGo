import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

import ServiceItem from './ServiceItem';

export enum ServiceItemsNames {
  CAR_RENTAL = 'Car rental',
  MOTO_RENTAL = 'Moto rental',
  GADGETS = 'Gadgets',
}

const ServiceItems = [
  { title: ServiceItemsNames.CAR_RENTAL, icon: <FontAwesome name="car" size={20} color="white" /> },
  {
    title: ServiceItemsNames.MOTO_RENTAL,
    icon: <FontAwesome name="motorcycle" size={22} color="white" />,
  },
  { title: ServiceItemsNames.GADGETS, icon: <FontAwesome name="gears" size={20} color="white" /> },
];

export default function ServicesList({ activeItem, handleActiveItem }) {
  return (
    <ScrollView
      className="pb-2 bg-primary"
      contentContainerStyle={{ paddingHorizontal: 16 }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {ServiceItems.map((item) => (
        <ServiceItem
          key={item.title}
          title={item.title}
          icon={item.icon}
          active={activeItem === item.title}
          handleActiveItem={handleActiveItem}
        />
      ))}
    </ScrollView>
  );
}
