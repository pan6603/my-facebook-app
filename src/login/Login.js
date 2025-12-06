import { 
    LoginDiv,
    SplitLayout,
    LeftPanel,
    RightPanel,
    Divider,
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
    LoginText
} from "../styles/login/Login.style"


export default function Login() {
    return (
        <>
            <LoginDiv>
                <SplitLayout>
                    <LeftPanel></LeftPanel>
                    <Divider />
                    <RightPanel>
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
                                            </LoginForm>
                                        </InputGroupArea>
                                    </FormWrapper>
                                </FaceBookLoginFlexbox>
                            </FaceBookLogin>
                        </FlexboxCentering>
                    </RightPanel>
                </SplitLayout>
            </LoginDiv>
        </>
    )
}

