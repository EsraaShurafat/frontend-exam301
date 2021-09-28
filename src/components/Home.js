import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FruitItem from './FruitItem';
import {Row,Col} from 'react-bootstrap';

class Home extends React.Component {
constructor(props){
  super(props);
  this.state={
    allfruits:[],
    dataShow:false
  }
}
componentDidMount=()=>{
  axios
  .get('http://localhost:3010/getFruits')
  .then(result=>{
    this.setState=({
      allfruits:result.data,
      dataShow:true
    })
    
  })

  .catch(err=>{console.log(err);})
}


  render() {
    return (
      <>
        <h1>API Fruits</h1>
        <Row xs={1} md={3} className="g-4">
  { this.state.dataShow && this.state.allfruits.map((item) => (
    <Col>
    <FruitItem
    item={item}
    />
    
    
    </Col>
  ))}
</Row>

      </>
    )
  }
}

export default Home;
