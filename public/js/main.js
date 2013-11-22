var AppRouter = Backbone.Router.extend({

	routes: {
        ""                  : "home",
        "movies"			: "list",
        "movies/add"        : "addMovie",
        "movies/:id"        : "movieDetails"
    },

    initialize: function () {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
    },

    home: function () {

    },

    list: function () {

    },

    addMovie: function () {

    },

    movieDetails: function () {

    }
});

// Asynchronously load templates located in separate .html files
var loadTemplate = function(views, callback) {

    var deferreds = [];

    $.each(views, function(index, view) {
        if (window[view]) {
            deferreds.push($.get('templates/' + view + '.html', function(data) {
                window[view].prototype.template = _.template(data);
            }));
        } else {
            alert(view + " not found");
        }
    });

    $.when.apply(null, deferreds).done(callback);
}

loadTemplate(['HeaderView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});