const carousel = (carouselHtml, numberOfElements,imagesContainer,imgContainer) =>
  (function() {
    var container = $(callOnClass(carouselHtml, imagesContainer));
    var images = $(
      callOnClass(carouselHtml,`${imagesContainer} ${imgContainer}`)
    );
    var amountOfImages = images.length;
    var imageSize = container.width() / numberOfElements;
    var current = 0;
    var maximumSlide = imageSize * (amountOfImages - numberOfElements) ;
    images.css("width", imageSize);
    console.log("Max slide : " + maximumSlide);
    if (amountOfImages != numberOfElements) {
      $(callOnClass(carouselHtml, ".back-button")).click(() => {
        
        if (Math.abs(Math.round(current)) > 0) {
          current += imageSize;
          console.log("Back current" + Math.abs(current));
          container.css("transform", `translateX(${current}px`);
        }
      });

      $(callOnClass(carouselHtml, ".forward-button")).click(() => {
        if (Math.abs(current) < maximumSlide) {
          current -= imageSize;
          console.log("front current" + current);
          container.css("transform", `translateX(${current}px`);
        }
      });
    }
  })();

function callOnClass(OuterClass, InnerClass) {
  return $(`${OuterClass} > ${InnerClass}`);
}
function getValues(container) {
  var matrix = container
    .css("transform")
    .replace(/[^0-9\-.,]/g, "")
    .split(",");
  var x = matrix[12] || matrix[4];
  var y = matrix[13] || matrix[5];
  return x;
}
carousel(".carousel-1", 3,".images-container",'.img-container');
carousel(".carousel-2", 2,".images-container",'.img-container');
carousel(".carousel-3", 3,".images-container",'.img-container');
carousel(".random-wallpaper-carousel",1,".images-container",'.img-container');
carousel(".carousel-4", 3,".images-container",'.img-container');
carousel(".carousel-5", 2,".images-container",'.img-container');
