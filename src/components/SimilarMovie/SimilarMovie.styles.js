import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 60px 40px 40px;
    max-height: 860px;
    overflow-y: scroll;
`;

export const Content = styled.div`
    color: var(--lightGrey);
    .container {
        display: flex;
        margin-top: 10px;
        text-decoration: none;
        color: var(--lightGrey);

        :hover {
            cursor: pointer;

            img {
                opacity: 0.8;
            }

            h3 {
                color: red;
            }
        }
    }

    h2 {
        margin-top: 0;
    }

    h3 {
        max-width: 140px;
        margin-top: 0;
        margin-bottom: 10px;
    }
`;

export const Image = styled.img`
    width: 80px;
    height: 120px;
    margin-right: 20px;
`;