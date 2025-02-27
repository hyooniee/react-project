import React, { forwardRef } from "react";
import { StyledInputStyled } from "./styled";

//Omit: React.InputHTMLAttributes<HTMLInputElement> 여기중에 size는 뺄거야 => 내가 지정해서 쓸거야
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    variant?: "default" | "outline" | "filled";
    size?: "small" | "medium" | "large"; // ✅ 우리가 원하는 `size` 타입
    fullWidth?: boolean;
    error?: boolean;
}

export const StyledInput = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
    return <StyledInputStyled ref={ref} {...props} />;
});
