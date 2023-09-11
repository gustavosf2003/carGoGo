import clsx from 'clsx';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  children,
  loading,
  disabled = false,
  className,
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled || loading;
  return (
    <TouchableOpacity
      disabled={isDisabled}
      className={clsx(
        'bg-blue-600 w-full justify-center inline-flex  px-2 py-2.5 items-center shadow-md',
        isDisabled ? 'bg-gray-300 border-gray-200 text-gray-400' : '',
        className
      )}
      {...rest}>
      <Text className={clsx('text-base font-medium', isDisabled ? 'text-gray-400' : 'text-white')}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
