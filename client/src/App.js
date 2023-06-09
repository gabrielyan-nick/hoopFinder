import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import GlobalStyles from "./styles/global.js";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes.js";
import { LoadingScreen, Map } from "./components";
import "../node_modules/mapbox-gl/dist/mapbox-gl.css";
import "../node_modules/react-tooltip/dist/react-tooltip.css";

const MainPage = lazy(() => import("./pages/MainPage.jsx"));
const ResetPassPage = lazy(() => import("./pages/ResetPassPage.jsx"));

function App() {
  const theme = useSelector((state) => state.storage.theme);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Murecho:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="App">
          <BrowserRouter>
            <main>
              <Suspense fallback={<LoadingScreen />}>
                <Routes>
                  <Route path="/*" element={<MainPage />} />
                  <Route
                    path="/reset-password/:token"
                    element={<ResetPassPage />}
                  />
                </Routes>
              </Suspense>
            </main>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
