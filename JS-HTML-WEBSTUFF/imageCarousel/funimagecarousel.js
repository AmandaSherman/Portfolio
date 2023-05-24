let imageIndex = 0;
let imageArray = ["image1.jpg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg", "image6.jpeg", "image7.jpeg", "image8.jpeg", "image9.jpeg", "image10.jpeg"];

function changeImage(direction) {
  imageIndex += direction;
  if(imageIndex >= imageArray.length) {
    imageIndex = 0;
  } else if(imageIndex < 0) {
    imageIndex = imageArray.length - 1;
  }

  let imageElement = document.getElementById('dynamic-image');
  imageElement.classList.remove('fade');
  void imageElement.offsetWidth; // Trigger reflow to restart animation
  imageElement.src = imageArray[imageIndex];
  imageElement.classList.add('fade');
}
