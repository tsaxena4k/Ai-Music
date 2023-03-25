import React, { useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import SpotifyWebApi from "spotify-web-api-js";
import App1 from "./middleware/getMusicByMood";
import "./App.css";
import axios from "axios";
import getMusicByMood from "./middleware/getMusicByMood";
import WebcamComponent from "./Component/WebcamComponent";
import Navbar from "./Component/Navbar";
import Body from "./Component/Body";
import WaveFooter from "./Component/WaveFooter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Player from "./pages/Player";
import { Provider } from "react-redux";
import store from "./utils/store";

const spotifyApi = new SpotifyWebApi({
  clientId: "368dc6d7edeb44b8a0b85a6e3ff69c3c",
  clientSecret: "feafd71b8c014cce872948b554f4bf6e",
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /> <Body /> <WaveFooter />{" "}
        </>
      ),
      children: [
        {
          path: "/",
          element: <WebcamComponent />,
        },
        {
          path: "/player",
          element: <Player />,
        },
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
