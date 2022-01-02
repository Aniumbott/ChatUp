import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { serverTimestamp, query, orderBy, updateDoc } from "firebase/firestore";
import {
  doc,
  addDoc,
  onSnapshot,
  collection,
  getDoc,
} from "@firebase/firestore";

// Extras
const now = new Date();
const today = new Date(
  `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()}`
);
function isOkToUpdate(db_date) {
  if (today > db_date) {
    return true;
  } else {
    return false;
  }
}

// Main function
function Chatapp({ user, server }) {
  // From db
  const db_server_messages = collection(db, "Servers", server, "messages");
  const db_server_news = doc(db, "Servers", server);

  // Live Updating Data from database
  useEffect(() => {
    onSnapshot(query(db_server_messages, orderBy("createdAt")), (snapshot) => {
      const db_messages = snapshot.docs.map((doc) => {
        let data = doc.data();
        data.id = doc.id;
        return data;
      });
      setMessages(db_messages);
    });
  }, []);

  // Getting News
  useEffect(() => {
    const get_db_news = async () => {
      const get_news = await getDoc(db_server_news);
      const db_date = new Date(get_news.data().news.date);
      if (isOkToUpdate(db_date)) {
        fetch(
          `https://newsapi.org/v2/everything?q=${server.toLowerCase()}&apiKey=${
            process.env.REACT_APP_newsApiKey
          }`
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw response;
            }
          })
          .then(async (data) => {
            const update_db_news = await updateDoc(db_server_news, {
              news: {
                date: `${
                  today.getMonth() + 1
                }/${today.getDate()}/${today.getFullYear()}`,
                data: data,
              },
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log("its already there");
      }
      const news_data = get_news.data().news.data.articles;
      setNews(news_data);
    };
    get_db_news();
  }, []);

  // Messages state
  const [messages, setMessages] = useState([]);
  // Info message state
  const [infoMessage, setInfoMessage] = useState([
    {
      createdAt: "",
      text: "",
      profilepic: "",
      status: "",
      email: "",
      username: "",
      id: "",
    },
  ]);
  // News
  const [news, setNews] = useState([[]]);

  // Scroll Effect
  const scroll = useRef();
  useEffect(() => {
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ----------------------------------------------------------------------------------------------------------------------------------------------

  // Interactions
  //News Toggle
  function newsToggle() {
    let e = document.querySelector(".news");
    e.classList.toggle("expand");
  }
  // Show Info
  function showInfo(
    m_createdAt,
    m_data,
    m_profilepic,
    m_status,
    m_email,
    m_username,
    m_id
  ) {
    document.querySelector(".message-info-container").style.opacity = 1;
    document.querySelector(".message-info-container").style.zIndex = 7;
    setInfoMessage({
      createdAt: m_createdAt.toDate().toString(),
      text: `${
        m_status === "deleted"
          ? "[This message was deleted by the User.]"
          : m_data.text
      }`,
      profilepic: m_profilepic,
      status: m_status,
      email: m_email,
      username: m_username,
      id: m_id,
    });
  }
  // Close Info
  function closeInfo() {
    document.querySelector(".message-info-container").style.opacity = 0;
    document.querySelector(".message-info-container").style.zIndex = -7;
  }
  // Send Message
  async function sendMessage() {
    const text_data = document.querySelector(".textarea").innerText.trim();
    if (text_data.length === 0) {
      alert("Message cannot be Empty.");
      document.querySelector(".textarea").focus();
    } else {
      const update_db = await addDoc(db_server_messages, {
        data: {
          text: text_data,
        },
        email: user.email,
        profilepic: user.profilepic,
        status: "none",
        username: user.username,
        createdAt: serverTimestamp(),
      });
    }
  }
  // Send message using enter key
  const enter_sendMessage = (e) => {
    if (e.key == "Enter") {
      sendMessage();
    }
  };
  // Delete Message
  async function deleteMessage() {
    closeInfo();
    const deleting = await updateDoc(doc(db_server_messages, infoMessage.id), {
      status: "deleted",
    });
  }

  // Components
  // Input Box and Send button
  const EnterMessage = () => {
    return (
      <EnterMessageComponent>
        <span
          className="textarea"
          role="textbox"
          contentEditable
          onKeyPress={(e) => {
            enter_sendMessage(e);
          }}
        ></span>
        <button title="Send Message" onClick={sendMessage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
          </svg>
        </button>
      </EnterMessageComponent>
    );
  };
  //Message Info
  const MessageInfo = () => {
    return (
      <MessageInfoComponent>
        <div className="title">
          <p>Message Details</p>
          <div
            title="Close Pop-Up"
            className="close-details"
            onClick={closeInfo}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          </div>
        </div>
        <div className="details">
          <div className="details-profilepic">
            <img src={infoMessage.profilepic} alt="" srcset="" />
          </div>
          <div className="details-data">
            <p>
              <span>Username :</span> {infoMessage.username}
            </p>
            <p>
              <span>Timestamp :</span> {infoMessage.createdAt}
            </p>
          </div>
        </div>
        <div className="content">
          <h2>Content</h2>
          <p>{infoMessage.text}</p>
          {infoMessage.email == user.email ? (
            <div
              title="Delete Message"
              className="delete-message"
              onClick={deleteMessage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
              </svg>
            </div>
          ) : (
            ""
          )}
        </div>
      </MessageInfoComponent>
    );
  };

  // ----------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <ChatappStyledComponent>
      <h1>{server.toUpperCase()}</h1>
      <div class="bg">
        <img src={user.customize.wallpaper} alt="" srcset="" />
      </div>
      <Link to="/servers">
        <div className="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        </div>
      </Link>
      <div className="news">
        <div title="News" className="lable" onClick={newsToggle}>
          <p>N</p>
          <p>E</p>
          <p>W</p>
          <p>S</p>
        </div>
        <div className="news-data">
          <h2>Todays' Latest</h2>
          {news.map(({ author, content, description, source }) => (
            <OneNews title="Details">
              <p>{content}</p>
            </OneNews>
          ))}
        </div>
      </div>
      <div className="messages">
        {messages.map(
          ({ createdAt, data, profilepic, status, email, username, id }) => (
            <Message>
              <div
                id={id}
                className={`msg ${email === user.email ? "sent" : "received"} ${
                  status === "deleted" ? "deleted" : ""
                }`}
              >
                <div className="profilepic">
                  <img src={profilepic} alt="" />
                  <div
                    className="profilepic-overlay"
                    onClick={() => {
                      showInfo(
                        createdAt,
                        data,
                        profilepic,
                        status,
                        email,
                        username,
                        id
                      );
                    }}
                  >
                    <svg
                      width="387"
                      height="387"
                      viewBox="0 0 387 387"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M193.5 0C86.6404 0 0 86.6716 0 193.5C0 300.391 86.6404 387 193.5 387C300.36 387 387 300.391 387 193.5C387 86.6716 300.36 0 193.5 0ZM193.5 85.8266C211.598 85.8266 226.27 100.498 226.27 118.597C226.27 136.695 211.598 151.367 193.5 151.367C175.402 151.367 160.73 136.695 160.73 118.597C160.73 100.498 175.402 85.8266 193.5 85.8266ZM237.194 284.008C237.194 289.179 233.001 293.371 227.831 293.371H159.169C153.999 293.371 149.806 289.179 149.806 284.008V265.282C149.806 260.112 153.999 255.919 159.169 255.919H168.532V205.984H159.169C153.999 205.984 149.806 201.792 149.806 196.621V177.895C149.806 172.724 153.999 168.532 159.169 168.532H209.105C214.275 168.532 218.468 172.724 218.468 177.895V255.919H227.831C233.001 255.919 237.194 260.112 237.194 265.282V284.008Z"
                        fill="#E1E1E1"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text">
                  <p>
                    {status === "deleted"
                      ? "This message was deleted."
                      : data.text}
                  </p>
                </div>
              </div>
            </Message>
          )
        )}
        <div ref={scroll}></div>
      </div>
      <EnterMessage></EnterMessage>
      <div className="message-info-container">
        <MessageInfo></MessageInfo>
      </div>
    </ChatappStyledComponent>
  );
}

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Styled Componets
const ChatappStyledComponent = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .back {
    position: absolute;
    top: 0%;
    left: 0%;
    margin: 1rem 2rem;
    z-index: 5;
    background: ${(props) => props.theme.color_1};
    height: 3rem;
    width: 3rem;
    padding: 0.5rem 1rem;
    border-radius: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      height: 100%;
      path {
        fill: ${(props) => props.theme.color_2};
      }
    }
    &:hover {
      background: ${(props) => props.theme.color_2};
      path {
        fill: #ffffff;
      }
    }
  }
  h1 {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    color: ${(props) => props.theme.color_2};
    font-size: 2rem;
    padding: 0.6rem 2rem;
    border-radius: 0 0 20px 20px;
    font-weight: 700;
    background: ${(props) => props.theme.color_1};
  }
  .news {
    position: absolute;
    top: 0;
    right: -30rem;
    height: 100%;
    width: 33rem;
    z-index: 5;
    display: flex;
    flex-direction: row;
    transition: all 0.5s ease;
    .lable {
      height: 8rem;
      width: 3rem;
      padding: 1rem;
      background: ${(props) => props.theme.color_1};
      text-align: center;
      color: ${(props) => props.theme.color_2};
      font-size: 1rem;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 0 0 0 20px;
      cursor: pointer;
      &:hover {
        background: ${(props) => props.theme.color_2};
        color: #ffffff;
      }
    }
    .news-data {
      height: 100%;
      width: 100%;
      padding-left: 2rem;
      padding-right: 1rem;
      background: ${(props) => props.theme.color_1};
      overflow-y: scroll;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      h2 {
        width: 100%;
        text-align: center;
        padding: 1rem;
        color: #ffffff;
      }
    }
  }
  .expand {
    right: 0;
  }
  .messages {
    position: absolute;
    top: 0%;
    left: 0%;
    padding: 0 1rem;
    margin: 4.5rem auto 6rem;
    height: calc(100% - 10.5rem);
    max-height: calc(100% - 10.5rem);
    overflow-y: scroll;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .message-info-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: #22222299;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    opacity: 0;
    z-index: -7;
  }
`;

const EnterMessageComponent = styled.div`
  position: absolute;
  bottom: 0;
  height: 3rem;
  width: 100%;
  margin: 2rem auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  .textarea {
    display: block;
    width: 70%;
    overflow: scroll;
    min-height: 3rem;
    max-height: 10rem;
    line-height: 1.5rem;
    font-size: 0.9rem;
    padding: 0rem 1rem;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-items: center;
    background: ${(props) => props.theme.color_1};
    color: ${(props) => props.theme.color_2};
    border-radius: 10px;
    :focus {
      outline: none;
    }
  }

  .textarea[contenteditable]:empty::before {
    content: "Type Here...";
    border: none;
    color: #ffffff55;
  }

  button {
    height: 3rem;
    width: 3rem;
    border-radius: 50px;
    background: ${(props) => props.theme.color_2};
    padding: 0.5rem;
    border: none;
    margin: 0 1rem;
    cursor: pointer;
    svg {
      height: 100%;
      path {
        fill: #ffffff;
      }
    }
  }
`;

const Message = styled.div`
  padding: 0.5rem;
  padding-bottom: 0;
  width: 100%;
  div {
    width: fit-content;
    max-width: 40rem;
    display: flex;
    align-items: flex-start;
    .profilepic {
      height: 3rem;
      width: 3rem;
      min-height: 3rem;
      min-width: 3rem;
      border-radius: 50px;
      margin: 0.5rem;
      align-items: center;
      justify-content: center;
      position: relative;
      img {
        border-radius: 50px;
        height: 3rem;
      }
      .profilepic-overlay {
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: 50px;

        padding: 0.8rem;
        background: #22222299;
        transition: all 0.2s ease;
        opacity: 0;
        svg {
          height: 100%;
          fill: #ffffff;
        }
        :hover {
          opacity: 1;
        }
      }
    }
    .text {
      margin: 0rem 1rem;
      margin-left: 0.5rem;
      height: fit-content;
      min-height: 4rem;
      padding: 0.5rem 0rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 0.9rem;
      line-height: 1.5em;
      width: fit-content;
    }
  }
  .sent {
    background: ${(props) => props.theme.color_2};
    color: ${(props) => props.theme.color_1};
    border-radius: 15px 15px 0px 15px;
    float: right;
    .profilepic {
      background: ${(props) => props.theme.color_1};
      img {
        border: 3px solid ${(props) => props.theme.color_1};
      }
    }
  }
  .received {
    background: ${(props) => props.theme.color_1};
    color: ${(props) => props.theme.color_2};
    border-radius: 0 15px 15px 15px;
    float: left;
    .profilepic {
      background: ${(props) => props.theme.color_2};
      img {
        border: 2px solid ${(props) => props.theme.color_2};
      }
    }
  }
  .deleted {
    .text {
      opacity: 0.6;
    }
  }
`;

const MessageInfoComponent = styled.div`
  height: 30rem;
  width: 40rem;
  background: ${(props) => props.theme.color_1};
  color: ${(props) => props.theme.color_2};
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  .title {
    height: 3rem;
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    background: ${(props) => props.theme.color_2};
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    .close-details {
      height: 2rem;
      width: 2rem;
      cursor: pointer;
      svg {
        height: 60%;
        object-fit: cover;
        fill: #ffffff;
      }
    }
  }
  .details {
    max-height: 10rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    .details-profilepic {
      height: 8rem;
      width: 8rem;
      background: ${(props) => props.theme.color_2};
      border: 3px solid ${(props) => props.theme.color_2};
      img {
        pointer-events: none;
        height: 100%;
        object-fit: cover;
      }
    }
    .details-data {
      height: 100%;
      width: 75%;
      margin-left: 2rem;
      span {
        font-weight: 700;
        color: #ffffff;
      }
    }
  }
  .content {
    height: 20rem;
    width: 100%;
    padding: 1rem;
    overflow-y: scroll;
    h2 {
      color: #ffffff;
    }
    .delete-message {
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 1rem;
      height: 3rem;
      width: 3rem;
      svg {
        height: 100%;
        path {
          fill: ${(props) => props.theme.color_2};
        }
      }
      &:hover {
        path {
          fill: #ffffff;
        }
      }
    }
  }
`;

const OneNews = styled.div`
  min-height: 9rem;
  max-width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  color: ${(props) => props.theme.color_2};
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  ::-webkit-scrollbar {
    width: 0rem;
  }
  :hover {
    color: #ffffff;
  }
`;
export default Chatapp;
