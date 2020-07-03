// var canvas = new fabric.Canvas('canvas');

var canvas = new fabric.Canvas('canvas', {
    backgroundColor: '#fff'
});

canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));

canvas.selectionColor = 'rgba(0,255,0,0.3)';
canvas.selectionBorderColor = 'red';
canvas.selectionLineWidth = 5;



// set size
// var width = document.documentElement.clientWidth;
// var height = document.documentElement.clientHeight;
canvas.setDimensions({width:400, height:400});


function resize() {
    var getWidth = prompt('Enter width:');
    if (getWidth == null) {return false}
    var getHeight = prompt('Enter height:');
    if (getHeight == null) {return false}
    canvas.setWidth( getWidth );
    canvas.setHeight( getHeight );
    canvas.calcOffset();    
}



function save_img(){    
  console.log('export image');
}


save_image = document.querySelector('.save_image');
save_image.addEventListener("click", function(){
  var fileName = prompt("Enter filename");
  if (fileName==null) {return false}
  this.href = canvas.toDataURL();
  this.download = fileName;
});
  
  

// toolbar
add_text = document.querySelector('.add_text');
add_text.addEventListener("click", function(){
    var text = new fabric.Text('hello world', { left: 100, top: 200 });
    canvas.add(text);
});

// file
document.querySelector('.image_upload').onchange = function handleImage(e) {
    var reader = new FileReader();
      reader.onload = function (event){
        var imgObj = new Image();
        imgObj.src = event.target.result;
        imgObj.onload = function () {
          imgWidth = this.width;
          imgHeight = this.height;
          var image = new fabric.Image(imgObj);
          image.set({
                angle: 0,
                padding: 10,
                cornersize:10,
                height:imgHeight,
                width:imgWidth,
          });
          canvas.centerObject(image);
          canvas.add(image);
          canvas.renderAll();
        }
      }
      reader.readAsDataURL(e.target.files[0]);
}


//  object selected
canvas.on('object:selected', function(event) {
  var object = event.target;
  canvas.sendToBack(object);
  //object.sendToBack();
  console.log("Selected");
});



// to-dos
// function to add shapes
// function to order object
// function to change object color
// function to add fontawesome icons
// BETTER UI