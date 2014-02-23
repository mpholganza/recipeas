Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

Router.map(function() {
	this.route('home', {
		path: '/',
		waitOn: function() {
			return [Meteor.subscribe('recipes')];
		}
	});
  this.route('recipePage', {
    path: '/recipe/:_id',
		data: function() { return Recipes.findOne(this.params._id); }
  });
});
