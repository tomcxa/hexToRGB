import React, {useState} from 'react';

import Background from "./components/Background";
import HexForm from './components/Input';

function App() {
    const [backgroundColor, setBackgroundColor] = useState('#000000')

    function changeBackgroundColor(newColor) {
        setBackgroundColor(newColor)
    }

    return (
        <Background hex={backgroundColor}>
            <HexForm onChangeBackgroundColor={changeBackgroundColor} initialValue={backgroundColor} />
        </Background>
    );
}

export default App;
