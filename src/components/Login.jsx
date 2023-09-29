import styled from "styled-components"
import '/src/index.css'
const Login = (props) => {
  return (
    <Container>
        <Content>
            <CTA>
             <CTALogoOne src="/Images/cta-logo-one.svg" alt=""/>   
             <Signup>Get all there</Signup>
             <Description>Get premier Access to Raya and the last Dragon for an additional fee
                with a Desiny+ subscription.As of 03/16/2021, the price of Disney+ and the the Disney
                Bundle will increase by 1$.
             </Description>
             <CTALogoTwo src="/Images/cta-logo-two.png" alt=""/>
            </CTA>
            <BgImage/>
            </Content>
    </Container>
  )
}

const Container=styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh`;

const Content=styled.div`
margin-bottom:10vh;
width:100%;
position:relative;
min-height: 100vh;
display:flex;
justify-content:center;
align-items:center;
box-sizing:border-box;
flex-direction:column;
padding:80px 40px;
height :100%`;

const BgImage=styled.div`
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(/Images/login-background.jpg);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
`
const CTA=styled.div`
max-width: 650px;
width: 100%;
display: flex;
flex-direction: column;
`;
const CTALogoOne=styled.img`
margin-bottom:12px;
max-width:600px;
width: 100%;
display: block;
min-height: 1px;
`;

const Signup=styled.a`
font-weight: bold;
text-transform: uppercase;
background-color: #0063e5;
padding: 16.5px 0;
border: 1px solid transparent;
margin-bottom: 12px;
border-radius: 4px;
letter-spacing: 1.2px;
font-size: 18px;
width: 100%;
&:hover{
background-color: #0483ee;
}
`;

const Description=styled.p`
color: hsla(0 0% 95.3% 1);
font-size: 11px;
line-height: 1.5;
margin: 0 0 24px;
letter-spacing: 1.5px;
`;
const CTALogoTwo=styled.img`
margin-bottom:20px;
max-width:600px;
width: 100%;
display: inline-block;
vertical-align: bottom;
`;

export default Login