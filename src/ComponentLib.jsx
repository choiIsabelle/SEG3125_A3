import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color:rgb(46, 46, 46); /* Green */
    border: none;
    color: white;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;

    &:hover {
        background-color: rgb(66, 66, 66);
    }
    `;  

    export const CustomButton = ({ Icon, iconProps = {}, handleOnClick, children }) => {
        console.log(children)

        return (
            <StyledButton
                onClick={()=>handleOnClick()}
                >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                    {children}
                    {Icon && <Icon {...iconProps} />}
                </div>
            </StyledButton>
        );
    };
    
    