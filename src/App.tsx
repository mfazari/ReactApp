import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BaseModal from './Base/BaseModal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import WeatherService from "./Services/WeatherService";
import {useState} from "react";



function App() {
  const [movies, setMovies] = useState<any>([]);

  async function getWeather(){
    const WeatherServe = new WeatherService();
    const data = await WeatherServe.getData();
    setMovies(data);
    console.log(movies);

  }
  return (
      <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Massimo Fazari</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="https://www.google.com">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">CV</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <form
            className="text-start"
            autoComplete="off"
        >
          <div className="row my-5 input-group"
          >
            <div className="col-md-4 text-start">
              <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Search"
              />
            </div>
            <div className="col-md-4">
              <Button
                  variant="primary"
              >Search</Button>
            </div>
          </div>
        </form>
        <table
            className="table-row-dashed table-row-gray-300"
        >
          <thead>
          <tr className="fw-bold fs-5">
            <th scope="col">Results</th>
          </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
        <p>{movies}</p>
      </>
  );
}

export default App;