// Projects.jsx

import React from 'react';
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectsCard';
 import colorSharp2 from '../../assets/rural_app.png';
 import './secondsection.css'
 import projImg1 from "../../assets/rural_app.png";
 import projImg2 from "../../assets/egov_app.png";
 import projImg3 from "../../assets/tourism_app.png";
 import projImg4 from "../../assets/urban_app.png";
 import projImg5 from "../../assets/agri_app.png";
 import projImg6 from "../../assets/forest_app.png";
 import projImg7 from "../../assets/state_app.png";
 import projImg8 from "../../assets/water_app.png";
 import projImg9 from "../../assets/special_app.png";

const Projects = () => {
  const projects = [
    {
      title: 'Rural',
      description: 'View The rural related application and its resources',
      imgUrl: projImg1,
    },
    {
      title: 'E-Goverence',
      description: 'View The e-goverence application and its resourses',
      imgUrl: projImg2,
    },
    {
        title: 'Tourism',
        description: 'View the tourism application and its resourses',
        imgUrl: projImg3,
      },
      {
        title: 'Urban',
        description: 'View the urban application and its resourses',
        imgUrl: projImg4,
      },
      {
        title: 'Agriculture',
        description: 'View the urban application and its resourses',
        imgUrl: projImg5,
      },
      {
        title: 'Forestry',
        description: 'View the urban application and its resourses',
        imgUrl: projImg6,
      },
      {
        title: 'State Wise',
        description: 'Information About State Wise',
        imgUrl: projImg7,
      },
      {
        title: 'Water',
        description: 'View the urban application and its resourses',
        imgUrl: projImg8,
      },
      {
        title: 'Special Feature',
        description: 'Interesrt features',
        imgUrl: projImg9,
      },
    // Add more project objects as needed
  ];

  return (
    <section className="project">
      <div className="fullscreen-bg">
        <img className="background-image-right" src={colorSharp2} alt="Background" />
      </div>
      <Container fluid>
        <Row>
          <Col>
            <h2>Bhuvan Services </h2>
            <p>Collaborative applications - Platform to share your data and create governance applications</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="horizontal-tabs">
                <Nav.Item>
                  <Nav.Link eventKey="first">Visualisation & Free Download</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Application Sectors</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Maps & OGC Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Bhuvan Central Applications</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row className="projects-row">
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Visualization Bhuvan allows users to visualize, explore, and analyze satellite imagery of India in multiple layers, including thematic maps, administrative boundaries, topography, and more</Tab.Pane>
                <Tab.Pane eventKey="third">Data Layers: It provides access to a wide range of geographic information system (GIS) data layers such as land use, soil information, weather, water resources, agriculture, infrastructure, and more.</Tab.Pane>
                <Tab.Pane eventKey="fourth">Application Services: Bhuvan offers application services like disaster management, environmental monitoring, urban planning, and natural resource management, allowing users to leverage geospatial data for various purposes.</Tab.Pane>
                <Tab.Pane eventKey="fourth">Tools and APIs: It provides tools and APIs that allow developers to integrate Bhuvan's services into their applications, enabling them to create custom mapping and geospatial solutions.</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
