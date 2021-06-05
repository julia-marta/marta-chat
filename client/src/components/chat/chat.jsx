import React, {useState, useEffect, useCallback} from 'react';
import io from "socket.io-client";
import './chat.css';
import {IconContext} from "react-icons";
import {FaRegSmile} from "react-icons/fa";
import {FaRegSmileWink} from "react-icons/fa";
import {FaRegLaughBeam} from "react-icons/fa";
import {FaRegGrinSquintTears} from "react-icons/fa";
import {FaRegKissWinkHeart} from "react-icons/fa";
import {FaRegGrinHearts} from "react-icons/fa";
import {FaRegGrinTongueSquint} from "react-icons/fa";
import {FaRegMehRollingEyes} from "react-icons/fa";
import {FaRegFlushed} from "react-icons/fa";
import {FaRegSadTear} from "react-icons/fa";
import {FaRegAngry} from "react-icons/fa";
import {FaRegHeart} from "react-icons/fa";

const helloMessage = `К нам присоединяется`;
const goodByeMessage = `Нас покидает`;

const Smile = {
  reg: <FaRegSmile />,
  wink: <FaRegSmileWink />,
  laugh: <FaRegLaughBeam />,
  rofl: <FaRegGrinSquintTears />,
  kiss: <FaRegKissWinkHeart />,
  love: <FaRegGrinHearts />,
  tongue: <FaRegGrinTongueSquint />,
  rolling: <FaRegMehRollingEyes />,
  flushed: <FaRegFlushed />,
  sad: <FaRegSadTear />,
  angry: <FaRegAngry />,
  heart: <FaRegHeart />,
}

const Chat = () => {

  const [socket, setSocket] = useState(null)
  const [name, setName] = useState(null);
  const [count, setCount] = useState(0);
  const [messages, addMessages] = useState([]);
  const [value, setValue] = useState(``);

  useEffect(() => {
    const socket = io();

    setSocket(socket);

    socket.on(`message`, count => {
      setCount(count);
    });

    socket.on(`name`, userName => {
      addMessages([...messages, {name: userName, text: helloMessage}]);
    });

    socket.on(`msg`, message => {
      addMessages([...messages, message]);
    });

    socket.on(`smile`, smile => {
      addMessages([...messages, smile]);
    });

    socket.on(`leave`, userName => {
      addMessages([...messages, {name: userName, text: goodByeMessage}]);
    });

    return () => socket.disconnect();
  }, [messages]);


  const handleInputChange = useCallback(
    (evt) => {
      evt.preventDefault();
      setValue(evt.target.value)
    }, []
  );

  const handleSmileClick = useCallback(
    (evt) => {
      evt.preventDefault();

      if (!name) {
        return;
      }

      console.log(evt.target)

      socket.emit(`smile`, {name: name, smile: evt.target.id});
    }, [socket, name]
  );

  const handleFormSubmit = useCallback(
    (evt) => {
      evt.preventDefault();

      if (!name) {
        socket.emit(`name`, value);
        setName(value);
        setValue(``);
        return;
      }
      socket.emit(`msg`, {name: name, text: value});
      setValue(``)

    }, [name, socket, value]
  );

  return (
    <section className="chat">
      <div className="chat__wrapper">
        <div className="chat__icon">
          <p>Online: <span>{count}</span></p>
        </div>
        <div className="chat__dashboard">
          <form className="chat__form" onSubmit={handleFormSubmit}>
            <input type="text" placeholder={name ? `Введите сообщение` : `Как вас зовут?`} value={value} required onChange={handleInputChange} />
            <button className="chat__button" type="submit">{name ? `Отправить` : `Войти в чат`}</button>
          </form>
          <div className="chat__smiles">
          <IconContext.Provider value={{className: "chat__smile" }}>
            <span id="reg" onClick={handleSmileClick}><FaRegSmile /></span>
            <span id="wink" onClick={handleSmileClick}><FaRegSmileWink /></span>
            <span id="laugh" onClick={handleSmileClick}><FaRegLaughBeam /></span>
            <span id="rofl" onClick={handleSmileClick}><FaRegGrinSquintTears /></span>
            <span id="kiss" onClick={handleSmileClick}><FaRegKissWinkHeart /></span>
            <span id="love" onClick={handleSmileClick}><FaRegGrinHearts /></span>
            <span id="tongue" onClick={handleSmileClick}><FaRegGrinTongueSquint /></span>
            <span id="rolling" onClick={handleSmileClick}><FaRegMehRollingEyes /></span>
            <span id="flushed" onClick={handleSmileClick}><FaRegFlushed /></span>
            <span id="sad" onClick={handleSmileClick}><FaRegSadTear /></span>
            <span id="angry" onClick={handleSmileClick}><FaRegAngry /></span>
            <span id="heart" onClick={handleSmileClick}><FaRegHeart /></span>
          </IconContext.Provider>
          </div>
        </div>
      </div>

      <ul className="chat__messages">
        {messages.length === 0 && <li className="chat__message">В чате пока пусто.</li>}
        {messages.map((message, i) => (
          <li key={i + 1} className={`chat__message ${message.text === helloMessage || message.text === goodByeMessage  ? `chat__message--server` : ``}`}>
            {message.smile  ?
              <>
                <span>{message.name}:</span> {Smile[message.smile]}
              </> :
            message.text === helloMessage || message.text === goodByeMessage ?
              <>
                {message.text} <span>{message.name}</span>
              </> :
              <>
                <span>{message.name}:</span> {message.text}
              </>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Chat;