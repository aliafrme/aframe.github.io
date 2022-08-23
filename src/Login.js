import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';


function Login() {
 
  return (
    <div className="Login">
<Navbar className="Navbar" style={{ backgroundColor: '#4B4B4B' , }}>
        <Container>
         
          <Nav className="me-auto">
            <Link to="/"  style={{ color:'#ddd', paddingLeft: 13, textDecoration: 'none' }}>Home</Link>
             <Link to="/news" style={{ color:'#ddd', paddingLeft: 13, textDecoration: 'none' }}>News</Link>
             <Link to="/Login"  style={{ color:'#ddd', paddingLeft: 13, textDecoration: 'none' }}>Log in</Link>

          </Nav>
        </Container>
  </Navbar>
   <header className="App-header-login">
      <h1 className="h1-login">Sign in and Sign up</h1>
      </header>

  

     <br />
   
     <div className="login-form m-5">
          <br />
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      <br />
     <center>
  <Button variant="success">submit</Button>{' '}

     </center> 
       <br />
     </div>


     </div>
  );
}
export default Login;