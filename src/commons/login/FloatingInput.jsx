import { 
    FloatingInputDiv,
    FloatingIdOrPwInput,
    FloatingLabel
} from "../../styles/login/FloatingInput.style"
import { useState } from "react";

export default function FloatingInput({ label, value, onChange, type }) {
     const [isFocused, setIsFocused] = useState(false);

    return (
        <>
            <FloatingInputDiv>
                <FloatingIdOrPwInput 
                    type={type} 
                    value={value} 
                    onChange={onChange} 
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <FloatingLabel up={isFocused} for="email">{label}</FloatingLabel>
            </FloatingInputDiv>
        </>
    )
}