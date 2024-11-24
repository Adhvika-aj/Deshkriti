import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip
} from '@mui/material';
import { CalendarToday, AccessTime, Person } from '@mui/icons-material';

function WorkshopCard({ workshop }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {workshop.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Person sx={{ mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {workshop.mentor}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <CalendarToday sx={{ mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {new Date(workshop.date).toLocaleDateString()}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <AccessTime sx={{ mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {workshop.duration}
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Chip
            label={workshop.type}
            color="primary"
            size="small"
            sx={{ mr: 1 }}
          />
          <Chip
            label={workshop.difficulty}
            color="secondary"
            size="small"
          />
        </Box>
        <Button variant="contained" fullWidth>
          Register Now
        </Button>
      </CardContent>
    </Card>
  );
}

export default WorkshopCard;
