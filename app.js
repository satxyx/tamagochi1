
///// COUNTERS
const button = document.querySelector("#restart-button").style.visibility='hidden'
const bars = document.querySelectorAll(".round-time-bar")
let feedCount = 0
let feedInterval = null

const bars2 = document.querySelectorAll(".round-time-bar2")
let playCount = 0
let playInterval = null

const bars3 = document.querySelectorAll(".round-time-bar3");
let sleepCount = 0
let sleepInterval = null


///// CHANGE IMAGES BY BUTTON CLICK
const feedEl = document.getElementById('btn-feed')
const playEl = document.getElementById('btn-play') 
const lightsEl = document.getElementById('btn-lights') 
const startEl = document.getElementById('btn-start')
const ageEl = document.getElementById('h2')

// startEl.addEventListener("click", unhideBars)

// function unhideBars () {

// }

//////////////// ADD AGE
let ageCount = 0
let ageInterval = null


function ageCounter () {
    ageInterval = setInterval(function() {
        ageCount++
        ageEl.textContent = 'Keep your Pusheen alive! Pusheen is: ' + ageCount + ' years old'

    /// need to add if feed/sleep/play count === 10, age is 0 & add textContent "pusheen is dead you IDIOT!"

    }, 1000)

}

startEl.addEventListener("click", ageCounter)

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// SETS TIMERS ON START BUTTON
//////////// NEED TO REFACTOR THIS CODE BECAUSE IT IS LONG, REPETETIVE AND PROBABLY UNNECESSARY

  ////////////// STARTS FEED FUNCTION ON START CLICK
  startEl.addEventListener("click", () => {
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

  });

    ////////////// STARTS PLAY FUNCTION ON START CLICK
    startEl.addEventListener("click", () => {
        bars2.forEach((bar) => {
            clearInterval(playInterval)
            
            var buttonFlash = document.getElementById('btn-play')
            buttonFlash.classList.remove("blink")
        
            playCount = 0
            playInterval = setInterval(function() {
                //increasing the count
                playCount++
        
                playEl.textContent ='Play: ' + playCount + '/10'
        
                if(playCount > 8) {
                    //if feedCount is greater than 6, add blink class to button
                    buttonFlash.classList.add("blink")
                    //add button flash class
                }        
        
                //dead pusheen
                if(playCount === 10) {
                    var image = document.getElementById('pusheen')
                    // if (image.src.match("cat_sad2.gif")) {
                    image.src = "cat_sleepy2.gif";
                    clearInterval(playInterval) 
                    playCount = 0
                }
        
            }, 1000)  
          bar.classList.remove("round-time-bar2");
          bar.offsetWidth;
          bar.classList.add("round-time-bar2");
        });
        });

        ////////////// STARTS SLEEP FUNCTION ON START CLICK
        startEl.addEventListener("click", () => {
            bars3.forEach((bar) => {
                //defines and clears button flash
                var buttonFlash = document.getElementById('btn-lights')
                buttonFlash.classList.remove("blink")
            
                //defines and clears interval
                clearInterval(sleepInterval) 
                sleepCount = 0
                sleepInterval = setInterval(function() {
                    //increasing the count
                    sleepCount++
            
                    lightsEl.textContent ='Turn Off Lights: ' + sleepCount + '/10'
                    
                    if(sleepCount > 8) {
                        //if feedCount is greater than 6, add blink class to button
                        buttonFlash.classList.add("blink")
                        //add button flash class
                    }        
            
                    //dead pusheen
                    if(sleepCount === 10) {
                        var image = document.getElementById('pusheen')
                        // if (image.src.match("cat_sad2.gif")) {
                            image.src = "cat_sleepy2.gif";
                            clearInterval(sleepInterval) 
                            sleepCount = 0
                    }
                }, 2000)    
                
              bar.classList.remove("round-time-bar3");
              bar.offsetWidth;
              bar.classList.add("round-time-bar3");
            });
            });

/////////////////////////////////////////////////////////////////////////////////////////////////////////

