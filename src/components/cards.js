import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import ModalDetails from './PopUpDetails';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      onHide: false,
    };
  }
  ShowDetails = (event) => {
    this.setState({
      showDetails: true,
    });
  };
  HandleCloseDetails = () => {
    this.setState({
      showDetails: false,
    });
  };
  render() {
    const { showDetails } = this.state;
    const { name, origin, temperament, reference_image_id } = this.props.data;

    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            style={{ width: '18rem', height: '18rem' }}
            variant='top'
            src={`https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`}
            class='img-thumbnail'
          />
          <Card.Body>
            <Card.Title className='d-flex justify-content-center'>
              <h3>{name}</h3>
            </Card.Title>
            <Card.Text>
              <h4 className='d-flex justify-content-center text-primary'>
                {origin}
              </h4>
            </Card.Text>
            <p>{temperament}</p>

            <center>
              <Button
                variant='outline-primary'
                onClick={() => this.ShowDetails()}
              >
                Go somewhere
              </Button>
            </center>
          </Card.Body>
        </Card>
        <ModalDetails
          show={showDetails}
          data={this.props.data}
          onHide={this.HandleCloseDetails.bind(this)}
        />
      </>
    );
  }
}

export default withRouter(Cards);
