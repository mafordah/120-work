Miya Fordah

# Final Project

I started this project with the basic idea of the large and intimidating female angler fish. I started the project trying create backgrounds and set up the bare bones without too much detail. I made some backgrounds and foregrounds, but I immediately ran into a problem. No mater what I did, I couldn't get the images to display. I tried pulling it up in Google Chrome and it wouldn't stop loading. I googled it, and it turns out Chrome won't display images from the desktop so I had to continue the rest of the project testing it in Microsoft Edge. I ended up scrapping most of the images I made anyway, but I'm glad I figured it out before I tried making sprites.

### Starting the Angler
I knew I wanted to create at least one sprite, so I set up a class with the format provided to us in the last lesson. This meant I had to create an animation before I got anywhere. I drew a six frame animation using Photoshop's frame by frame editor so I could see what I was doing. Then once I liked it, I exported each frame and put them into one image to use as a sprite sheet. I got the sprite working after some trial and error with determining the image size and added some variables to get it to move with the mouse but with some delay so it felt like it was moving through the water. I called the class in the draw function and started to work on the other elements.

### Adding Bubbles
I knew I wanted some motion in the background, so I started with making bubbles. I used some of the basic code from my week eleven project to get them working. I did however fix one very detrimental problem of my original code. The bubbles now splice as soon as they leave the screen so it doesn't slow the whole project down over time. I also changed the way the moved so it looks like the angler is swimming. They're were still too many of them on the screen so I added a timer to them in the setup so the would spawn less. I then copied the code and made smaller bubbles with the same class that appeared in the background instead of the foreground to create depth. After the bubbles, I made an attempt at a menu.

### The First Menu Attempt
My first menu was created by putting the entire draw function into a different function and then calling it in the draw function if `screen = 1`. When `screen = 2` the menu, or at this point a pink screen with "click to start", would appear. When `screen = 3` a similar game over screen would appear. I got the idea for this code from a Processing tutorial by ['Oguz Gelal'](https://www.toptal.com/game/ultimate-guide-to-processing-simple-game). Though it worked, with the exception of the game over screen because there wasn't a way to end the game yet, there was a problem. Because the bubble's timers are in the setup function, they would be appearing always but wouldn't move (or splice) until the game screen was running. So if you waited to long to start, the game would be overloaded with bubbles. So I commented out this idea for a while, but kept the game in the `gameScreen` function. Then I decided to work on the actual game.

### The Fish (and Eating Them)
I made the fish sprite the same way I made the angler sprite. I did have to adjust the size when I called the image because the fish were too big compared to the angler.

The Fish class was like the son of the Angler and Bubble classes. I used similar variables to the angler fish to construct it and similar variables and loops to the bubbles to move it with some changes to account for direction and speed. I also added another timer function for the fish so they wouldn't all come at once.

Once the fish were moving, I needed the angler to eat them. I created another method to determined whether or not the fish were within the right sized space around the angler to be eaten. This required me to create a global variable for the angler's movement. Though I could've used the mouse movement, it was often off from where the angler was because of the delayed motion I gave it earlier on. It worked but it didn't look quite right all the time, especially because the user can't tell where the mouse is. Once I had global `angX` and `angY` variables it looked more normal.

Then I had to make the angler react to eating the fish.

### Finishing the Angler
I made a second sprite sheet for the angler with almost the same animation with an added biting/chewing animation. I create a conditional statement that if the mouse was pressed and `screen = 1` then it would call the eating sprite, and if not the idle image would run. The animations have the same number of frames (thought the eating sprite has eight frames, I am only using six) and are mostly seamless when they switch. I officially had some user interactivity, but the game still needed stakes.

### The Health Bar
I set aside way more time than I needed to put together this part of the game. I thought it was going to be more complicated than it was. All I needed was a global health variable, a hunger variable, a constraint, a condition, and a display. The `health` starts at 200 and slowly decreases by 0.5. The display is a white rounded rectangle with a fixed length with a pink rounded rectangle with a width that equals the constrained health. The health can equal more than 200 but still looks the same. When `health = 0`, `screen = 3` which was where I planned to make a game over screen. Once the health bar moved I had to make it go back up when the fish are eaten.

All I had to do was add another conditional statement where I called the fish. Of course I didn't do that at first. I first put `health += 20` in the statement that already spliced the fish. This ended up adding every time a fish was eaten, but also every time it left the screen. Once I figured that out it was an easy fix. The only thing structurally left to do was to make menu screens.

### Making the Menus Work
So at this point I knew I couldn't have another function running as a display without also running the bubbles and now the fish that worked in the same way. So I figured I should just have the bubbles and fish run in the menus. Then I thought that might look a little weird on there own so I ended up just having all the game code in a total of four functions:

* `startScreen`
* `gameScreen`
* `gameOverScreen`
* `pauseScreen`

The only difference being that `startScreen`, `gameOverScreen` and `pauseScreen` all have the angler move method, the fish eaten method, and the health disabled in some way. They also have a small yellow circle as the mouse, repeating the style of the angler on the angler fish. Only the `pauseScreen` and `gameScreen` display the health, but the `pauseScreen` disables the health from going up or down.

From there I added menus that move with the screen being resized and text and buttons that fit contextually with each menu type. Once I had each menu looking the way I wanted, I changed what causes each one to appear.

* `startScreen` runs when the game is pulled up or when the game is quit through either the `pauseScreen` or `gameOverScreen`
* `gameScreen` runs after the game is started on a click, or after you chose to continue or play again from the `pauseScreen` and `gameOverScreen` respectively.
* `gameOverScreen` runs when the health equals zero when `gameScreen` is running.
* `pauseScreen` runs anytime the 'p' key is pressed and `gameScreen` is running.

#### At this point I have a very simple game!!

### Score Counter
I decided to add a score counter which is just a display of a score variable that counts up each time a fish is eaten and refreshes each time the game starts. The addition of this changed what happens when you choose to end the game from pause. It now goes to the game over screen so that the score is displayed before the game ends.

The score counter also makes the fish go faster. At 5, 10, 25, 50, 100, 250 and 500, the speed increases by one to three pixels.

### Music
I added music and sound effects. The game music is called in the setup and the eating sound effect is called right as a fish is  eaten.

#### Game Music
"Ambler" Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/

#### Sound Effects
"Water Drop Low" Mike Koenig (soundbible.com)
Licensed under Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/

"Water Splash Sound" Mike Koenig (soundbible.com)
Licensed under Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/

"Large Bubble" snottyboy (soundbible.com)
Licensed under Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/
