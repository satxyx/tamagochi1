# tamagochi1
WIREFRAME:
https://www.figma.com/file/RfzPrs9avJSzPMguVpgizD/Pusheen-Game?node-id=77%3A432


///////////////////
AGE 
(increases by 1 every minute)


///////////////////
HEALTH BARS

HUNGER 
[     0-10     ]
//automatically increases by 1 every 3 seconds
//1-3sec = green
//4-6sec = yellow
//7-10sec = red

//at 6/10 -> cathunger.gif (3 sec)  - FEED button flashes (will flash until clicked, multiple buttons can be flashing)

BOREDOM
[     0-10     ]
//automatically increases by 1 every 3 seconds
//1-3sec = green
//4-6sec = yellow
//7-10sec = red

at 6/10 -> catbored.gif (3 sec) - PLAY button flashes (will flash until clicked, multiple buttons can be flashing)

SLEEPINESS
[     0-10     ]
//automatically increases by 1 every 3 seconds
//1-3sec = green
//4-6sec = yellow
//7-10sec = red

//at 6/10 -> catsleepy.gif (3 sec) - TURN OFF LIGHTS button flashes (will flash until clicked, multiple buttons can be flashing)

///////////////////
BUTTONS

FEED					
//click -> hunger bar goes down to 0 -> catfood.gif (3 sec) -> catnormal.gif

PLAY
//click -> boredom bar goes down to 0 -> catplay.gif (3 sec) -> catnormal.gif

TURN OFF LIGHTS
//click -> sleepiness bar goes down to 0 -> catsleep.gif (3 sec) -> catnormal.gif