import React from 'react'


function Signup() {
  return (
    <div style={{display:'flex', flexDirection:'column', width:'500px'}}>
      <input type="text" placeholder='Enter UserName'/><br />
      <input type="password" placeholder='Enter Password'/> <br />
      <button>Login in</button>
    </div>
  )
}
export default Signup
