
///// DOM SELECTORS & GLOBAL VARIABLES
const button = document.querySelector("#restart-button").style.visibility='hidden'
const bars = document.querySelectorAll(".round-time-bar")
const bars2 = document.querySelectorAll(".round-time-bar2")
const bars3 = document.querySelectorAll(".round-time-bar3");
const feedEl = document.getElementById('btn-feed')
const playEl = document.getElementById('btn-play') 
const lightsEl = document.getElementById('btn-lights') 
const startEl = document.getElementById('btn-start')
const ageEl = document.getElementById('h2')


////// GLOBAL VARIABLES
let feedCount = 0
let feedInterval = null
let playCount = 0
let playInterval = null
let sleepCount = 0
let sleepInterval = null
let ageCount = 0
let ageInterval = null


/////// CAT CLASS
class Cat {
    constructor() {
        this.feedCount = 0
        this.playCount = 0
        this.sleepCount = 0
        this.ageCount = 0
    }
}
const myCat = new Cat()

///////////////////////////////////////////////////////
////// FUNCTIONS
function unhideBars() {
    // document.getElementById('hide').style.cssText = 'visibility:visible';
    document.getElementById('hide').style.visibility = 'visible';
    document.getElementById('hide2').style.visibility = 'visible';
    document.getElementById('hide3').style.visibility = 'visible';
}

function ageCounter () {
    ageInterval = setInterval(function() {
        myCat.ageCount++
        ageCount++
        ageEl.textContent = 'Keep your Pusheen alive! Pusheen is: ' + ageCount + ' years old'

    /// need to add if feed/sleep/play count === 10, age is 0 & add textContent "pusheen is dead you IDIOT!"
    }, 1000)
}

function updateDOM() {

}

function setupFeedButton () {
    bars.forEach((bar) => {
        clearInterval(feedInterval) 
        var buttonFlash = document.getElementById('btn-feed')
        buttonFlash.classList.remove("blink")
        feedCount = 0
        feedInterval = setInterval(function() {
            //increasing the count
            feedCount++
            feedEl.textContent ='Feed: ' + feedCount + '/10'

        //dead pusheen
        if(feedCount > 8) {
            //if feedCount is greater than 6, add blink class to button
            buttonFlash.classList.add("blink")
            //add button flash class
        }        

        //dead pusheen
        if(feedCount === 10) {
            var image = document.getElementById('pusheen')
            // if (image.src.match("cat_sad2.gif")) {
            image.src = "cat_sleepy2.gif";
            clearInterval(feedInterval) 
            feedCount = 0
        }
        }, 1000)  
      bar.classList.remove("round-time-bar");
      bar.offsetWidth;
      bar.classList.add("round-time-bar");
    });
}

function setupPlayButton () {
    bars2.forEach((bar) => {
        clearInterval(playInterval)
        var buttonFlash = document.getElementById('btn-play')
        buttonFlash.classList.remove("blink")
        playCount = 0
        playInterval = setInterval(function() {
            playCount++
            playEl.textContent ='Play: ' + playCount + '/10'
    
            if(playCount > 8) {
                buttonFlash.classList.add("blink")
            }        
            if(playCount === 10) {
                var image = document.getElementById('pusheen')
                image.src = "cat_sleepy2.gif";
                clearInterval(playInterval) 
                playCount = 0
            }
    
        }, 1000)  
      bar.classList.remove("round-time-bar2");
      bar.offsetWidth;
      bar.classList.add("round-time-bar2");
    });
}

function setupSleepButton() {
bars3.forEach((bar) => {
    var buttonFlash = document.getElementById('btn-lights')
    buttonFlash.classList.remove("blink")

    clearInterval(sleepInterval) 
        sleepCount = 0
        sleepInterval = setInterval(function() {
        sleepCount++
        lightsEl.textContent ='Turn Off Lights: ' + sleepCount + '/10'
        
        if(sleepCount > 8) {
            buttonFlash.classList.add("blink")
        }        
        if(sleepCount === 10) {
            var image = document.getElementById('pusheen')
                image.src = "cat_sleepy2.gif";
                clearInterval(sleepInterval) 
                sleepCount = 0
        }
    }, 2000)    
    
  bar.classList.remove("round-time-bar3");
  bar.offsetWidth;
  bar.classList.add("round-time-bar3");
});
}

function handleFeedClickPic() {
    var image = document.getElementById('pusheen')
        image.src = "cat_food2.gif";
}

function handlePlayClickPic() {
    var image = document.getElementById('pusheen')
//    if (image.src.match("cat_sad2.gif")) {
        image.src = "cat_paint.gif";
    // }
    // else {
    //     image.src = "cat_dance.gif";
    // }
}

function handleLightsClickPic() {
    var image = document.getElementById('pusheen')
        image.src = "cat_sleep.gif";
}

///////////////////////////////////////////////////////
///////EVENT LISTENERS
startEl.addEventListener("click", ageCounter)
lightsEl.addEventListener('click', handleLightsClickPic)
playEl.addEventListener('click', handlePlayClickPic)
feedEl.addEventListener('click', handleFeedClickPic)

startEl.addEventListener("click", () => {
    setupFeedButton()
    setupPlayButton()
    setupSleepButton()
  });

feedEl.addEventListener("click", () => {
    setupFeedButton()
  });

playEl.addEventListener("click", () => {
    setupPlayButton()
});

lightsEl.addEventListener("click", () => {
    setupSleepButton()
});