import React, { useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';

function AdminPage(props) {
    const { products, setProducts } = props;
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [nameError, setNameError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [descError, setDescError] = useState('');
    const [imageError, setImageError] = useState('');
    const [editingIndex, setEditingIndex] = useState(-1);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDescChange = (event) => {
        setDesc(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
        setPriceError('');
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleAddProduct = () => {
        if (!name.trim()) {
            setNameError('Vui lòng nhập tên sản phẩm');
            return;
        }

        if (!desc.trim()) {
            setDescError('Vui lòng nhập mô tả sản phẩm');
            return;
        }

        if (!price.trim()) {
            setPriceError('Vui lòng nhập giá sản phẩm');
            return;
        }

        if (!/^\d+(\.\d{1,2})?$/.test(price)) {
            setPriceError('Vui lòng nhập giá hợp lệ');
            return;
        }

        if (!selectedImage) {
            setImageError('Vui lòng chọn hình ảnh');
            return;
        }

        const newProduct = {
            name,
            price,
            desc,
            image: URL.createObjectURL(selectedImage),
        };

        setProducts([...products, newProduct]);
        setName('');
        setPrice('');
        setSelectedImage(null);
        setNameError('');
        setPriceError('');
        setImageError('');
    };

    const handleEditProduct = (index) => {
        const productToEdit = products[index];
        setName(productToEdit.name);
        setDesc(productToEdit.desc);
        setSelectedImage(null);
        setEditingIndex(index);
    };

    const handleUpdateProduct = () => {
        if (!name.trim()) {
            setNameError('Vui lòng nhập tên sản phẩm');
            return;
        }

        if (!desc.trim()) {
            setDescError('Vui lòng nhập mô tả sản phẩm');
            return;
        }

        if (!price.trim()) {
            setPriceError('Vui lòng nhập giá sản phẩm');
            return;
        }

        if (!/^\d+(\.\d{1,2})?$/.test(price)) {
            setPriceError('Vui lòng nhập giá hợp lệ');
            return;
        }

        if (!selectedImage) {
            setImageError('Vui lòng chọn hình ảnh');
            return;
        }

        const updatedProducts = [...products];
        updatedProducts[editingIndex] = {
            name,
            price,
            desc,
            image: URL.createObjectURL(selectedImage),
        };

        setProducts(updatedProducts);
        setName('');
        setDesc('');
        setPrice('');
        setSelectedImage(null);
        setImageError('');
        setEditingIndex(-1);
    };

    const handleDeleteProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);

        if (editingIndex === index) {
            setEditingIndex(-1);
        }
    };

    return (
        <div className="container">
            <h2>Trang admin</h2>

            <div className="mb-3">
                <h3>Thêm sản phẩm</h3>

                <label htmlFor="nameInput" className="form-label">
                    Tên sản phẩm:
                </label>
                <input
                    type="text"
                    id="nameInput"
                    value={name}
                    onChange={handleNameChange}
                    className={`form-control ${nameError ? 'is-invalid' : ''}`}
                />
                {nameError && <div className="invalid-feedback">{nameError}</div>}

                <label htmlFor="descInput" className="form-label">
                    Thêm mô tả:
                </label>
                <ReactTextareaAutosize
                    id="descInput"
                    value={desc}
                    onChange={handleDescChange}
                    className={`form-control ${descError ? 'is-invalid' : ''}`}
                    rows={3}
                />
                {descError && <div className="invalid-feedback">{descError}</div>}

                <label htmlFor="priceInput" className="form-label">
                    Giá sản phẩm:
                </label>
                <div className="input-group">
                    <input
                        type="text"
                        id="priceInput"
                        value={price}
                        onChange={handlePriceChange}
                        className={`form-control ${priceError ? 'is-invalid' : ''}`}
                    />
                    <span className="input-group-text">VNĐ</span>
                </div>
                {priceError && <div className="invalid-feedback">{priceError}</div>}

                <label htmlFor="imageInput" className="form-label">
                    Chọn hình ảnh:
                </label>
                <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    onChange={handleImageChange}
                    className={`form-control ${imageError ? 'is-invalid' : ''}`}
                />
                {imageError && <div className="invalid-feedback">{imageError}</div>}

                <button
                    onClick={editingIndex === -1 ? handleAddProduct : handleUpdateProduct}
                    className="btn btn-primary mt-3"
                >
                    {editingIndex === -1 ? 'Thêm' : 'Cập nhật'}
                </button>
            </div>

            <h3>Danh sách sản phẩm:</h3>
            {products.map((product, index) => (
                <div key={index} className="card mb-3 mt-4 " style={{ cursor: 'pointer' }}>
                    <img
                        src={product.image}
                        alt="Hình ảnh"
                        className="card-img-top"
                        style={{ maxWidth: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">Giá: {product.price} VNĐ</p>
                        <p className="card-text">{product.desc}</p>
                        <button onClick={() => handleEditProduct(index)} className="btn btn-primary">
                            Sửa
                        </button>
                        <button onClick={() => handleDeleteProduct(index)} className="btn btn-danger">
                            Xóa
                        </button>
                    </div>
                </div>
            ))}
        </div>);
}

export default AdminPage;