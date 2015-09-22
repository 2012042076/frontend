var careerApp = angular.module('careerApp', ['ui.router']);

careerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
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
