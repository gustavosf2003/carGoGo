import { Text, TouchableOpacity, View } from 'react-native';

interface HistoryItemProps {
  title: string;
  date: string;
  image: string;
}

export default function HistoryItem({ title, date, image }: HistoryItemProps) {
  return (
    <TouchableOpacity className="p-3 mr-2.5 bg-gray-100 rounded min-w-[280px]">
      <View className="flex flex-row items-start">
        <View className="w-10 h-10 bg-gray-400" />
        <View className="ml-2.5 mr-16">
          <Text className="font-medium ">{title}</Text>
          <Text className="mt-0.5 text-gray-600">{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
