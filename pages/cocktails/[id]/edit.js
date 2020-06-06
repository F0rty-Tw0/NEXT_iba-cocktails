import React from 'react';
import Router from 'next/router';
import CocktailCreateForm from '../../../components/cocktail-create-form';
import { getCocktailsById, updateCocktail } from '../../../actions';

class EditCocktail extends React.Component {
	static async getInitialProps({ query }) {
		const cocktail = await getCocktailsById(query.id);
		return { cocktail };
	}

	handleUpdateCocktail  = (cocktail) => {
		updateCocktail(cocktail).then((updatedCocktail) => {
			Router.push('/cocktails/[id]', `/cocktails/${cocktail.idDrink}`);
		});
	};

	render() {
		const { cocktail } = this.props;
		return (
			<div className="container">
				<h1>Edit the Cocktail</h1>
				<CocktailCreateForm initialData={cocktail} submitButton="Update" handleFormSubmit={this.handleUpdateCocktail} />
			</div>
		);
	}
}

export default EditCocktail;
