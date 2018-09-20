Miya Fordah

['Self Portrait'](https://mafordah.github.io/120-work/hw-4/)

# Summary

This week I dived further into the world of drawing in p5.js. I learned more functions for primitive geometric shapes like:
```
rect()
arc()
line()
quad()
triangle()
```

From there, I got a better idea of how the grid in a sketch works with the `translate()` function. This function moves the point (0,0) on the canvas to whichever (x,y) coordinates are specified.

I also refreshed my memory on color theory for an RGB color system and learned how to input RGB and hexadecimal values into a primitive shape function.
```
quad(r,g,b)
quad(#ffffff)
```

Along with this, I also learned how to implement transparency through the addition of an alpha value of 0-255 or 0-1 when using the RGB function.
```
quad(r,g,b,'alpha')
quad('rgb(255,255,255,0.5)')
```

Lastly, I learned about the order of operations of code and how to ensure an order through the use of the `push()` and `pop()` functions.

# My Steps

This is the first real drawing we have gotten to do in p5.js. I started this project by mapping out what I wanted to do and deciding which shapes to use to accomplish my portrait. I then laid out the bare bones of the code I was about to write:

* Adding the setup function
* Creating a canvas
* Choosing a background color
* Adding the draw function
* Translating (0,0) to the center of the canvas
* Commenting where the code for each part of my sketch (head, torso, etc.) should go

I started my code with the head because I had the best idea of how to code it. I knew the code for the head and face would have to go at the very bottom of my code due to order of operations, and I had it mapped out as such. I added an ellipse centered in the upper third of the canvas. I then sporadically added different sized ellipses (circles) around the face for my hair. I then added facial features mostly using the `arc()` function with a few lines `line()` and rectangles `rect()` for my glasses and nose.

After the face I started working on the torso which I knew had to be above my code for the head. The torso consists of two quadrilaterals and one ellipse colored blue with no stroke. I had a similar process for the arms and hands, which are reflections of each other, and the legs and feet. I added ellipse to most of the ends of the quadrilaterals to maintain the rounded aesthetic I achieved in the face. I couldn't find a way to just round the corners of quadrilaterals so I used ellipses as a quick fix.

Every section of my drawing is separated out using the push and pop functions so I could easily tell where things needed to go and where areas began and ended if I needed to move them. The very last part of my code that I edited was translating the canvas up 40 more pixels so to better fit in the feet I created.

# Problems

I didn't face any major problems that I wasn't about to fix on my own this project. However, I have learned that I should probably start my code with the part of the drawing that is the furthest below everything rather that the top most as I did this project. I had my code organized well enough to do it this way, but in hindsight, it would have saved me some trouble if I had started from the back-most objects. I would have done a lot less moving of things around.

# Further Discussion

From the amount of time it took me to do such a simple sketch in code, I'm starting to have a lot of respect for the artwork we were shown in the beginning of this class. I can't even comprehend putting anything other than shapes and lines on the screen right now. Though I am pretty excited about what I've been able to do so far, I fell so far behind where so many creative coders are in the world today.

Along the lines of creative coders of today, I'm curious where everyone one else went with this project. Since the repositories are public, I'm going to venture through them to see what some other people have done.

# Helping Others

This week someone had a question about an error message that kept occurring when they tried to push their files. I stated that there was a file over 100mb which was GitHub's limit. I sent the person the link to GitHub's explanation and asked if they had any files over this limit. I imagine they have a file that isn't meant to be there considering 100mb is quite a bit of space for the type of files we're working with now.

###### This week's coding lesson has given me way more tools to create in p5.js than I had before. I am ready to see what else we can do.
