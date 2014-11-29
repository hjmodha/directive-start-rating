
app .filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=1; i<=total; i++)
      input.push(i);
    return input;
  };    
})

app.directive('hmrating',function(){
  return {
        restrict: 'EA',
        scope: { 
            //@ reads the attribute value, = provides two-way binding, & works with functions
            hmupto:"@",
            hmid:"@",
            hmcolor:'@',
            rate:'=',
            setrating : '&', 
            mouseover : '&',
            mouseleave : '&'
        },
        templateUrl: 'rating.html',
        link : function(scope,element,attr){
            scope.setrating(0);
        },       
        controller: function($scope){
    
            $scope.setrating = function(r){
                ratingEffect(r);
                $scope.rate = r;
            };
            
            $scope.mouseover = function(r){
                ratingEffect(r);
            }
            
            $scope.mouseleave = function(){
                ratingEffect($scope.rate);               
            }

            function ratingEffect(r){
                for(i=0;i<=r;i++)
                    angular.element(document.querySelector("#"+$scope.hmid+i)).removeClass("fa-star-o"); 

                for(i=0;i<=r;i++)
                    angular.element(document.querySelector("#"+$scope.hmid+i)).addClass("fa-star"); 

                for(i=r+1;i<=$scope.hmupto;i++){
                    angular.element(document.querySelector("#"+$scope.hmid+i)).removeClass("fa-star"); 
                    angular.element(document.querySelector("#"+$scope.hmid+i)).addClass("fa-star-o"); 
                }
            }
        }
   };
});
