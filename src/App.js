import './App.css';
import { getAuth } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import app from './firebse.init';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


const auth = getAuth(app);

function App() {

  const handleEmailBlur = event => {
    console.log(event.target.value);
  }

  const handlePasswordBlur = event => {
    console.log(event.target.value);
  }

  const handleFormSubmit = event => {
    console.log("working");
    event.preventDefault();
  }

  return (
    <div className="App">
      {/* <form onSubmit={handleFormSubmit}>
        <input onBlur={handleEmailBlur} placeholder="Type your e-mail" type="text" />
        <br />
        <input onBlur={handlePasswordBlur} placeholder="Password" type="password" name="" id="" />
        <br />
        <input type="submit" value="Login" />
      </form> */}
      <div className='registration w-50 mx-auto mt-5'>
        <h2 className='text-primary'>Please Register!!!</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
