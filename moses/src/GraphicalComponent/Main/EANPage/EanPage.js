import React from 'react';
import './EanPage.css';
import { Link } from "react-router-dom";
import Container from '@material-ui/core/container';
import Classes from '../../../Shared/classes';

export default function EanPage(){
  const classes = Classes();
    return(
        <>
          <Container maxWidth="lg" className={classes.container}>
              <p>ciao</p>
          </Container>
        </>

    )
}