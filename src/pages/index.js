import React from "react"
import Container from "@material-ui/core/Container"
import { Link } from "gatsby"

export default () => {
  return (
    <>
      <Container maxWidth="sm">
        {" "}
        Hello world!
        <p>
          <Link to="/blog">View Blog</Link>
        </p>
        {/* <p><Link to="/account">My Account</Link></p> */}
      </Container>
    </>
  )
}
