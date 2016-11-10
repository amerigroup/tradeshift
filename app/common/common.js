var commonModule;

(function (angular, _) {
    'use strict';

    var none = 'none',
        anyId = 'ffffffffffffffffffffffffffffffff';

    var collectionMatcher = function (collection, selectedIds, idAccessor) {
        var result = false;
        if (_.indexOf(selectedIds, none) >= 0 && (!angular.isArray(collection) || collection.length === 0)) {
            result = true;
        } else if (collection) {
            if (idAccessor(collection[0]) === anyId) {
                result = true;
            }
            else {
                result = _.some(collection, function (member) {
                    return _.some(selectedIds, function (selectedId) {
                        return idAccessor(member) === selectedId;
                    });
                });
            }
        }
        return result;
    };

    commonModule = angular.module('myApp.common', ['ngResource'])
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

            var interceptor = ['$q', '$log', '$rootScope', '$window', '$injector', 'resources', function ($q, $log, $rootScope, $window, $injector, resources) {

                var UNAUTHORIZED = 401;

                function success(response) {
                    return response;
                }

                function error(response) {
                    var status = response.status;
                    if (status === UNAUTHORIZED) {
                        $window.location.href = resources.routes.LOGOUT;
                    }
                    else {
                        $log.error('Response status: ' + status + '. ' + response);

                        $rootScope.$broadcast(resources.eventNames.HTTP_MESSAGE, {
                            messageType: resources.messageTypes.ERROR,
                            messageText: resources.messages.general.TECHNICAL_ISSUES_ERROR_MESSAGE,
                            response: response
                        });

                        var errorMessage = response.config.url + ": returned " + response.status;

                        var errorMetaTag = $("head meta[name='ga-page-error']");
                        if (errorMetaTag) {
                            errorMetaTag.attr('content', function (_, value) {
                                return value + '\n' + errorMessage;
                            });
                        } else {
                            $('head').append("<meta name='ga-page-error' content='" + errorMessage + "'/>");
                        }

                        if (!response.config.url.match(/message\/log/)) {
                       //     BackEndLoggingService.logErrorToBackEnd(errorMessage);
                        }

                        return $q.reject(response);
                    }
                }

                return function (promise) {
                    return promise.then(success, error);
                };
            }];
            $httpProvider.interceptors.push(interceptor);
        }])
        .factory('$exceptionHandler', ['$window', '$log',  'resources', function ($window, $log, resources) {
            return function (exception, cause) {
                var errorMessage = "An error has occurred on the page " + $window.location.href + ", " + exception.message + "\nstacktrace: " + exception.stack;
              //  BackEndLoggingService.logErrorToBackEnd(errorMessage);

            /*    if (!($.browser.msie && parseInt($.browser.version, 10) < 9)) {
                    throw exception;
                }*/
            };
        }])
        .factory('resources', ['$window', function ($window) {
            return $window.resources;
        }])
        .factory('analytics', ['$window', function ($window) {
            return $window.analytics;
        }])
}(window.angular, window._));
