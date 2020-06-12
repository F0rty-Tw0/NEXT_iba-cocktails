import React, { useState, useEffect } from 'react';
import { getCocktails, getAlcohol } from '../actions/index';
import SideMenu from '../components/sideMenu';
import Pagination from '../components/pagination';
import CocktailList from '../components/cocktailList';

const Home = (props) => {
	const { images, alcohol, cocktails } = props;
	const [ filter, setFilter ] = useState('Light Rum');
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ cocktailsPerPage, setCocktailsPerPage ] = useState(21);

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

	//get current page

	const indexOfLastCocktail = currentPage * cocktailsPerPage;
	const indexofFirstCocktail = indexOfLastCocktail - cocktailsPerPage;
	const currentCocktails = cocktails.slice(indexofFirstCocktail, indexOfLastCocktail);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div>
			<div className="home-page">
				<div className="banner" />
				{/* <Carousel images={images} /> */}
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="pb-4">
								<SideMenu
									activeCategory={filter}
									changeCategory={changeCategory}
									alcohol={alcohol}
									appName={'Filter'}
								/>
								<h1 className="card__heading">
									Displaying <strong>{filter}</strong> Cocktails{' '}
								</h1>
							</div>
							<div className="row">
								<CocktailList cocktails={filterCocktails(cocktails) || []} />
							</div>
							{/* <Pagination
								cocktailsPerPage={cocktailsPerPage}
								totalCocktails={cocktails.length}
								paginate={paginate}
							/>  */}
						</div>
					</div>
				</div>
				<style jsx>
					{`
						.card__heading {
							text-align: left;
						}
					`}
				</style>
			</div>
		</div>
	);
};
Home.getInitialProps = async () => {
	const cocktails = await getCocktails();
	const alcohol = await getAlcohol();
	// const images = cocktails.map((cocktail) => ({
	// 	id: `image-${cocktail.idDrink}`,
	// 	imageUrl: cocktail.strDrinkThumb,
	// 	title: cocktail.strDrink
	// }));

	return {
		cocktails,
		// images,
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
