import React from 'react';
import styled from 'styled-components';
import { strike, ball, foul, hit } from '../utils/at-bat-actions';

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

    const updateCount = action => {
        switch(action) {
            case 'strike':
                setCount(strike(count));
                break;
            case 'ball':
                setCount(ball(count));
                break;
            case 'foul':
                setCount(foul(count))
                break;
            case 'hit':
                setCount(hit());
                break;
        }
    };

    return (
        <StyledDashboard data-testid="dashboard">
            <button onClick={() => updateCount('strike')}>Strike</button>
            <button onClick={() => updateCount('ball')}>Ball</button>
            <button onClick={() => updateCount('foul')}>Foul</button>
            <button onClick={() => updateCount('hit')}>Hit</button>
        </StyledDashboard>
    );
};

export default Dashboard;
