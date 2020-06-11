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
			<div key={cocktail.idDrink} className="col-xl-4 col-lg-6 col-md-6 mb-4">
				{/* <div className="card">
					<Link href="/cocktails/[id]" as={`/cocktails/${cocktail.idDrink}`}>
						<a>
							<img className="card-img-top" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
						</a>
					</Link>
					<div className="card-body">
						<Link href="/cocktails/[id]" as={`/cocktails/${cocktail.idDrink}`}>
							<h4 className="card-title text-center mb-3">{cocktail.strDrink}</h4>
						</Link>
						<ul>
							<li className="text-muted">{cocktail.strIngredient1}</li>
							<li className="text-muted">{cocktail.strIngredient2}</li>
						</ul>
					</div>
					<div className="card-footer">
						<small className="text-muted">{cocktail.strTags}</small>
					</div>
				</div> */}

				<div className="card border-0">
					<div className="card__side card__side--front">
						<div className="card__title">
							<Link href="/cocktails/[id]" as={`/cocktails/${cocktail.idDrink}`}>
								<a className="card__heading">{cocktail.strDrink}</a>
							</Link>
						</div>

						<img className="img-fluid" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
					</div>

					<div className="card__side card__side--back">
						<img className="img-fluid" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
						<div className="card__cta">
							<div className="card__title">
								<Link href="/cocktails/[id]" as={`/cocktails/${cocktail.idDrink}`}>
									<a className="card__heading">{cocktail.strDrink}</a>
								</Link>
							</div>
							<div className="card__list-box font-weight-light">
								<p className="card__list-only">{cocktail.strIngredient1}</p>
								<p className="card__list-only">{cocktail.strIngredient2}</p>
								<p className="card__list-only">{cocktail.strIngredient3}</p>
							</div>
						</div>
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
