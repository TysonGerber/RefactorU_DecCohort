// Market On Demand API (now IHSMarket)
angular.module('marketApi')
    .controller('marketController', mCtrl)

    mCtrl.$inject = ['$http']


        function mCtrl($http){
            var mCtrl = this;

            mCtrl.title = 'market'

        mCtrl.ticker = function() {

            var APPID = key.APPID
            console.log('APPID')

            var currentTicker = 'http://dev.markitondemand.com/Api/v2/Quote/?symbol='+ ticker +

        }



        }