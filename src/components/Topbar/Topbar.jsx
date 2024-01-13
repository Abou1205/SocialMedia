import { useNavigate } from 'react-router-dom';
import './topbar.css'
import {Search, Person, Chat, Notifications} from '@mui/icons-material';

const Topbar = () => {
  const navigate = useNavigate()
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <span className='logo' onClick={() => navigate('/home')}>NebulaNomad</span>
        </div>

        <div className="topbarCenter">
          <div className="searchbar">
            <Search className='searchIcon' />
            <input className='searchInput' placeholder='Search for friends, posts or videos' />
          </div>
        </div>

        <div className="topbarRight">
          <div className="topbarLinks">
            <span className='topbarLink' onClick={() => navigate('/home')} >Homepage</span>
            <span className='topbarLink'>Timeline</span>
          </div>

          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className='topbarIconBadge'>1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className='topbarIconBadge'>5</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className='topbarIconBadge'>3</span>
            </div>
          </div>

          <img src="/assets/person/1.jpeg" className='topbarImg' onClick={() => navigate('/profile')} />
        </div>
    </div>
  )
}

export default Topbar