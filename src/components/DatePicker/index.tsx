import RNDateTimePicker from '@react-native-community/datetimepicker';
import { View, Text } from 'react-native';

export default function DatePicker({ label, value, handleValue }) {
  return (
    <>
      <View className="flex flex-row items-center px-3 py-2">
        <Text>{label}</Text>
        <RNDateTimePicker
          style={{ alignContent: 'flex-start', width: 128 }}
          value={value}
          onChange={handleValue}
        />
      </View>
    </>
  );
}
