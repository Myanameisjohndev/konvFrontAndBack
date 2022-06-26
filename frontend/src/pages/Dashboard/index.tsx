import { useEffect, useState } from 'react';

import Bars from '../../assets/bars-solid.svg';
import Navbar from '../../Components/Navbar';
import { useContextApp } from '../../Context';
import { H1, ContainerAuth } from '../../global/styles/globals';
import {
  Container,
  HeaderDashboard,
  Text,
  TextSecondary,
  RowText,
  Content,
  IconNav,
  AreaCard,
  CardValues,
  Row,
  CardValueTextSecondary,
} from './styles';

const Dashboard = () => {
  const { user } = useContextApp();
  const [open, setOpen] = useState(false);

  return (
    <ContainerAuth>
      <Container>
      <HeaderDashboard>
        <RowText>
            <Text>Seja bem vindo</Text>
            <TextSecondary>&nbsp;{user?.name}</TextSecondary>
        </RowText>
        <Text>Gerencie suas operações de forma mais eficaz</Text>
        </HeaderDashboard>
        <Content>
          <Row>
            {!open ? (
                <IconNav src={Bars} onClick={() => setOpen(true)}/>

            )
              : <Navbar open={open} setOpen={setOpen}/>
              }
                <AreaCard>
                  <CardValues>
                    <CardValueTextSecondary>Saldo</CardValueTextSecondary>
                    <CardValueTextSecondary>
                      {user?.account_value.toFixed(2).replace('.', ',')}
                    </CardValueTextSecondary>
                  </CardValues>
                </AreaCard>
              </Row>
        </Content>
      </Container>
    </ContainerAuth>
  );
};

export default Dashboard;
