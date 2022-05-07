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
        
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/travelocity.jpeg"
              title="Travelocity"
              description="This is the clone of the Travelocity website. Travelocity is an online travel agency. From this website, users can book a hotel room, flights, cars, etc. across the world.."
              tech="Tech-Stacks"
              techD="React js | Redux | Javascript | HTML | Css "
              link="https://travelocity.vercel.app/"
              a="https://github.com/SamSumit007/travelocity"
            />
          </Col>
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
         

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
