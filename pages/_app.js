import App from 'next/app';
import { Component } from 'react';
import Head from 'next/head';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../styles/index.css';
import pure from '../testing/pure.css';
import cards from '../styles/cards.css';

class CocktailApp extends App {
	static async getInitalProps(appContenxt) {
		// Executing getInitalProps of page you are navigated to
		const appProps = await App.getInitalProps(appContenxt);
		return { ...appProps };
	}

	// Component holds page we are navigating to
	render() {
		const { Component, pageProps } = this.props;
		return (
			<div>
				<Head>
					<title>Cocktails App</title>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta name="description" content="A cocktail recipes page" />
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossOrigin="anonymous"
					/>
					<script
						src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
						integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
						crossOrigin="anonymous"
					/>
					<script
						src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
						integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
						crossOrigin="anonymous"
					/>
					<script
						src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
						integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
						crossOrigin="anonymous"
					/>
				</Head>
				<Navbar />
				<div className="bakcground" />
				<div className="base-page">
					<Component {...pageProps} />
				</div>

				<Footer />
			</div>
		);
	}
}

export default CocktailApp;
