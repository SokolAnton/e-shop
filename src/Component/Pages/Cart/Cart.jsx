import { useSelector } from "react-redux" 
import { useDispatch } from "react-redux"
import { delCart } from "../../../redux/action"

const Cart = () => {

    const state = useSelector((state) => state.addItem);
    const dispatch = useDispatch();

    const cartItems = (product) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.img} alt="" />
                        </div>
                        <div className="col-md-4">
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
  return (
    <div>
    </div>
  )
}

export default Cart