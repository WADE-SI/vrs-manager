import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { Password } from "primereact/password";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const LoginContainer = styled.div`
    width: 270px;
`;

const Logo = styled.div`
    text-align: center;
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 0;
`;

const Title = styled.p`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-top: 0;
`;

const ForgotPassword = styled.div`
    margin-top: 20px;
    text-align: center;
    & a{
        color: #6366f1;
        text-decoration: none;
    }
`;

const Main = () => {

    const [password, setPassword] = useState("");

    return (
        <LoginContainer>
            <Logo>Seunghyun</Logo>
            <Title>Welcome back</Title>

            <from onSubmit=''>
                <div className="card flex flex-column gap-1 mb-3 p-fluid">
                    <label>Email address</label>
                    <InputText keyfilter="email" />
                </div>

                <div className="card flex flex-column gap-1 mb-4 p-fluid">
                    <label>Password</label>
                    <Password
                        feedback={false}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        toggleMask
                    />
                </div>

                <div className="flex flex-column gap-1 p-fluid">
                    <Button label="Login" type="submit" />
                </div>
            </from>

            <ForgotPassword>
                <Link to="/forgot-password">Forgot password?</Link>
            </ForgotPassword>
            
        </LoginContainer>
    );
}

export default Main;