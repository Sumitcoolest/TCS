(function(){
'use strict';

angular.module('tcsapp').controller('PartialHomeList',PartialHomeList);
PartialHomeList.$inject = ['$scope','pocRestangularService'];
function PartialHomeList($scope,pocRestangularService){
        $scope.names = ['John', 'Ram', 'Mike'];

        pocRestangularService.getdata("node/14",function(results){
        alert(results);

        });



}
})();