import styled from 'styled-components';

export const Wrapper = styled.div`
    color: var(--lightGrey);
    padding-bottom: 50px;

    @media screen and (max-width: 1366px) {
        
    }

    /* @media screen and (max-width: 768px) {
            height: 350px;
    }

    @media screen and (max-width: 500px) {
            height: 250px;
    } */
`;

export const Content = styled.div`
    color: var(--lightGrey);
    display: flex;

    .container {
        width: 200px;
    }

    a {
        background-color: var(--medGrey);
        text-decoration: none;
        color: var(--lightGrey);
        text-align: center;
        display: block;
        width: 200px;
        padding-bottom: 10px;
        border-radius: 10px;
        overflow: hidden;
        user-select: none;

        h3 {
            margin: 0;
        }
    }
   
`;


export const Image = styled.img`
    width: 100%;
    height: 300px;
`;