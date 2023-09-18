import React from 'react';

import { useLocalSearchParams } from 'expo-router';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';

import { VehicleType } from '@/types/vehicles';

function handleRentVehicle() {
  Alert.alert(
    'Vehicle rented successfully',
    'Check more information on the details page',
    [
      {
        text: 'Close',
        onPress: () => console.log('No Pressed'),
        style: 'cancel',
      },
    ],
    { cancelable: false }
  );
}

const VehicleCard = ({ ...vehicle }: VehicleType) => {
  const params = useLocalSearchParams();

  return (
    <TouchableOpacity
      onPress={() => handleRentVehicle()}
      className="p-4 mt-4 border border-gray-300 rounded-sm">
      <View className="flex flex-row ">
        <Text className="text-xl font-bold">
          {vehicle.name} <Text className="text-sm font-normal">or similar</Text>
        </Text>
      </View>
      <View className="mt-2.5">
        <Text className="font-bold">{vehicle.vehicleType} with:</Text>
        <Text>
          {vehicle.vehicleLayout.map((item, index) => (
            <Text key={item}>
              {item}
              {vehicle.vehicleLayout.length - 1 !== index ? ' | ' : ''}
            </Text>
          ))}
        </Text>
      </View>
      <View className="mt-1 mb-2">
        {vehicle.items.map((item) => (
          <Text key={item}>{item}</Text>
        ))}
      </View>
      <View className="my-2">
        <Text>{params.locationName} airport</Text>
        <Text className="text-xs text-gray-800">{vehicle.location.type}</Text>
      </View>
      <View className="" />
      <Image className="w-16 h-6 my-2 bg-gray-400" source={{ uri: vehicle.ownerImage }} />
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-x-2">
          <View className="p-0.5 bg-primary rounded">
            <Text className="text-lg font-medium text-white p-0.5">
              {vehicle.rating.toFixed(1)}
            </Text>
          </View>
          <View>
            <Text className="text-base font-medium">Superb</Text>
            <Text className="text-xs font-light">{vehicle.reviews} reviews</Text>
          </View>
        </View>
        <View>
          <Text className="text-sm text-gray-600">Price for 2 days</Text>
          <Text className="text-lg font-bold">€ {(vehicle.price * 2).toFixed(2)}</Text>
        </View>
      </View>
      <Image
        className="absolute bg-gray-400 w-[150px] h-20 right-8 top-12"
        source={{ uri: vehicle.image }}
      />
    </TouchableOpacity>
  );
};

export default VehicleCard;
