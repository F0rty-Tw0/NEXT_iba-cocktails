import { useRouter } from 'next/router';
import { getCocktailsById, deleteCocktail } from '../../../actions';
import Link from 'next/link';

const Cocktail = (props) => {
	const router = useRouter();
	const { id } = router.query;
	const { cocktail } = props;

	const handleDeleteCocktail = (id) => {
		deleteCocktail(id).then(() => {
			router.push('/');
		});
	};

	return (
		<div className="container">
			<h1 className="display-4 text-center pb-5">{cocktail.strDrink}</h1>
			<img className="card-img-top" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
			<p className="lead pt-5">
				{cocktail.strMeasure1} {cocktail.strIngredient1}
			</p>
			<p className="lead">
				{cocktail.strMeasure2} {cocktail.strIngredient2}
			</p>
			<p className="lead">
				{cocktail.strMeasure3} {cocktail.strIngredient3}
			</p>
			<p className="lead">
				{cocktail.strMeasure4} {cocktail.strIngredient4}
			</p>
			<p className="lead">
				{cocktail.strMeasure5} {cocktail.strIngredient5}
			</p>
			<p className="lead">
				{cocktail.strMeasure6} {cocktail.strIngredient6}
			</p>
			<p className="lead">
				{cocktail.strMeasure7} {cocktail.strIngredient7}
			</p>
			<p className="lead">
				{cocktail.strMeasure8} {cocktail.strIngredient8}
			</p>
			<p className="lead">
				{cocktail.strMeasure9} {cocktail.strIngredient9}
			</p>
			<p className="lead">
				{cocktail.strMeasure10} {cocktail.strIngredient10}
			</p>
			<p className="lead">
				{cocktail.strMeasure11} {cocktail.strIngredient11}
			</p>
			<p className="lead">
				{cocktail.strMeasure12} {cocktail.strIngredient12}
			</p>
			<hr className="my-4" />
			<p>{cocktail.strInstructions}</p>
			<Link href="/" as="/">
				<a className="btn btn-primary btn-lg mt-5" href="/" role="button">
					Back
				</a>
			</Link>
			{/* <a
					onClick={() => handleDeleteCocktail(id)}
					className="btn btn-danger btn-lg mt-5 float-right"
					href="#"
					role="button"
				>
					DELETE
				</a> */}
			<Link href="/cocktails/[id]/edit" as={`/cocktails/${id}/edit`}>
				<a className="btn btn-warning btn-lg mt-5 float-right" role="button">
					EDIT
				</a>
			</Link>
		</div>
	);
};

Cocktail.getInitialProps = async ({ query }) => {
	const cocktail = await getCocktailsById(query.id);
	return { cocktail };
};
export default Cocktail;
