import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import WorkshopCard from '../components/WorkshopCard';
import { workshops } from '../data/workshops';

function Workshops() {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
          Cultural Workshops
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom sx={{ mb: 4, color: 'text.secondary' }}>
          Join interactive workshops and learn traditional arts, crafts, and practices
        </Typography>
        <Grid container spacing={3}>
          {workshops.map((workshop) => (
            <Grid item xs={12} sm={6} md={4} key={workshop.id}>
              <WorkshopCard workshop={workshop} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Workshops;
