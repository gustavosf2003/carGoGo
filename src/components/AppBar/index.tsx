import { Text, View } from 'react-native';

export default function AppBar() {
  return (
    <View className="flex flex-row justify-center px-4 pb-4 bg-primary">
      <Text className="text-xl font-bold text-white">CarGoGo</Text>
    </View>
  );
}
