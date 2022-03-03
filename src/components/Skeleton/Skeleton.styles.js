import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: var(--darkGrey);
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: showout linear 0.2s;

    @keyframes showout {
        from {
            opacity: 0;
        } to {
            opacity: 1;
        }
    }
`;