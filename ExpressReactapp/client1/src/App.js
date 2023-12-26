import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import {Container,Row} from 'react-bootstrap';
import Contactactaddform from './Component/Contactaddform/Contactactaddform';
import Contactdisplay from './Component/Contactdisplay/Contactdisplay';
const apiCall = () => {
  axios.get('http://localhost:2000').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}
function App() {
  return (
    <div className="App">
    <button onClick={apiCall}>Make API Call</button>

     
    <div>
      <Header />
      <Container>
      <Row>
      <Contactactaddform />
      <Contactdisplay />
      </Row>
      </Container>
    </div>
    </div>
  



  );
}

export default App;
