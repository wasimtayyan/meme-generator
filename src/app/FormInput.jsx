import React, { useState } from "react";

function FormInput({
  topText,
  bottomText,
  textColor,
  setBottomText,
  setTopText,
  setTextColor,
  setFont,
  setFontSize,
  setTextShadow,
  textShadow,
  fontSize,
  font,
}) {
  const [upperCase, setUpperCase] = useState(false);
  const handleAllCaps = (e) => {
    if (e.target.checked) {
      setUpperCase(true);
      setBottomText(bottomText.toUpperCase());
      setTopText(topText.toUpperCase());
    } else if (!e.target.checked) {
      setUpperCase(false);
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
    setTextColor({
      top: "000000",
      bottom: "000000",
    });
    setTextShadow(false);
    setUpperCase(false);
    setFontSize("20");
    setFont("font-sans");
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
          value={font}
          name="fonts"
          onChange={(e) => setFont(e.target.value)}
          className="border py-2 px-6 text-black my-3"
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
        <div className="flex gap-3 justify-between py-3  text-black my-3">
          <label className="font-medium">Top text color</label>
          <input
            value={textColor.top}
            type="color"
            name="top"
            onChange={(e) => handleTextColor(e)}
          />
        </div>

        <div className="flex gap-3 justify-between">
          <label className="font-medium">Bottom text color</label>
          <input
            value={textColor.bottom}
            type="color"
            name="bottom"
            onChange={(e) => handleTextColor(e)}
          />
        </div>
        <div className="flex justify-between py-4">
          <input
            type="checkbox"
            onChange={(e) => handleAllCaps(e)}
            checked={upperCase}
          />
          <label>All caps</label>
        </div>
        <div className="flex justify-between py-4">
          <input
            type="checkbox"
            onChange={(e) => setTextShadow(e.target.checked)}
            checked={textShadow}
          />
          <label>Text Shadow</label>
        </div>
        <label>Font-Size:</label>
        <input
          value={fontSize}
          className="border py-3 px-6 text-black my-3"
          type="text"
          placeholder="Font-Size"
          onChange={(e) => setFontSize(e.target.value)}
        />
        <button className="bg-teal-900 rounded-lg py-3 px-6 text-white text-lg my-5">
          Resete
        </button>
      </form>
    </div>
  );
}

export default FormInput;