////// CHANGES FOOD GIF
function handleFeedClickPic() {
        console.log('Feed Button Click!')
        var image = document.getElementById('pusheen')
        // if (image.src.match("cat_sad2.gif")) {
            image.src = "cat_food2.gif";
        // }
        // else {
        //     image.src = "cat_dance.gif";
        
    }




feedEl.addEventListener('click', handleFeedClickPic)


///// RESETS FOOD BAR & INTERVAL ON FEED BUTTON CLICK
feedEl.addEventListener("click", () => {
    bars.forEach((bar) => {
        clearInterval(feedInterval) 

        var buttonFlash = document.getElementById('btn-feed')
        buttonFlash.classList.remove("blink")

        feedCount = 0
        feedInterval = setInterval(function() {
            //increasing the count
            feedCount++

            // console.log('Feed Count:' + feedCount)
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

  });




////// CHANGES PLAY GIF
function handlePlayClickPic() {
    console.log('Play Button Click!')
    var image = document.getElementById('pusheen')
//    if (image.src.match("cat_sad2.gif")) {
        image.src = "cat_paint.gif";
    // }
    // else {
    //     image.src = "cat_dance.gif";
    // }
}

playEl.addEventListener('click', handlePlayClickPic)

///// RESETS PLAY BAR ON PLAY BUTTON CLICK
playEl.addEventListener("click", () => {
bars2.forEach((bar) => {
    clearInterval(playInterval)
    
    var buttonFlash = document.getElementById('btn-play')
    buttonFlash.classList.remove("blink")

    playCount = 0
    playInterval = setInterval(function() {
        //increasing the count
        playCount++

        // console.log('Play Count:' + playCount)
        playEl.textContent ='Play: ' + playCount + '/10'

        if(playCount > 8) {
            //if feedCount is greater than 6, add blink class to button
            buttonFlash.classList.add("blink")
            //add button flash class
        }        

        //dead pusheen
        if(playCount === 10) {
            var image = document.getElementById('pusheen')
            // if (image.src.match("cat_sad2.gif")) {
            image.src = "cat_sleepy2.gif";
            clearInterval(playInterval) 
            playCount = 0
        }

    }, 1000)  
  bar.classList.remove("round-time-bar2");
  bar.offsetWidth;
  bar.classList.add("round-time-bar2");
});
});


////// CHANGES SLEEP GIF
  function handleLightsClickPic() {
    console.log('Turn Off Lights Button Click!')
    var image = document.getElementById('pusheen')
    // if (image.src.match("cat_sad2.gif")) {
        image.src = "cat_sleep.gif";
    // }
    // else {
    //     image.src = "cat_dance.gif";
    // }
}

lightsEl.addEventListener('click', handleLightsClickPic)

///// RESETS SLEEP BAR ON FEED BUTTON CLICK
lightsEl.addEventListener("click", () => {
bars3.forEach((bar) => {
    //defines and clears button flash
    var buttonFlash = document.getElementById('btn-lights')
    buttonFlash.classList.remove("blink")

    //defines and clears interval
    clearInterval(sleepInterval) 
    sleepCount = 0
    sleepInterval = setInterval(function() {
        //increasing the count
        sleepCount++

        // console.log('Sleep Count:' + sleepCount)
        lightsEl.textContent ='Turn Off Lights: ' + sleepCount + '/10'
        
        if(sleepCount > 8) {
            //if feedCount is greater than 6, add blink class to button
            buttonFlash.classList.add("blink")
            //add button flash class
        }        

        //dead pusheen
        if(sleepCount === 10) {
            var image = document.getElementById('pusheen')
            // if (image.src.match("cat_sad2.gif")) {
                image.src = "cat_sleepy2.gif";
                clearInterval(sleepInterval) 
                sleepCount = 0
        }
    }, 2000)    
    
  bar.classList.remove("round-time-bar3");
  bar.offsetWidth;
  bar.classList.add("round-time-bar3");
});
});


