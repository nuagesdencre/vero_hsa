import React from 'react'
import { Typography, Container } from "@material-ui/core"
import picture from "../../static/assets/verobw.png"

const Reflections = () => (
  <>
    {" "}
    
    <Container maxWidth="sm">
      <Typography variant="body2" color="textSecondary">
        {" "}
        <img src={picture} alt="Veronique" />
        <h2>Reflections</h2>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        <p>2020/2021 HSA Researching Interactions with Technology</p>
      </Typography>
    </Container>
  </>
)

export default Reflections
