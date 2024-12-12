import { Place, PlaceType } from '@/components/place';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { style } from './styles';

type PlaceProps = {
	data: PlaceType[];
};

export function Places({ data }: PlaceProps) {
	const dimensions = useWindowDimensions();
	const bottomSheetRef = useRef<BottomSheet>(null);
	const snapPoints = {
		min: 278,
		max: dimensions.height - 128,
	};

	return (
		<BottomSheet
			ref={bottomSheetRef}
			snapPoints={[snapPoints.min, snapPoints.max]}
			handleIndicatorStyle={style.indicator}
			backgroundStyle={style.container}
			enableOverDrag={false}>
			<BottomSheetFlatList
				data={data}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <Place data={item} />}
				contentContainerStyle={style.content}
				ListHeaderComponent={() => <Text style={style.title}>Explore locais perto de você !</Text>}
				showsVerticalScrollIndicator={false}
			/>
		</BottomSheet>
	);
}
