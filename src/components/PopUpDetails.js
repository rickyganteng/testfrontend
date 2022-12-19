import React, { Component } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class PopUpDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oonHide: false,
    };
  }
  render() {
    const { onHide } = this.props;
    const {
      description,
      name,
      origin,
      temperament,
      wikipedia_url,
      reference_image_id,
    } = this.props.data;
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={onHide}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                {' '}
                <img
                  src={`https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`}
                  alt=''
                  className='img-fluid'
                ></img>
              </Col>
              <Col>
                {' '}
                <h4>Name : {name}</h4>
                <h4>Origin : {origin}</h4>
                <h4>temperament : {temperament}</h4>
                <h4>
                  <a
                    href={wikipedia_url}
                    target='_blank'
                    rel='noreferrer'
                    title='dewa inside blog'
                  >
                    Wikipedia
                  </a>
                </h4>
              </Col>
            </Row>

            <h3>Description</h3>
            <p>{description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => onHide()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withRouter(PopUpDetails);
