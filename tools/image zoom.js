//show allows you to amlifie a picture 

javascript:(function(){ function zoomImage(image, amt) { if(image.initialHeight == null) { /* avoid accumulating integer-rounding error */ image.initialHeight=image.height; image.initialWidth=image.width; image.scalingFactor=1; } image.scalingFactor*=amt; image.width=image.scalingFactor*image.initialWidth; image.height=image.scalingFactor*image.initialHeight; } var i,L=document.images.length; for (i=0;i<L;++i) zoomImage(document.images[i], 2); if (!L) alert("This page contains no images."); })();
