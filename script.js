const videoElement = document.querySelector("#video");
const button = document.querySelector("#button");

// prompt to select media stream, pass to vid element, then play.
async function selectMediaStream() {
  try {
    // awaiting to assign mediastream data until user chooses mediastream they'd like to share.
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    // pass media stream to video element's src object.
    videoElement.srcObject = mediaStream;
    // onloadedmetadata event is fired when the metadata has been loaded.
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", async () => {
  //disable button
  button.disabled = true;

  //start picture in picture. requestPictureInPicture() enters video straight to pictureinpircture, rather than reg video.
  await videoElement.requestPictureInPicture();

  //   reset button
  button.disabled = false;
});

// on load
selectMediaStream();

// picture in picture documentation api: https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API
