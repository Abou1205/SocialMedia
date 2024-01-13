import { useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {
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
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <button className='loginButton' onClick={() => navigate('/home')}>Login</button>
                    <span className='loginForgot'>Forgot Password</span>
                    <button className='loginRegister' onClick={() => navigate('/register')}>Create a new account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login