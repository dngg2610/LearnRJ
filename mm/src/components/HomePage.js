import React from 'react';

function HomePage(props) {
  const { products } = props;

  return (
    <div>
      <h1>Trang chủ</h1>

      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card">
              <img src={product.image} alt="Hình ảnh" className="card-img-top" style={{ maxWidth: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Giá: {product.price} VNĐ</p>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;