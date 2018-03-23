import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

class Orders extends Component{

    state = {
        orders:[],
        loading:true
    }

componentDidMount(){
    axios.get('/orders.json')
    .then(res=> {
        this.setState({loading:false});
        console.log(res.data);

        for(let key in res.data){
            fetchedOrders.push(res.data[key]);
        }
    }).catch(err =>{
        this.setState({loading:false});
    })
}
    render(){
        return(
            <Order/>
        );  
    }
}

export default Orders;