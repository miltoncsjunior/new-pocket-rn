import { colors } from '@/styles/theme';
import { categoriesIcons } from '@/utils/categories-icons';
import { Pressable, PressableProps, Text } from 'react-native';
import { style } from './styles';

export type CategoryType = {
	id: string;
	name: string;
};

type CategoryProps = PressableProps & {
	iconId: string;
	isSelected?: boolean;
	name: string;
};

export function Category({ name, iconId, isSelected = false, ...rest }: CategoryProps) {
	const Icon = categoriesIcons[iconId];

	return (
		<Pressable style={[style.container, isSelected && style.containerSelected]} {...rest}>
			<Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
			<Text style={[style.name, isSelected && style.nameSelected]}>{name}</Text>
		</Pressable>
	);
}
