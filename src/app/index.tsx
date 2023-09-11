import { useState } from 'react';

import { View } from 'react-native';

import Layout from '@/components/Layout';
import ServicesList, { ServiceItemsNames } from '@/components/ServicesList';
import CarRental from '@/Containers/CarRental';
import Gadgets from '@/Containers/Gadgets';
import MotoRental from '@/Containers/MotoRental';

function getHomeComponent(activeServiceItem: string) {
  switch (activeServiceItem) {
    case ServiceItemsNames.CAR_RENTAL:
      return <CarRental />;
    case ServiceItemsNames.MOTO_RENTAL:
      return <MotoRental />;
    case ServiceItemsNames.GADGETS:
      return <Gadgets />;
    default:
      return <CarRental />;
  }
}

export default function App() {
  const [activeServiceItem, setActiveServiceItem] = useState(ServiceItemsNames.CAR_RENTAL);
  return (
    <Layout>
      <ServicesList activeItem={activeServiceItem} handleActiveItem={setActiveServiceItem} />
      <View>{getHomeComponent(activeServiceItem)}</View>
    </Layout>
  );
}
