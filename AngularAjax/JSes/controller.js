app.controller("controller", function ($scope, $http) {
    //making an ajax call
    $http.get("http://www.w3schools.com/angular/customers.php").then(function (response) {
        //JSON document holding the response data from the server
        $scope.apiResult = response.data.records;
        console.log("API request made, result : " + $scope.apiResult);
        $scope.gridOptions.data = $scope.apiResult;
    });

    $scope.gridOptions = {
        enableFiltering: true,
        enableSorting: true,
        enableRowSelection: true,
        enableSelectAll: true,
        selectionRowHeaderWidth: 35,
        multiSelect: true,
    };
});
