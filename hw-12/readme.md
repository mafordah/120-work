Miya Fordah

['Object Interaction'](https://mafordah.github.io/120-work/hw-12/)

# Summary

This week I learn object how to make object from the same and different classes interact with each other. This is done using conditional statements, variables, and for loops.

# My Steps

My first idea for this project was to have a narwhal shooting a ball of light from it's horn, kind of like my first for loop project. I couldn't, however figure out how to get the ball to move when the mouse was clicked and then independently from that point on. The ball still moved with mouse. I then changed the project to what it is now and realized my problem was due to the moving with the mouse not being pushed and popped. At this point I was too far into my second idea to try and start over again.

For the project in its current state, I used to `for` loops and an array to infinitely run bubbles that float up the screen. Then I drew a narwhal using primitive shapes. It is called in draw loop to follow the mouse. As you move the mouse, the distance between the bubble's location and the horn on the narwhal is measured using `dist(this.x, this.y, mouseX + 90, mouseY)`. If that distance is greater than the bubble's radius, it "pops" or disappears using `bubbles.splice(i, 1)`. Smaller bubbles move faster than larger bubbles to make the sketch a little more dynamic.

I would have liked to add more of an animation to the "pop" but I don't think I could've gotten it to something I liked, or at the very least figured it out, in time.
