Miya Fordah

['Object Oriented Programing'](https://mafordah.github.io/120-work/hw-11/)

# Summary

This week I learn object oriented programming and the uses and terminology surrounding it. I created a sketch of different colored lines that bounce around the canvas.

# My Steps

I used to `for` loops and an array to run multiple lines. The line class was created using methods:

  * `constructor(){}`
  * `frame(){}`
  * `move(){}`
  * `edgeCheck(){}`
  * `display(){}`

  `constructor(){}` defined the object variables. `frame(){}` called the methods in `draw(){}`. `move(){}` redefined the x and y variables for the line to move. `edgeCheck(){}` created conditional statements that prevent the lines from going off the page. `display(){}` draws the lines.



# Problems

I had an issue with conditional statement for the edge check. At first I used statements similar to the one used in the ball example this week which worked for the x values but only sometimes worked for the y values. I couldn't figure out why so I looked at the stomping dude example which used the `abs()` function which solved my problem.
