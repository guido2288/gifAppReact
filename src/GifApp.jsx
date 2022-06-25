import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";

export const GifApp = () => {

	const [categories, setCategories] = useState([]);

	const onAddCategory = (newCategory) => {

		if (categories.includes(newCategory)) return;

		setCategories([newCategory, ...categories]);

	};

	return (
		<>
			<h1>GifApp</h1>

			<AddCategory

				onNewValue={event => onAddCategory(event)}
			/>
			<ol>
				{
					categories.map((category) => (

						<GifGrid
							key={category}
							category={category}
						/>

					))
				}
			</ol>
		</>

	)
};