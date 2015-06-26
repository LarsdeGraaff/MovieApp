/**
 * Created by jeansmits on 26/06/15.
 */


function searchCtrl($scope,$http,apiUrl,$log,$location){
    $scope.message="Search form"

    $scope.searchMovie=function(title){
        $log.debug(title);

        var url=apiUrl + 'movies/search?title=' + title;
        $http.get(url).success(function(data) {
            $scope.results=data;
        });

        $scope.selectMovie=function(id){
            $scope.selectedId=id;
        }


        $log.debug('run');

        $scope.addMovie=function(id){
            var url=apiUrl +'Movies/' + id;
            $http.post(url).success(function(){
                $location.url('/collection');
            });
        }

    }

}

angular.module('movieApp.controllers')
    .controller('searchCtrl', searchCtrl);