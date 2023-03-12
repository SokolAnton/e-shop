import React, { useState, useEffect } from "react";

import "./Products.css";

const Proucts = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <>Loading..</>;
  };

  const ShowProducts = () => {
    return (
      <>
        {" "}
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Men's clothing</button>
          <button className="btn btn-outline-dark me-2">
            Women's clothing
          </button>
          <button className="btn btn-outline-dark me-2">Jewelery</button>
          <button className="btn btn-outline-dark me-2">Electronic</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col md-3 mb-4">
                <div className="card h-100 text-center p-4 mb-3" key={product.id} style={{ width: "18rem" }}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height='250px'
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                    <p className="card-text">${product.price}</p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest product</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Proucts;
