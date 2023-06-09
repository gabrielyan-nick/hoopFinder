import React, {
  forwardRef,
  useEffect,
  useState,
  useRef,
  useCallback,
  memo,
} from "react";
import PropTypes from "prop-types";
import io from "socket.io-client";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled, { useTheme } from "styled-components";
import {
  useGetChatMessagesQuery,
  usePostChatMessageMutation,
  useDeleteChatMessageMutation,
  useUpdateChatMessageMutation,
} from "../api/courtsApi";
import {
  FlexBetweenBox,
  FlexCenterBox,
  IconButton,
  Title,
  CourtImg,
  CloseBtn,
  IconBtnBg,
  BackBtn,
  Button,
  BtnSpinnerWrapper,
  ModalHeader,
  ChatWrapper,
  Input,
  Text,
  LoadingScreenWrapper,
} from "./microComponets";
import {
  FavouriteIcon,
  CloseIcon,
  BasketballCourtIcon,
  ShowHideIcon,
  BackIcon,
  EditIcon,
  SaveIcon,
  DeleteIcon,
  EnterIcon,
} from "./svgIcons";
import {
  BallsAnimation,
  ConfirmModal,
  LoadingScreen,
  BallSpinner,
} from "./index";
import { formatDate } from "../utils";
import { BasketballMarker, FootballMarker } from "./index";
import useOnIntersection from "../hooks/useOnIntersection";

const CourtChat = ({ closeModal, goBack, openedCourt, socket }) => {
  const _id = useSelector((s) => s.storage?.user?._id);
  const picturePath = useSelector((s) => s.storage?.user?.picturePath);
  const token = useSelector((s) => s.storage?.user?.token);
  const [message, setMessage] = useState("");
  const { courtId, chatId } = useParams();
  const [offset, setOffset] = useState(0);
  const limit = 50;
  const { data, isLoading, isFetching, isSuccess } = useGetChatMessagesQuery({
    courtId,
    chatId,
    offset,
    limit,
  });
  const [postMessage, postResult] = usePostChatMessageMutation();
  const [messagesRecieved, setMessagesReceived] = useState([]);
  const [isEndOfMessages, setIsEndOfMessages] = useState(false);
  const loadingRef = useRef(null);
  const prevMessagesRef = useRef([]);
  const messagesWrapperRef = useRef(null);
  const navigate = useNavigate();

  const incrementOffset = useCallback(() => {
    if (!isFetching && !isEndOfMessages) {
      setOffset((offset) => offset + limit);
    }
  }, [isFetching, isEndOfMessages]);

  const topOfChatRef = useOnIntersection(incrementOffset);

  useEffect(() => {
    if (data?.messages && prevMessagesRef.current !== data?.messages) {
      setMessagesReceived((state) => [...state, ...data?.messages]);
      prevMessagesRef.current = data?.messages;
    }
  }, [isSuccess, isFetching]);

  useEffect(() => {
    data?.messages?.length < limit
      ? setIsEndOfMessages(true)
      : setIsEndOfMessages(false);
  }, [data?.messages]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessagesReceived((state) => [data, ...state]);
      messagesWrapperRef.current.scrollTop =
        messagesWrapperRef.current.scrollHeight;
    });

    socket.on("delete_message-client", (messageId) => {
      setMessagesReceived((state) =>
        state.filter((message) => message._id !== messageId)
      );
    });

    socket.on("update_message-client", ({ messageId, updatedMessage }) => {
      setMessagesReceived((state) =>
        state.map((message) =>
          message._id === messageId
            ? { ...message, text: updatedMessage }
            : message
        )
      );
    });

    return () => {
      socket.off("receive_message");
      socket.off("delete_message-client");
      socket.off("update_message-client");
    };
  }, [socket]);

  const onSendMessage = (e) => {
    e.preventDefault();
    if (_id !== undefined) {
      if (message !== "") {
        const formData = new FormData();
        formData.append("userId", _id);
        formData.append("text", message);
        postMessage({ courtId, chatId, formData, token })
          .then((result) => {
            socket.emit("send_message", {
              _id: result.data._id,
              sender: { _id, picturePath },
              text: message,
              createdAt: new Date(),
              chatId,
            });
            setMessage("");
          })
          .catch((e) => console.log(e));
      }
    } else navigate("/login");
  };

  const leaveChat = () => {
    socket.emit("leave_chat", chatId);
  };

  const onCloseModal = () => {
    leaveChat();
    closeModal();
  };

  const onGoBack = () => {
    leaveChat();
    goBack();
  };

  const spinner =
    data?.courtSport === "basketball" ? (
      <BasketballMarker size={25} />
    ) : (
      <FootballMarker size={25} />
    );

  return (
    <div>
      <ModalHeader>
        <BackBtn onClick={onGoBack}>
          <BackIcon />
        </BackBtn>
        <Title>{openedCourt}</Title>
        <CloseBtn onClick={onCloseModal}>
          <CloseIcon />
        </CloseBtn>
      </ModalHeader>

      <MessagesWrapper ref={messagesWrapperRef} isLoading={isLoading}>
        <CSSTransition
          nodeRef={loadingRef}
          in={isLoading}
          timeout={1700}
          classNames="loading-hide"
          unmountOnExit
          mountOnEnter
        >
          <LoadingWrapper ref={loadingRef}>
            <BallSpinner />
          </LoadingWrapper>
        </CSSTransition>

        {!messagesRecieved.length ? (
          <FlexCenterBox style={{ height: "100%" }}>
            <Text centred>Залишайте повідомлення, домовляйтесь про ігри</Text>
          </FlexCenterBox>
        ) : (
          messagesRecieved?.map((message, i) => (
            <ChatMessage
              key={i}
              message={message}
              courtSport={data?.courtSport}
              courtId={courtId}
              chatId={chatId}
              token={token}
              socket={socket}
            />
          ))
        )}
        {isFetching && !isLoading && (
          <FlexCenterBox>
            <BtnSpinnerWrapper>{spinner}</BtnSpinnerWrapper>
          </FlexCenterBox>
        )}
        <div
          style={{
            display: isFetching || isLoading ? "none" : "block",
          }}
          ref={topOfChatRef}
        ></div>
      </MessagesWrapper>

      <Form onSubmit={onSendMessage} style={{ marginBottom: "5px" }}>
        <label htmlFor="message">
          <Input
            name="message"
            p="7px 10px"
            value={message}
            fW={600}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isLoading}
          />
        </label>
        <SendMessageBtn color="green" type="submit" disabled={isLoading}>
          {postResult.isLoading ? (
            <BtnSpinnerWrapper size="26px">{spinner}</BtnSpinnerWrapper>
          ) : (
            <EnterIcon size={27} />
          )}
        </SendMessageBtn>
      </Form>
    </div>
  );
};

