import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const userNameRef = useRef(null)
  const userEmailRef = useRef(null)
  const userPasswordRef = useRef(null)
  const navigate = useNavigate()

  function handleSave(){
    const userName = userNameRef.current.value;
    const userEmail = userEmailRef.current.value;
    const userPassword = userPasswordRef.current.value;

    localStorage.setItem('userName',userName)
    localStorage.setItem('userEmail',userEmail)
    localStorage.setItem('userPassword',userPassword)

    alert('malumoringiz saqlandi')
    navigate('/signup')
  }

  return (
    <div style={{display:'flex', flexDirection:'column', width:'500px'}}>
      <input type="text" placeholder='Enter UserName' ref={userNameRef}/><br />
      <input type="email" placeholder='Enter UserEmail' ref={userEmailRef}/><br />
      <input type="password" placeholder='Enter UserPassword' ref={userPasswordRef}/><br />
      <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default SignIn
