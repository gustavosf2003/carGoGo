import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

const VehicleCard = () => {
  return (
    <TouchableOpacity className="p-4 mt-4 border border-gray-300 rounded-sm">
      <View className="flex flex-row ">
        <Text className="text-xl font-bold">
          Fiat 500 <Text className="text-sm font-normal">or similar</Text>
        </Text>
      </View>
      <View className="mt-2.5">
        <Text className="font-bold">Mini car with:</Text>
        <Text>2 doors | 4 seats</Text>
      </View>
      <View className="mt-1 mb-2">
        <Text>Manual</Text>
        <Text>Air conditioning</Text>
        <Text>Like for like</Text>
        <Text>Unlimited km</Text>
      </View>
      <View className="my-2">
        <Text>Stockholm Arlanda Airport</Text>
        <Text className="text-xs text-gray-800">Car rental centre</Text>
      </View>
      <View className="w-16 h-6 my-2 bg-gray-400" />
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-x-2">
          <View className="p-0.5 bg-primary rounded">
            <Text className="text-lg font-medium text-white p-0.5">9.1</Text>
          </View>
          <View>
            <Text className="text-base font-medium">Superb</Text>
            <Text className="text-xs font-light">743 reviews</Text>
          </View>
        </View>
        <View>
          <Text className="text-sm text-gray-600">Price for 2 days</Text>
          <Text className="text-lg font-bold">€ 54.41</Text>
        </View>
      </View>
      <View className="absolute bg-gray-400 h-28 w-28 right-8 top-12" />
    </TouchableOpacity>
  );
};

export default VehicleCard;
