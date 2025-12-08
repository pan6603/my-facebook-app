import { 
    LoginDiv,
    SplitLayout,
    Divider
} from "../styles/login/Login.style"
import RightPanel from "./layout/RightPanel"
import LeftPanel from "./layout/LeftPanel"


export default function Login() {
    return (
        <>
            <LoginDiv>
                <SplitLayout>
                    <LeftPanel />
                    <Divider />
                    <RightPanel />
                </SplitLayout>
            </LoginDiv>
        </>
    )
}

