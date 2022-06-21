import React from 'react'
import applications from '../data'
import { Row, Col } from 'react-bootstrap'
import { application } from 'express'

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Applications</h1>
      <Row>
        {applications.map((a) => (
          <Col sm={12}>
            <h3>{application.company}</h3>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
