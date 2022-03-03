import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.2);
    padding: 0 20px;
    transition: background-color 1s, transform 0.5s;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
    color: var(--white);

    a {
        color: var(--white);
        text-decoration: none;
    }

    .container {
        display: flex;
        justify-content: right;
        align-items: center;

        .login {
            color: #9d0808;
            margin-right: 20px;
            position: relative;

            .user {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            span {
                color: var(--white);
            }

            img {
                width: 30px;
                border-radius: 50%;
                margin-left: 4px;
            }

            .logout {
                position: absolute;
                left: -4px;
                bottom: -80px;
                background-color: var(--white);
                color: var(--darkGrey);
                border-radius: 6px;

                a {
                    display: block;
                    color: var(--darkGrey);
                    font-weight: 800;
                    text-decoration: none;
                    padding: 8px 20px 4px 20px;
                    min-width: 120px;
                    z-index: 10;

                    :hover {
                        color: #9d0808;
                        border-radius: 6px;
                    }

                    i {
                        margin-right: 6px;
                    }
                }

                :after {
                    content: '';
                    position: absolute;
                    top: -14px;
                    right: 20px;
                    border-width: 8px 6px;
                    border-style: solid;
                    border-color: transparent transparent var(--white) transparent;
                    z-index: 1;
                }
            }

            :hover {
                cursor: pointer;
            }
        }

        span {
            margin: 0 5px;
            font-weight: 700;
        }

    }
`;

export const LogoImg = styled.img`
    width: 200px;

    @media screen and (max-width: 500px) {
        width: 150px;
    }
`;

export const SubImg = styled.img`
    width: 100px;

    @media screen and (max-width: 500px) {
        width: 80px;
    }
`;

export const SearchImg = styled.img`
    width: 30px;
`;