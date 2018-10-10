Miya Fordah

[Live Sketch Link](https://mafordah.github.io/120-work/hw-7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

<!--
--This is a Comment Block--

Please describe what the original code is doing.

Why is it working the way it is?
What does each line do?
How can you make the ball change direction?

-->
The code is working the way it is due to the defined variables, redefining them, and the conditional statements.

* Lines 3-10 define the variable object 'ball' whose variables are manipulated throughout the code.
* Lines 13-16 setup up the p5.js sketch, create a canvas, and set a white background.
* Line 19 creates the looping draw function which allows the code to repeat itself and 'draw'.
* Line 21 changes the x value of the ball `ball.x` over time based on the x direction of the ball `ball.delta_x` and the angle of the ball `ball.scale_x`.
* Line 22 changes the y value of the ball `ball.y` over time based on the y direction of the ball `ball.delta_y` and the angle of the ball `ball.scale_y`.
* Lines 25-31 create the conditional statement that if the x value of the ball is greater than the width of the canvas or less than 0, it should go the opposite x direction (-x).
* Lines 29-31 create the conditional statement that if the y value of the ball is greater than the height of the canvas or less than 0, it should go the opposite y direction (-y).
* Line 33 changes the ball's fill to white.
* Line 34 creates the ellipse.
* Line 35 ends the draw function.
* Line 38 creates a function base on whether or not the mouse is being pressed.
* Line 39 changes the angle of the ball's x value based on the x location of the mouse in the canvas when the mouse is pressed.
* Line 40 changes the angle of the ball's y value based on the y location of the mouse in the canvas when the mouse is pressed.
* Line 41 ends the mousePressed function.

You can make the ball change direction by clicking the mouse or waiting for the ball to reach the edges of the canvas. If you wanted the ball to change direction more drastically you could alter the first to conditional statements to include when the mouse is pressed or increase the angle in the mousePressed function.

## How did you alter the sketch?

I altered the sketch by first changing the canvas size to the window size. I then removed the stroke on the ball and worked on changing the color. I wanted to have the color change overtime again, but I wanted more than just black and white. To do this I used the modulo function, but this time I used all three color channels. I then mapped these variables to 0-255 so it could be plugged into a color function. I used different numbers for each modulo function to create more variation in the colors. I then used several conditional statements so the colors changed in more of a gradient rather than abrupt changes. I was going to map the size in the same way but I didn't like the way it looked aesthetically when I tried it.

<!--
Please describe how and why you changed the sketch?
-->
