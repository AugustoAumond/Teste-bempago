import { BrowserRouter, Route } from 'react-router-dom'; 
import App from './routes/app/App';
import Checkout from './routes/checkout/Checkout';



function MyRoutes (){
    return (
        <BrowserRouter>
            <Route path='/' exact component={App}/>
            <Route path='/checkout' component={Checkout}/>  
        </BrowserRouter>
    )
}

export default MyRoutes;
