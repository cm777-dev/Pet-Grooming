import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background-color: #2c3e50;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
`;

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <StyledLink to="/">PetCare Brasil</StyledLink>
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/buscar">
            Buscar Serviços
          </Button>
          <Button color="inherit" component={Link} to="/blog">
            Blog
          </Button>
          <Button color="inherit" component={Link} to="/cadastro-empresa">
            Cadastrar Empresa
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
