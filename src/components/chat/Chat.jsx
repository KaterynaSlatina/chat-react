import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState("");
  console.log(text);

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpenEmoji(false);
  };
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.jpg" alt="" />
          <div className="texts">
            <span>User Name</span>
            <p>User description</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./more.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.jpg" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              rem ipsum voluptatem ipsa magnam, sed similique officiis
              voluptates beatae, consequatur rerum voluptate delectus sequi
              ipsam praesentium architecto. Fuga, nostrum unde.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.jpg" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              rem ipsum voluptatem ipsa magnam, sed similique officiis
              voluptates beatae, consequatur rerum voluptate delectus sequi
              ipsam praesentium architecto. Fuga, nostrum unde.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              rem ipsum voluptatem ipsa magnam, sed similique officiis
              voluptates beatae, consequatur rerum voluptate delectus sequi
              ipsam praesentium architecto. Fuga, nostrum unde.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.jpg" alt="" width={50} height={50} />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              rem ipsum voluptatem ipsa magnam, sed similique officiis
              voluptates beatae, consequatur rerum voluptate delectus sequi
              ipsam praesentium architecto. Fuga, nostrum unde.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-jumbo.jpg?quality=75&auto=webp"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              rem ipsum voluptatem ipsa magnam, sed similique officiis
              voluptates beatae, consequatur rerum voluptate delectus sequi
              ipsam praesentium architecto. Fuga, nostrum unde.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./icon-image.png" alt="" />
          <img src="./icon-photo.png" alt="" />
          <img src="./icon-mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoticon.png"
            alt=""
            onClick={() => setOpenEmoji((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
