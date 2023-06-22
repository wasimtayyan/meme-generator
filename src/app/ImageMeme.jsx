import React, { useState } from "react";
import Image from "next/image";

function ImageMeme({
  imageUrl,
  topText,
  bottomText,
  textColor,
  font,
  fontSize,
  textShadow,
}) {
  const [count, setCount] = useState(1);
  function handleClike() {
    const imgIndex = Math.floor(Math.random() * imageUrl?.length);
    setCount(imgIndex);
  }
  let data = imageUrl[count];
  return (
    <div className="">
      <div style={{ display: "inline-block", position: "relative" }}>
        <img
          style={{ width: "550px", height: "500px" }}
          src={data?.url}
          alt="MEME"
        />
        <p
          style={{
            position: "absolute",
            top: "10%",
            right: "40%",
            color: textColor.top,
            fontSize: `${fontSize}px`,
            textShadow: textShadow ? "2px 2px 4px black" : "none",
          }}
          className={` font-medium ${font} `}
        >
          {topText}
        </p>
        <p
          style={{
            position: "absolute",
            bottom: "20%",
            right: "40%",

            color: textColor.bottom,
            fontSize: `${fontSize}px`,
            textShadow: textShadow ? "2px 2px 4px black" : "none",
          }}
          className={` font-medium ${font}`}
        >
          {bottomText}
        </p>
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
