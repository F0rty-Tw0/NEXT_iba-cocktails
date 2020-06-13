import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


const CocktailCreateForm = (props) => {
	const defaultData = {
		strDrink: '',
		strIngredient1: '',
		strMeasure1: '',
		strDrinkThumb: '',
		strInstructions: '',
		strTags: ''
	};
	const formData = props.initialData ? { ...props.initialData } : defaultData;

	const [ form, setForm ] = useState(formData);

	const handleChange = (event) => {
		const target = event.target;
		const name = target.name;
		setForm({
			...form,
			[name]: target.value
		});
	};

	const handleTagsChange = (event) => {
		const { options } = event.target;
		const optionsLength = options.length;
		let value = [];

		for (let i = 0; i < optionsLength; i++) {
			if (options[i].selected) {
				value.push(options[i].value);
			}
		}

		setForm({
			...form,
			strTags: value.toString()
		});
	};

	const submitForm = (event) => {
		event.preventDefault();
		const isValid = event.target.reportValidity(); // returns true or false

		if (isValid) {
			props.handleFormSubmit({ ...form });
		}
	};

	return (
		<form noValidate onSubmit={submitForm}>
			<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						onChange={handleChange}
						value={form.strDrink}
						name="strDrink"
						type="text"
						className="form-control"
						id="strDrink"
						pattern="[a-zA-Z]*"
						minLength="2"
						aria-describedby="emailHelp"
						placeholder="Mojito"
						autoComplete="on"
						required
					/>
			</div>
			<div className="form-group">		
					<label htmlFor="ingredient">Ingredient</label>
					<input
						onChange={handleChange}
						value={form.strIngredient1}
						name="strIngredient1"
						type="text"
						pattern="[a-zA-Z]*"
						minLength="2"
						className="form-control"
						id="strIngredient1"
						autoComplete="on"
						placeholder="Light Rum, Vodka"
						required
					/>
			</div>
			<div className="form-group">
					<label htmlFor="measure">Measure</label>
					<input
						onChange={handleChange}
						value={form.strMeasure1}
						name="strMeasure1"
						type="text"
						className="form-control"
						id="strMeasure1"
						minLength="2"
						placeholder="2 oz, 1 cl, 1/2 ml, 3 spoons"
						required
					/>
			</div>
			<div className="form-group">		
					<label htmlFor="ingredient">Ingredient 2</label>
					<input
						onChange={handleChange}
						value={form.strIngredient2}
						name="strIngredient2"
						type="text"
						pattern="[a-zA-Z]*"
						minLength="2"
						className="form-control"
						id="strIngredient2"
						autoComplete="on"
						placeholder="Light Rum, Vodka"
						required
					/>
			</div>
			<div className="form-group">
					<label htmlFor="measure">Measure 2</label>
					<input
						onChange={handleChange}
						value={form.strMeasure2}
						name="strMeasure2"
						type="text"
						className="form-control"
						id="strMeasure2"
						minLength="2"
						placeholder="2 oz, 1 cl, 1/2 ml, 3 spoons"
						required
					/>
			</div>
			<div className="form-group">		
					<label htmlFor="ingredient">Ingredient 3</label>
					<input
						onChange={handleChange}
						value={form.strIngredient3}
						name="strIngredient3"
						type="text"
						pattern="[a-zA-Z]*"
						minLength="2"
						className="form-control"
						id="strIngredient3"
						autoComplete="on"
						placeholder="Light Rum, Vodka"
						required
					/>
			</div>
			<div className="form-group">
					<label htmlFor="measure">Measure 3</label>
					<input
						onChange={handleChange}
						value={form.strMeasure3}
						name="strMeasure3"
						type="text"
						className="form-control"
						id="strMeasure3"
						minLength="2"
						placeholder="2 oz, 1 cl, 1/2 ml, 3 spoons"
						required
					/>
			</div>
			<div className="form-group">		
					<label htmlFor="ingredient">Ingredient 4</label>
					<input
						onChange={handleChange}
						value={form.strIngredient4}
						name="strIngredient4"
						type="text"
						pattern="[a-zA-Z]*"
						minLength="2"
						className="form-control"
						id="strIngredient4"
						autoComplete="on"
						placeholder="Light Rum, Vodka"
						required
					/>
			</div>
			<div className="form-group">
					<label htmlFor="measure">Measure 4</label>
					<input
						onChange={handleChange}
						value={form.strMeasure4}
						name="strMeasure4"
						type="text"
						className="form-control"
						id="strMeasure4"
						minLength="2"
						placeholder="2 oz, 1 cl, 1/2 ml, 3 spoons"
						required
					/>
			</div>
			<div className="form-group">		
					<label htmlFor="ingredient">Ingredient 5</label>
					<input
						onChange={handleChange}
						value={form.strIngredient5}
						name="strIngredient5"
						type="text"
						pattern="[a-zA-Z]*"
						minLength="2"
						className="form-control"
						id="strIngredient5"
						autoComplete="on"
						placeholder="Light Rum, Vodka"
						required
					/>
			</div>
			<div className="form-group">
					<label htmlFor="measure">Measure 5</label>
					<input
						onChange={handleChange}
						value={form.strMeasure5}
						name="strMeasure5"
						type="text"
						className="form-control"
						id="strMeasure5"
						minLength="2"
						placeholder="2 oz, 1 cl, 1/2 ml, 3 spoons"
						required
					/>
			</div>
			<div className="form-group">		
					<label htmlFor="ingredient">Ingredient 6</label>
					<input
						onChange={handleChange}
						value={form.strIngredient6}
						name="strIngredient6"
						type="text"
						pattern="[a-zA-Z]*"
						minLength="2"
						className="form-control"
						id="strIngredient6"
						autoComplete="on"
						placeholder="Light Rum, Vodka"
						required
					/>
			</div>
			<div className="form-group">
					<label htmlFor="measure">Measure 6</label>
					<input
						onChange={handleChange}
						value={form.strMeasure6}
						name="strMeasure6"
						type="text"
						className="form-control"
						id="strMeasure6"
						minLength="2"
						placeholder="2 oz, 1 cl, 1/2 ml, 3 spoons"
						required
					/>
			</div>
			{/* <div className="form-group">
				<label htmlFor="measure">Measure</label>
				<select
					className="form-control"
					id="measure"
					onChange={handleChange}
					value={form.strMeasure1}
					name="measure[]"
					className="form-control"
				>
					<option>1/4 oz</option>
					<option>1/2 oz</option>
					<option>3/4 oz</option>
					<option>1 oz</option>
					<option>1 1/4 oz</option>
					<option>1 1/2 oz</option>
					<option>1 3/4 oz</option>
					<option>2 oz</option>
					<option>2 1/4 oz</option>
					<option>2 1/2 oz</option>
					<option>2 3/4 oz</option>
				</select>
				<small id="emailHelp" className="form-text text-muted">
					Max: 5, Min: 0
				</small>
			</div> */}
			<div className="form-group">
				<label htmlFor="image">Image</label>
				<input
					onChange={handleChange}
					name="strDrinkThumb"
					value={form.strDrinkThumb}
					type="text"
					className="form-control"
					id="strDrinkThumb"
					placeholder="Link with a picture of your cocktail"
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="desc">Preparation</label>
				<textarea
					onChange={handleChange}
					name="strInstructions"
					value={form.strInstructions}
					className="form-control"
					id="strInstructions"
					rows="3"
					placeholder="Muddle mint leaves with Sugar and lime Juice. Add a splash of Soda..."
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="tags">Tags</label>
				<select onChange={handleTagsChange} multiple className="form-control" name="strTags" id="strTags">
					<option>&nbsp;IBA</option>
					<option>&nbsp;Contemporary</option>
					<option>&nbsp;Classic</option>
					<option>&nbsp;New Era</option>
					<option>&nbsp;Alcoholic</option>
				</select>
			</div>
			<button type="submit" id="button_create" className="btn btn-primary">
				{props.submitButton || 'Create'}
			</button>
			<style jsx>
				{`
					#button_create {
						position: absolute;
						bottom: -55px;
					}
				`}
			</style>
		</form>
	);
};
export default CocktailCreateForm;
