import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    background: var(--medGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);
    display: flex;
    align-items: center;

    a {
        display: inline-flex;
        align-items: center;
        padding-left: 20px;
        padding-right: 10px;
        height: 100%;
        cursor: pointer;
    }

    img {
        object-position: center;
        object-fit: cover;
        width: 30px;
    }

    input {
        font-size: var(--fontBig);
        margin: 8px 0;
        border: 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: var(--white);

        :focus {
            outline: none;
        }
    }
`;