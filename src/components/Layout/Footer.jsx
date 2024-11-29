import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import styled from 'styled-components';

const StyledFooter = styled(Box)`
  background-color: #2c3e50;
  color: white;
  padding: 3rem 0;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              PetCare Brasil
            </Typography>
            <Typography variant="body2">
              A melhor plataforma para encontrar serviços de pet grooming no Brasil.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Links Úteis
            </Typography>
            <Link href="/sobre" color="inherit" display="block">Sobre Nós</Link>
            <Link href="/contato" color="inherit" display="block">Contato</Link>
            <Link href="/termos" color="inherit" display="block">Termos de Uso</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contato
            </Typography>
            <Typography variant="body2">
              Email: contato@petcarebrasil.com.br<br />
              Tel: (11) 9999-9999
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} PetCare Brasil. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
