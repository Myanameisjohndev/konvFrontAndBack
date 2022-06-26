import styled from 'styled-components';

export const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_GREY};
  display: flex;
  /* align-items: center; */
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;
  transition: 0.4s all;
  @media(max-width: 800px) {
    width: 140px;
  }
  @media(max-width: 600px) {
    width: 60px;
  }
  @media(max-width: 300px) {
    width: 30px;
  }

`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin: 10px;
  cursor: pointer;
`;
