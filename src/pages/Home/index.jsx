import React from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #2c3e50 30%, #3498db 90%)',
  color: 'white',
  padding: theme.spacing(15, 0),
  textAlign: 'center',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const Home = () => {
  return (
    <Box>
      <HeroSection>
        <Container>
          <Typography variant="h2" gutterBottom>
            PetCare Brasil
          </Typography>
          <Typography variant="h5" gutterBottom>
            Encontre os melhores serviços de pet grooming perto de você
          </Typography>
          <Button
            component={Link}
            to="/buscar"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 4 }}
          >
            Encontrar Serviços
          </Button>
        </Container>
      </HeroSection>

      <Container sx={{ my: 8 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Por que escolher o PetCare Brasil?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={4}>
            <FeatureCard>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Profissionais Qualificados
                </Typography>
                <Typography>
                  Todos os nossos parceiros são verificados e avaliados pela comunidade.
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureCard>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Preços Competitivos
                </Typography>
                <Typography>
                  Compare preços e escolha o melhor custo-benefício para seu pet.
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureCard>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Agendamento Fácil
                </Typography>
                <Typography>
                  Agende serviços com apenas alguns cliques, 24 horas por dia.
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
