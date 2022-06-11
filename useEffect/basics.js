import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const UseEffectBasics = () => {
    const [value, setValue] = useState(0);
    const [name, setName]  = useState('vic');

    // the callback passed is by default run whenever a the component is re-rendered
    useEffect(() => {
        document.title = `New messages (${value})`;
        console.log('document update')
    })

    // passing an empty array as the second argument to useEffect will make it run only the first time the component is rendered
    useEffect(() => {
        console.log('empty use effect')
    }, [])

    // passing state values inside the array will make the useEffect to run first time the component is rendered and everytime any of the states in the array is re-rendered. These states are the dependencies for the useEffect
    useEffect(() => {
        console.log(name + ' from dep')
        console.log(value + ' from dep')
    }, [value, name])

  return (
    <>
        <h1>{value}</h1>
        <button type="button" onClick={() => setValue(value + 1)}>click me</button>
        <button type='button' onClick={() => setName(name + value)}>change name</button>
    </>
  )
}

export default UseEffectBasics