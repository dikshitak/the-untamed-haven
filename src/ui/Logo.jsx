import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

const LogoText = styled.div`
  letter-spacing: 2px;
  color: var(--color-grey-700);
  font-size: 14px;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={"/logo.png"} alt="Logo" />
      <LogoText>THE UNTAMED HAVEN</LogoText>
    </StyledLogo>
  );
}

export default Logo;
