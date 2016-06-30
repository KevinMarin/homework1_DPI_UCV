$(document).ready(function() {

	var inputElement = document.getElementById("input");
	inputElement.addEventListener("change", handleFiles, false);

	$( "#negative" ).click(function() {
		var ctx = cargaContextoCanvas('mycanvas');
  		var imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    	var pixels = imgData.data;
    	for (var i = 0; i < pixels.length; i += 4) {
      		pixels[i] = 255 - pixels[i]; // rojo
      		pixels[i + 1] = 255 - pixels[i + 1]; // verde
      		pixels[i + 2] = 255 - pixels[i + 2]; // azul
    	}
    	ctx.putImageData(imgData, 0, 0);
	});

	$("#rotate_270").click(function(){ 
        var ctx = cargaContextoCanvas('mycanvas');
  		var imgData_in = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);        
        var imgData_out = ctx.createImageData(ctx.canvas.height, ctx.canvas.width);
    	var pixels_in = imgData_in.data;
    	var pixels_out = imgData_out.data;

    	var Tfila = imgData_in.width; //tamaño de fila
    	var Tcolumna = imgData_in.height; //tamaño de columna
    	var it_i = Tfila - 1;
    	var it_j = 0;
     	for (var i = 0; i < pixels_in.length; i += 4) {
      		pixels_out[  i  ] = pixels_in[ ((it_j * Tfila) + it_i)*4]; // rojo
      		pixels_out[i + 1] = pixels_in[ ((it_j * Tfila) + it_i)*4 + 1]; // verde
      		pixels_out[i + 2] = pixels_in[ ((it_j * Tfila) + it_i)*4 + 2]; // azul
      	    pixels_out[i + 3] = pixels_in[ ((it_j * Tfila) + it_i)*4 + 3]; // opacidad
      	    it_j++;
      	    if (it_j >= Tcolumna){
      	    	it_j = 0;
      	    	it_i--;
      	    }
    	}
    	var eMy_canvas = document.getElementById('mycanvas');
      	eMy_canvas.width = imgData_out.width;
      	eMy_canvas.height = imgData_out.height;
    	ctx.putImageData(imgData_out, 0, 0);
    });

	$("#rotate_180").click(function(){ 
        var ctx = cargaContextoCanvas('mycanvas');
  		var imgData_in = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);        
        var imgData_out = ctx.createImageData(ctx.canvas.width, ctx.canvas.height);
    	var pixels_in = imgData_in.data;
    	var pixels_out = imgData_out.data;
    	var it = pixels_in.length-4;
    	for (var i = 0; i < pixels_in.length; i += 4) {
      		pixels_out[i] = pixels_in[it]; // rojo
      		pixels_out[i + 1] = pixels_in[it + 1]; // verde
      		pixels_out[i + 2] = pixels_in[it + 2]; // azul
      	    pixels_out[i + 3] = pixels_in[it + 3]; // opacidad
      	    it -= 4;
    	}
    	ctx.putImageData(imgData_out, 0, 0);
    });

	$("#rotate_90").click(function(){ 
        var ctx = cargaContextoCanvas('mycanvas');
  		var imgData_in = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);        
        var imgData_out = ctx.createImageData(ctx.canvas.height, ctx.canvas.width);
    	var pixels_in = imgData_in.data;
    	var pixels_out = imgData_out.data;

    	var Tfila = imgData_in.width; //tamaño de fila
    	var Tcolumna = imgData_in.height; //tamaño de columna
    	var it_i = 0;
    	var it_j = Tcolumna - 1;
     	for (var i = 0; i < pixels_in.length; i += 4) {
      		pixels_out[  i  ] = pixels_in[ ((it_j * Tfila) + it_i)*4]; // rojo
      		pixels_out[i + 1] = pixels_in[ ((it_j * Tfila) + it_i)*4 + 1]; // verde
      		pixels_out[i + 2] = pixels_in[ ((it_j * Tfila) + it_i)*4 + 2]; // azul
      	    pixels_out[i + 3] = pixels_in[ ((it_j * Tfila) + it_i)*4 + 3]; // opacidad
      	    it_j--;
      	    if (it_j < 0){
      	    	it_j = Tcolumna - 1;
      	    	it_i++;
      	    }
    	}
    	var eMy_canvas = document.getElementById('mycanvas');
      	eMy_canvas.width = imgData_out.width;
      	eMy_canvas.height = imgData_out.height;
    	ctx.putImageData(imgData_out, 0, 0);
    });

	$("#mirror_V").click(function(){ 
        var ctx = cargaContextoCanvas('mycanvas');
  		var imgData_in = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);        
        var imgData_out = ctx.createImageData(ctx.canvas.width, ctx.canvas.height);
    	var pixels_in = imgData_in.data;
    	var pixels_out = imgData_out.data;

    	var Tfila = imgData_in.width; //tamaño de fila
    	var Tcolumna = imgData_in.height; //tamaño de columna
    	var it_i = 0;
    	var it_j = Tcolumna-1;
     	for (var i = 0; i < pixels_in.length; i += 4) {
      		pixels_out[  i  ] = pixels_in[ ((it_j * Tfila) + it_i)*4]; // rojo
      		pixels_out[i + 1] = pixels_in[ ((it_j * Tfila) + it_i)*4 + 1]; // verde
      		pixels_out[i + 2] = pixels_in[ ((it_j * Tfila) + it_i)*4 + 2]; // azul
      	    pixels_out[i + 3] = pixels_in[ ((it_j * Tfila) + it_i)*4 + 3]; // opacidad
      	    it_i++;
      	    if (it_i >= Tfila){
      	    	it_i = 0;
      	    	it_j--;
      	    }
    	}

    	ctx.putImageData(imgData_out, 0, 0);
    });

	$("#mirror_H").click(function(){ 
        var ctx = cargaContextoCanvas('mycanvas');
  		var imgData_in = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);        
        var imgData_out = ctx.createImageData(ctx.canvas.width, ctx.canvas.height);
    	var pixels_in = imgData_in.data;
    	var pixels_out = imgData_out.data;

    	var Tfila = imgData_in.width; //tamaño de fila
    	var Tcolumna = imgData_in.height; //tamaño de columna
    	var it_i = Tfila - 1;
    	var it_j = 0;
     	for (var i = 0; i < pixels_in.length; i += 4) {
      		pixels_out[  i  ] = pixels_in[ ((it_j * Tfila) + it_i)*4]; // rojo
      		pixels_out[i + 1] = pixels_in[ ((it_j * Tfila) + it_i)*4 + 1]; // verde
      		pixels_out[i + 2] = pixels_in[ ((it_j * Tfila) + it_i)*4 + 2]; // azul
      	    pixels_out[i + 3] = pixels_in[ ((it_j * Tfila) + it_i)*4 + 3]; // opacidad
      	    it_i--;
      	    if (it_i < 0){
      	    	it_i = Tfila - 1;
      	    	it_j++;
      	    }
    	}
    	ctx.putImageData(imgData_out, 0, 0);
    });



});

