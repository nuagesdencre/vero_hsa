import React from "react"
import { Typography, Container } from "@material-ui/core"
import BlogRoll from "../components/BlogRoll"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary">
          <React.Fragment>
            <h1>Latest Posts</h1>
            <section>
              <div className="content">
                <BlogRoll />
              </div>
            </section>
          </React.Fragment>
        </Typography>
      </Container>
    )
  }
}
