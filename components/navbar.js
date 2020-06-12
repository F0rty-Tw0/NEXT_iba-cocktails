import Link from 'next/link';
import { useRouter } from 'next/router';
import Modal from './modal';
import CocktailCreateForm from './cocktail-create-form';
import { createCocktail } from '../actions';

const Navbar = (props) => {
	const router = useRouter();
	let modal = null;

	const handleCreateCocktail = (cocktail) => {
		createCocktail(cocktail).then((cocktails) => {
			modal.closeModal();
			router.push('/');
		});
	};

	return (
		<div>
			<div className="pure-menu pure-menu-horizontal">
				<div className="container">
					<Link href="/">
						<a href="#" className="pure-menu-heading">
							Cocktails
						</a>
					</Link>
					<ul className="pure-menu-list">
						<li className="pure-menu-item">
						<Link href="/about">
							<a className="pure-menu-link">
								About
							</a>
							</Link>
						</li>

						<li className="pure-menu-item float-right">
							<Modal ref={(elem) => (modal = elem)} hasSubmit={false}>
								<CocktailCreateForm handleFormSubmit={handleCreateCocktail} />
							</Modal>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
