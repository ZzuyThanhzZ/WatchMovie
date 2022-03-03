import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: var(--darkGrey);
    min-height: 100vh;
    overflow: hidden;
`;

export const Content = styled.div`
    padding: 80px 120px;

    @media screen and (max-width: 768px) {
        padding: 80px 20px;
    }

    .movie-container {
        display: flex;
        width: 100%;
        background-color: var(--white);
        margin: 20px auto;
        border-radius: 8px;
        overflow: hidden;

        .thumb {
            height: 200px;

            img {
                height: 100%;
            }
        }

        .description {
            margin-left: 10px;
            padding: 10px;

            h3 {
                margin: 10px 0;
            }

            p {
                color: var(--darkGrey);
                margin: 16px 0;
                font-weight: bold;
            }

            .movie-overview {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            
            .btn {
                display: flex;
                margin-top: 12px;

                a {
                    color: var(--darkGrey);
                    text-decoration: none;
                    margin-right: 20px;
                    text-align: center;
                    cursor: pointer;
                }

                .btn-play {
                    min-width: 150px;
                    background-color: var(--darkGrey);
                    color: var(--white);
                    padding: 10px;
                    border-radius: 4px;

                    i {
                        margin-right: 10px;
                    }
                }
            }
        }


        @media screen and (max-width: 500px) {

            .thumb {
                height: 150px;
            }

            .description {
                width: 300px;

                h3 {
                    margin: 0;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }

                p {
                    font-weight: 500;
                    margin: 10px 0;
                }

                .movie-overview {
                    display: none;
                }

                .btn {
                    justify-content: space-between;

                    .btn-play {
                        width: 80%;
                    }

                    .btn-detail {
                        display: none;
                    }

                    .btn-remove {
                        font-size: var(--fontBig);
                        display: flex;
                        align-items: center;
                        
                        span {
                            display: none;
                        }
                    }
                }
            }
        }
    }
`;