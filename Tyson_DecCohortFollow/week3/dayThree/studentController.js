angular.module('schoolApp')
    .controller('StudentController', studentFunction)


studentFunction.$inject ='StudentFactory'
    function studentFunction(studentFactory){

        var sCtrl = this;

        sCtrl.greeting = 'YOLO WORLD'

        sCtrl.data = SchoolFactory.studentData
    }