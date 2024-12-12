import { colors } from '@/styles/theme';
import { IconTicket } from '@tabler/icons-react-native';
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { style } from './styles';

export type PlaceType = {
	id: string;
	name: string;
	description: string;
	coupons: number;
	cover: string;
	address: string;
};

type PlaceProps = TouchableOpacityProps & {
	data: PlaceType;
};

export function Place({ data, ...rest }: PlaceProps) {
	return (
		<TouchableOpacity style={style.container} {...rest}>
			<Image style={style.image} source={{ uri: data.cover }} />
			<View style={style.content}>
				<Text style={style.name}>{data.name}</Text>
				<Text style={style.description}>{data.description}</Text>
				<View style={style.footer}>
					<IconTicket size={16} color={colors.red.base} />
					<Text style={style.tickets}>{data.coupons} cupons disponíveis</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