export default CourtChat;

const ChatMessage = memo(
  ({ message, courtSport, courtId, chatId, token, socket }) => {
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [isEdited, setIsEdited] = useState(false);
    const [editedText, setEditedText] = useState(message.text);
    const id = useSelector((s) => s.storage?.user?._id);
    const isMyMessage = id === message?.sender?._id;
    const date = formatDate(message?.createdAt);
    const inputRef = useRef(null);
    const editDelRef = useRef(null);
    const saveCloseRef = useRef(null);
    const nodeRef = isEdited ? saveCloseRef : editDelRef;
    const [updateMessage, updateResult] = useUpdateChatMessageMutation();
    const [deleteMessage, delResult] = useDeleteChatMessageMutation();
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(
          inputRef.current.value.length,
          inputRef.current.value.length
        );
      }
    }, [isEdited]);

    useEffect(() => {
      setEditedText(message.text);
    }, [message]);

    const onDeleteMessage = (messageId) => {
      messageId &&
        deleteMessage({ courtId, chatId, messageId, token })
          .then((res) => {
            socket.emit("delete_message", { messageId, chatId });
          })
          .catch((e) => console.log(e));
    };

    const onUpdateMessage = (messageId) => {
      if (editedText !== message.text) {
        const formData = new FormData();
        formData.append("text", editedText);
        updateMessage({ courtId, chatId, messageId, token, formData })
          .then((res) => {
            socket.emit("update_message", {
              messageId,
              chatId,
              updatedMessage: editedText,
            });
            setIsEdited(false);
          })
          .catch((e) => console.log(e));
      } else onCancelEditMessage();
    };

    const onEditMessage = () => setIsEdited(true);
    const onCancelEditMessage = () => {
      setIsEdited(false);
      setEditedText(message.text);
    };

    const onGoToUserInfo = () => {
      navigate(`/users/${message.sender._id}`);
    };

    const openDelModal = () => setIsConfirmModalOpen(true);
    const closeDelModal = () => setIsConfirmModalOpen(false);

    const spinner =
      courtSport === "basketball" ? (
        <BasketballMarker size={13} />
      ) : (
        <FootballMarker size={13} />
      );

    return (
      <>
        <li style={{ margin: "5px" }}>
          <MainLine>
            <Avatar
              src={message.sender?.picturePath}
              onClick={onGoToUserInfo}
            />
            {!isEdited ? (
              <Text color="primary" style={{ width: "100%" }}>
                {message.text}
              </Text>
            ) : (
              <EditedInput
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                fW={600}
                ref={inputRef}
              />
            )}
          </MainLine>
          <BottomLine isMyMessage={isMyMessage}>
            {isMyMessage && (
              <SwitchTransition mode="out-in">
                <CSSTransition
                  timeout={100}
                  key={isEdited}
                  classNames="icons-switch"
                  nodeRef={nodeRef}
                >
                  {!isEdited ? (
                    <BtnsWrapper ref={editDelRef}>
                      <Btn color="green" onClick={onEditMessage}>
                        <EditIcon size={14} color="#f1e8e4" />
                      </Btn>
                      <Btn color="orange" onClick={openDelModal}>
                        <DeleteIcon size={14} color="#f1e8e4" />
                      </Btn>
                    </BtnsWrapper>
                  ) : (
                    <BtnsWrapper ref={saveCloseRef}>
                      <Btn
                        color="green"
                        onClick={() => onUpdateMessage(message._id)}
                      >
                        {updateResult.isLoading ? (
                          <BtnSpinnerWrapper size="15px">
                            {spinner}
                          </BtnSpinnerWrapper>
                        ) : (
                          <SaveIcon size={14} />
                        )}
                      </Btn>
                      <Btn color="#e02504" onClick={onCancelEditMessage}>
                        <CloseIcon size={14} />
                      </Btn>
                    </BtnsWrapper>
                  )}
                </CSSTransition>
              </SwitchTransition>
            )}
            <DateText color={theme.chatDate} fS="14px">
              {date}
            </DateText>
          </BottomLine>
        </li>

        <ConfirmModal
          opened={isConfirmModalOpen}
          closeModal={closeDelModal}
          question="Видалити повідомлення?"
          action={() => onDeleteMessage(message._id)}
          actionResult={delResult}
          courtSport={courtSport}
        />
      </>
    );
  }
);

