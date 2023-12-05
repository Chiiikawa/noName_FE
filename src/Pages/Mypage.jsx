import React, { useEffect, useState } from "react";
import axios from "axios";
import Posting from "../Components/Posting.jsx";
import "../Layout/Layout.css";

function Mypage() {
  const [mypostlist, setMyPostList] = useState([]);
  const [bookmarkpostlist, setBookMarkPostList] = useState([]);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [address, setAdress] = useState("");
  const [ismyposts, setIsMyPosts] = useState(true);
  const [selectedpost, setSelectedPost] = useState();
  const [modalPostdetailOpen, setModalPostDetailOpen] = useState(false); // datail page modal을 띄우기 위한 state 설정

  // 서버에서 내 profile 정보를 받아오는 함수. 받은 data를 setstate하여 변수의 state를 변경 후 렌더링
  async function requestUserProfile() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/accounts/profile/`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
          },
        },
      );
      console.log("response.data:", response.data);
      if (response) {
        console.log("Profile을 모두 불러오는 중...");
        setUserName(response.data.username);
        setEmail(response.data.email);
        setPhoneNumber(response.data.phone_number);
        setAdress(response.data.address);
        setMyPostList(response.data.posts);
        setBookMarkPostList(response.data.bookmark_data);
      }
    } catch (error) {
      console.log("Authentication failed", error);
    }
  }

  // Post를 클릭할 시 detail page modal을 띄우기 위한 함수
  function handlePostClick(id) {
    console.log("id:", id);
    setModalPostDetailOpen(true);
    setSelectedPost(id);
  }

  const watchMyPostlist = () => {
    setIsMyPosts(true);
  };

  const watchMyBookmarklist = () => {
    setIsMyPosts(false);
  };

  useEffect(() => {
    requestUserProfile();
  }, []);

  return (
    <div className="MyPage-container">
      <div className="profile-container">
        <img className="Mypage-profileimage" src="" alt="No image" />
        <div>{username}</div>
        <div className="Mypage-bio">
          <p>Username: {username}</p>
          {/* <p>E-mail: {email}</p>
                  <p>Phone-number: {phonenumber}</p>
                  <p>Address: {address}</p> */}
        </div>
        <button className="editprofile">Edit bio</button>
        <button className="editprofile" onClick={watchMyPostlist}>
          My feed
        </button>
        <button className="editprofile" onClick={watchMyBookmarklist}>
          Bookmark-List
        </button>
      </div>
      <div className="post-box-mypage">
        {ismyposts
          ? mypostlist.map((posts) => (
              <Posting
                key={posts.id}
                id={posts.id}
                imageurl={posts.generated_image}
                handlePostClick={handlePostClick}
              />
            ))
          : bookmarkpostlist.map((posts) => (
              <Posting
                key={posts.post_id}
                id={posts.post_id}
                imageurl={posts.generated_image_url}
                handlePostClick={handlePostClick}
              />
            ))}
      </div>
    </div>
  );
}

export default Mypage;
