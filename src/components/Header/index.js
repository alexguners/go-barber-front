import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo-purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DashBoard</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Alex</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/60/abott@adorable.png"
              alt="Alex"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
