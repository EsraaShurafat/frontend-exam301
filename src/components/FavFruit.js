import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{withAuth0}from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class FavFruit extends React.Component {
  constructor(props){
    super(props);
    this.state={
favarry:[],
    }
  }

  componentDidMount=()=>{
    const {user}=this.props.auth0;
    const obj={
      ownerEmail:user.email
    }
    axios
    .get('http://localhost:3010/getFavFruits',obj)
    .then(result=>{
      this.setState({
        favarry:result.data,
        dataShow:true
      })
     
    })
  
    .catch(err=>{console.log(err);})
  }




  render() {
    return(
      <>
        <h1>My Favorite Fruits</h1>
        
        <Card>
        <Card.Img variant="top" src={this.props.item.image} />
        <Card.Body>
          <Card.Title>{this.props.item.name}</Card.Title>
          <Card.Text>
           {this.props.item.price}
          </Card.Text>
        </Card.Body>
        <Button variant="primary">Delete</Button>
        <Button variant="primary">update</Button>
      </Card>
      </>
    )
  }
}

export default withAuth0(FavFruit);
