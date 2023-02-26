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
    <div className="App w-[100vw] h-[100vh] overflow-x-hidden flex place-content-center pt-[2rem]">

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
        number={random.location.street.number} 
        StrName={random.location.street.name} 
        city={random.location.city}
        state={random.location.state}
        postcode={random.location.postcode}  
        nat={random.nat}
       />
      )
      )}

      <button onClick={() => FetchRandomUsers()} className='w-[auto] h-[auto] rounded-full border px-[2rem] py-[1rem] text-white bg-[black] mt-[1rem]'>Generate new user</button>
    </div>
    )}
      
    </div>
  )
}

export default App
