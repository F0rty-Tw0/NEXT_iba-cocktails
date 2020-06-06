const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const filePath = './data.json';

const fs = require('fs');
const path = require('path');
const cocktailsData = require(filePath);

app.prepare().then(() => {
	const server = express();
	server.use(bodyParser.json());

	server.get('/api/v1/cocktails', (req, res) => {
		return res.json(cocktailsData);
	});

	server.get('/api/v1/cocktails/:id', (req, res) => {
		const { id } = req.params;
		const cocktail = cocktailsData.find((cocktail) => cocktail.idDrink === id);
		return res.json(cocktail);
	});

	server.post('/api/v1/cocktails', (req, res) => {
		const cocktail = req.body;
		cocktailsData.push(cocktail);
		const pathToFile = path.join(__dirname, filePath);
		const stringifyiedData = JSON.stringify(cocktailsData, null, 2);
		fs.writeFile(pathToFile, stringifyiedData, (error) => {
			if (error) {
				return res.status(422).send(error);
			}
			return res.json('Cocktail has been succesful added!');
		});
	});

	// server.delete('/api/v1/cocktails/:id', (req, res) => {
	// 	const { id } = req.params;
	// 	const cocktailIndex = cocktailsData.findIndex((cocktail) => cocktail.idDrink === id);
	// 	cocktailsData.splice(cocktailIndex, 1);
	// 	const pathToFile = path.join(__dirname, filePath);
	// 	const stringifyiedData = JSON.stringify(cocktailsData, null, 2);
	// 	fs.writeFile(pathToFile, stringifyiedData, (error) => {
	// 		if (error) {
	// 			return res.status(422).send(error);
	// 		}
	// 		return res.json('Cocktail has been succesful added!');
	// 	});
	// });

	server.patch('/api/v1/cocktails/:id', (req, res) => {
		const { id } = req.params;
		const cocktail = req.body;

		const cocktailIndex = cocktailsData.findIndex((cocktail) => cocktail.idDrink === id);
		
		cocktailsData[cocktailIndex] = cocktail;

		const pathToFile = path.join(__dirname, filePath);
		const stringifyiedData = JSON.stringify(cocktailsData, null, 2);
		fs.writeFile(pathToFile, stringifyiedData, (error) => {
			if (error) {
				return res.status(422).send(error);
			}
			return res.json(cocktail);
		});
	});

	const PORT = process.env.PORT || 3000;

	server.use(handle).listen(PORT, (err) => {
		if (err) throw err;
		console.log('> Ready on port ' + PORT);
	});
});
