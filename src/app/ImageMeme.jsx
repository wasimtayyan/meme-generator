import React, { useState } from "react";
import Draggable from "react-draggable";

function ImageMeme({
  imageUrl,
  topText,
  bottomText,
  textColor,
  font,
  fontSize,
  textShadow,
}) {
  let Draggable = require("react-draggable");
  const [count, setCount] = useState(1);
  function handleClike() {
    const imgIndex = Math.floor(Math.random() * imageUrl?.length);
    setCount(imgIndex);
  }
  let data = imageUrl[count];
  return (
    <div className="">
      {topText ? (
        <p className="text-lg font-bold text-lime-950">
          you can drage and drop the text wherever you want!!
        </p>
      ) : null}
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          style={{ position: "relative" }}
          height={500}
          width={500}
          src={data?.url}
          alt="MEME"
        />
        <Draggable>
          <p
            style={{
              position: "absolute",
              top: "10%",
              right: "30%",
              color: textColor.top,
              textShadow: textShadow ? "2px 2px 4px black" : "none",
              fontSize: `${fontSize}px`,
            }}
            className={`font-medium ${font}`}
          >
            {topText}
          </p>
        </Draggable>
        <Draggable>
          <p
            style={{
              position: "absolute",
              top: "70%",
              right: "30%",
              color: textColor.bottom,
              textShadow: textShadow ? "2px 2px 4px black" : "none",
              fontSize: `${fontSize}px`,
            }}
            className={`font-medium ${font}`}
          >
            {bottomText}
          </p>
        </Draggable>
      </div>
      <div>
        <button
          className="bg-teal-900 rounded-lg py-3 px-6 text-white text-lg my-5"
          onClick={handleClike}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default ImageMeme;
