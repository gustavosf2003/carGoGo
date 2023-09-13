import React from 'react';

import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';

const FiltersList: React.FC = () => {
  return (
    <View className="flex flex-row justify-around pb-2 bg-primary">
      <View className="flex flex-row justify-around w-full">
        <Menu>
          <MenuTrigger
            children={
              <View className="pl-1 pr-2.5 mx-4 py-1.5 flex items-center flex-row gap-x-2 rounded-full">
                <Feather name="sliders" size={20} color="white" />
                <Text className="text-lg font-medium text-white">Sort</Text>
              </View>
            }
          />
          <MenuOptions>
            <MenuOption onSelect={() => console.log('asda')}>
              <View className="flex flex-row items-center py-1.5">
                <Text className="ml-3 text-gray-700 mr-2.5">hey</Text>
                <Feather name="check" size={18} color="green" />
              </View>
            </MenuOption>
          </MenuOptions>
        </Menu>
        <Menu>
          <MenuTrigger
            children={
              <View className="pl-1 pr-2.5 mx-4 py-1.5 flex items-center flex-row gap-x-2 rounded-full">
                <Feather name="filter" size={20} color="white" />
                <Text className="text-lg font-medium text-white">Sort</Text>
              </View>
            }
          />
          <MenuOptions>
            <MenuOption onSelect={() => console.log('asda')}>
              <View className="flex flex-row items-center py-1.5">
                <Text className="ml-3 text-gray-700 mr-2.5">hey</Text>
                <Feather name="check" size={18} color="green" />
              </View>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
};

export default FiltersList;
