import { Categories } from '@/components/categories';
import { CategoryType } from '@/components/category';
import { Places } from '@/components/places';
import { api } from '@/services/api';
import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { PlaceType } from '../components/place/index';

type HomeType = PlaceType & {};

export default function Home() {
	const [categories, setCategories] = useState<CategoryType[]>([]);
	const [category, setCategory] = useState('');
	const [markets, setMarkets] = useState<PlaceType[]>([]);

	async function fetchCategories() {
		try {
			const { data } = await api.get('/categories');
			setCategories(data);
			setCategory(data[0].id);
		} catch (error) {
			console.error(error);
			Alert.alert('Categorias', 'Erro ao buscar categorias');
		}
	}

	async function fetchMarkets() {
		try {
			if (!category) {
				return;
			}

			const { data } = await api.get('/markets/category/' + category);
			setMarkets(data);
		} catch (error) {
			console.error(error);
			Alert.alert('Locais', 'Erro ao buscar locais');
		}
	}

	useEffect(() => {
		fetchCategories();
	}, []);

	useEffect(() => {
		fetchMarkets();
	}, [category]);

	return (
		<View style={{ flex: 1, backgroundColor: '#ccc' }}>
			<Categories data={categories} onSelect={setCategory} selected={category} />
			<Places data={markets} />
		</View>
	);
}
