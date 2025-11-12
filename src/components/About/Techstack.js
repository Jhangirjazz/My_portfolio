import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiGit,
  DiVisualstudio,
} from "react-icons/di";
import {
  SiPhp,
  SiMysql,
  SiGithub,
  SiLinux,
  SiVercel,
  SiCsharp,
  SiDotnet,
  SiApache,
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp /> {/* Laravel base */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet /> {/* ASP.NET / .NET Core */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApache /> {/* Apache Server */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio /> {/* VS IDE for C#/.NET */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTerminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Techstack;
