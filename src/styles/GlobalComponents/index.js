import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const Section2 = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
  margin: 10px auto;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 0px;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const Section3 = styled.section`

  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
  margin: 0 auto;
  max-width: 80vw;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 0px;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65px" : "56px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  margin-top: 2rem;
  margin-bottom: ${(props) => (props.flexColumnSmall ? "6rem" : "2rem")};
  width: max-content;
  max-width: 100%;
  
  padding: ${(props) => (props.main ? "10px 0 16px" : "0")};
  
  @media ${(props) => props.theme.breakpoints.xl}{
    font-size: ${(props) => (props.main ? "58px" : "50px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: ${(props) => (props.main ? "45px" : "42px")};
    line-height: ${(props) => (props.main ? "45px" : "42px")};
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "40px" : "35px")};
    line-height: ${(props) => (props.main ? "40px" : "35px")};
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.main ? "32px" : "28px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
  
  @media screen and (max-width: 500px) and (min-width: ${(props) => (props.flexColumnSmall ? "0" : "501")}){
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    font-size: ${(props) => (props.main ? "270px" : "22px")};
    line-height: ${(props) => (props.main ? "27px" : "22px")};
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

export const SectionTitle3 = styled.h3`
  font-weight: 5;
  font-size: ${(props) => (props.main ? "52px" : "42px")};
  line-height: ${(props) => (props.main ? "52px" : "42px")};
  width: fit-content;
  text-align: center;
  margin-bottom: 40px;
  margin-left: 20px;
  background-color: chocolate;
  border-radius: 20px;
  padding: 17px 17px;
  text-shadow: 3px 3px 3px black;
  margin-top: 30px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "45px" : "36px")};
    line-height: ${(props) => (props.main ? "50px" : "40px")};
    margin-bottom: 30px;
    padding: 14px 14px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    padding: 12px 12px;
    margin-bottom: 25px;
  }
  
  @media screen and (max-width: 425px){
    width: min-content;
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    padding: 8px 8px;
    margin-bottom: 20px;  
    
}
`;

export const SectionTitle4 = styled.h2`
  font-weight: 5;
  text-align: center;
  font-size: ${(props) => (props.main ? "100px" : "90px")};
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(#e66465, #9198e5);
  border-radius: 20px;
  padding: 5px 10px;
  text-shadow: 3px 3px 3px black;
  margin-top: 30px;
  width: max-content;
  max-width: 100%;
  
  @media ${(props) => (props.theme.breakpoints.md)} {
    font-size: ${(props) => (props.main ? "50px" : "45px")};
  }
  @media ${(props) => (props.theme.breakpoints.xsm)} {
    font-size: ${(props) => (props.main ? "35px" : "32px")};
  }
`

export const SectionTitle2 = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65px" : "56px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  width: max-content;
  max-width: 100%;
  margin-left: 36%;

  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

export const SectionText = styled.p`
  max-width: 80vw;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 420px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const SectionText2 = styled.p`
  max-width: 650px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 420px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const SectionText4 = styled.p`
max-width: 950px;
font-size: 24px;
line-height: 40px;
font-weight: bold;
padding-bottom: 3.6rem;
padding-top: 3.6rem;
padding-right: 2rem;
padding-left: 2rem;
background: linear-gradient(grey, black);
margin-bottom: 5rem;
text-align: center;
align-self: center;
border-radius: 40px;
color: rgba(255, 255, 255, 0.5);

@media ${(props) => props.theme.breakpoints.md} {
  max-width: 420px;
  font-size: 20px;
  line-height: 32px;
  padding-bottom: 24px;
}

@media ${(props) => props.theme.breakpoints.sm} {
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 16px;
}
`;

export const SectionDivider2 = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-around;
  margin-bottom: 50px;
`

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) =>
    props.colorAlt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #F4743B 0%, #25283D 100%)"};

  margin: ${(props) => (props.divider ? "4rem 0" : "")};

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`;
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
export const SecondaryBtn = styled.button`
  color: #fff;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 24px;
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;
export const Btn3 = styled.button`
  color: #fff;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  font-weight: 600;
  margin-bottom: 82px;
  margin-left: 48%;
  font-size: 45px;
  line-height: 2px;
  width: fit-content;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    left: -800px;
    margin-bottom: 64px;
    padding: 1px 1px;
    width: 7%;
    font-size: 39px;
    line-height: 3px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    
    left: -400px;
    margin-bottom: 40px;
    display: flex;
    padding: 2px;
    width: 10%;
    font-size: 29px;
    line-height: 16px;
  }
`;

export const ButtonBack = styled.div`
  width: ${({ alt }) => (alt ? "150px" : "262px")};
  height: ${({ alt }) => (alt ? "52px" : "64px")};
  border-radius: 50px;
  font-size: ${({ alt }) => (alt ? "25px" : "30px")};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form ? "0" : "0 0 80px")};
  color: #fff;
  background: ${({ alt }) =>
    alt
      ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)"
      : "linear-gradient(170deg, #122C34 0%, #F4743B 100%)"};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => (alt ? "150px" : "184px")};
    height: ${({ alt }) => (alt ? "52px" : "48px")};
    font-size: ${({ alt }) => (alt ? "26px" : "22px")};
    margin-bottom: ${({ alt }) => (alt ? "0" : "64px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 20px;
    margin-bottom: ${({ alt }) => (alt ? "0" : "32px")};
  }
`;

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt }) =>
    alt
      ? "linear-gradient(270deg, #BBE6E4 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #F4743B 0%, #122C34 100%)"};
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};
  transition: 0.4s ease;
  font-size: ${({ alt }) => (alt ? "25px" : "30px")};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) =>
    disabled
      ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)"
      : "none"};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => (alt ? "26px" : "22px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`;

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => (large ? "24px" : "16px")};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => (large ? "16px" : "8px")};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => (large ? "0" : "8px")};
  }
`;

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => (large ? "32px" : "24px")};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => (nav ? "16px" : "24px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => (large ? "32px" : "16px")};
  }
`;
