import React from 'react';
import styled from 'styled-components';

const StyledDashboard = styled.div`
    width: 35%;
    display: flex;
    justify-content: space-around;

    button {
        padding: 1rem 2rem;
        cursor: pointer;
        font-size: 1.4rem;
    }
`;

const Dashboard = ({ count, setCount }) => {
    return (
        <StyledDashboard>
            <button>Strike</button>
            <button>Ball</button>
            <button>Foul</button>
            <button>Hit</button>
        </StyledDashboard>
    );
};

export default Dashboard;
