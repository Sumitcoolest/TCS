(function(){
'use strict';

/* RestAngular factory Starts  */

angular.module('tcsapp').factory('pocRestangularService', pocRestangularService);
    function pocRestangularService(Restangular){
           // var newBaseUrl = "http://localhost:8080/";
            var newBaseUrl = "http://www.w3schools.com/angular/";
          //console.log("Current API Base URL::::",newBaseUrl);
            Restangular.setBaseUrl(newBaseUrl);
            Restangular.setFullResponse(true);
            Restangular.setDefaultHttpFields({cache: false});
            Restangular.setDefaultHeaders();
          //Restangular.setDefaultHttpFields({withCredentials: false});


/* RestAngular addFullRequestInterceptor Starts  */

    /*  Restangular.addFullRequestInterceptor(function (element, operation, route, url, headers, params, httpConfig) {
            console.log(":element:",element,":operation:",operation,":route:",route,":params:",params,":headers:",headers,":httpConfig:",httpConfig);

                   return {
                        element: element,
                        headers: headers,
                                params: params,
                                httpConfig: httpConfig
                   };
        });*/

/* RestAngular addFullRequestInterceptor Ends  */

/* RestAngular setErrorInterceptor Starts  */

           Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
                   console.log("Server Response header for ErrorInterceptor::",response );

                   return true;
           });

/* RestAngular setErrorInterceptor Ends  */


/* RestAngular addResponseInterceptor Starts  */

            Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
                    console.log("Server Response header for ResponseInterceptor::",response);
                    return data;
            });

/* RestAngular addResponseInterceptor Ends  */

        this.getdata = function(url, callback) {

                    console.log("Input Data for getdata Service::URL endpoint::",url);
                    Restangular.one(url).get().then(function(results) {
                            console.log("GET::Result inside getdata Service::",results);
                            callback(results);
                    },function(error){
                            console.log("GET::Error inside getdata Service::",error);
                            callback(error);
                    });
        };
        this.postdata = function(url,param,callback){
                    console.log("Input Data for postdata Service::URL endpoint::",url,"::PARAM::",param);
                   // console.log("Existing Cookies for POST::::",$cookies.tokenId);
                    Restangular.all(url).post(param).then(function(postresult){
                                console.log("POST::Result inside postdata Service::",postresult);
                                callback(postresult);
                    },function(error){
                       //         console.log("POST::Error inside postdata Service::",error);
                                callback(error);
                    });
        };
        this.deletedata = function(url,callback){
                    console.log("Input Data for deletedata Service::URL endpoint::",url);
                    Restangular.all(url).remove().then(function(result){
                                console.log("DELETE::Result inside deletedata Service::",result);
                                callback(result);
                    },function(error){
                                console.log("DELETE::Error inside deletedata Service::",error);
                                callback(error);
                    });
        };

        return{
            getdata: this.getdata,
            postdata: this.postdata,
            deletedata: this.deletedata

        };

    };

/* RestAngular Factory Ends  */
})();
