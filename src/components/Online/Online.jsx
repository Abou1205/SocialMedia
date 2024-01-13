import './online.css'

const Online = ({user}) => {

    const {username,profilePicture} = user

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img src={profilePicture} className="rigthbarProfileImg" />
        <span className="rigthbarOnline"></span>
      </div>
      <span className="rightbarUserName">{username}</span>
    </li>
  );
};

export default Online;
