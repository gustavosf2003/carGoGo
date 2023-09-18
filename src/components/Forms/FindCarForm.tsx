import React, { useCallback, useState } from 'react';

import { useRouter } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { Button } from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import TextField from '@/components/TextField';
import { ROUTE_NAMES } from '@/constants/routes';
import { findCar } from '@/services/cars';

export default function FindCarForm() {
  const [pickUp, setPickUp] = useState(new Date());
  const [dropOff, setDropOff] = useState(new Date());
  const router = useRouter();

  const { control, handleSubmit, setError, setFocus } = useForm({
    mode: 'onChange',
    defaultValues: { carLocation: '', pickUp: pickUp, dropOff: dropOff },
  });

  const goToCarsPage = useCallback(() => {
    router.push(ROUTE_NAMES.CARS);
  }, [router]);

  const onFindCarSubmit = handleSubmit(async (formData) => {
    try {
      await findCar(formData);
      goToCarsPage();
    } catch (error) {
      setFocus('carLocation');
      setError('carLocation', {
        type: 'manual',
        message: 'Invalid location',
      });
    }
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <Controller
            control={control}
            name="carLocation"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={onBlur}
                required
                enablesReturnKeyAutomatically
                onChangeText={onChange}
                returnKeyType="next"
                value={value}
                placeholder="Car location"
              />
            )}
          />
          <View className="w-full h-0.5 bg-gray-200" />
          <Controller
            control={control}
            name="pickUp"
            render={({ field: { onChange, value } }) => (
              <DatePicker
                value={value}
                label="Pick up"
                handleValue={(date) => {
                  onChange(date);
                  setPickUp(date);
                }}
              />
            )}
          />
          <View className="w-full h-0.5 bg-gray-200" />
          <Controller
            control={control}
            name="dropOff"
            render={({ field: { onChange, value } }) => (
              <DatePicker
                value={value}
                label="Drop off"
                handleValue={(date) => {
                  onChange(date);
                  setDropOff(date);
                }}
              />
            )}
          />
          <Button onPress={onFindCarSubmit}>Search</Button>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
