import clsx from 'clsx';
import { TouchableOpacity, Text } from 'react-native';

interface BottomBarItemProps {
  title: string;
  icon: JSX.Element;
  active: boolean;
}

export default function BottomBarItem({ title, icon, active }: BottomBarItemProps) {
  return (
    <TouchableOpacity className="flex flex-col items-center justify-center gap-y-1">
      {icon}
      <Text className={clsx('font-medium', active ? 'text-primary' : 'text-gray-500')}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
