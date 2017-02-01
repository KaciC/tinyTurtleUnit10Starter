TinyTurtle.apply(window);
stamp();

function triangle(x,y){
    right(y-45);
    forward(x);
    right(y);
    forward(x); 
    right(y+45); 
    forward(x+40);
     }
     function square(x,y){
    forward(x);
    right(y);
    forward(x); 
    right(y); 
    forward(x);
     right(y); 
    forward(x);
     }
function shape(shapeName){
    if (shapeName==="triangle"){
        triangle(30,90);
    }
    else if(shapeName==="square"){
        square(30,90);
    }

}

// Type your function call below

shape("triangle");
shape("square");