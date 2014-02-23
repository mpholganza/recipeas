Template.recipeList.helpers({
  recipeList: function() {
		return Recipes.find();
  }
});

Template.recipeList.events({
	'submit form': function(e) {
		e.preventDefault();

		var searchString = $(e.target).find('[name=searchString]').val();
		Router.go('home', {searchString: searchString});
	}
});