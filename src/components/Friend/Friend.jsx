import "./friend.css";

const Friend = ({user}) => {

    const {profilePicture,username} = user

  return (
    <li className="sidebarFriend">
      <img src={profilePicture} className="sidebarFriendImg" />
      <span className="sidebarFriendName">{username}</span>
    </li>
  );
};

export default Friend;
