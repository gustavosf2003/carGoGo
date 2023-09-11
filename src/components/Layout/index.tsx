import clsx from 'clsx';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppBar from '@/components/AppBar';
import BottomBar from '@/components/BottomBar';

interface LayoutProps {
  children: React.ReactNode;
  customClassName?: string;
  showAppBar?: boolean;
  showBottomBar?: boolean;
}

export default function Layout({
  children,
  customClassName,
  showAppBar = true,
  showBottomBar = true,
}: LayoutProps) {
  return (
    <View className={clsx('flex justify-between  h-full bg-white', customClassName)}>
      <View>
        <SafeAreaView edges={['top']} className="bg-primary">
          {showAppBar && <AppBar />}
        </SafeAreaView>
        <View>{children}</View>
      </View>
      <SafeAreaView edges={['bottom']} className="bg-slate-50">
        <View>{showBottomBar && <BottomBar />}</View>
      </SafeAreaView>
    </View>
  );
}
