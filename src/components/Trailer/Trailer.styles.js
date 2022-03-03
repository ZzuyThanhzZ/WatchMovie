import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    animation: showModal linear 0.5s;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;

    @keyframes showModal {
        from {
            opacity: 0;
        } to {
            opacity: 1;
        }
    }

    .overlay {
        width: 100%;
        height: 400px;
        z-index: 1;
    }
`;

export const Content = styled.div`
    width: 540px;
    height: 100vh;
    padding: 20px;
    background-color: var(--darkGrey);
    margin: 0 auto;
    overflow-y: auto;
    z-index: 100;

    .heading {
        color: var(--white);
        font-size: var(--fontMed);
        display: flex;
        justify-content: space-between;
        align-items: center;

        i {
            color: var(--white);
            background-color: var(--darkGrey);
            border: none;
            cursor: pointer;
            font-size: var(--fontMed);
            padding: 4px 8px;
        }
    }

    .videos {
        color: var(--white);
        font-size: var(--fontMed);
        margin-bottom: 30px;

        h3 {
            margin-bottom: 10px;
        }

        iframe {
            width: 500px;
        height: 280px; 
        }
    }

    @media screen and (max-width: 720px) {
        width: 360px;
        padding: 10px;

        .videos {
            iframe {
                width: 340px;
                height: 200px; 
            }
        }
    }
`;