import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: var(--darkGrey);
    padding: 80px 120px 0;

    @media screen and (max-width: 1280px) {
        padding: 80px 20px 0;
    }

    .fb-comments {
        background-color: var(--white);
    }
`;

export const Content = styled.div`
    display: flex;
`;

