import '../App.css';
import {
MainContainer, InfoContainer, PdxDiv, Paradox, TallImage, SmallImage, Container, ImagesContainer, SmallICont, ProfilePicture, Title, Quotation, CTA, SocialIcon, RightContainer, TextContainer, LinksContainer, SocialsContainer, FooterContent, FooterSection, SubContainers, HomeFooter, FirstSubContent, SubContTitle, FSCSubTitle, FSCButton, FSCInput, FormsDiv,LinkSubContainer, NavigSubCont, ExploreLink, TopBtn, Content, SecondSubCTitle, Name} from '../styles/homeStyles';
import CzechPic from '../assets/images/IMG_9019.jpg';
import VenicePic from '../assets/images/IMG_2299.jpg';
import AustriaPic from '../assets/images/IMG_9254.jpg';
import ProfilePic from '../assets/images/Pic.jpg';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import HomeNavBar from '../Navs/HomeNavbar.jsx';
 import  { Footer }  from '../func.jsx'

export default function Home() {
  return (
   <>
    <HomeNavBar />
        <MainContainer>
          <Container>
              <PdxDiv>
                  <Paradox id='Paradox'>The <span>more</span><br />you know,<br />the <span>less</span><br />you know.</Paradox>
              </PdxDiv>

              <ImagesContainer>
                  <TallImage src={VenicePic} alt="VenicePic" title="Sala del Maggior Consiglio, Palazzo Ducale, Venice, Italy" />

                  <SmallICont>
                      <SmallImage src={CzechPic} alt="Czech" title="Prague's National Museum, Prague, Czech Republic" /><br />
                      <SmallImage src={AustriaPic} alt="Austria" title="Schönbrunn Palace, Vienna, Austria" />
                  </SmallICont>
              </ImagesContainer>
          </Container>

    </MainContainer>
    <MainContainer>
              <InfoContainer>
                  <div>
                      <ProfilePicture src={ProfilePic} alt="My photo" />
                  </div>
                  <RightContainer>
                      <TextContainer>

                          <Title>Quant. Tech | Finances Enthusiast | Writer</Title>
                          <Quotation>"No man's knowledge here can go beyond his experience."</Quotation>

                      </TextContainer>

                      <LinksContainer>
                          <CTA href='about.jsx'>Know me better</CTA>


                      </LinksContainer>

                  </RightContainer>

              </InfoContainer>
    </MainContainer>

    <FooterSection>
        <FooterContent>
            <SubContainers>
                <FirstSubContent>

                    <SubContTitle>Stay Connected</SubContTitle>
                    <FSCSubTitle>Sign up for more news regarding blog and portifolio updates and more.</FSCSubTitle>

                    <FormsDiv>
                    <FSCInput type="text" placeholder='Enter your Email...' />
                    <FSCButton type='submit'>Send</FSCButton>
                    </FormsDiv>

                </FirstSubContent>
            </SubContainers>


            <SubContainers>
                <Content>
                    <SecondSubCTitle>Navigate</SecondSubCTitle>

                    <LinkSubContainer>
                    
                        <NavigSubCont>
                            <ExploreLink href="/">aaaa</ExploreLink>
                            <ExploreLink href="/">bbbb</ExploreLink>
                            <ExploreLink href="//">cccc</ExploreLink>
                            <ExploreLink href="/">dddd</ExploreLink>
                            <ExploreLink href="/">eeee</ExploreLink>
                        </NavigSubCont>

                        <NavigSubCont>
                            <ExploreLink href="">ffff</ExploreLink>
                            <ExploreLink href="">gggg</ExploreLink>
                            <ExploreLink href="">hhhh</ExploreLink>
                            <ExploreLink href="">iiii</ExploreLink>
                            <ExploreLink href="">jjjj</ExploreLink>
                        </NavigSubCont>
                    </LinkSubContainer>
                        <TopBtn>To Top</TopBtn>
                </Content>

            </SubContainers>

            <SubContainers>
                <Content>
                        <SubContTitle>Contact Me</SubContTitle>

                    <div>
                        <p>Via Email: botelhothiago9@gmail.com</p>
                        <p>Phone Number: +55 11 99676-1203</p>
                    </div>
                </Content>

            <SocialsContainer>
                    <SocialIcon href="https://github.com/thigranado" target='_blank'>
                        <FaGithub size={30} />
                    </SocialIcon>

                    <SocialIcon href="https://www.linkedin.com/in/thiago-granado-71a4a7350/" target='_blank'>
                        <FaLinkedin size={30} />
                    </SocialIcon>

                    <SocialIcon href="mailto:botelhothiago9@gmail.com" target='_blank'>
                        <MdEmail size={30} />
                    </SocialIcon>

                    <SocialIcon href="https://www.instagram.com/thi.granado/" target='_blank'>
                        <FaInstagram size={30} />
                    </SocialIcon>
            </SocialsContainer>
                        <Name>- Thiago Botelho Granado</Name>
            </SubContainers>

        </FooterContent>

        <Footer />
    </FooterSection>
    </>

    
  );
}