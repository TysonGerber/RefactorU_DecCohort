angular.module('app', [])
.controller('mainControl', mainControlFunction)

function mainControlFunction(){
    var mCtrl = this;

    mCtrl.title='Working'

    mCtrl.heroes = ['Spandes Man', 'Quailman', 'The Tick']

    mCtrl.listClass = 'plain'
    mCtrl.addHero = function() {
        mCtrl.heroes.push(hero)
    }





}