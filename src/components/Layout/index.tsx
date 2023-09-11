import clsx from 'clsx';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppBar from '@/components/AppBar';

interface LayoutProps {
  children: React.ReactNode;
  customClassName?: string;
  showAppBar?: boolean;
}

export default function Layout({ children, customClassName, showAppBar = true }: LayoutProps) {
  return (
    <View className="bg-primary">
      <SafeAreaView>
        <View className={clsx('h-full bg-white', customClassName)}>
          {showAppBar && <AppBar />}
          {children}
        </View>
      </SafeAreaView>
    </View>
  );
}
