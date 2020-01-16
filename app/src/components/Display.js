import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10rem;
`;

const Display = ({ balls, strikes }) => {
    return (
        <StyledDisplay>
            <div>{balls} balls</div>
            <div>{strikes} strikes</div>
        </StyledDisplay>
    );
}

export default Display;
