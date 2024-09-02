import React, { useState } from 'react'
import ButtonComp from '../ElementComponents/Button'

function Ex4(props) {
    const [num,setNum] = useState(0)

    const addval = (val) => {
        setNum(num + val)
    }
    return (
        <div>
            <h1>Custom Element Component</h1>
            <h1> num = { num } </h1>
            <ButtonComp title="Add" val={10} clickHandler={addval} btnCss="btn success" />
            <ButtonComp title="Add" val={50} clickHandler={addval} btnCss="btn danger" />
            <ButtonComp title="Add" val={75} clickHandler={addval} btnCss="btn success" />
        </div>
    )
}

export default Ex4