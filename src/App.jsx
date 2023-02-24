import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import RandomUsers from './components/RandomUsers'

function App() {
  const url ='https://randomuser.me/api/'
  const [randomUser, SetRandomUser] = useState([])
  console.log(randomUser)
  const FetchRandomUsers = () => {
    axios
    .get(url)
    .then((res) => SetRandomUser(res.data.results))
    .catch((err) => console.log(err))
  }

  useEffect(()=>{
    FetchRandomUsers()
  }, [])

  return (
    <div className="App w-[100vw] h-[100vh]-x-hidden p-[2rem]">
      <h1 className='text-3xl font-[600] text-center '>FATHER AND SON BUSINESS ENTERPRISE</h1>
      <p className='text-2xl font-[600] text-center mb-[2rem]'>Employee's information</p>
    {randomUser.length === 0 ? (
      "Loading..."
    ): (
    <div>
          {randomUser.map((random) =>(
        <RandomUsers 
        key={random.key}
        title={random.name.title}
        firstName={random.name.first}
        lastName={random.name.last}
        email={random.email}
        img={random.picture.large}
        phone={random.phone}
        cell={random.cell}
        age={random.dob.age}
        gender={random.gender}
        dob={random.dob.date}      
       />
      )
      )}
    </div>
    )}
      
    </div>
  )
}

export default App
