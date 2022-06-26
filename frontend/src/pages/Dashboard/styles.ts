import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  height: 80%;
  width: 40%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 8px;
`;

export const Text = styled.h3`
  color: ${({ theme }) => theme.COLORS.DARK_GREY};
  font-size: 20px;
  @media(max-width: 800px) {
    font-size: 30px;
  }
  @media(max-width: 600px) {
    font-size: 20px;
  }
  @media(max-width: 300px) {
    font-size: 10px;
  }

`;
export const TextSecondary = styled.h3`
  color: ${({ theme }) => theme.COLORS.DARK_GREY};
  font-size: 20px;
  font-weight: 400;
  @media(max-width: 800px) {
    font-size: 30px;
  }
  @media(max-width: 600px) {
    font-size: 20px;
  }
  @media(max-width: 300px) {
    font-size: 10px;
  }

`;

export const HeaderDashboard = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  border-radius: 8px;
  margin-bottom: 10px;
`;
export const RowText = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: row;
`;

export const IconNav = styled.img`
  width: 25px;
  height: 25px;
  margin: 10px;
  cursor: pointer;
  color: #FFF;
  fill: #FFF;
  background-color: #FFF;
`;
