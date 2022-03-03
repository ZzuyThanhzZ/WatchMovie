import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
    background: ${({ backdrop }) => 
        backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'
    };
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
        from {
            opacity: 0;
        } to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        display: block;
        max-height: none;
    }
`;

export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    overflow: hidden;

    .add-list {
        cursor: pointer;
        display: inline-block;
        margin: 0;
    }

    .category {
        display: flex;
        margin: 10px 0;

        li {
            margin-right: 8px;
            list-style-type: none;
            padding: 6px 10px;
            border: 1px solid #fff;
            border-radius: 50px;

            :hover {
                border: 1px solid red;
                color: red;
                cursor: pointer;
            }
        }

        @media screen and (max-width: 720px) {
            display: block;

            li {
                display: inline-block;
                margin-bottom: 8px;
            }
        }
    }

    .rating-directors {
        display: flex;
        justify-content: flex-start;
    }

    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background: #fff;
        color: #000;
        font-weight: 800;
        border-radius: 25px;
        border-radius: 50%;
        margin: 0;
    }

    .director {
        margin: 0 0 0 40px;

        p {
            margin: 0;
        }
    }

    h1 {
        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }

    .watchBtn {
        margin-top: 20px;

        a {
            background-color: #930002;
            display: inline-block;
            padding: 12px 16px;
            border-radius: 6px;
            text-decoration: none;
            color: #fff;
            margin-right: 8px;

            :hover {
                background-color: #e46466;
            }

            span {
                display: inline-block;
                margin-left: 8px;
            }
        }

        .trailer {
            background-color: #036bc6;

            :hover {
                background-color: #3898ec;
            }
        }
    }

`;