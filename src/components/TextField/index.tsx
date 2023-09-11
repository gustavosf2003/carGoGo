import React from 'react';

import clsx from 'clsx';
import { TextInput, TextInputProps, View } from 'react-native';

type TextFieldProps = {
  placeholder: string;
  required?: boolean;
  error?: string;
  icon?: React.ReactNode;
} & TextInputProps;

const TextField = React.forwardRef<TextInput, TextFieldProps>(function TextField(
  { placeholder, ...inputProps },
  ref
) {
  return (
    <View className="flex w-full">
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="black"
        className={clsx('p-2 shadow-sm bg-white text-gray-800 h-10')}
        {...inputProps}
        accessibilityLabel={placeholder.toString()}
        ref={ref}
      />
    </View>
  );
});
export default TextField;
