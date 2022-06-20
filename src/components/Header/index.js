import React from 'react';
import { Link } from 'react-router-dom';
import Notifications from '~/components/Notifications';

import logo from '~/assets/logo10.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Leandro Vieira</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://i.pravatar.cc/50"
              alt="Leandro Vieira" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

