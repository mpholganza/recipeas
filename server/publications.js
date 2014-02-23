Meteor.publish('recipes', function() {
	return Recipes.find();
});

Meteor.publish('searchRecipes', function(searchString) {
	return Recipes.find({
		$or: [
			{ingredients: new RegExp(searchString)},
			{recipeInstructions: new RegExp(searchString)},
			{name: new RegExp(searchString)}
		]
	});
});