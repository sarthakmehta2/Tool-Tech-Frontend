// Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
   try{
    const response = fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        }),
    })
    .then(async function(res){
        const json = await res.json();
        console.log(json);
        if(json.success){
            navigate('/admin/app');
        }
        else{
            alert("Invalod creds")
        }
    })

   }catch(error){
    console.error('Error:', error);
    setError('An error occurred. Please try again.');
   }
  };

  return (
    <div id='signupdiv'>
      <h1>Tool & Tech</h1>
      <h3>Admin Login</h3>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id='signupbtn' onClick={handleSignup}>Log In</button>
      </form>
    </div>
  );
}

export default Signup;
