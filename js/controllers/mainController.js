// MAIN CONTROLLER
function mainController($scope) {
    $scope.firstname = '';
    $scope.lastname = '';
    $scope.email = '';

    $scope.persons = [{
        firstname: '',
        lastname: '',
        email: ''
    }];

    $scope.addPerson = function() {
        let person = {
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            email: $scope.email

        };
        $scope.persons.push(person);
        $scope.firstname = '';
        $scope.lastname = '';
        $scope.email = '';
    };

}
