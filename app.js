
///// COUNTERS
const button = document.querySelector("#restart-button");
const bars = document.querySelectorAll(".round-time-bar");
let feedCount = 0
let feedInterval = null

const button2 = document.querySelector("#restart-button2");
const bars2 = document.querySelectorAll(".round-time-bar2");
let playCount = 0
let playInterval = null

const button3 = document.querySelector("#restart-button3");
const bars3 = document.querySelectorAll(".round-time-bar3");
let sleepCount = 0
let sleepInterval = null

button.addEventListener("click", () => {
  bars.forEach((bar) => {
    bar.classList.remove("round-time-bar");
    bar.offsetWidth;
    bar.classList.add("round-time-bar");
  });
});

///// CHANGE IMAGES BY BUTTON CLICK
const feedEl = document.getElementById('btn-feed')
const playEl = document.getElementById('btn-play') 
const lightsEl = document.getElementById('btn-lights') 
const startEl = document.getElementById('btn-start')

/////// SETS TIMERS ON START BUTTON


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

            console.log('Feed Count:' + feedCount)

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

        console.log('Play Count:' + playCount)

        if(playCount > 13) {
            //if feedCount is greater than 6, add blink class to button
            buttonFlash.classList.add("blink")
            //add button flash class
        }        

        //dead pusheen
        if(playCount === 15) {
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

        console.log('Sleep Count:' + sleepCount)
        
        if(sleepCount > 18) {
            //if feedCount is greater than 6, add blink class to button
            buttonFlash.classList.add("blink")
            //add button flash class
        }        

        //dead pusheen
        if(sleepCount === 20) {
            var image = document.getElementById('pusheen')
            // if (image.src.match("cat_sad2.gif")) {
                image.src = "cat_sleepy2.gif";
                clearInterval(sleepInterval) 
                sleepCount = 0
        }
    }, 1000)    
    
  bar.classList.remove("round-time-bar3");
  bar.offsetWidth;
  bar.classList.add("round-time-bar3");
});
});

