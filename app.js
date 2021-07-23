
///// DOM SELECTORS & GLOBAL VARIABLES
const button = document.querySelector("#restart-button").style.visibility='hidden'
const bars = document.querySelectorAll(".feed-bar")
const bars2 = document.querySelectorAll(".play-bar")
const bars3 = document.querySelectorAll(".sleep-bar");
const feedEl = document.getElementById('btn-feed')
const playEl = document.getElementById('btn-play') 
const lightsEl = document.getElementById('btn-lights') 
const startEl = document.getElementById('btn-start')
const ageEl = document.getElementById('age')
const alertEl = document.getElementById('alert')



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
    document.getElementById('btn-play').style.visibility = 'visible';
    document.getElementById('btn-feed').style.visibility = 'visible';
    document.getElementById('btn-lights').style.visibility = 'visible';
}

function hideBars() {
    document.getElementById('hide').style.visibility = 'hidden';
    document.getElementById('hide2').style.visibility = 'hidden';
    document.getElementById('hide3').style.visibility = 'hidden';
    document.getElementById('btn-play').style.visibility = 'hidden';
    document.getElementById('btn-feed').style.visibility = 'hidden';
    document.getElementById('btn-lights').style.visibility = 'hidden';
}

function ageCounter () {
    ageInterval = setInterval(function() {
        myCat.ageCount++
        ageCount++
        ageEl.textContent = + ageCount + ' years old'
    /// need to add if feed/sleep/play count === 10, age is 0 & add textContent "pusheen is dead you IDIOT!"
    }, 1000)
}

function updateDOM() {

}

function setupFeedButton () {
    bars.forEach((bar) => {
        alertEl.textContent = ' '
        clearInterval(feedInterval) 
        var buttonFlash = document.getElementById('btn-feed')
        buttonFlash.classList.remove("blink")
        feedCount = 0
        feedInterval = setInterval(function() {
            //increasing the count
            feedCount++
            // feedEl.textContent ='Feed: ' + feedCount + '/10'

        //dead pusheen
        if(feedCount > 10) {
            //if feedCount is greater than 6, add blink class to button
            buttonFlash.classList.add("blink")
            alertEl.textContent = 'please FEED MEEEEEE'

            //add button flash class
        }        

        //dead pusheen
        if(feedCount === 15) {
            var image = document.getElementById('pusheen')
            // if (image.src.match("cat_sad2.gif")) {
            image.src = "cat_sleepy2.gif";
            clearInterval(feedInterval) 
            clearInterval(sleepInterval) 
            clearInterval(playInterval) 
            clearInterval(ageInterval) 

            feedCount, ageCount, playCount, sleepCount = 0
            ageEl.textContent = 'dead :('
            alertEl.textContent = 'you killed me, you bastards'
            hideBars()

        }
        }, 1000)  
      bar.classList.remove("feed-bar");
      bar.offsetWidth;
      bar.classList.add("feed-bar");
    });
}

function setupPlayButton () {
    bars2.forEach((bar) => {
        alertEl.textContent = ' '
        clearInterval(playInterval)
        var buttonFlash = document.getElementById('btn-play')
        buttonFlash.classList.remove("blink")
        playCount = 0
        playInterval = setInterval(function() {
            playCount++
            // playEl.textContent ='Play: ' + playCount + '/10'
    
            if(playCount > 15) {
                buttonFlash.classList.add("blink")
                alertEl.textContent = 'PLAY WITH MEEEE'

            }        
            if(playCount === 20) {
                var image = document.getElementById('pusheen')
                image.src = "cat_sleepy2.gif";
                clearInterval(playInterval) 
                playCount = 0
                clearInterval(ageInterval) 
                feedCount = 0
                ageCount = 0
                ageEl.textContent = 'dead :('
                alertEl.textContent = 'you killed me, you bastards'
                hideBars()
            }
    
        }, 1000)  
      bar.classList.remove("play-bar");
      bar.offsetWidth;
      bar.classList.add("play-bar");
    });
}

function setupSleepButton() {
bars3.forEach((bar) => {
    alertEl.textContent = ' '
    var buttonFlash = document.getElementById('btn-lights')
    buttonFlash.classList.remove("blink")

    clearInterval(sleepInterval) 
        sleepCount = 0
        sleepInterval = setInterval(function() {
        sleepCount++
        // lightsEl.textContent ='Turn Off Lights: ' + sleepCount + '/10'
        
        if(sleepCount > 25) {
            buttonFlash.classList.add("blink")
            alertEl.textContent = 'IM SLEEPY & its bright :('

        }        
        if(sleepCount === 30) {
            var image = document.getElementById('pusheen')
                image.src = "cat_sleepy2.gif";
                clearInterval(sleepInterval) 
                sleepCount = 0
                clearInterval(ageInterval) 
                feedCount = 0
                ageCount = 0
                ageEl.textContent = 'dead :('
                alertEl.textContent = 'you killed me, you bastards'
                hideBars()
        }
    }, 1000)    
    
  bar.classList.remove("sleep-bar");
  bar.offsetWidth;
  bar.classList.add("sleep-bar");
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
    alertEl.textContent = ' '

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