import React from 'react';

export function Cards(props) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute" style={{ "top": "0.5rem", "right": "0.5rem" }}>{props.items.available}</div>
        {console.log(props.items.available)}

        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{props.items.name}</h5>
            <span className="text-muted text-decoration-line-through">{props.items.price}</span>
            {props.items.discount}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className=" btn btn-outline-dark mt-auto" href="#" onClick={props.handleCart}> {props.items.added ? 'Add to Cart' : 'Remove from Cart'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
