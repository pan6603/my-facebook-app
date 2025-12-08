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
    AccoutText
} from "../../styles/login/layout/RightPanel.style"
import FloatingInput from "../../commons/login/FloatingInput"
import { useState } from "react";

export default function RightPanel () {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

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
                                        <FloatingInput 
                                            label="아이디 또는 이메일"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />

                                        <FloatingInput
                                            type="password"
                                            label="비밀번호"
                                            value={pw}
                                            onChange={(e) => setPw(e.target.value)}
                                        />
                                         
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