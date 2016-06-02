angular.module("assom_forum", ["ionic","ionMdInput","ionic-material","ionic.rating","ionicLazyLoad","assom_forum.controllers", "assom_forum.services"])
	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			if(window.StatusBar) {
				StatusBar.styleDefault();
			}

			setTimeout(function() {
			}, 100);

		});
	})


	.filter("to_trusted", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])




.config(function($stateProvider, $urlRouterProvider,$sceDelegateProvider) {
	// Domain Whitelist
	$sceDelegateProvider.resourceUrlWhitelist([
		"self",
		new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$'),
		new RegExp('^(http[s]?):\/\/(w{3}.)?w3schools\.com/.+$'),
	]);
	$stateProvider
	.state("assom_forum",{
		url: "/assom_forum",
			abstract: true,
			templateUrl: "templates/assom_forum-side_menus.html",
			controller: "side_menusCtrl",
	})

	.state("assom_forum.accueil", {
		url: "/accueil",
		views: {
			"assom_forum-side_menus" : {
						templateUrl:"templates/assom_forum-accueil.html",
						controller: "accueilCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("assom_forum.faq", {
		url: "/faq",
		views: {
			"assom_forum-side_menus" : {
						templateUrl:"templates/assom_forum-faq.html",
						controller: "faqCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	$urlRouterProvider.otherwise("/assom_forum/accueil");
});
