import { colors } from '@/styles/colors';
import { IconProps as TablerIconProps } from '@tabler/icons-react-native';
import React from 'react';
import { ActivityIndicator, Text, TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { style } from './styles';

type ButtonProps = TouchableOpacityProps & {
	isLoading?: boolean;
};

function Button({ children, style: touchableOpacityStyle, isLoading = false, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			style={[style.container, touchableOpacityStyle]}
			disabled={isLoading}
			{...rest}>
			{isLoading ? <ActivityIndicator size={'small'} color={colors.gray[100]} /> : children}
		</TouchableOpacity>
	);
}

type IconProps = {
	icon: React.ComponentType<TablerIconProps>;
};

function Icon({ icon: Icon }: IconProps) {
	return <Icon size={24} color={colors.gray[100]} />;
}

function Title({ children }: TextProps) {
	return <Text style={style.title}>{children}</Text>;
}

Button.Icon = Icon;
Button.Title = Title;

export { Button };
