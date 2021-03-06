'use strict';

import './modules/dashboard/dashboard.module.js';
import './modules/plan/plan.module.js';
import './modules/medKit/medKit.module.js';
import './modules/setting/setting.module.js';
import './components/components.module.js';
import './services/services.module.js';


var app = angular.module('medicLog', [
    'ui.router',

    'mdDashboard',
    'mdPlan',
    'mdKit',
    'mdSetting',
    'mdComponents',
    'mdServices'
]);

app.config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');
});

