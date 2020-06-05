import React from 'react';
import './footer.css';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


export default function Footer() {
  return (
    <>
      <Box>
        <Grid container justify="center" >

          <Typography variant="body2" color="textSecondary" align="center">
            <small>
              2020 UTRAVEL S.R.L. SEDE LEGALE: VIA LUGARO, 15 – 10126 TORINO – ITALIA
            </small><br></br>
            <small>
              C.F. E NUMERO DI ISCRIZIONE AL RI: 12176650013 – REA TO 1270365
              CAPITALE SOCIALE € 100.000  – P. IVA 12176650013
            </small> 
            <small>
              ciao
            </small>
          </Typography>
        </Grid>
      </Box>

    </>

  )
} 