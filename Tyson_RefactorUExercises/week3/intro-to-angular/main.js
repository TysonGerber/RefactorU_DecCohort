angular.module('intro', [])
    .controller('introCtrl', introFunc)


// introFunc.$inject =  ['$uibModal']

function introFunc() {
    var iCtrl = this;

// <!--PART ONE-->
// =-=-=-=-=-=-=-=-=-=-=-=-Part One-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    iCtrl.greeting = 'this is working'
    iCtrl.log = function () {
        console.log('you clicked the button!');

    }


    iCtrl.log2 = function () {
        iCtrl.someText = 'Here is text in a H1'
        iCtrl.log2 = !iCtrl.log2
    }


// =-=-=-=-=-=-=-=-=-=-=-=-=FOOTBALL SHOW-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

     iCtrl.football = false;
iCtrl.toggle = function() {
   iCtrl.football = !iCtrl.football

}






// =-=-=-=-=-=-=-=-=-=-=-=-Part Two -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// -=-=-=-=-=-=-=-=-=-=-=-FIRST TRY MOUSE OVER PINK-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    iCtrl.over = function () {
        //  console.log(iCtrl.over)
        iCtrl.open = true;

    }

    iCtrl.leave = function () {
        //  console.log(iCtrl.leave)
        iCtrl.open = false;
    }
    iCtrl.open = false;


// -=-=-=-=-=-=-=-=-=-=-SECOND TRY MOUSE OVER PINK-=-=-=-=-=-=-=-=-=-=-=-=

    iCtrl.show = function () {
        //  console.log(iCtrl.show)
        iCtrl.exc = true;

    }


    iCtrl.hide = function () {
        //  console.log(iCtrl.hide)
        iCtrl.exc = false;
    }

    iCtrl.exc = false;
    iCtrl.showText = '!!!'


    iCtrl.confirm = function ($event) {
        if (!confirm('if you click on cancel the link will disappear off the DOM')) {
            event.preventDefault();
            iCtrl.showLink = false;
        }
        console.log($event)
        
    }
    iCtrl.showLink = true

  


//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Part Three-=-=-=-=-=-=-=-=-=-==-==-==-=

iCtrl.show = false;
iCtrl.toggleModal2 = function() {
    iCtrl.show = true;
    console.log(iCtrl.show)
}



iCtrl.close = function() {
    iCtrl.show= false;
    
}

 

// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
    // iCtrl.popUp = function () {
    //     $uiModal.open({

    //     })
    //    console.log(iCtrl.popUp)

    //     }
    
    






    //   iCtrl.myList = false;
    //      iCtrl.toggle = function(){
    //        ;
    //          iCtrl.myList = !iCtrl.myList;
    //      }


    //  iCtrl.revealList = function(){
    //      iCtrl.reveal.push(reveal)
    //  }





};


