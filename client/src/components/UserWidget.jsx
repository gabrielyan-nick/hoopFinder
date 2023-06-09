import React, { useState, useEffect, useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Button, FlexBetweenBox, Text, UserWidgetBtn } from "./microComponets";
import { darkTheme, lightTheme } from "../styles/themes";
import { ModalWindow } from "./index";

const UserWidget = ({ setAddCourtMarker, setOpenedCourt, openedCourt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { picturePath, username } = useSelector((state) => state.storage.user);
  const name = username.slice(0, 15);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" && setIsModalOpen(false);
  }, [location]);

  const onOpenModal = () => {
    setIsModalOpen(true);
    navigate("/my-info");
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    navigate(`/`);
  };

  return (
    <>
      <UserWidgetBtn style={{ fontFamily: "inherit" }} onClick={onOpenModal}>
        <Username>{name}</Username>
        <Avatar src={picturePath} />
      </UserWidgetBtn>

      <ModalWindow
        opened={isModalOpen}
        closeModal={onCloseModal}
        setAddCourtMarker={setAddCourtMarker}
        setOpenedCourt={setOpenedCourt}
        openedCourt={openedCourt}
      />
    </>
  );
};

export default UserWidget;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Username = styled(Text)`
  color: ${lightTheme.username};
  padding-left: 5px;
`;
