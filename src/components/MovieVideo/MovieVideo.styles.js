import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
`;

export const Content = styled.div`
    color: var(--lightGrey);

    .navigate {
        margin: 20px 0;
        a {
            text-decoration: none;
            font-size: var(--fontMed);
            color: var(--lightGrey);
        }
    }

    iframe {
        border-radius: 4px;
        width: 100%;
        height: 550px;

        @media screen and (max-width: 1024px) {
            height: 450px;
        }

        @media screen and (max-width: 768px) {
            height: 350px;
        }

        @media screen and (max-width: 500px) {
            height: 250px;
        }
    }

    
`;

export const Text = styled.div`
    max-width: 100%;
    padding: 20px 0;
    color: var(--lightGrey);
    overflow: hidden;

    .add-watchlist {

        i {
            font-size: 20px;
            padding-left: 10px;
            cursor: pointer;
        }
    }

    h1 {
        color: #9d0808;
        margin-top: 8px;
        margin-bottom: 10px;
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
        color: var(--lightGrey);
    }

    .score {
        width: 35px;
        height: 35px;
        font-weight: 800;
        margin: 0;
    }

    .director {
        margin: 16px 0;
    }

    h1 {
        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
`;