import React, { useState, useEffect } from 'react';
import { getCocktails, getAlcohol } from '../actions/index';
import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import CocktailList from '../components/cocktailList';

const Home = (props) => {
	const { images, alcohol, cocktails } = props;
	const [ filter, setFilter ] = useState('All');
	const changeCategory = (category) => {
		setFilter(category);
	};

	const filterCocktails = (cocktails) => {
		if (filter === 'All') {
			return cocktails;
		}
		return cocktails.filter((cocktail) => {
			return (
				(cocktail.strIngredient1 && cocktail.strIngredient1.includes(filter)) ||
				(cocktail.strIngredient2 && cocktail.strIngredient2.includes(filter)) ||
				(cocktail.strIngredient3 && cocktail.strIngredient3.includes(filter)) ||
				(cocktail.strIngredient4 && cocktail.strIngredient4.includes(filter)) ||
				(cocktail.strIngredient5 && cocktail.strIngredient5.includes(filter)) ||
				(cocktail.strIngredient6 && cocktail.strIngredient6.includes(filter)) ||
				(cocktail.strIngredient7 && cocktail.strIngredient7.includes(filter)) ||
				(cocktail.strIngredient8 && cocktail.strIngredient8.includes(filter))
			);
		});
	};
	return (
		<div>
			<div className="home-page">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<SideMenu
								activeCategory={filter}
								changeCategory={changeCategory}
								alcohol={alcohol}
								appName={'International Cocktails'}
							/>
						</div>
						<div className="col-lg-9">
							<Carousel images={images} />
							<h1>Displaying {filter} Cocktails </h1>
							<div className="row">
								<CocktailList cocktails={filterCocktails(cocktails) || []} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
Home.getInitialProps = async () => {
	const cocktails = await getCocktails();
	const alcohol = await getAlcohol();
	const images = cocktails.map((cocktail) => ({
		id: `image-${cocktail.idDrink}`,
		imageUrl: cocktail.strDrinkThumb,
		title: cocktail.strDrink
	}));

	return {
		cocktails,
		images,
		alcohol
	};
};

// class Home extends React.Component {
// 	static async getInitialProps() {
// 		const cocktails = await getCocktails();
// 		return {
// 		 cocktails
// 		};
// 	}
// constructor(props) {
// 	super(props);
// 	this.state = {
// 		cocktails: [],
// 		errorMessage: ''
// 	};
// }
// state = {
// 	cocktails: []
// };
// Called only once when component is mounted
// async componentDidMount() {
// 	const cocktails = await getCocktails();
// 	this.setState({ cocktails });
// }

// Called only on Client (Browser)
// componentDidMount() {
// 	getCocktails()
// 		.then((cocktails) => {
// 			this.setState({ cocktails });
// 		})
// 		.catch((error) => {
// 			this.setState({ errorMessage: error });
// 		});
// }

export default Home;
