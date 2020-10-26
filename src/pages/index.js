import React from "react"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Button from '@material-ui/core/Button';
import { Link } from "gatsby"
import picture from "../../static/assets/verobw.png"

const imgStyle = {
  margin: "10% 25%",
  border: "2px solid black",
  borderRadius: "50%",
  maxWidth: "300px",
}


export default () => {
  return (
    <>
      {" "}
      <CssBaseline />
      <Container maxWidth="sm" >
        {" "}
        <h2>Welcome to my HSA Journal!</h2>
        <img src={picture} alt="Veronique" style={imgStyle}></img>
        <p>Profile: Veronique Savard</p>
        <p>2020/2021 HSA Researching Interactions with Technology</p>
        <Button variant="outlined" color="secondary">
          <Link to="/blog">View Blog</Link>
        </Button>
        {/* <p><Link to="/account">My Account</Link></p> */}
      </Container>
    </>
  )
}
