import React, { useState, useEffect, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Button,
  FlexBetweenBox,
  Text,
  UserWidgetBtn,
  TextLineWrapper,
  FlexCenterBox,
  IconBtnBg,
  CloseBtn,
  ModalHeader,
} from "./microComponets";
import { darkTheme, lightTheme } from "../styles/themes";
import {
  AvatarChanged,
  UserCityChanged,
  FavouriteCourts,
  ConfirmModal,
  SocialLinksEdited,
} from "./index";
import { ChangeIcon, CloseIcon } from "./svgIcons";

import { setLogout } from "../store/storageSlice";

const MyInfo = forwardRef((props, ref) => {
  const { closeModal, setAddCourtMarker, setIsModalOverflow } = props;
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const picturePath = useSelector((state) => state.storage?.user?.picturePath);
  const username = useSelector((state) => state.storage?.user?.username);
  const city = useSelector((state) => state.storage?.user?.city);
  const favouriteCourts = useSelector(
    (state) => state.storage?.user?.favouriteCourts
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    setAddCourtMarker(null);
    dispatch(setLogout());
    navigate("/");
  };

  const onOpenLogoutModal = () => setIsLogoutModalOpen(true);
  const onCloseLogoutModal = () => setIsLogoutModalOpen(false);

  return (
    <>
      <div ref={ref}>
        <ModalHeader empty>
          <CloseBtn onClick={closeModal}>
            <CloseIcon />
          </CloseBtn>
        </ModalHeader>
        <Wrapper>
          <FirstLineWrapper>
            <TextWrapper>
              <TextLineWrapper>
                <Text fS="22px">{username || null}</Text>
              </TextLineWrapper>
              <UserCityChanged
                city={city}
                setIsModalOverflow={setIsModalOverflow}
              />
            </TextWrapper>
            <AvatarChanged photo={picturePath} />
          </FirstLineWrapper>
          <FavouriteCourts courts={favouriteCourts} />
          <SocialLinksEdited />
          <Button
            onClick={onOpenLogoutModal}
            bgColors={lightTheme.btnSecondary}
            style={{ margin: "25px auto 0" }}
          >
            Вийти
          </Button>
        </Wrapper>
      </div>

      <ConfirmModal
        opened={isLogoutModalOpen}
        closeModal={onCloseLogoutModal}
        question="Вийти з акаунту?"
        action={onLogout}
      />
    </>
  );
});

export default MyInfo;

export const Wrapper = styled.div`
  padding: 30px 5px 10px;
`;

export const FirstLineWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 58% 42%;
  width: 100%;
`;

export const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: space-between;
`;
