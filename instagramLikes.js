// Robot likes every photos on the page, you need to go for any hashtag, click on the first post and paste this code in console;

function likePhoto() {
  setTimeout(() => {
    let likeButton = document.querySelector(".wpO6b");
    let nextButton = document.querySelector("._65Bje");
    let likeButtonSvg = document.querySelectorAll("._8-yf5")[4];
    svgText = likeButtonSvg.getAttribute("aria-label");
    console.log(svgText);

    if (svgText == "Curtir") {
      setTimeout(() => {
        likeButton.click();
        console.log("Liked");
      }, 2000);
    }

    setTimeout(() => {
      nextButton.click();
      console.log("Next");
    }, 4000);
  }, 5000);
  setTimeout(() => {
    likePhoto();
  }, 5000);
}

likePhoto();
