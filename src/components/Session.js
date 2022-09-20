import React from 'react'

const Session = () => {
    const setData = () => {
        let sessionObject = {username: 'Harvey Function'}
        sessionStorage.setItem('user data', JSON.stringify(sessionObject))
    }

    const getData = () => {
        let sessionData = sessionStorage.getItem('user data')
        sessionData = JSON.parse(sessionData);
        console.log(sessionData.username)
    } 
  return (
    <>
    <button onClick={setData}>Set Data</button>
    <button onClick={getData}>Get Data</button>
    </>
  )
}

export default Session