'use client'

import { ButtonProps } from "./types"

export const Button = ({children, onClick}: ButtonProps) => {
    return (
        <button onClick={onClick} className="bg-slate-500">
            {children}
        </button>
    )
}

// styled.button`
//     background-color: #2F9BF4;
//     height: 42px;
//     width: 100%;
//     color: #fff;
//     border-radius: 50px;
//     max-width: 280px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 12px;
// `