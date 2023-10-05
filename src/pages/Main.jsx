import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Container from "../components/Container";
import axios from 'axios';

import Chart from 'react-apexcharts'

import { formatNumber } from '../service/formatNumber';

// PrimeReact
import { InputSwitch } from "primereact/inputswitch";

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 70px;
    margin-bottom: 50px;
    h1{
        margin: 0;
    }
    .menu{
        display: flex;
        gap: 10px;
        .info{
            padding-top: 5px;
            color: #00000080;
        }
    }
`;

const Grid = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
`;

const Box = styled.div`
    width: 33.3%;
    padding: 15px 25px;
    background-color: #e5e5e5;
    border-radius: 7px;
    overflow: hidden;
`;

const Title = styled.p`
    margin-top: 7px;
    font-size: 18px;
`;

const Value = styled.p`
    margin: 0;
    font-size: 32px;
    padding-top: 5px;
    span{
        font-size: 20px;
        margin-left: 5px;
        font-weight: bold;
        color: #00000080;
    }
`;

const Login = () => {

    const [data,setData] = useState({});
    const [date,setDate] = useState({});
    const [bandwidth, setBandwidth] = useState([]);
    const [overview, setOverview] = useState(false);
    
    useEffect(() => {
        axios.get('https://api.wadeia.cloud/verus/bandwidth/usage')
        .then((response) => {
            setBandwidth([]);

            setData(response.data);

            setDate(Object.keys(response.data.detail));
            Object.keys(response.data.detail).forEach((key)=>{
                setBandwidth(resource => [...resource, Number((response.data.detail[key][0]+response.data.detail[key][1]).toFixed(1))]);
            });
        });
    },[]);

    return  (
        data &&
        <Container>
            
            <Header>
                <h1>Traffic</h1>
                <div className='menu'>
                    <span className='info'>자세히 보기</span>
                    <InputSwitch checked={overview} onChange={(e) => !isNaN(data.incoming)&&setOverview(e.value)} />
                </div>
            </Header>

            <Grid>
                <Box>
                    <Title>Total</Title>
                    <Value>{overview?(data.incoming + data.outgoing).toFixed(1):formatNumber(data.incoming + data.outgoing)}<span>GB</span></Value>
                </Box>
                <Box>
                    <Title>Inbound</Title>
                    <Value>{overview?data.incoming.toFixed(1):formatNumber(data.incoming)}<span>GB</span></Value>
                </Box>
                <Box>
                    <Title>Outbound</Title>
                    <Value>{overview?data.outgoing.toFixed(1):formatNumber(data.outgoing)}<span>GB</span></Value>
                </Box> 
            </Grid>
            
            <div style={{margin: "100px 0"}}>
                <Chart
                    options={{
                        chart: {
                            id: 'wade-cdn-traffic',
                        },
                        xaxis: {
                            categories: date,
                        }
                    }} 
                    series={[
                        {
                            name: "Total Traffic",
                            data: bandwidth
                        }
                    ]}
                    type="area"
                    height={400}
                />
            </div>

        </Container>
    );
}

export default Login;
