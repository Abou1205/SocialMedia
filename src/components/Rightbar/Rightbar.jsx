import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" className="birthdayImg" />
          <span className="birthdayText">
            <b>Abou</b> and <b>2 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };


  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rigthbarTitle">User Information</h4>
        <div className="rigthbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Barcelona</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">Married</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/person/1.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Juliana Thomp</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/2.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Adam Johnson</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/7.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Melissa Portch</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/4.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Seda Pritchett</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/5.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jason Glenson</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/6.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Melissa Vargas</span>
          </div>
        </div>
      </>
    )
  }

  return (
  <div className="rightbar">
    <div className="rightbarWrapper">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  </div>
  )
}

