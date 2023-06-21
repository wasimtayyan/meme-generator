import React, { useState } from "react";

function FormInput({
  topText,
  bottomText,
  setBottomText,
  setTopText,
  setTextColor,
}) {
  const handleAllCaps = (e) => {
    if (e.target.checked) {
      
      setBottomText(bottomText.toUpperCase());
      setTopText(topText.toUpperCase());
    } else if (e.target.checked) {
      setBottomText(bottomText.toLowerCase());
      setTopText(topText.toLowerCase());
    }
  };

  const handleTextColor = (e) => {
    const { name, value } = e.target;
    setTextColor((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setBottomText("");
    setTopText("");
  }
  return (
    <div>
      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <input
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          className="border py-3 px-6 text-black my-3"
          placeholder="Top text"
        />
        <input
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          className="border py-3 px-6 text-black my-3"
          placeholder="Bottom text"
        />

        <select
          name="fonts"
          onChange={(e) => console.log(e.target.value)}
          typeof="nomber"
        >
          <option className="font-sans" value={"font-sans"}>
            sans
          </option>
          <option className="font-serif" value={"font-serif"}>
            serif
          </option>
          <option className="font-mono" value={"font-mono"}>
            mono
          </option>
        </select>
        <label>Top text color</label>
        <input type="color" name="top" onChange={(e) => handleTextColor(e)} />
        <label>Bottom text color</label>
        <input
          type="color"
          name="bottom"
          onChange={(e) => handleTextColor(e)}
        />
        <div className="flex">
          <input
            type="checkbox"
            onChange={(e) => handleAllCaps(e)}
            // value={allCaps}
          />
          <label>All caps</label>
        </div>
        <input type="" />
        <button>Resete</button>
      </form>
    </div>
  );
}

export default FormInput;
