var careerApp = angular.module('careerApp', ['ui.router']);

careerApp.config(function($stateProvider, $urlRouterProvider, $provide) {
    
	//Stops auto scrolling when navigating
	$provide.decorator('$uiViewScroll', function ($delegate) {
		return function (uiViewElement) {
			var top = uiViewElement.getBoundingClientRect().top;
			// window.scrollTo(0, (top - 30)); //alternative
		}; 
	});

	//Default directory is Home
    $urlRouterProvider.otherwise('/home');
    
	//Directories to choose
    $stateProvider
        
        // HOME 
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
        // PORTFOLIO 
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'views/portfolio.html'
        })
		// EXPLORE 
        .state('explore', {
            url: '/explore',
            templateUrl: 'views/explore.html'
        })
		// JOB POSTS 
        .state('jobs', {
            url: '/jobs',
            templateUrl: 'views/jobs.html'
        })
		// ABOUT 
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'
        })
        
});
