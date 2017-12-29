import React from 'react';

import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';


const burger = (props) => {

	//console.log("Object.keys(props.ingredients): "+Object.keys(props.ingredients));//salad, bacon, cheese, meat
	//ex ingredients bacon: 3
	let transformedIngredients = Object.keys(props.ingredients) //bacon
	.map(igKey => { 
		//console.log([...Array(props.ingredients[igKey])]);//creates array with length the same as the number of each ingredient ex. bacon: 3 creates an array of length 3
		return [...Array(props.ingredients[igKey])].map((_, i) => {
		return <BurgerIngredients key={igKey + i} type={igKey} />
		//igKey+i =bacon0 bacon1 bacon2
		});
	})
	.reduce((arr, el) => {
		return arr.concat(el)
	}, []);

	console.log(transformedIngredients);
	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients</p>
	}
	return (
		<div className={classes.Burger}>
			<BurgerIngredients type="bread-top" />
            {transformedIngredients}
			<BurgerIngredients type="bread-bottom" />
		</div>
	);
};

export default burger;