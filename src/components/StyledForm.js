import styled from 'styled-components'

const StyledForm = styled.form`
    width: 150px;
    & input,
    & output {
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        padding: 8px 8px;
        text-align: center;
        border: none;
        font-size: 1.1rem;
    }
    & output {
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
    }
`

export default StyledForm