import clsx from 'clsx';
import { Text, View } from 'react-native';

interface TipItemProps {
  title: string;
  subtitle: string;
  active: boolean;
}

export default function TipItem({ title, subtitle, active }: TipItemProps) {
  return (
    <View
      className={clsx(
        'p-2 border rounded-md max-w-[200px] mr-2',
        active ? 'bg-primary border-transparent' : 'border-blue-600'
      )}>
      <Text className={clsx('font-bold text-base', active && 'text-white')}>{title}</Text>
      <Text className={clsx('text-gray-600 mt-2 text-base', active && 'text-white')}>
        {subtitle}
      </Text>
    </View>
  );
}