function handleFiles(e) {
	var file = e.target.files[0];
	var reader = new FileReader();
	reader.addEventListener("load", processimage, false);
	reader.readAsArrayBuffer(file);
}

function processimage(e) {
 	var buffer = e.target.result; 

 	var bitmap = getBMP(buffer); 
 	var imageData = convertToImageData(bitmap);
   	var eMy_canvas = document.getElementById('mycanvas');
   	var ctx = cargaContextoCanvas('mycanvas');
    if(ctx){
      	eMy_canvas.width = imageData.width;
      	eMy_canvas.height = imageData.height-1;
   		ctx.putImageData(imageData,0, -1);
  	}
}

function getBMP(buffer) { 
 	var datav = new DataView(buffer); 
 	var bitmap = {};
 	bitmap.fileheader = {}; 
 	bitmap.fileheader.bfType = datav.getUint16(0, true); 
	bitmap.fileheader.bfSize = datav.getUint32(2, true); 
	bitmap.fileheader.bfReserved1 = datav.getUint16(6, true); 
	bitmap.fileheader.bfReserved2 = datav.getUint16(8, true); 
	bitmap.fileheader.bfOffBits = datav.getUint32(10, true);

	bitmap.infoheader = {};
	bitmap.infoheader.biSize = datav.getUint32(14, true);
	bitmap.infoheader.biWidth = datav.getUint32(18, true); 
	bitmap.infoheader.biHeight = datav.getUint32(22, true); 
	bitmap.infoheader.biPlanes = datav.getUint16(26, true); 
	bitmap.infoheader.biBitCount = datav.getUint16(28, true); 
	bitmap.infoheader.biCompression = datav.getUint32(30, true); 
	bitmap.infoheader.biSizeImage = datav.getUint32(34, true); 
	bitmap.infoheader.biXPelsPerMeter = datav.getUint32(38, true); 
	bitmap.infoheader.biYPelsPerMeter = datav.getUint32(42, true); 
	bitmap.infoheader.biClrUsed = datav.getUint32(46, true); 
	bitmap.infoheader.biClrImportant = datav.getUint32(50, true);

	var start = bitmap.fileheader.bfOffBits;
	bitmap.stride = Math.floor((bitmap.infoheader.biBitCount * bitmap.infoheader.biWidth + 31) / 32) * 4;
 	bitmap.pixels = new Uint8Array(buffer, start); 
 	return bitmap; 
}

function convertToImageData(bitmap) { 
 	canvas = document.createElement("canvas"); 
 	var ctx = canvas.getContext("2d"); 
 	var Width = bitmap.infoheader.biWidth; 
 	var Height = bitmap.infoheader.biHeight; 
 	var imageData = ctx.createImageData(Width, Height);
 	var data = imageData.data;
	var bmpdata = bitmap.pixels; 
	var stride = bitmap.stride;
	for (var y = 0; y < Height; ++y) { 
 		for (var x = 0; x < Width; ++x) { 
  			var index1 = (x+Width*(Height-y))*4; 
  			var index2 = x * 3 + stride * (y);
  			data[index1] = bmpdata[index2 + 2];
  			data[index1 + 1] = bmpdata[index2 + 1];
  			data[index1 + 2] = bmpdata[index2];
  			data[index1 + 3] = 255; 
 		} 
	}
	return imageData;
}

function cargaContextoCanvas(idCanvas){
   	var elemento = document.getElementById(idCanvas);
   	if(elemento && elemento.getContext){
   		var contexto = elemento.getContext('2d');
   		if(contexto){
      		return contexto;
      	}
   	}
   	return FALSE;
}