import { api } from '@/services/api';
import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';

export default function Home() {
	const [categories, setCategories] = useState();

	async function fetchCategories() {
		try {
			const { data } = await api.get('/categories');
			console.log(data);
		} catch (error) {
			console.error(error);
			Alert.alert('Categorias', 'Erro ao buscar categorias');
		}
	}

	useEffect(() => {
		fetchCategories();
	}, []);

	return <View style={{ flex: 1 }}>Home</View>;
}
