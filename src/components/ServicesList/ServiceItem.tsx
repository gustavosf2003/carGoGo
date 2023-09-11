import clsx from 'clsx';
import { Text, TouchableOpacity } from 'react-native';

interface ServiceItemProps {
  title: string;
  icon: JSX.Element;
  active: boolean;
  handleActiveItem: (title: string) => void;
}

export default function ServiceItem({ title, icon, active, handleActiveItem }: ServiceItemProps) {
  return (
    <TouchableOpacity
      onPress={() => handleActiveItem(title)}
      className={clsx(
        'pl-1 pr-2.5 mx-4 py-1.5 border-2 flex items-center flex-row gap-x-2 rounded-full',
        active ? 'border-white' : 'border-transparent'
      )}>
      {icon}
      <Text className="text-lg font-medium text-white">{title}</Text>
    </TouchableOpacity>
  );
}
