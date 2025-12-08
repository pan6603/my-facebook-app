import styled from "styled-components";

export const FloatingInputDiv = styled.div`
    position: relative;
    max-width: 546px;
    width: 100%;
    height: 60px;
    margin-top: 14px;
    display: flex;
    justify-content: center; 
    align-items: center;
    border: 1px solid #D8D3DA;
    border-radius: 14px;

    &:hover {
        border: 1px solid #b1aab7;  
    }
`


export const FloatingIdOrPwInput = styled.input`
    max-width: 516px;
    width: 100%;
    height: 38px;
    color: gray;
    border: none;
    outline: none; /* 입력 시 파란 테두리도 제거 */
    background-color: #FFFFFF;
`

export const FloatingLabel = styled.label`
    position: absolute;
    top: ${(props) => (props.up ? "6px" : "20px")};
    font-size: ${(props) => (props.up ? "12px" : "16px")};
    transition: all 0.2s;
    pointer-events: none;
    max-width: 512px;
    width: 100%;
    height: 19px;
    color: gray;
`

