import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import Classes from '../../Shared/classes';
import FilePage from './FilePage/FilePage';
import EanPage from './EANPage/EanPage';


const classes = Classes;

export default function Main() {
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <FilePage></FilePage>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <EanPage></EanPage>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}