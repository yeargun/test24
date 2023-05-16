export const previewLoadedImages = () => {
  const fileInput = document.getElementById("image-upload");
  // Get the preview container
  const previewContainer = document.getElementById("preview-container");

  // Listen for file selection
  fileInput?.addEventListener("change", function (event) {
    // Clear existing previews
    previewContainer.innerHTML = "";

    // Loop through the selected files
    for (const file of event?.target?.files) {
      // Create an image element for the preview
      const img = document.createElement("img");
      img.classList.add("preview-image");
      img.file = file;

      // Create a file reader
      const reader = new FileReader();

      // Set up the file reader onload event
      reader.onload = ((aImg) => {
        return function (e) {
          // Set the image source to the data URL
          aImg.src = e?.target?.result;
          aImg.width = 200;
          aImg.height = 200;
        };
      })(img);

      // Read the file as a data URL
      reader.readAsDataURL(file);

      // Append the image preview to the container
      previewContainer?.appendChild(img);
    }
  });
};
