var rockets = [];
var particles = [];
var gravity = -.0004
document.body.style.overflow = 'hidden'

function launchRocket(){
    var launchTime = performance.now()
    var startVelocityY = ((Math.random() * .03) - .015) +.07
    var startVelocityX = ((Math.random() * .02) - .01)
    var startPositionX = (((Math.random() *6) -3) +50)
    var spinSpeed = (Math.random() -.5)

    var rocket = document.createElement('rocket')
    document.body.appendChild(rocket)
    rocket.style.position = 'absolute'
    rocket.style.height = '50px'
    rocket.style.width = '50px'
    rocket.style.border = '1px solid black'
    rocket.style.backgroundColor = 'rgb(100,200,50)'

    var rocketMeta = {
        element         : rocket,
        launchTime      : launchTime,
        startVelocityY  : startVelocityY,
        startVelocityX  :  startVelocityX,
        spinSpeed       : spinSpeed
    }
    rockets.push(rocketMeta)

}

function setRocketPostiions(){
    rockets.forEach(function(rm){
        var elapsedTime = performance.now() -rmlaunchTime
        
     })
}
function render(){
    // console.log(performance.now())
    setRocketPositions()
    //setParticlePositions()
    requestAnimationFrame(render)
}
render()