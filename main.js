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
        player_image.scaleTOWidth(150);
        player_image.scaleTOHeight(140);

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
        blockobject_image.scaleTOWidth(block_width);
        blockobject_image.scaleTOHeight(block_height);

        blockobject_image.set({
            top:player_y,
            left:player_x
        });
        Canvas.add(blockobject_image);

    });
}