canvas = document.getElementById('My_Canvas');
ctx = canvas.getContext("2d");
car_width = 100;
car_height = 100;


background_image = "istockphoto-1055955480-612x612.jpg";
car_image = "Picture1.png";
car_x = 15;
car_y = 20;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

   car_imgTag = new Image();
    car_imgTag.onload = uploadCar;
    car_imgTag.src = car_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar() {
    ctx.drawImage(car_imgTag,car_x, car_y, car_width, car_height);
    
}
