 Canvas = new fabric.Canvas("myCanvas");

 block_image_width=30;
 block_image_height=30;

 player_x=10;
 player_y=10;

 player_object = "";
 block_image_object = "";

 function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);

        player_object.set({
            top:player_y,
            left:player_x
        });
        Canvas.add(player_object);
    });

    
 }

 function new_Image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);

        block_image_object.set({
            top:player_y,
            left:player_x
        });
        Canvas.add(block_image_object);
    });
    
 }

 window.addEventListener("keydown",my_keydown);

 function my_keydown(e){
     key_press=e.keyCode;
     console.log(key_press);

     if (e.shiftKey==true && key_press=='80'){
         console.log("Shift and P are pressed together");

         block_image_width= block_image_width + 10;
         block_image_height=block_image_height + 10;

         document.getElementById("current_width").innerHTML=block_image_width;
         document.getElementById("current_height").innerHTML=block_image_height;

        }

        if (e.shiftKey==true && key_press=='77'){
            console.log("Shift and M are pressed together");
   
            block_image_width= block_image_width - 10;
            block_image_height=block_image_height - 10;
   
            document.getElementById("current_width").innerHTML=block_image_width;
            document.getElementById("current_height").innerHTML=block_image_height;
   
        }

        if (key_press=='37')
        {
            Left();
            console.log("Left");
        }

        if (key_press=='38')
        {
            Up();
            console.log("Up");
        }

        if (key_press=='39')
        {
            Right();
            console.log("Right");
        }

        if (key_press=='40')
        {
            Down();
            console.log("Down");
        }

        if (key_press=='87')
        {
            new_Image("wall.jpg");
            console.log("w");
        }

        if (key_press=='71')
        {
            new_Image("ground.png");
            console.log("g");
        }

        if (key_press=='76')
        {
            new_Image("light_green.png");
            console.log("l");
        }

        if (key_press=='84')
        {
            new_Image("trunk.jpg");
            console.log("t");
        }

        if (key_press=='82')
        {
            new_Image("roof.jpg");
            console.log("r");
        }

        if (key_press=='89')
        {
            new_Image("yellow_wall.png");
            console.log("y");
        }

        if (key_press=='68')
        {
            new_Image("dark_green.png");
            console.log("d");
        }

        if (key_press=='85')
        {
            new_Image("unique.png");
            console.log("u");
        }

        if (key_press=='67')
        {
            new_Image("cloud.jpg");
            console.log("c");
        }
 }

 function Up(){
     if(player_y>=0){
         player_y=player_y-block_image_height;
         console.log("This is block image height : "+block_image_height);
         console.log("When Up arrow is pressed , X :"+player_x+" | Y :"+player_y);
         Canvas.remove(player_object);
         player_update();
     }
 }

 function Down(){
    if(player_y<=300){
        player_y=player_y+block_image_height;
        console.log("This is block image height : "+block_image_height);
        console.log("When Down arrow is pressed , X :"+player_x+" | Y :"+player_y);
        Canvas.remove(player_object);
        player_update();
    }
}

function Left(){
    if(player_x>=0){
        player_x=player_x-block_image_width;
        console.log("This is block image width : "+block_image_width);
        console.log("When Left arrow is pressed , X :"+player_x+" | Y :"+player_y);
        Canvas.remove(player_object);
        player_update();
    }
}

function Right(){
    if(player_x<=700){
        player_x=player_x+block_image_width;
        console.log("This is block image width : "+block_image_width);
        console.log("When Right arrow is pressed , X :"+player_x+" | Y :"+player_y);
        Canvas.remove(player_object);
        player_update();
    }
}


