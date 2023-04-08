import React, { useState } from 'react';
import "./EntaryPage.scss";
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
function EntryPage() {
  const [email, setemail] = useState()
  const [authalert, setauthalert] = useState()
  const navigate = useNavigate()
  
  const handleemail = (e) => {
    setemail(e.target.value)

    
  }
  return (
    <>
      <div className='banner'>
        <div className='tags'>
        <h1>Unlimited movies, TV shows and more.</h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <div className='input-field'>
            <input type='email' placeholder='email' onChange={handleemail} />
            <p style={{color:"red"}}>{ authalert}</p>
            
            <button className='btnen' disabled={!email} onClick={() => {
              let auth = email.split('')
              if (!auth.includes('@')&&!auth.includes('.')) {
             setauthalert("Please enter a valid email")
                
              }
              if (auth.includes('@')&&auth.includes('.')) {
              navigate('/home')
                
              }
            }}>Get Started</button>
          </div>
</div>
        

      </div>
       
    </>
  );
}

export default EntryPage;
