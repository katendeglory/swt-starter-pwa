import Resizer from "react-image-file-resizer";

const resize = Resizer.imageFileResizer;

export let resizeImage = (file) => {
  return new Promise((resolve, reject) => {
    resize(file, 750, 750, "JPEG", 100, 0, uri => resolve(uri), "blob");
  });
};

export let resizeImages = async (files) => {
  let resized = [];
  for (let i = 0; i < files.length; i++) resized.push(await resizeImage(files[i]));
  return resized;
};