import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: var(--medGrey);
    position: fixed;
    bottom: 70px;
    right: 40px;
    width: 50px;
    height: 50px;
    border-radius: 15px;
    z-index: 100;
    cursor: pointer;  
`;

export const Content = styled.div`
    font-size: var(--fontBig);
    color: var(--white);
    height: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
`;