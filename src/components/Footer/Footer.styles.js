import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: var(--medGrey);
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: white;

    a {
        cursor: pointer;
        padding: 0 2px;
        text-decoration: none;
        color: var(--white)
    }

    @media screen and (max-width: 720px) {
        display: block;
        text-align: center;

        div {
            padding: 10px;
        }

        a {
            font-size: var(--fontBig);
            margin: 0 6px;
        }

        span {
            font-size: var(--fontMed);
            display: block;
            margin-bottom: 6px;
        }

        p {
            margin: 0;
            padding-bottom: 8px;
        }
    }
`;

