import React, { useState } from 'react'

const RandomUsers = (props) => {
  const subStr = (string) =>{
    return string.substr(0, 10)
  }
  const [dateOb, SetDateOb] = useState(false)
    
  return (
    <div className='w-[auto] h-[auto] px-[4rem] py-[2rem]' style={{border:"0.1rem solid black"}}>

        <h1 className='text-3xl font-[700] text-center '>RANDOM USER GENERATOR</h1>
        <div className='leading-[3rem] font-[500] text-[1.2rem]'>
            <img src={props.img} alt="" className='my-[2rem]' />

            <div className='flex gap-[0.5rem]'>
            <p>Name: {props.title},</p>
            {/* <p>{props.firstName}</p> */}
            {/* <p>{props.lastName}</p> */}
            </div>

            <p>Gender: {props.gender}</p>
            <p>Age: {props.age}</p>

            <div className='flex gap-[0.5rem]'>
            <p>Address: {props.number},</p>
            <p>{props.StrName},</p>
            <p>{props.city}</p>
            <p>{props.state},</p>
            <p>{props.postcode}.</p>
            </div>
            
            <p>Nationality: {props.nat}</p>
            <p>Email: {props.email}</p>
            <p>D.O.B: {dateOb === false ? subStr(props.dob): props.dob}</p>
            <p>Phone: {props.phone}</p>
            <p>Cell: {props.cell}</p>

            {/* <button onClick={props.handleClick} className='w-[auto] h-[auto] rounded-full border px-[2rem] py-[1rem] text-white bg-[black] mt-[1rem]'>Generate new user</button> */}
        </div>
    </div>
  )
}

export default RandomUsers