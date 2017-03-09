import aboutHTML from '../about/about.template.html';

let routing = [
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/Portfolio');
        $stateProvider
            .state({
                name: 'Portfolio',
                url: '/Portfolio',
                template: '<home></home>'
            })
            .state({
                name: 'Personal',
                url: '/Personal',
                template: aboutHTML
    });
}];

export default routing;
