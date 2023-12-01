import React from 'react'

function MyPage() {
    [postlist, setPostList] = useState([]);
    [username, setUserName] = useState('');
    [email, setEmail] = useState('');
    [phonenumber, setPhoneNumber] = useState('');
    [address, setAdress] = useState('');
    [password, setPassword] = useState('');

    // Profile 수정 modal창을 위해서 임시로 배치
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAdress(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    async function requestUserProfile() {
        try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/accounts/profile/`, 
            { headers: { Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN") },}
        );
        console.log("response.data:", response.data)
        if (response) {
            console.log("Profile을 모두 불러오는 중...");
            setUserName(response.data.username);
            setEmail(response.data.email);
            setPhoneNumber(response.data.phone_number);
            setAdress(response.data.address);
        }
        } catch (error) {
        console.error("Authentication failed", error);
        }
    }

        // 서버에서 post를 조회하는 함수
    async function requestPosts() {
        try {
        setPostList([]);  // postlist 초기화
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/posts/`, {
            headers: { Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN") },
        }
        );
        console.log("response.data:", response.data)
        if (response) {
            console.log("post를 모두 불러오는 중...");
            let before_filtered_postlist = response.data
            
            setPostList(response.data)
        }
        } catch (error) {
        console.error("Error:", error);
        }
    }





    return (
        <div className='MyPage-container'>
            <div>
                <img
                    className='Mypage-profileimage'
                    src=''
                    alt='No image'
                />
                <div>{username}</div>
                <div className='Mypage-bio'>
                    <p>Username: {username}</p>
                    <p>E-mail: {email}</p>
                    <p>Phone-number: {phonenumber}</p>
                    <p>Address: {address}</p>
                </div>
                <button>Edit bio</button>
                <button>My feed</button>
            </div>
            <div className='Mypage-grid'>
                {postlist.map((posts) => (
                    <Posting key={posts.id}
                        id={posts.id}
                        image={posts.image}
                        title={posts.title}
                        content={posts.content}
                    />
                ))}
            </div>

        </div>
    )
}

export default MyPage