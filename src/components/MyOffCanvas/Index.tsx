import { useState } from "react";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";
import { OffcanvasPlacement } from "react-bootstrap/esm/Offcanvas";
import { PrimaryColor } from "../../misc/colors";
export default function MyOffCanvas({ setShow, Titulo = "", show, pos, children, ...props }:
  { setShow: any, Titulo: string, show: boolean, pos: OffcanvasPlacement, children: React.ReactNode }) {

  

  return (
    <>
      <Row>
        <Col xs={"8"} md="8" lg="8">
          <Offcanvas show={show} onHide={() => { setShow(false) }} placement={pos}>
            <Offcanvas.Header className="mb-2" closeButton>
              <Offcanvas.Title style={{color:PrimaryColor,fontWeight:"bold"}}>{Titulo}</Offcanvas.Title>
            </Offcanvas.Header>
            <hr />
            <Offcanvas.Body>
              {children}
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
      </Row>
    </>
  );
}