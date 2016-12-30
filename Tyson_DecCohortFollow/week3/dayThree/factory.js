angular.module('schoolApp', [])
.factory('StudentFactory', studentFactory)



function studentFactory() {
    var studentProfiles = [{
        name: 'Flynn',
        grade: 1.5,
        startDate: new Date(2015, 01, 01),
        course: ['Enviromental Affairs', 'Philosophy', 'Midwifery'],
        advisor: 'Darwin'
    },
        
    {       
            name: 'Kurt',
            grade: 2.1,
            startDate: new Date(2010, 06, 01),
            courses: ['Basket Weaving', 'Sidekick 101', 'Volleyball'],
            advisor: 'Cupernicus'

    },
    {
            name: 'McMan',
            grade: 4.0,
            startDate: new Date(2021, 03,02),
            courses: ['Aerospace', 'Space Space', 'Animal Husbandry'],
             advisor: 'Newton'

    }]
    return {
        studentData: StudentProfiles
    }
 }