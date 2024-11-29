import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Rating,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const DetailSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const MapContainer = styled(Box)(({ theme }) => ({
  height: '400px',
  width: '100%',
  marginBottom: theme.spacing(3),
}));

const ReviewItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.grey[50],
  borderRadius: theme.shape.borderRadius,
}));

const BusinessDetails = () => {
  // Mock data - will be replaced with API calls
  const business = {
    name: 'Pet Shop Exemplo',
    rating: 4.5,
    totalReviews: 128,
    address: 'Rua Exemplo, 123 - São Paulo, SP',
    phone: '(11) 9999-9999',
    email: 'contato@petshopexemplo.com.br',
    description: 'O melhor pet shop da região com serviços de alta qualidade para seu pet.',
    location: {
      lat: -23.550520,
      lng: -46.633308,
    },
    services: [
      { name: 'Banho', price: 'R$ 50,00' },
      { name: 'Tosa', price: 'R$ 70,00' },
      { name: 'Hidratação', price: 'R$ 45,00' },
    ],
    reviews: [
      {
        id: 1,
        author: 'Maria Silva',
        rating: 5,
        date: '2024-01-10',
        comment: 'Excelente atendimento! Meu cachorro adorou o banho.',
      },
      {
        id: 2,
        author: 'João Santos',
        rating: 4,
        date: '2024-01-08',
        comment: 'Muito bom, mas um pouco caro.',
      },
    ],
  };

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <DetailSection>
            <Typography variant="h4" gutterBottom>
              {business.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={business.rating} precision={0.5} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                ({business.totalReviews} avaliações)
              </Typography>
            </Box>
            <Typography paragraph>{business.description}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ mr: 1 }} />
                <Typography>{business.address}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography>{business.phone}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 1 }} />
                <Typography>{business.email}</Typography>
              </Box>
            </Box>
          </DetailSection>

          <DetailSection>
            <Typography variant="h5" gutterBottom>
              Localização
            </Typography>
            <MapContainer>
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={{ height: '100%', width: '100%' }}
                  center={business.location}
                  zoom={15}
                >
                  <Marker position={business.location} />
                </GoogleMap>
              </LoadScript>
            </MapContainer>
          </DetailSection>

          <DetailSection>
            <Typography variant="h5" gutterBottom>
              Avaliações
            </Typography>
            <List>
              {business.reviews.map((review) => (
                <ReviewItem key={review.id}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Avatar>{review.author[0]}</Avatar>
                    </Grid>
                    <Grid item xs>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="subtitle1">{review.author}</Typography>
                        <Typography variant="caption">
                          {new Date(review.date).toLocaleDateString('pt-BR')}
                        </Typography>
                      </Box>
                      <Rating value={review.rating} size="small" readOnly />
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {review.comment}
                      </Typography>
                    </Grid>
                  </Grid>
                </ReviewItem>
              ))}
            </List>
            <Button variant="outlined" fullWidth>
              Ver Mais Avaliações
            </Button>
          </DetailSection>
        </Grid>

        <Grid item xs={12} md={4}>
          <DetailSection>
            <Typography variant="h5" gutterBottom>
              Serviços e Preços
            </Typography>
            <List>
              {business.services.map((service, index) => (
                <React.Fragment key={service.name}>
                  <ListItem>
                    <ListItemText
                      primary={service.name}
                      secondary={service.price}
                    />
                  </ListItem>
                  {index < business.services.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Agendar Serviço
            </Button>
          </DetailSection>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BusinessDetails;
