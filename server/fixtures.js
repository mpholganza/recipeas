if (Recipes.find().count() === 0) {
  Recipes.insert({
    name: 'Peanut Butter Jelly Cheese',
    price: '$4.00',
    description: 'A peanut butter and strawberry jam sandwich with a cheesy twist.',
		ingredients: 'peanut butter, strawberry jam, cheese, bread',
		recipeInstructions: 'Spread peanut butter on a both slices of bread.\n Spread strawberry jam on top of peanut butter.\nPlace cheese on top of the jam.\nClose the sandwich.'
  });

  Recipes.insert({
    name: 'Blueberry Pudding Cake',
    price: '$4.00',
		description: 'A moist blueberry pudding cake',
		ingredients: 'sugar, flour, blueberries',
		recipeInstructions: 'Spread peanut butter on a both slices of bread.\n Spread strawberry jam on top of peanut butter.\nPlace cheese on top of the jam.\nClose the sandwich.'
  });
}
