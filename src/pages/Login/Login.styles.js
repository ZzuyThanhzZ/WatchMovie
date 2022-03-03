import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background: 
        url(https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg), var(--darkGrey);
    
    background-size: 100%, center;
    background-position: center;
    height: 100vh;
    z-index: 1;

    .error {
        color: red;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    width: 420px;
    color: var(--white);
    background-color: rgba(0, 0, 0, 0.8);
    padding: 40px 60px;
    border-radius: 6px;

    input {
        width: 100%;
        height: 50px;
        border: 1px solid var(--darkGrey);
        border-radius: 6px;
        margin: 10px 0;
        padding: 10px;
        font-size: var(--fontSmall);
    }

    button {
        background-color: #e50914;
        border: none;
        width: 100%;
        border-radius: 6px;
        color: var(--white);
        height: 50px;
        font-size: var(--fontSmall);
        margin: 20px 0;

        :hover {
            cursor: pointer;
        }
    }

    .login-brand {
        display: flex;
        justify-content: space-between;
        font-size: var(--fontMed);
        width: 100%;
        margin-bottom: 20px;
        cursor: pointer;
        user-select: none;

        .g-signin {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        span {
            margin-left: 10px;
        }
    }

    .signup {
        a {
            color: #3498db;
            font-weight: 800;
            text-decoration: none;
        }
    }

    .g-signin2 {
        width: 80px;
        height: 80px;
    }

    .data {
    }
`;