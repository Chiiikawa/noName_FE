// Search bar에 들어갈 거
import { useState, useEffect } from "react";
import "./App.css"

const TypingTitle = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [count, setCount] = useState(0);
  const completionWord = "Create your æ";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + completionWord[count]
          : completionWord[0];
        setCount(count + 1);
        // 이거 글자 초기화되면, 자꾸 쪼그라들어서 일단 이렇게 해둠
        if (count >= completionWord.length) {
          setCount(0);
          setBlogTitle(" ");
        }

        return result;
      });
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <div className="TypingBox">
      <h1 className="main-title">{blogTitle}</h1>
    </div>
  );
};

export default TypingTitle;
