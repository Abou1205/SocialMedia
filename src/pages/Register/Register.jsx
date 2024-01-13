import { useNavigate } from 'react-router-dom'
import './register.css'

const Register = () => {
    const navigate = useNavigate()
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">NebulaNomad</h3>
                <span className='loginDesc'>Connect with friends and the world around you</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Username' className="loginInput" />
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <input placeholder='Password Again' className="loginInput" />
                    <button className='loginButton'>Sign Up</button>
                    <button className='loginRegister' onClick={() => navigate('/')}>Log into Your Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register