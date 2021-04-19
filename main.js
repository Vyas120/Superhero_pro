var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "player.png";
var block_image_object = "get_image";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    })
}

function up()
{
    if(player_y >= 0)
    {

        player_y = player_y - block_image_height;
        console.log("Block image height: " + block_image_height);
        console.log("When up arrow key is pressed, X = " + player_x + " , Y = "+player_y)
        canvas.remove(player_object)
        player_update()
    }
}

function blocky_new(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    })
}

window.addEventListener("keypress",myKeydown);

function myKeydown(e){
  key_pressed = e.keyCode;
  console.log(key_pressed);
  
  if(e.shiftKey==true && key_pressed=='80'){
      block_image_width = block_image_width + 10;
      block_image_height = block_image_height + 10;
      document.getElementById("current_width").innerHTML=block_image_width;
      document.getElementById("current_height").innerHTML=block_image_height;
  }

  if(e.shiftKey==true && key_pressed=='77'){
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}

if(key_pressed=='38'){
    up();
    console.log("I'm going up");
}

if(key_pressed=='40'){
    down();
    console.log("I'm going down");
}


if(key_pressed=='37'){
    left();
    console.log("I'm going left");
}

if(key_pressed=='39'){
    right();
    console.log("I'm going right");
}




if(key_pressed=='66'){
    blocky_new("hulkd_body.png");
    console.log("You just built a wall");
}

if(key_pressed=='70'){
    blocky_new("thor_face (1).png");
    console.log("Your standing on the ground");
}

if(key_pressed=='76'){
    blocky_new("spiderman_left_hand.png");
    console.log("You just built a block");
}

if(key_pressed=='82'){
    blocky_new("hulk_right_hand.png");
    console.log("You just built a tree");
}



}

