import React from 'react'

const RandomUsers = (props) => {
    
  return (
    <div className='w-[30rem] h-[auto] px-[4rem] py-[2rem]' style={{border:"0.1rem solid black"}}>

        <div className='leading-[3rem] font-[400] text-[1.2rem]'>
            <img src={props.img} alt="" className='my-[2rem]' />
            <div className='flex gap-[0.5rem]'>
            <p>Name: {props.title},</p>
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            </div>
            <p>Gender: {props.gender}</p>
            <p>Age: {props.age}</p>
            <p>Address: {props.location}</p>
            <p>Email: {props.email}</p>
            <p>D.O.B: {props.dob}</p>
            <p>Phone: {props.phone}</p>
            <p>Cell: {props.cell}</p>
            {/* <button className='border w-[auto] h-[auto] py-[0.5rem] px-[1rem] rounded-full my-[2rem]' onClick={() => {props.funtion}}>Generate User</button> */}
        </div>
    </div>
  )
}

export default RandomUsers