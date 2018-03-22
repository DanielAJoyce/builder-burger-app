import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from 'axios';

class ContactData extends Component{
  state ={
    name:'',
    email:'',
    address:{
      street:'',
      postalCode:''
    }
  }

  orderHandler = (event) => {
    event.preventDefault();
    // console.log(this.props.ingredients);

        //alert('You Continue!');
    // this.setState({loading:true});

    const order = {
      ingredients: this.props.ingredients,
      price: '',
      customer: {
        name: 'Alex Joyce',
        address:{
          street: 'TestStreet 1',
          postcode: 'AA28AA',
          country: 'Scotland'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json',order)
    .then(response =>
      {
        this.setState({loading:false, purchasing:false});
        console.log(response);
      })
    .catch(error=>{
      this.setState({loading:false, purchasing:false}); 
      console.log(error) 
  });

}

render(){
  return(
    <div className={classes.ContactData}>
      <h4>Enter your contact data</h4>
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="your name"/>
        <input className={classes.Input} type="text" name="email" placeholder="your email"/>
        <input className={classes.Input} type="text" name="street" placeholder="street name"/>
        <input className={classes.Input} type="text" name="postcode" placeholder="AH6WWW"/>
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    </div>
  );
}
}


export default ContactData;