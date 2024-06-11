import React from 'react'

function Card({product}){

    return(

        <div className="col-md-4">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <h5>

              RS:{''}
              {product.discountedprice ?
                (
                  <>
                    <span className="original-price" style={{ textDecoration: 'line-through', color: 'red' }} >{product.price}</span> <p>RS:<span style={{ color: 'green' }}>{product.discountedprice}</span></p>
                  </>
                ) :
                (
                  <span>{product.price}</span>
                )
              }
            </h5>

              <h5>rating:{product.rating}</h5>
          </div>
        </div>
      </div>
    );
}

export default Card