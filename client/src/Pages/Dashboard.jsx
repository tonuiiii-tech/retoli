
import React, { useState, useEffect } from 'react';
 const Dashboard = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const fetchUsers= async()=>{
            const response = await fetch('https://charity-minds-backend.onrender.com/api/v1/users',{
                method:'GET',
                headers:{
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
    
    setUsers(data); 
  };

  fetchUsers();
}, []);
  return (
    <>
    {/* CARDS */}
      <div>
        {/* total users card  */}
        <div>
        TOTAL USERS{users.length}
        </div>
        USERS REGISTERED THIS MONTH
    </div>
    </>
  
  )
}
export default Dashboard