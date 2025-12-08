import { 
    RightPanelDiv,
    FlexboxCentering,
    FaceBookLogin,
    FaceBookLoginFlexbox,
    FormWrapper,
    FormTitle,
    FormTitleText,
    InputGroupArea,
    LoginForm,
    IdInputDiv,
    IdInput,
    PassWordInputDiv,
    PassWordInput,
    LoginButtonDiv,
    LoginButton,
    LoginTextFlexBox,
    LoginText,
    ForgotPasswordButton,
    ForgotPasswordLink,
    ForgotPwTextDiv,
    ForgotPwText,
    CreateNewAccountButton,
    CreateAccountButton,
    CreateAccountButtonLink,
    AccoutTextDiv,
    AccoutText,
} from "../../styles/login/layout/RightPanel.style"



export default function RightPanel () {
    return (
        <>
            <RightPanelDiv>
                <FlexboxCentering>
                    <FaceBookLogin>
                        <FaceBookLoginFlexbox>
                            <FormWrapper>
                                <FormTitle>
                                    <FormTitleText>FaceBook에 로그인</FormTitleText>
                                </FormTitle>
                                <InputGroupArea>
                                    <LoginForm>
                                        <IdInputDiv>
                                            <IdInput placeholder="이메일 또는 휴대번호"></IdInput>
                                        </IdInputDiv>
                                        <PassWordInputDiv>
                                            <PassWordInput placeholder="비밀번호"></PassWordInput>
                                        </PassWordInputDiv>
                                        <LoginButtonDiv>
                                            <LoginButton>
                                                <LoginTextFlexBox>
                                                    <LoginText>로그인</LoginText>
                                                </LoginTextFlexBox>
                                            </LoginButton>
                                        </LoginButtonDiv>
                                        <ForgotPasswordButton>
                                            <ForgotPasswordLink>
                                                <ForgotPwTextDiv>
                                                    <ForgotPwText>비밀번호를 잊으셨나요?</ForgotPwText>
                                                </ForgotPwTextDiv>
                                            </ForgotPasswordLink>
                                        </ForgotPasswordButton>
                                        <CreateNewAccountButton>
                                            <CreateAccountButton>
                                                <CreateAccountButtonLink>
                                                    <AccoutTextDiv>
                                                        <AccoutText>새 계정 만들기</AccoutText>
                                                    </AccoutTextDiv>
                                                </CreateAccountButtonLink>
                                            </CreateAccountButton>
                                        </CreateNewAccountButton>
                                    </LoginForm>
                                </InputGroupArea>
                            </FormWrapper>
                        </FaceBookLoginFlexbox>
                    </FaceBookLogin>
                </FlexboxCentering>
            </RightPanelDiv>
        </>
    )
}