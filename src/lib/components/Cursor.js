import React, { useState, useEffect } from "react";

function Cursor({ imageIcon = null, size=16, children }) {
  const [resizeImg, setResizeImg] = useState();
  function resizeImage(base64image, width = 1080, height = 1080) {
    let img = new Image();
    img.src = base64image;
    console.log({ base64image });
    img.onload = (event) => {
      if (img.height <= height && img.width <= width) {
        event.base64ResizedImage = base64image;
      } else {
        if (img.height > img.width) {
          width = Math.floor(height * (img.width / img.height));
        } else {
          height = Math.floor(width * (img.height / img.width));
        }
        let resizingCanvas = document.createElement("canvas");
        let resizingCanvasContext = resizingCanvas.getContext("2d");
        resizingCanvas.width = img.width;
        resizingCanvas.height = img.height;
        resizingCanvasContext.drawImage(
          img,
          0,
          0,
          resizingCanvas.width,
          resizingCanvas.height
        );
        let curImageDimensions = {
          width: Math.floor(img.width),
          height: Math.floor(img.height),
        };
        let halfImageDimensions = {
          width: null,
          height: null,
        };
        while (curImageDimensions.width * 0.5 > width) {
          halfImageDimensions.width = Math.floor(
            curImageDimensions.width * 0.5
          );
          halfImageDimensions.height = Math.floor(
            curImageDimensions.height * 0.5
          );
          resizingCanvasContext.drawImage(
            resizingCanvas,
            0,
            0,
            curImageDimensions.width,
            curImageDimensions.height,
            0,
            0,
            halfImageDimensions.width,
            halfImageDimensions.height
          );
          curImageDimensions.width = halfImageDimensions.width;
          curImageDimensions.height = halfImageDimensions.height;
        }
        let outputCanvas = document.createElement("canvas");
        let outputCanvasContext = outputCanvas.getContext("2d");
        outputCanvas.width = width;
        outputCanvas.height = height;
        outputCanvasContext.drawImage(
          resizingCanvas,
          0,
          0,
          curImageDimensions.width,
          curImageDimensions.height,
          0,
          0,
          width,
          height
        );
        event.base64ResizedImage = outputCanvas.toDataURL("image/gif", 0.85);
        const base64Canvas = outputCanvas
          .toDataURL("image/gif")
          .split(";base64,")[1];
        img = "data:image/gif;base64," + base64Canvas;
        setResizeImg(img);
      }
    };
  }

  useEffect(() => {
    let _size = size > 50 ? 50 : size < 4 ? 4 : size;
    resizeImage(imageIcon, _size, _size);
  }, [imageIcon,size]);

  return (
    <>
      {resizeImg ? (
        <div
          style={{
            display: "contents",
            cursor: `url(${resizeImg}),auto`,
          }}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </>
  );
}

export default Cursor;
