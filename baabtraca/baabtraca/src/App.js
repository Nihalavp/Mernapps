import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import {Container,Row} from 'react-bootstrap';
import Contactactaddform from './Component/Contactaddform/Contactactaddform';
function App() {
  return (
    <div>
      <Header />
      <Container>
      <Row>
      <Contactactaddform />
      </Row>
      </Container>
    </div>
  )
}

export default App;


 


