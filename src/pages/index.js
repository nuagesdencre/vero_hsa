import React from "react"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import picture from "../../static/assets/verobw.png"
import { Link } from "gatsby"

const imgStyle = {
  margin: "10% 33%",
  border: "2px solid black",
  borderRadius: "50%",
  maxWidth: "300px",
}

export default () => {
  return (
    <>
      {" "}
      <CssBaseline />
      <Container maxWidth="sm">
        {" "}
        <h1>Welcome to my HSA Journal!</h1>
        <img src={picture} alt="Veronique" style={imgStyle}></img>
        <p>Profile: VS, student</p>
        <h3>
          <Link to="/blog">View Blog</Link>
        </h3>
        {/* <p><Link to="/account">My Account</Link></p> */}
      </Container>
    </>
  )
}
