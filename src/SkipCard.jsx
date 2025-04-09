import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";

const SkipCard = ({ skip, isSelected, onSelect }) => {
  const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
  const pricePerWeek = Math.round(totalPrice / (skip.hire_period_days / 7));

  return (
    <Card
      sx={{
        maxWidth: 345,
        border: isSelected ? '2px solid #1976d2' : '1px solid #e0e0e0',
        borderRadius: 3,
        transition: '0.3s',
      }}
    >
     <CardMedia
       component="img"
       height="180"
       image="https://i0.wp.com/sellersburg.org/wp-content/uploads/2022/03/yard-waste-1.png?fit=1500%2C1500&ssl=1"
       alt={`${skip.size} Yard Skip`}
    />
      <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
      </Box>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {skip.size} Yard Skip
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {skip.hire_period_days}-day hire period
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          sx={{ mt: 1, fontWeight: 600 }}
        >
          £{pricePerWeek} <Typography variant="body2" component="span">per week</Typography>
        </Typography>
        <Button
          fullWidth
          variant={isSelected ? "contained" : "outlined"}
          color="primary"
          onClick={() => onSelect(skip.id)}
          sx={{ mt: 2 }}
        >
          {isSelected ? "Selected" : "Select This Skip"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SkipCard;
