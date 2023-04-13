import React from 'react'
import classes from './Home.module.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];

  console.log(data)

  return (
    <div className="users">
      {data.map((user) => (
        <div className={classes.testaction}>
        <div className="user">id:{user.id}</div>
        <div className="user">name:{user.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Home
