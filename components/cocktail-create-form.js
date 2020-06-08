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

	const submitForm = () => {
		props.handleFormSubmit({ ...form });
	};

	return (
		<form>
			<div className="form-group">
				<label htmlFor="name">Name</label>
				<input
					onChange={handleChange}
					value={form.strDrink}
					name="strDrink"
					type="text"
					className="form-control"
					id="strDrink"
					aria-describedby="emailHelp"
					placeholder="Mojito"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="ingredient">Ingredient</label>
				<input
					onChange={handleChange}
					value={form.strIngredient1}
					name="strIngredient1"
					type="text"
					className="form-control"
					id="strIngredient1"
					placeholder="Light Rum"
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
					placeholder="DL"
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
					placeholder="https://...................../mojito.jpg"
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
			<button onClick={submitForm} type="button" className="btn btn-primary">
				{props.submitButton || 'Create'}
			</button>		
		</form>
	);
};
export default CocktailCreateForm;
