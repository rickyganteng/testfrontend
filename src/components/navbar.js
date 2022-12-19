import React, { Component } from 'react';
import { Container, Navbar, Form } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import style from './navbar.module.css';

class NavBar extends Component {
  render() {
    const { changeText } = this.props;
    return (
      <Navbar
        collapseOnSelect
        fixed='top'
        expand='lg'
        variant='light'
        bg='light'
      >
        <Container>
          <Navbar.Brand>
            <Link className={style.link} to='/'>
              The Cats
            </Link>
          </Navbar.Brand>
        </Container>
        <Form className='d-flex'>
          <Form.Control
            type='search'
            name='search'
            placeholder='Search'
            className='me-2'
            aria-label='Search'
            onChange={(event) => changeText(event)}
          />
        </Form>
      </Navbar>
    );
  }
}
export default withRouter(NavBar);
