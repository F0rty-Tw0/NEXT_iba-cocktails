import React from 'react';
import Link from 'next/link';

class CocktailList extends React.Component {
	// shorten = (text) => {
	// 	if (text && text.length >= 200) {
	// 		return text.substr(0, 200) + '...';
	// 	}
	// 	return text;
	// };
	renderCocktails() {
		const { cocktails } = this.props;
		return cocktails.map((cocktail) => (
			<div key={cocktail.idDrink} className="col-lg-4 col-md-6 mb-4">
				<div className="card h-100">
					<Link href="/cocktails/[id]" as={`/cocktails/${cocktail.idDrink}`}>
						<a>
							<img className="card-img-top" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
						</a>
					</Link>
					<div className="card-body">
						<h4 className="card-title">
							<Link href="/cocktails/[id]" as={`/cocktails/${cocktail.idDrink}`}>
								<a>{cocktail.strDrink}</a>
							</Link>
						</h4>
						<ul>
							<li className="text-muted">{cocktail.strIngredient1}</li>
							<li className="text-muted">{cocktail.strIngredient2}</li>
						</ul>
					</div>
					<div className="card-footer">
						<small className="text-muted">{cocktail.strTags}</small>
					</div>
				</div>
			</div>
		));
	}
	render() {
		return <React.Fragment>{this.renderCocktails()}</React.Fragment>;
	}
}

export default CocktailList;
