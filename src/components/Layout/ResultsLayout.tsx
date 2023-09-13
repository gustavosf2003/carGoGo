import React from 'react';

import { Feather } from '@expo/vector-icons';
import clsx from 'clsx';
import { router } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomBar from '@/components/BottomBar';
interface LayoutProps {
  children: React.ReactNode;
  customClassName?: string;
  showAppBar?: boolean;
  showBottomBar?: boolean;
}

export default function ResultsLayout({
  children,
  customClassName,
  showBottomBar = true,
}: LayoutProps) {
  return (
    <View className={clsx('flex justify-between  h-full bg-white', customClassName)}>
      <View>
        <SafeAreaView edges={['top']} className="bg-primary">
          <View className="flex justify-center w-full bg-primary">
            <TouchableOpacity className="absolute z-30 left-2" onPress={() => router.back()}>
              <Feather name="chevron-left" color="white" size={28} />
            </TouchableOpacity>
            <View>
              <Text className="text-base font-bold text-center text-white">Lisbon</Text>
              <Text className="text-xs text-center text-white">19 Sep - 28 Sep</Text>
            </View>
          </View>
        </SafeAreaView>
        <View>{children}</View>
      </View>
      <SafeAreaView edges={['bottom']} className="bg-slate-50">
        <View>{showBottomBar && <BottomBar />}</View>
      </SafeAreaView>
    </View>
  );
}
