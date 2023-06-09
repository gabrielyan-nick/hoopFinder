import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MapProvider } from "react-map-gl";
import { CSSTransition } from "react-transition-group";
import {
  MainMap,
  UserLoginWidget,
  LoadingScreen,
  AddCourtWidget,
  SettingsWidget,
  ErrorBoundary,
  TutorialWidget,
} from "../components";
import { Wrapper } from "../components/microComponets";

const MainPage = () => {
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  const [addCourtMarker, setAddCourtMarker] = useState(null);
  const [openedCourt, setOpenedCourt] = useState(false);
  const loadingRef = useRef(null);

  const closeLoadingScreen = () => setIsLoadingScreen(false);

  return (
    <MapProvider>
      <Wrapper>
        <CSSTransition
          nodeRef={loadingRef}
          in={isLoadingScreen}
          timeout={1700}
          classNames="loading-hide"
          unmountOnExit
        >
          <LoadingScreen ref={loadingRef} />
        </CSSTransition>
        {!isLoadingScreen && (
          <>
            <SettingsWidget />
            <UserLoginWidget
              setAddCourtMarker={setAddCourtMarker}
              setOpenedCourt={setOpenedCourt}
              openedCourt={openedCourt}
            />
            <AddCourtWidget
              addCourtMarker={addCourtMarker}
              setAddCourtMarker={setAddCourtMarker}
            />
            <TutorialWidget />
          </>
        )}
        <ErrorBoundary>
          <MainMap
            closeLoadingScreen={closeLoadingScreen}
            setAddCourtMarker={setAddCourtMarker}
            addCourtMarker={addCourtMarker}
            setOpenedCourt={setOpenedCourt}
            openedCourt={openedCourt}
          />
        </ErrorBoundary>
      </Wrapper>
    </MapProvider>
  );
};

export default MainPage;
