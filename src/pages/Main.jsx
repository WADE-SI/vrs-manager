import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Container from "../components/Container";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import axios from 'axios';

import { atGigabytes } from '../service/gbto';


const Title = styled.p`
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 0;
`;

const DateInfo = styled.p`
    margin-top: 10px;
    font-size: 14px;
    color: #4b5563;
`;

const Card = styled.div`
    padding: 25px;
    background-color: #f3f4f6;
    border-radius: 10px;
    margin-top: 30px;
`;

const Login = () => {

    const [data,setData] = useState({});
    const [bandwidth, setBandwidth] = useState([]);
    let today = new Date();

    useEffect(() => {
        axios.get('https://api.wadeia.cloud/verus/bandwidth/usage')
        .then((response) => {
            setData(response.data);
            setBandwidth([]);

            Object.keys(response.data.detail).forEach((key)=>{
                setBandwidth(resource => [...resource,{"name":key, "bandwidth":Number((response.data.detail[key][0]+response.data.detail[key][1]).toFixed(1))}]);
            });

        });
    },[]);

    return  (
        data &&
        <Container>
            <Title>Welcome Back, Verus</Title>
            <DateInfo>{today.toLocaleDateString('en-US')}</DateInfo>
            
            <Card>
                <p style={{marginTop:0,marginBottom:'10px'}}>한달 총 사용량</p>
                <h1 style={{margin: 0}}> {atGigabytes((data.incoming+data.outgoing))}</h1>
            </Card>

            <Title style={{marginTop:'50px'}}>Bandwidth Per Month</Title>
            <label style={{color: '#9ca3af'}}>단위 : Gb</label>
            <LineChart width={800} height={350} data={bandwidth} margin={{ top: 35, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="bandwidth" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>

        </Container>
    );
}

export default Login;
