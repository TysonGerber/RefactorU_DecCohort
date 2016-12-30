angular.module('intro', [])
    .controller('introCtrl', introFunc)


    function introFunc(){
     var iCtrl = this;


     iCtrl.greeting = 'this is working'
     iCtrl.log = function() {
        console.log('you clicked the button!');
     
     }


     iCtrl.log2 = function() {
         iCtrl.someText ='Here is text in a H1'
         iCtrl.log2 = !iCtrl.log2
     } 

     iCtrl.over = function() {
        //  console.log(iCtrl.over)
         iCtrl.open = true;
         
     }

       iCtrl.leave = function() {
        //  console.log(iCtrl.leave)
         iCtrl.open = false;
     }
     iCtrl.open = false;



     iCtrl.show = function() {
        //  console.log(iCtrl.show)
         iCtrl.exc = true;
         
     }

     
       iCtrl.hide = function() {
        //  console.log(iCtrl.hide)
         iCtrl.exc = false;
     }

     iCtrl.exc= false;
     iCtrl.showText = '!!!'

     iCtrl.confirm = function($event){
      if (!confirm('click ok to contine')){
          event.preventDefault();
      }
      console.log($event)



    }
   







//   iCtrl.myList = false;
//      iCtrl.toggle = function(){
//        ;
//          iCtrl.myList = !iCtrl.myList;
//      }


    //  iCtrl.revealList = function(){
    //      iCtrl.reveal.push(reveal)
    //  }





    };
      
    
    