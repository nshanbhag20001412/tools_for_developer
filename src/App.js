import React from "react";
import "./styles.css";
import { useState } from "react";

const toolsDB = {
  ColorPallete: [
    {
      name: "Colorhunt",
      description:
        "It is an open collection of beautiful color palettes, created by Gal Shir. Used to share trendy color combinations.",
      url: "https://colorhunt.co/"
    },

    {
      name: "CanvaColors",
      description:
        "Using CanvaColors you can pick colors from a images, generate your own pallete and so on.",
      url: "https://www.canva.com/colors/color-palette-generator/"
    },

    {
      name: "Coolors",
      description:
        "Using this you can make color palletes,browser free pallete templates and much more!!",
      url: "https://coolors.co/"
    }
  ],

  Websites: [
    {
      name: "GeeksforGeeks",
      description:
        "Contains content about all stuffs related to programming, placements and so on ",
      url: "https://www.geeksforgeeks.org/"
    },

    {
      name: "W3school",
      description:
        "Its like a source where you can find all the components of a code, starting from syntax to the code!",
      url: "https://www.w3schools.com/"
    },

    {
      name: "Tutorialspoint",
      description:
        "Its similary to that of W3schools but it has more theorotical concepts.",
      url: "https://www.tutorialspoint.com/index.htm"
    },

    {
      name: "StackOverFlow",
      description:
        "Here people ask and get their doubts. Its very rare that your doubt is never been asked before.",
      url: "https://stackoverflow.com/"
    }
  ],

  Extensions: [
    {
      name: "EyeDropper",
      description:
        "You can pick any color on current webpage and save it to your clipboard and color history and copy the color code.",
      url: "https://eyedropper.org/"
    },

    {
      name: "Workona",
      description:
        "Its one of the best extentions to manage and save your tabs and bookmarks!",
      url: "https://workona.com/"
    },

    {
      name: "Grammarly",
      description:
        "Well who wants to create a bad impressions through spelling mistakes! This is your go to extension to keep a check on your text.",
      url: "https://www.grammarly.com/"
    },

    {
      name: "Natural Reader Text to Speech",
      description:
        " Reading long documents can be overwhelming after a long session of screen time. This extensions helps you to understand the docs by reading the text out loud!",
      url: "https://www.naturalreaders.com/online/"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Extensions");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Tools for developers </h1>
      <p>Here are some Tools that i found to be useful</p>

      <div>
        {Object.keys(toolsDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {toolsDB[selectedGenre].map((tools) => (
            <li
              key={tools.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "90%",
                margin: "1rem 1rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "Larger" }}>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href={tools.url}
                >
                  <span style={{ fontSize: "larger" }}>{tools.name}</span>
                </a>
              </div>
              <div style={{ fontWeight: "lighter" }}> {tools.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
