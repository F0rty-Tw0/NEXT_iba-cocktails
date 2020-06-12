import React from 'react';

// Functional Component
class About extends React.Component {
	render() {
		return (
			<div>
				<header className="about_header">
					<div className="overlay">
						<div className="container">
							<h1 className="display-4">List of cocktails</h1>
							<p className="lead">
								A cocktail is a mixed drink typically made with a distilled liquor (such as arrack,
								brandy, cachaça, gin, rum, tequila, vodka, or whiskey) as its base ingredient that is
								then mixed with other ingredients or garnishments. Sweetened liqueurs, wine, or beer may
								also serve as the base or be added. If beer is one of the ingredients, the drink is
								called a beer cocktail. Cocktails often also contain one or more types of juice, fruit,
								honey, milk or cream, spices, or other flavorings. Cocktails may vary in their
								ingredients from bartender to bartender, and from region to region. Two creations may
								have the same name but taste very different because of differences in how the drinks are
								prepared. This article is organized by the primary type of alcohol (by volume) contained
								in the beverage. Cocktails marked with IBA are designated as "IBA Official Cocktails" by
								the International Bartenders Association, and are some of the most popular cocktails
								worldwide.
							</p>
						</div>
					</div>
				</header>
			</div>
		);
	}
}
export default About;
