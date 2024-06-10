import { useState } from "react"

export default function App() {

  const [products, setProducts] = useState(
    [
      {
        title: 'Ice Blast Face Wash',
        description: 'Get ready to feel the chill with Dari Moochs Ice Blast Face Wash This icy-cool formula with Menthol gives you a refreshing cleanse that keeps you feeling cool and confident all day long',
        price: 2000,
        stock: 14,
        rating: 4,
      },
      {
        title: 'De-Tan Bundle',
        description: 'Dari Moochs De-Tan Face Wash is the perfect solution for men looking to brighten their skin and eliminate unwanted tans Its unique formula deeply cleanses and removes dead skin cells to reveal a refreshed complexion',
        price: 2500,
        discountedprice: 2300,
        stock: 7,
        rating: 5,
      },
      {
        title: 'Ice Blast Face Wash',
        description: 'Get ready to feel the chill with Dari Moochs Ice Blast Face Wash This icy-cool formula with Menthol gives you a refreshing cleanse that keeps you feeling cool and confident all day long',
        price: 2000,
        stock: 14,
        rating: 4,
      },
      {
        title: 'De-Tan Bundle',
        description: 'Dari Moochs De-Tan Face Wash is the perfect solution for men looking to brighten their skin and eliminate unwanted tans Its unique formula deeply cleanses and removes dead skin cells to reveal a refreshed complexion',
        price: 2500,
        discountedprice: 2300,
        stock: 7,
        rating: 5,
      },
      {
        title: 'Ice Blast Face Wash',
        description: 'Get ready to feel the chill with Dari Moochs Ice Blast Face Wash This icy-cool formula with Menthol gives you a refreshing cleanse that keeps you feeling cool and confident all day long',
        price: 2000,
        stock: 14,
        rating: 4,
      },
      {
        title: 'De-Tan Bundle',
        description: 'Dari Moochs De-Tan Face Wash is the perfect solution for men looking to brighten their skin and eliminate unwanted tans Its unique formula deeply cleanses and removes dead skin cells to reveal a refreshed complexion',
        price: 2500,
        discountedprice: 2300,
        stock: 7,
        rating: 5,
      }
    ]
  );

  return (

    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">ALL</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="row mt-4 container">

        {
          products.map((product,id) =>
            <div className="col-md-4" key={id}>

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
          )
        }

      </div>

    </>
  )
}

