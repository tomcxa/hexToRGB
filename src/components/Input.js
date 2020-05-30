import React, { useState } from 'react'
import StyledForm from './StyledForm'

function hexValidation(value) {
    const regExp = /^#[0-9a-f]{6}$/i
    return regExp.test(value)
}

function hex2rgb(hexValue) {
    const rgbArray = hexValue.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
    const result = `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`
    return result
}

const HexForm = ({onChangeBackgroundColor, initialValue}) => {
    const initialRgb = hex2rgb(initialValue)
    const [rgb, setRgb] = useState(initialRgb)

    function handleSubmit(event) {
        event.preventDefault()
    }
    
    function onChangeHandle(event) {
        const { value } = event.target
        console.log(value);
        if (value.length === 7) {
            console.log(value);
            const isValidHex = hexValidation(value)
            const rgbOutput = isValidHex ?  hex2rgb(value) : 'Ошибка!'
            if (isValidHex) onChangeBackgroundColor(value)
            setRgb(rgbOutput)
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <input id="hex" name="hex" defaultValue={initialValue} onChange={onChangeHandle} />
            <output id="rgb" name="rgb">{rgb}</output>
        </StyledForm>
    )
}

export default HexForm
