Template.recipeItem.helpers({
	ownRecipe: function() {
		return this.userId === Meteor.userId();
	}
});
