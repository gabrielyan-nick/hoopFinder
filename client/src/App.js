import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import GlobalStyles from "./styles/global.js";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes.js";
import MainPage from "./pages/MainPage";
import { Map } from "./components";
import "../node_modules/mapbox-gl/dist/mapbox-gl.css";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="App">
          <BrowserRouter>
            <main>
              <Routes>
                <Route path="/" element={<MainPage />} />
              </Routes>
            </main>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
