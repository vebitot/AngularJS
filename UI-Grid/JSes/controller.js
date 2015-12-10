app.controller("controller", function ($scope) {
    $scope.newProjectName = "";
    $scope.newProjectBudget = "";
    $scope.newProjectOwner = "";
    $scope.data = [{
            'Project': 'Sequent',
            'Budget': '$1,000,000',
            'Owner': 'Mr.Jeff'
        },
        {
            'Project': 'Samsung',
            'Budget': '$2,000,000',
            'Owner': 'Holly'
        },
        {
            'Project': 'Saleforce',
            'Budget': '$10,000,000',
            'Owner': 'Mr.Safe'
        }];
    $scope.addMore = function () {
        console.log("Adding a new record");
        var newData = {
            'Project': $scope.newProjectName,
            'Budget': $scope.newProjectBudget,
            'Owner': $scope.newProjectOwner
        };
        $scope.data.push(newData);
        $scope.newProjectName = "";
        $scope.newProjectBudget = "";
        $scope.newProjectOwner = "";
    };
    $scope.makeAPICall = function ();

});
