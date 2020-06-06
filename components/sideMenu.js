import { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from './modal';
import CocktailCreateForm from './cocktail-create-form';
import { createCocktail } from '../actions';
// Containment
const SideMenu = (props) => {
	const { alcohol } = props;
	const router = useRouter();
	let modal = null;

	const handleCreateCocktail = (cocktail) => {
		createCocktail(cocktail).then((cocktails) => {
			modal.closeModal();
			router.push('/');
		});
	};
	return (
		<React.Fragment>
			<Modal ref={(elem) => (modal = elem)} hasSubmit={false}>
				<CocktailCreateForm handleFormSubmit={handleCreateCocktail} />
			</Modal>
			<h1 className="my-4">{props.appName}</h1>
			<div className="list-group">
				{alcohol.map((alcohol) => (
					<a
						onClick={() => props.changeCategory(alcohol.name)}
						key={alcohol.id}
						href="#"
						className={`list-group-item ${props.activeCategory === alcohol.name ? 'active' : ''}`}
					>
						{alcohol.name}
					</a>
				))}
			</div>
		</React.Fragment>
	);
};

export default SideMenu;
