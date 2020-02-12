import React from 'react';
import api from '../../service/api';

// import { Container } from './styles';

export default function Dashboard() {
  api.get('appointments');
  return <h1>DashBoard</h1>;
}
