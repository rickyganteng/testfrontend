import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Cards from '../components/cards';
import NavBar from '../components/navbar';
import axios from 'axios';

class BasicReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCat: [],
      dataSearchCat: [],
      search: '%%',
      page: 0,
      dataerror: 0,
      Loading: false,
    };
  }

  componentDidMount() {
    // digunakan untuk get data
    this.getDataLimit();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('pre', prevState);
    if (prevState.search !== this.state.search) {
      this.setState({ page: 0 }, () => {
        this.componentDidMount();
      });
    }

    if (prevState.page !== this.state.page) {
      axios
        .get(
          `https://api.thecatapi.com/v1/breeds?limit=8&page=${this.state.page}`
        )
        .then((res) => {
          console.log('res', res);
          this.setState({
            Loading: true,
            dataCat: [...prevState.dataCat, ...res.data],
            dataerror: res.data,
          });
        })
        .catch((err) => {
          this.setState({
            error: true,
          });
        })
        .finally(() => {
          setTimeout(() => {
            this.setState({ Loading: false });
          }, 1500);
        });
    }

    if (prevState.search !== this.state.search) {
      axios
        .get(
          `https://api.thecatapi.com/v1/breeds/search?q=${this.state.search}`
        )
        .then((res) => {
          console.log('res', res);
          this.setState({
            dataSearchCat: res.data,
          });
        })
        .catch((err) => {
          return [];
        });
    }
  }

  getDataLimit = () => {
    console.log(this.state.page);
    axios
      .get(
        `https://api.thecatapi.com/v1/breeds?limit=8&page=${this.state.page}`
      )
      .then((res) => {
        console.log('res', res);
        this.setState({
          dataCat: res.data,
          dataerror: res.data,
        });
      })
      .catch((err) => {
        return [];
      });
  };
  LoadMore = () => {
    console.log('heheh');
    this.setState({
      page: this.state.page + 1,
    });
  };
  changeText = (event) => {
    console.log('event', event);
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    // bikin fungsi diatas render
    console.log('heheh', this.state.dataCat.length);
    console.log('hehehh iki lo', this.state.dataSearchCat);
    console.log('hehehh iya', this.state.page);
    return (
      <>
        <Container fluid>
          <div className='mb-5'>
            <NavBar changeText={this.changeText.bind(this)} />
          </div>
          {/* <div className='mt-5'> */}
          <Row xl={4}>
            {this.state.dataSearchCat.length > 0 ? (
              <>
                {this.state.dataSearchCat.map((item, index) => {
                  return (
                    <div className='mt-5'>
                      <Col xl className='d-flex justify-content-center'>
                        <Cards data={item} />
                      </Col>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {this.state.dataCat.map((item, index) => {
                  return (
                    <Col className='d-flex justify-content-center mt-5'>
                      <Cards data={item} />
                    </Col>
                  );
                })}
              </>
            )}
          </Row>
          {/* </div> */}
          {this.state.dataerror.length === 0 ? (
            ''
          ) : (
            <div className='d-flex justify-content-center mb-5 mt-5'>
              <Button
                size='lg'
                variant='outline-secondary'
                onClick={() => this.LoadMore()}
              >
                {this.state.Loading ? 'Loading' : 'Load More'}
              </Button>
            </div>
          )}
        </Container>
      </>
    );
  }
}

export default BasicReact;
