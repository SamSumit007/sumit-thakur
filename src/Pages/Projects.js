import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="/images/blinkit.jpeg"
              title="blinkit"
              description="Blinkit is an Indian instant delivery service.to order groceries and essentials online. Blinkit's employees then secure the items from their warehouse and deliver the items to the consumer within 10 minutes "
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | Advanced JavaScript "
              link="https://blinkit.netlify.app/"
              a="https://github.com/Imaryan08/blinkit"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/unsplash.jpeg"
              title="Unsplash"
              description="Clone of a Website called Unsplash which lets its user to download some free and premium images."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://sumit-unsplash-ssprm902.netlify.app/"
              a="https://github.com/mayank8887/Construct_Unsplash"
            />
          </Col>

         

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
