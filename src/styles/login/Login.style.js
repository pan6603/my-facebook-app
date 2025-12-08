import styled from "styled-components";


export const LoginDiv = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 100vh;
` 

export const SplitLayout = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 690px;
    display: flex;
`

export const Divider = styled.div`
    width: 2px;
    background-color: #FFFFFF;
`

export const LeftPanel = styled.div`
    max-width: 788px;
    width: 100%;
    height: 690px;
    background-color: orange;
`

export const RightPanel = styled.div`
    max-width: 650px;
    width: 100%;
    height: 690px;
`

export const FlexboxCentering = styled.div`
    max-width: 650px;
    width: 100%;
    height: 690px;
    display: flex;
    justify-content: center; 
    align-items: center;
`

export const FaceBookLogin = styled.div`
    max-width: 650px;
    width: 100%;
    height: 448px;
`

export const FaceBookLoginFlexbox = styled.div`
    max-width: 650px;
    width: 100%;
    height: 448px;
    display: flex;
    justify-content: center; 
    align-items: center;
`

export const FormWrapper = styled.div`
    max-width: 546px;
    width: 100%;
    height: 448px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const FormTitle = styled.div`
    max-width: 546px;
    width: 100%;
    height: 28px;
`

export const FormTitleText = styled.div`
    width: max-content;
    height: max-content;
    color: #000;
    padding-top: 12px;
    font-size: 18px;
    font-weight: 500;
`

export const InputGroupArea = styled.div`
    max-width: 546px;
    width: 100%;
    height: 404px;
`

export const LoginForm = styled.form`
    max-width: 546px;
    width: 100%;
    height: 404px;
    background-color: red;
    display: flex;
    flex-direction: column;
`

export const IdInputDiv = styled.div`
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

export const IdInput = styled.input`
    max-width: 516px;
    width: 100%;
    height: 38px;
    color: gray;
    border: none;
    outline: none; /* 입력 시 파란 테두리도 제거 */
    background-color: #FFFFFF;
`

export const PassWordInputDiv = styled.div`
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

export const PassWordInput = styled.input`
    max-width: 516px;
    width: 100%;
    height: 38px;
    color: gray;
    border: none;
    outline: none; /* 입력 시 파란 테두리도 제거 */
    background-color: #FFFFFF;
`

export const LoginButtonDiv = styled.div`
    max-width: 546px;
    width: 100%;
    height: 56px;
    margin-top: 8px;
`

export const LoginButton = styled.div`
    max-width: 546px;
    width: 100%;
    height: 44px;
    background-color: #2A63D8;
    margin-top: 8px;
    display: flex;
    justify-content: center; 
    align-items: center;
    border-radius: 24px;

    &:hover {
        background-color: #1F4EB3; /* 조금 더 진한 파랑 */
    }
`


export const LoginTextFlexBox = styled.div`
    max-width: 512px;
    width: 100%;
    height: 9px;
    display: flex;
    justify-content: center; 
    align-items: center;
`

export const LoginText = styled.div`
    width: max-content;
    height: max-content;
    color: white;
    font-size: 15px;
`