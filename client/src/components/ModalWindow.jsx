import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import useOnClickOutside from "../hooks/useOnClickOutside";
import useMount from "../hooks/useMount";
import {
  MyInfo,
  PhotoWindow,
  CourtPopup,
  UserInfo,
  LoginFormWrapper,
  RegisterForm,
  LoginAfterReg,
  ForgotPassForm,
  AddCourtForm,
  EditCourtForm,
  CourtChat,
} from "./index";
import { Button, IconButton, CloseBtn } from "./microComponets";
import { CloseIconFill, CloseIcon } from "./svgIcons";

const ModalWindow = ({
  opened,
  closeModal,
  closeClickOutside = false,
  setAddCourtMarker,
  addCourtMarker = null,
}) => {
  const [editedCourt, setEditedCourt] = useState({});
  const [history, setHistory] = useState([]);
  const [animationIn, setAnimationIn] = useState(false);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);
  const { mounted } = useMount({ opened });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setHistory([...history, location.pathname]);
  }, [location]);

  const onGoBack = () => {
    history.pop();
    navigate(-1);
    history.pop();
  };

  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  useEffect(() => {
    if (opened) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [opened]);

  const handleKeyDown = (event) => {
    const modalElements = overlayRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstElement = modalElements[0];
    const lastElement = modalElements[modalElements.length - 1];

    if (event.key === "Escape") {
      onCloseModal();
    }

    if (event.key === "Tab") {
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }
  };

  const onCloseModal = () => {
    navigate("/");
    history.splice(0);
    closeModal();
  };

  useOnClickOutside(contentRef, closeClickOutside ? onCloseModal : null);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <CSSTransition
      in={animationIn}
      nodeRef={overlayRef}
      timeout={100}
      appear
      mountOnEnter
      unmountOnExit
      classNames="modal-overlay"
    >
      <ModalWrapper ref={overlayRef}>
        <CSSTransition
          in={animationIn}
          nodeRef={contentRef}
          timeout={100}
          appear
          mountOnEnter
          unmountOnExit
          classNames="modal-content"
        >
          <ModalContent ref={contentRef}>
            <SwitchTransition>
              <CSSTransition
                timeout={200}
                key={location.key}
                classNames="switch"
              >
                <Routes>
                  <Route
                    path="/courts/:courtId"
                    element={
                      <CourtPopup
                        closeModal={onCloseModal}
                        history={history}
                        goBack={onGoBack}
                        setEditedCourt={setEditedCourt}
                      />
                    }
                  />
                  <Route
                    path="/courts/:courtId/chat/:chatId"
                    element={
                      <CourtChat closeModal={onCloseModal} goBack={onGoBack} />
                    }
                  />
                  <Route
                    path="/users/:userId"
                    element={
                      <UserInfo closeModal={onCloseModal} goBack={onGoBack} />
                    }
                  />
                  <Route
                    path="/my-info"
                    element={
                      <MyInfo
                        closeModal={onCloseModal}
                        goBack={onGoBack}
                        setAddCourtMarker={setAddCourtMarker}
                      />
                    }
                  />
                  <Route
                    path="/login"
                    element={
                      <LoginFormWrapper
                        closeModal={onCloseModal}
                        goBack={onGoBack}
                        history={history}
                      />
                    }
                  />
                  <Route
                    path="/register"
                    element={
                      <RegisterForm
                        closeModal={onCloseModal}
                        goBack={onGoBack}
                      />
                    }
                  />
                  <Route
                    path="/log-reg"
                    element={<LoginAfterReg closeModal={onCloseModal} />}
                  />
                  <Route
                    path="/forgot-pass"
                    element={
                      <ForgotPassForm
                        closeModal={onCloseModal}
                        goBack={onGoBack}
                      />
                    }
                  />
                  <Route
                    path="/add-court"
                    element={
                      <AddCourtForm
                        closeModal={onCloseModal}
                        setAddCourtMarker={setAddCourtMarker}
                        courtLocation={addCourtMarker}
                      />
                    }
                  />
                  <Route
                    path="/courts/:courtId/edit"
                    element={
                      <EditCourtForm
                        closeModal={onCloseModal}
                        courtInfo={editedCourt}
                        goBack={onGoBack}
                      />
                    }
                  />
                </Routes>
              </CSSTransition>
            </SwitchTransition>
          </ModalContent>
        </CSSTransition>
      </ModalWrapper>
    </CSSTransition>,
    document.body
  );
};

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 101;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #09000cb9;
  display: flex;
  justify-content: center;
  align-items: center;
  &::-webkit-scrollbar {
    width: 0;
    /* height: 0, */
  }
  @media (max-height: 650px) {
    align-items: flex-start;
    padding: 40px 0;
  }
  @media ${(props) => props.theme.media.mobile} {
    align-items: flex-start;
    padding: 40px 0 60px;
  }
`;

export const ModalContent = styled.div`
  background: ${(props) => props.bg || props.theme.popupBg};
  border-radius: 10px;
  min-height: 100px;
  padding: 5px 0;
  max-width: 420px;
  @media ${(props) => props.theme.media.wideScreen} {
    width: 27%;
  }
  @media ${(props) => props.theme.media.desktop} {
    width: 65%;
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 80%;
  }
  @media ${(props) => props.theme.media.mobile} {
    width: 98%;
  }
  @media ${(props) => props.theme.media.smallMobile} {
    width: 98%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5px;
`;

export default ModalWindow;
