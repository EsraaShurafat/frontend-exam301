import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{withAuth0}from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class FruitItem extends React.Component {
 

    addTOFav =(item)=>{
const {user}=this.props.auth0;
const obj ={
    ownerEmail:user.ownerEmail,
    name:item.name,
    image:item.image,
    price:item.price
}
    

    axios
    .post('http://localhost:3010/addFav',obj)
    .then(result=>{
       console.log(result.data);
    })
    .catch(err=>{console.log(err);})

}
render() {
    return(
    //   <>
    //      <Card>
    //     <Card.Img variant="top" src={this.props.item.image} />
    //     <Card.Body>
    //       <Card.Title>{this.props.item.name}</Card.Title>
    //       <Card.Text>
    //        {this.props.item.price}
    //       </Card.Text>
    //     </Card.Body>
    //     <Button variant="primary" onClick={()=>this. addTOFav (this.props.item)}>Add To Fav</Button>
    //   </Card>
    //   </>
    )
  }
}

export default withAuth0(FruitItem);