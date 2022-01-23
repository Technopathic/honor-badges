import { useState } from 'react'
import styled from '@emotion/styled'

import { FaBitcoin } from 'react-icons/fa'
import { BiCctv } from 'react-icons/bi'
import { GiPunchBlast, GiHandcuffs, GiMonkey } from 'react-icons/gi'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #231e32;
`

const Main = styled.main`
  width: 100%;
  max-width: 425px;
  min-height: 100vh;
`

const Header = styled.header`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: wonder;
  text-align: center;
  font-size: 2rem;
  font-weight: normal;
  color: #FFFFFF;
  -webkit-text-stroke: 2px black;
  line-height: 3.5rem;
  letter-spacing: -8px;
  position: relative;
  overflow: hidden;

  h1 {
    z-index: 3;
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.7));
  }

  .yellowLine {
    background: #f6bd64;
    width: 120px;
    height: 400px;
    position: absolute;
    right: 178px;
    transform: rotate(30deg);
  }

  .pinkLine {
    background: #ec5e90;
    width: 120px;
    height: 400px;
    position: absolute;
    right: 40px;
    transform: rotate(30deg);
  }

  @media(max-width: 375px) {
    font-size: 1.8rem;
  }
`

const Information = styled.section`
  margin: 32px 8px;

  .infoTitle {
    font-size: 14px;
    color: #787484;
    font-family: inter-bold;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  .infoContent {
    background: #302a43;
    border-radius: 8px;
    padding: 1rem;
    font-size:14px;
    line-height:1.75;
  }
`

const Badges = styled.section`
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .infoTitle {
    font-size: 14px;
    color: #787484;
    font-family: inter-bold;
    text-transform:uppercase;
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0px;
  font-size: 14px;

  .heart {
    color: #EA384D;
  }

  a {
    color: #f6f2fd;
  }
`

const Badge = styled.article`
  position: relative;
  margin: 20px 0px;

  .badgeContainer {
    width: 100%;
    height: 100px;
    background: #f27a99;
    border-radius:8px;
    display: flex;
    align-items: center;
    padding: 15px;
    position: relative;
    overflow: hidden;
    background: ${props => props.background};
    z-index: 4;
  }

  .badgeShadow {
    width: 90%;
    height: 20px;
    border-radius:8px;
    position: absolute;
    bottom:0;
    left: 5%;
    overflow: hidden;
    z-index: 3;
    box-shadow: 0px 10px 30px 0px rgba(${props => props.shadow}, 0.7);
  }
 

  .badgeImage {
    min-height: 70px;
    min-width: 70px;
    background: #F5F5F5;
    border-radius: 50%;
    position: relative;
    z-index:11;
    box-shadow: -5px 5px 8px 0px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 5px solid #302a43;
  }

  .badgeContent {
    padding-left: 16px;
    font-size: 2.6rem;
    text-align: center;
    text-transform: uppercase;
    font-family: inter-bold;
    letter-spacing: -1px;
    color: #F5F5F5;
    position: relative;
    z-index:10;
    text-shadow: -5px 5px 4px rgba(0, 0, 0, 0.1);

    @media(max-width: 375px) {
      font-size: 1.8rem;
    }

    @media(max-width: 320px) {
      font-size: 1.6rem;
    }
  }

  .smallerText {
    font-size: 2.2rem;

    @media(max-width: 375px) {
      font-size: 1.8rem;
    }

    @media(max-width: 320px) {
      font-size: 1.4rem;
    }
  }

  .noSign {
    height: 90px;
    width: 6px;
    background: #302a43;
    transform: rotate(-45deg);
    position: absolute;
  }
`

const CopySnack = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 425px;
  padding: 12px 0px;
  background: #FFFFFF;
  color: #222222;
  text-align: center;
  border-radius: 8px 8px 0px 0px;
  margin:0 auto;
  z-index: 12;
  font-size: 14px;
`

const Index = () => {
  const [showCopy, setShowCopy] = useState(false);

  const copyBadgeUrl = (badge) => {
    navigator.clipboard.writeText(`![${badge}](https://honorbadges.com/badges/${badge}.png)`);
    setShowCopy(true);
    setTimeout(() => {
      setShowCopy(false);
    }, 2000)
  }

  return (
    <Container>
      <Main>
        <Header>
          <h1>Honor<br />Badges</h1>
          <div className="yellowLine" />
          <div className="pinkLine" />
        </Header>
        <Information>
          <p className="infoTitle">Your Stance</p>
          <p className="infoContent">
            Many people cannot imagine their open source work being used in unwanted or criminal ways. While these badges may not legally prevent them from using your work, it will let people know you stand opposed to your work being used to harm others.
          </p>
        </Information>
        <Badges>
          <p className="infoTitle">Badges</p>
          <Badge background="linear-gradient(to left, #ff9472, #f2709c)" shadow="242, 122, 153" id="crypto" onClick={() => copyBadgeUrl('noCrypto')}>
            <div className="badgeContainer">
              <div className="badgeImage">
                <div className="noSign" />
                <FaBitcoin color="#302a43" size={50} />
              </div>
              <div className="badgeContent">No Crypto</div>
            </div>
            <div className="badgeShadow" />
          </Badge>

          <Badge background="linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)" shadow="31, 162, 255" id="nft" onClick={() => copyBadgeUrl('noNFTs')}>
            <div className="badgeContainer">
              <div className="badgeImage">
                <div className="noSign" />
                <GiMonkey color="#302a43" size={50} />
              </div>
              <div className="badgeContent">No NFTS</div>
            </div>
            <div className="badgeShadow" />
          </Badge>

          <Badge background="linear-gradient(to left, #4776e6, #8e54e9);" shadow="142, 84, 233" id="tracking" onClick={() => copyBadgeUrl('noTracking')}>
            <div className="badgeContainer">
              <div className="badgeImage">
                <div className="noSign" />
                <BiCctv color="#302a43" size={50} />
              </div>
              <div className="badgeContent">No Tracking</div>
            </div>
            <div className="badgeShadow" />
          </Badge>

          <Badge background="linear-gradient(to right, #f12711, #f5af19)" shadow="255, 89, 77" id="violence" onClick={() => copyBadgeUrl('noViolence')}>
            <div className="badgeContainer">
              <div className="badgeImage">
                <div className="noSign" />
                <GiPunchBlast color="#302a43" size={50} />
              </div>
              <div className="badgeContent">No Violence</div>
            </div>
            <div className="badgeShadow" />
          </Badge>

          <Badge background="linear-gradient(to right, #b993d6, #8ca6db)" shadow="185, 147, 214" id="traffic" onClick={() => copyBadgeUrl('noTrafficking')}>
            <div className="badgeContainer">
              <div className="badgeImage">
                <div className="noSign" />
                <GiHandcuffs color="#302a43" size={50} />
              </div>
              <div className="badgeContent smallerText">No Trafficking</div>
            </div>
            <div className="badgeShadow" />
          </Badge>
        </Badges>
        <Information>
          <p className="infoTitle">How to Use</p>
          <p className="infoContent">
            Click a badge above to copy its link, then paste the link into your project's readme file.
          </p>
        </Information>
        <Information>
          <p className="infoTitle">Sponsorship</p>
          <p className="infoContent">
            Hey! I'm Ren and I enjoy working on open-source projects. If you sponsor me, I will greatly appreciate it.
            <iframe src="https://github.com/sponsors/Technopathic/button" title="Sponsor Technopathic" height="35" width="116" style={{border:0, marginTop: '8px'}}></iframe>
          </p>
        </Information>
        <Footer>
          Made with&nbsp;<span className="heart">❤</span>&nbsp;in Helsinki by&nbsp;<a href="https://twitter.com/NowNanoTV" target="_blank" rel="noopener noreferrer">NowNano</a>
        </Footer>
        {showCopy && <CopySnack>Badge Link Copied!</CopySnack>}
      </Main>
    </Container>
  );
}

export default Index;
