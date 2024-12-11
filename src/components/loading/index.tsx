import { colors } from '@/styles/theme';
import { ActivityIndicator } from 'react-native';
import { style } from './styles';

export function Loading() {
	return <ActivityIndicator style={style.container} size="large" color={colors.green.base} />;
}
