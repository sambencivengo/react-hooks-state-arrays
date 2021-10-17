import React, { useState } from 'react';
import { spicyFoods, getNewSpicyFood } from '../data';

function SpicyFoodList() {
	const [foods, setFoods] = useState(spicyFoods);

	const foodList = foods.map((food) => (
		<li onClick={() => handleLiClick(food.id)} key={food.id}>
			{food.name} | Heat level: {food.heatLevel} | {food.cuisine}
		</li>
	));

	function handleAddFood() {
		const newFood = getNewSpicyFood();
		const newFoodList = [...foods, newFood];
		setFoods(newFoodList);
		console.log(newFood);
	}
	function handleLiClick(id) {
		const newFoodArray = foods.map((food) => {
			if (food.id === id) {
				return {
					...food,
					heatLevel: food.heatLevel + 1,
				};
			} else {
				return food;
			}
		});

		setFoods(newFoodArray);

		// FILTER METHOD
		// const newFoodArray = foods.filter((food) => food.id !== id);
		// console.log('This is the newFoodArray: ', newFoodArray);
		// setFoods(newFoodArray);
	}
	return (
		<div>
			<button onClick={handleAddFood}>Add New Food</button>
			<ul>{foodList}</ul>
		</div>
	);
}

export default SpicyFoodList;
