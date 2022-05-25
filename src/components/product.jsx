
import "./product.css";
import QuantityPicker from './quantityPicker';



const Product = (props) => {

    console.log('the parameter value is: '+props.title);

    return(
        <div className="product">

            <img src={'/img/' + props.data.image}></img>

            <h3>{props.data.title}</h3>
            
            <label>Price:  {props.data.price}</label>
            <label>$Total</label>
            <QuantityPicker></QuantityPicker>

            <button>Add</button>

            

        </div>
    );
};

export default Product;