(function (commonModule, $, resources) {
    'use strict';

    commonModule.factory("backEndLoggingService", ['$log', '$injector', function ($log, $injector) {
            this.logErrorToBackEnd = function(message) {
                $log.error(message);
               // $injector.get('$http').post(resources.routes.LOG_BACK_END, {message: message, logLevel: 'ERROR'});
            };

            this.logWarnToBackEnd = function(message) {
                $log.warn(message);
              //  $injector.get('$http').post(resources.routes.LOG_BACK_END, {message: message, logLevel: 'WARN'});
            };
        }]);

}(window.commonModule, window.$, window.resources));
