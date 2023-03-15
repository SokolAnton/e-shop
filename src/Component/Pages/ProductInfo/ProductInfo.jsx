import { useParams, NavLink } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {addCart} from "../../../redux/action/index"
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const ProductInfo = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()
  const addProduct = (product) => {
    dispatch(addCart(product));
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const respone = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await respone.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height="400px" />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{marginLeft:6}} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={product.image} alt={product.title} width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder ">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star ms-2"></i>
          </p>
          <h3 className="display-3 fw-bold my-4"> $ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark fw-bolder fw-bigger px-4 py-2 " onClick={()=>addProduct(product)}>
            {" "}
            Add to cart
          </button>
          <NavLink
            to="/cart"
            className="btn btn-dark fw-bolder fw-bigger px-4 py-2 ms-2"
          >
            {" "}
            Go to cart
          </NavLink>
        </div>
      </>
    );
  };
  console.log(product);

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
