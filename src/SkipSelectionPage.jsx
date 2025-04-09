import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography, Container, Button, CircularProgress, Box } from "@mui/material";
import SkipCard from "./SkipCard";

const SkipSelectionPage = () => {
  const [skips, setSkips] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
      .then((response) => {
        setSkips(response.data);
        setSelectedId(response.data[0]?.id || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch skips", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5fef7" }}>
      <Box sx={{ backgroundColor: "#2e7d32", p: 2, color: "white" }}>
        <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">WasteWizard</Typography>
          <Box display="flex" gap={2} fontSize="14px">
            <b>Postcode</b>
            <span>Waste Type</span>
            <b>Select Skip</b>
            <span>Permit Check</span>
            <span>Choose Date</span>
            <span>Payment</span>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Choose Your Skip Size
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 4 }}>
          Select the skip size that best suits your needs
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {skips.map((skip) => (
            <Grid item xs={12} sm={6} md={4} key={skip.id}>
              <SkipCard skip={skip} isSelected={skip.id === selectedId} onSelect={setSelectedId} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ p: 2, borderTop: "1px solid #ccc", background: "white" }}>
        <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined">Back</Button>
          <Button variant="contained">Continue</Button>
        </Container>
      </Box>
    </Box>
  );
};

export default SkipSelectionPage;
