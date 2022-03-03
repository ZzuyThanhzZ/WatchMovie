import styled from 'styled-components';

export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom, 
        rgba(0, 0, 0, 0) 41%, 
        rgba(0, 0, 0, 0.65) 100%
    ),
        url(${({image}) => image}), var(--darkGrey);
    
    background-size: 100%, cover;
    background-position: cover;
    height: 100vh;
    position: relative;
    animation: animateHeroImage 1s;
    z-index: 1;

    @keyframes animateHeroImage {
        from {
            opacity: 0;
        } to {
            opacity: 1;
        }
    }

    @media screen and (max-width: 500px) {
        background-size: 100%, cover;
        background-position: center;
        height: 80vh;
    }
`;

export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const Text = styled.div`
    z-index: 10;
    max-width: 700px;
    position: absolute;
    bottom: 120px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);

    h1 {

        @media screen and (max-width: 720px) {
            font-size: var(--fontBig);
        }
    }

    p {
        font-size: var(--fontMed);

        @media screen and (max-width: 720px) {
            font-size: var(--fontSmall);
        }
    }

    a {
        background-color: #2A2A2A;
        display: inline-block;
        padding: 12px 16px;
        border-radius: 6px;
        text-decoration: none;
        color: #fff;
        margin-right: 8px;

        :hover {
            background-color: var(--darkGrey);
        }

        span {
            display: inline-block;
            margin-left: 8px;
        }
    }

    @media screen and (max-width: 720px) {
        max-width: 100%;
    }
`;
