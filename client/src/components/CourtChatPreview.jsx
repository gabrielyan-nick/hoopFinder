import React, { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  FlexBetweenBox,
  Button,
  SectionTitle,
  TextLineWrapper,
  Text,
  ChatWrapper,
} from "./microComponets";

const CourtChatPreview = ({ messages, courtId, chatId }) => {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  const onGoToChat = () => {
    navigate(`/courts/${courtId}/chat/${chatId}`);
  };

  useEffect(() => {
    wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight;
  }, [messages]);

  return (
    <Wrapper>
      <FlexBetweenBox style={{ alignItems: "normal" }}>
        <SectionTitle>Чат</SectionTitle>
        <OpenBtn onClick={onGoToChat}>Відкрити</OpenBtn>
      </FlexBetweenBox>

      <ChatWrap ref={wrapperRef}>
        {messages?.length === 3 && <DotsWrapper>...</DotsWrapper>}
        <MessagesWrapper>
          {!messages?.length ? (
            <Text color="secondary">Повідомлень немає...Будьте першим</Text>
          ) : (
            messages?.map((message) => (
              <ChatMessage
                key={message._id}
                avatar={message.sender.picturePath}
                text={message.text}
              />
            ))
          )}
        </MessagesWrapper>
      </ChatWrap>
    </Wrapper>
  );
};

export default CourtChatPreview;

const ChatMessage = ({ avatar, text }) => {
  return (
    <MessageWrapper>
      <Avatar src={avatar} />
      <Text>{text}</Text>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 15px;
`;

const Avatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

const Wrapper = styled.div`
  padding: 0 5px;
  margin: 10px 0;
`;

const ChatWrap = styled(ChatWrapper)`
  min-height: 31px;
  max-height: 95px;
  border-top-right-radius: 0;
`;

const MessagesWrapper = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  gap: 5px;
`;

const DotsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -10px;
`;

const OpenBtn = styled(Button)`
  padding: 2px 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  &:active:not(:disabled) {
    color: #ccc;
    transform: scale(1);
    box-shadow: none;
  }
`;
