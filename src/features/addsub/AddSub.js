import React from 'react'
import { useSelector } from 'react-redux'
import { selectCount } from './addSubSlice'

export default function AddSub() {

    let store = useSelector(selectCount)
    return (
        <>
            {console.log(store)}
            <h1>{store}</h1>
            <button>+</button>
            <button>Reset</button>
            <button>-</button>
        </>
    )
}
