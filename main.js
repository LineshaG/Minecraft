var Canvas = new fabric.Canvas("myCanvas");
var player_x = 10;
var player_y = 10;
var player_image ="";
var blockobject_image ="";
var block_width = 30;
var block_height = 30;

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) 
    {
        player_image=Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);

        player_image.set({
            top:player_y,
            left:player_x
        });
        Canvas.add(player_image);

    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) 
    {
        blockobject_image=Img;
        blockobject_image.scaleToWidth(block_width);
        blockobject_image.scaleToHeight(block_height);

        blockobject_image.set({
            top:player_y,
            left:player_x
        });
        Canvas.add(blockobject_image);

    });
}

window.addEventListener("keydown", my_KeyDown);
  
function my_KeyDown(e)
{
    KeyPressed=e.keyCode;
    if (e.shiftKey == true && KeyPressed == "80")
    {
        block_width = block_width+10;
        block_height = block_height+10;
        document.getElementById("block_width").innerHTML = block_width;
        document.getElementById("block_height").innerHTML = block_height;
    }

    if (e.shiftKey == true && KeyPressed == "77")
    {
        block_width = block_width-10;
        block_height = block_height-10;
        document.getElementById("block_width").innerHTML = block_width;
        document.getElementById("block_height").innerHTML = block_height;
    }
    
    if (KeyPressed == 84)
    {
        console.log("t");
        new_image("trunk.jpg");
    }
     
    if (KeyPressed == 68)
    {
        console.log("d");
        new_image("dark_green.png");
    }

    if (KeyPressed == 76)
    {
        console.log("l");
        new_image("light_green.png");
    }

    if (KeyPressed == 71)
    {
        console.log("g");
        new_image("ground.png");
    }

    if (KeyPressed == 87)
    {
        console.log("w");
        new_image("wall.jpg");
    }

    if (KeyPressed == 89)
    {
        console.log("y");
        new_image("yellow_wall.png");
    }

    if (KeyPressed == 82)
    {
        console.log("r");
        new_image("roof.jpg");
    }

    if (KeyPressed == 67)
    {
        console.log("c");
        new_image("cloud.jpg");
    }

    if (KeyPressed == 85)
    {
        console.log("u");
        new_image("unique.png");
    } 

    if (KeyPressed == 38)
    {
        console.log("up");
        up();
    }

    if (KeyPressed == 40)
    {
        console.log("down");
        down();
    }

    if (KeyPressed == 37)
    {
        console.log("left");
        left();
    }

    if (KeyPressed == 39)
    {
        console.log("right");
        right();
    }
}
