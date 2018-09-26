Miya Fordah

['Animation'](https://mafordah.github.io/120-work/hw-5/)

# Summary

This week I learned some basic animation in p5.js. I learned how to create a sort of interactive drawing with moving parts through the use of the `rotate();` and `let` functions with some added simple math. I also grasped how the `function draw(){}` loops an animation and how frame rate acts in p5. I also viewed information on readable code to apply the ways I've already tried to aid in readability.

# My Steps

For this project, my original idea was complete different from what I ended up with. I started out wanting to create a sunrise/sunset model where the sun moved up and down and the color of the sky changed with up and down movement of the mouse. Then I thought I could create a more cartoon style movement of the sun buy having it rotate with the moon as the sky changed color. I set up the sun and move to rotate with the mouse using the `rotate( mousex );` function. However, my idea quickly went out the window when I couldn't for the life of me how to have the color of the sky change at the same rate of the mouse movement as the sun and moon. I tried using the modulo input to limit the color change and I even tried to use a rotating gradient but I couldn't figure out how the code worked to explain well enough for class.

I finally gave up and went with a second idea that came to me while I was watching the sun and moon I had already created move. I created another drawing of a dolphin using the circle I had made for the sun with some added shapes. I then copied and reflected it so two dolphins spun on the same pivot point. I then added a sun and ocean using the `ellipse();` and `rect();` functions.

For the non-interactive motion, I created a second rectangle for the ocean that is in front of everything on the canvas. Running on the same x coordinate is a set of five triangles that act as waves for the ocean. To create them I:

* created a triangle with x coordinates base on a variable I defined at the top of the code
* redefine the variable with in the push/pop section as `'var' = 'var' + 1`
* duplicated the triangle four times
* changed their heights
* changed the number affecting their speed
* changed the number location

Lastly I created an island to fill the empty space with basic shapes.

# Problems

My main problem occurred in my original idea when I couldn't figure out how to change color over time. I didn't go to the repo because I ended up scratching the idea.

# Further Discussion

I am very curious how color plays into animations other than with a modulo as used in on of the example codes from this week. I would also like to know how to loop individual areas of code so that, in my case, the waves of my drawing could loop back around without refreshing the page.

# Helping Others

There weren't any unresolved questions in the repo when I got to it. I did read through the problems everybody had just incase I ran across them myself. The majority of the questions people ask are about things I never even thought of or were easy enough that they were resolved really quickly.

###### I have been able to grasp more about animation in p5.js in the last week and can't wait to learn more so that I can furht execute some of my ideas.
