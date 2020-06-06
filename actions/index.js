import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:3000';

const ALCOHOL_DATA = [
	{ id: 'a-0', name: 'All' },
	{ id: 'a-1', name: 'Gin' },
	{ id: 'a-2', name: 'Vodka' },
	{ id: 'a-3', name: 'Light Rum' },
	{ id: 'a-4', name: 'Tequila' },
	{ id: 'a-5', name: 'Blended Whiskey' },
	{ id: 'a-6', name: 'Bourbon' },
	{ id: 'a-7', name: 'Triple Sec' },
	{ id: 'a-8', name: 'Amaretto' },
	{ id: 'a-9', name: 'Southern Comfort' },
	{ id: 'a-10', name: 'Dry Vermouth' },
	{ id: 'a-11', name: 'Creme de Cacao' },
	{ id: 'a-12', name: 'Dark Rum' },
	{ id: 'a-13', name: 'Kahlua' },
	{ id: 'a-14', name: 'Wine' },
	{ id: 'a-15', name: 'Champagne' }
];

export const getAlcohol = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(ALCOHOL_DATA);
			reject('Cannot Fetch Data');
		}, 50);
	});
};

export const createCocktail = (cocktail) => {
	cocktail.idDrink = Math.random().toString(36).substr(2, 7);
	return axios.post(`${BASE_URL}/api/v1/cocktails`, cocktail).then((res) => res.data);
	// return new Promise((resolve, reject) => {
	// 	cocktail.idDrink = Math.random().toString(36).substr(2, 7);
	// 	COCKTAIL_DATA.push(cocktail);
	// 	setTimeout(() => {
	// 		resolve(COCKTAIL_DATA);
	// 		reject('Cannot Fetch Data');
	// 	}, 50);
	// });
};

export const getCocktails = () => {
	// return new Promise((resolve, reject) => {
	// 	setTimeout(() => {
	// 		resolve(COCKTAIL_DATA);
	// 		reject('Cannot Fetch Data');
	// 	}, 50);
	// });
	return axios.get(`${BASE_URL}/api/v1/cocktails`).then((res) => res.data);
};

export const getCocktailsById = (id) => {
	// return new Promise((resolve, reject) => {
	// 	const cocktailIndex = COCKTAIL_DATA.findIndex((cocktail) => cocktail.idDrink === id);
	// 	const cocktail = COCKTAIL_DATA[cocktailIndex];
	// 	setTimeout(() => resolve(cocktail), 50);
	// });
	return axios.get(`${BASE_URL}/api/v1/cocktails/${id}`).then((res) => res.data);
};

export const deleteCocktail = (id) => {
	return axios.delete(`${BASE_URL}/api/v1/cocktails/${id}`).then((res) => res.data);
};

export const updateCocktail = (cocktail) => {
	return axios.patch(`${BASE_URL}/api/v1/cocktails/${cocktail.idDrink}`, cocktail).then((res) => res.data);
};

export const getPosts = () => {
	return axios.get(`${BASE_URL}/api/v1/posts`).then((res) => res.data);
};
