import { Category, CategoryType } from '@/components/category';
import { FlatList } from 'react-native';
import { style } from './styles';

type CategoriesProps = {
	data: CategoryType[];
	selected: string;
	onSelect: (id: string) => void;
};

export function Categories({ data, selected, onSelect }: CategoriesProps) {
	return (
		<FlatList
			data={data}
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<Category
					name={item.name}
					iconId={item.id}
					isSelected={item.id === selected}
					onPress={() => onSelect(item.id)}
				/>
			)}
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={style.content}
			style={style.container}
		/>
	);
}
