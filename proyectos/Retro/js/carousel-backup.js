const carousel = (carouselHtml, numberOfElements) =>
  (function() {
    var container = $(callOnClass(carouselHtml, ".images-container"));
    var images = $(
      callOnClass(carouselHtml, ".images-container .img-container")
    );
    var amountOfImages = images.length;
    var imageSize = container.width() / numberOfElements;
    var current = 0;
    var maximumSlide = imageSize*(amountOfImages-2);
    images.css("width", imageSize);
    console.log("Max slide : "+ maximumSlide);
    if (amountOfImages != numberOfElements) {
      $(callOnClass(carouselHtml, ".back-button")).click(() => {
        var currentTranslation = getValues(container);
        var screenSize = $(window).width() / numberOfElements;
        var maxSliderTranslation =
          (amountOfImages - numberOfElements) * screenSize;
        if (current > 0) {
          current -= imageSize;
          console.log("Back current" + current)
        }
        if (Math.round(currentTranslation) != 0) {
          currentTranslation -= -screenSize;
          container.css("transform", `translateX(${current}px`);
        }
        if (currentTranslation > 0) {
          container.css("transform", `translateX(0px)`);
        }
      });

      $(callOnClass(carouselHtml, ".forward-button")).click(() => {
        
        if (current < maximumSlide) {
          current += imageSize;
          console.log("front current" + current)

        }
        currentTranslation = getValues(container);
        var screenSize = $(window).width() / numberOfElements;
        var maxSliderTranslation =
          (amountOfImages - numberOfElements) * screenSize;
        if (
          Math.abs(currentTranslation - screenSize) <
          maxSliderTranslation + 5
        ) {
          currentTranslation -= screenSize;
          container.css("transform", `translateX(${-current}px`);
        } else {
          container.css(
            "transform",
            `translateX(-${maxSliderTranslation + 5}px)`
          );
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
//carousel(".carousel-1", 3);
//carousel(".carousel-2", 3);
//carousel(".carousel-3", 3);
carousel(".carousel-4", 3);
carousel(".carousel-5", 2);
