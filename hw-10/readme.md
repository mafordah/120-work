Miya Fordah

['Functions'](https://mafordah.github.io/120-work/hw-10/)

# Summary

This week I created a sketch using multiple functions and an array. The sketch is of an angler fish with a smaller fish that follows it around. The angler fish is largely polygonal with the exception of it's eyes, the light, and the angler itself.

# My Steps

I drew the angler fish and called it forth with an alternate function. I then made it follow the mouse with `translate(mouseX, mouseY)`. From there I made the mouth rotate with the `mouseX`. The fish follows it with some lag using another function that
is called before the `angleFish()` function. To do this I used a few equations and defined variables `x` and `y` so it moves exponentially toward the angler.

# Problems

I had a tough time implementing the array. I have almost completely finished the code before I found a way to add it in. I ended up using it to create variables for teeth on the angler fish that moved with the mouth and were evenly spaced apart.

# Further Discussion

I had and idea to create more fish that followed the angler at a slightly different rate. I couldn't find a way to do this without completely calling a new function. I settled on the one for now but I might consider editing it later. The other fish I tried to add move at the same speed next to the fish I had already created, and it was not exactly what I was looking for. I didn't go to the repo because it wasn't necessary to the completion of the project. I just thought it might be cool.

# EDIT
The above readme refers to the code when I submitted it for the week 10 grading period. I have since updated it. The following refers to the current version.

I added more detail to my fish so it looks more like a fish and less like an ellipse with a triangle attached to it. I then added a conditional statement that rotates the fish based on the mouse's location so it moves more fluidly like a fish. Everything else works the same as above.
