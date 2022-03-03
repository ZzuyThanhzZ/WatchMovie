import {Wrapper, Content} from './Footer.styles';

const Footer = () => {

    return (
        <Wrapper>
            <Content>
                <div>
                    <span>Contact me:</span>
                    <a href="https://www.facebook.com/ndt2699/"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/duy-th%C3%A0nh-602239231/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://discord.gg/6gHVMnyN"><i className="fa-brands fa-discord"></i></a>
                </div>
                <p>Copyright Ekansuff © 2022</p>
            </Content>
        </Wrapper>
    )
}

export default Footer;