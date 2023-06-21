import React, { useState } from "react";
import Image from "next/image";

function ImageMeme({ imageUrl,topText,bottomText ,textColor}) {
  const [count, setCount] = useState(0);
  function handleClike() {
    setCount((pre) => pre + 1);
    
  }
  let data = imageUrl[count];
 
  
  return (
    <div className="">
      {/* <div
        className=""
        style={{
          backgroundImage: `url(${data?.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: data?.height,
          width: data?.width,
          position: "relative",
        }}
      >
        <p style={{}}>top</p>
        <p style={{ position: "absolute", top: data?.height - 100 }}>
          dfjlsdfjsldfhjsldhjf;sodjhfsk;djfh
        </p>
      </div> */}

      <img
        style={{ position: "relative" }}
        height={500}
        width={500}
        src={data?.url}
        alt="MEME"
      />
      <p style={{ position: "absolute", top: "10%" }}
      className={`text-[${textColor.top}]`}
      >{topText}</p>
      <p style={{ position: "absolute", top: "70%" }}
      className={`text-[${textColor.bottom}]`}
      >{bottomText}</p>
      <button
        className="bg-teal-900 rounded-lg py-3 px-6 text-white text-lg my-5"
        onClick={handleClike}
      >
        NEXT
      </button>
    </div>
  );
}

export default ImageMeme;
