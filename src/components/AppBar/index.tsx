import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';

export default function AppBar() {
  return (
    <View className="flex flex-row justify-between px-4 py-2 bg-primary">
      <Text className="text-xl font-medium text-white">CarGoGo</Text>
      <Menu>
        <MenuTrigger children={<Feather name="globe" size={32} color="white" />} />
        <MenuOptions>
          <MenuOption>
            <View className="flex flex-row items-center py-1.5">
              <Text className="ml-3 text-gray-700 mr-2.5">Hey</Text>
            </View>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
}
