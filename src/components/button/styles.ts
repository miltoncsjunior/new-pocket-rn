import { colors, fontFamily } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
	container: {
		height: 56,
		maxHeight: 56,
		backgroundColor: colors.green.base,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		gap: 14,
	},
	title: {
		fontSize: 16,
		fontFamily: fontFamily.semiBold,
		color: colors.gray[100],
	},
});