const LoadingWrapper = styled(LoadingScreenWrapper)`
  width: 100%;
  height: 450px;
  border-radius: 7px;
  position: absolute;
`;

const EditedInput = styled(Input)`
  background: transparent;
  padding: 0;
  box-shadow: none;
  align-self: flex-start;
  &:focus {
    box-shadow: none;
    outline: none;
  }
  color: ${(props) => props.theme.text};
`;

const Form = styled.form`
  margin: 5px 5px 0 5px;
  display: grid;
  column-gap: 5px;
  grid-template-columns: auto 32px;
`;

const SendMessageBtn = styled(IconBtnBg)`
  padding: 3px;
  width: 32;
  height: 32px;
  border-radius: 7px;
`;

const BtnsWrapper = styled(FlexBetweenBox)`
  gap: 10px;
  margin-left: 50px;
`;

const Btn = styled(IconBtnBg)`
  border-radius: 5px;
  padding: 2px;
  height: 18px;
  width: 18px;
`;

const DateText = styled(Text)`
  font-family: "Play", sans-serif;
`;

const MainLine = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
`;

const BottomLine = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.isMyMessage ? "space-between" : "flex-end"};
  margin-top: ${(props) => (props.isMyMessage ? "3px" : 0)};
  align-items: flex-end;
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  cursor: pointer;
`;

const MessagesWrapper = styled.ul`
  position: relative;
  height: 435px;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 7px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 5px;
  scrollbar-width: auto;
  background: ${(props) => props.bg || props.theme.textWrapperBg};
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px;
  &::-webkit-scrollbar {
    display: ${(props) => (props.isLoading ? "none" : "initial")};
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.scrollbar};
    border-radius: 10px;
  }
`;
