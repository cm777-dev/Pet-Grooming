import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const BlogCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const BlogImage = styled(CardMedia)({
  paddingTop: '56.25%', // 16:9 aspect ratio
});

const Blog = () => {
  // Mock data - will be replaced with API calls
  const blogPosts = [
    {
      id: 1,
      title: 'Como Escolher o Melhor Pet Shop',
      excerpt: 'Dicas importantes para escolher o melhor local para cuidar do seu pet...',
      image: 'https://source.unsplash.com/random/800x600/?pet,shop',
      category: 'Dicas',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'Cuidados Essenciais na Hora do Banho',
      excerpt: 'Aprenda os principais cuidados que seu pet precisa durante o banho...',
      image: 'https://source.unsplash.com/random/800x600/?dog,bath',
      category: 'Cuidados',
      date: '2024-01-14',
    },
    {
      id: 3,
      title: 'Tendências em Tosa para 2024',
      excerpt: 'Conheça os estilos de tosa que estão fazendo sucesso este ano...',
      image: 'https://source.unsplash.com/random/800x600/?dog,grooming',
      category: 'Tendências',
      date: '2024-01-13',
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom>
        Blog PetCare
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Dicas, novidades e informações sobre o mundo pet
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {blogPosts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <BlogCard>
              <BlogImage
                image={post.image}
                title={post.title}
              />
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={post.category}
                    color="primary"
                    size="small"
                    sx={{ mr: 1 }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </Typography>
                </Box>
                <Typography variant="h5" component="h2" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {post.excerpt}
                </Typography>
                <Button size="small" color="primary">
                  Ler mais
                </Button>
              </CardContent>
            </BlogCard>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Button variant="contained" color="primary" size="large">
          Ver Mais Posts
        </Button>
      </Box>
    </Container>
  );
};

export default Blog;
