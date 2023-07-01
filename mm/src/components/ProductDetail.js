import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ProductDetail(props) {
  const { products } = props;
  const { id } = useParams();

  // Tìm kiếm sản phẩm theo id
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <p>Sản phẩm không tồn tại</p>;
  }

  return (
    <div className="container">
      <h2>Chi tiết sản phẩm</h2>

      <div className="card">
        <img src={product.image} alt={product.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Giá: {product.price} VNĐ</p>
          <p className="card-text">{product.desc}</p>
          <Link to={`/buy/${product.id}`} className="btn btn-primary">
            Đặt hàng
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
