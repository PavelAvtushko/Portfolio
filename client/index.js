import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './components/app/app.config.js';


import AppComponent from './components/app/app.component';
import HomeComponent from './components/home/home.component';

const app = angular.module('app', [uirouter]);

app.component('app', AppComponent);

// app.component('about', AboutComponent);

app.component('home', HomeComponent);

// app.component('tasksForm', TasksFormComponent);

// app.service('tasksManager', TasksManager);

app.config(routing);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});