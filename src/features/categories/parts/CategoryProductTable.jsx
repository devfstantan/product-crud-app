import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, fetchProducts } from '../../products/productsSlice';
import { ButtonLink } from '../../../components/ButtonLink';
import { DeleteBtn } from '../../../components/DeleteBtn';
import { Link } from 'react-router-dom';
import { Stock } from '../../../components/product/Stock';
import { Price } from '../../../components/product/Price';

const ProductRow = ({ product }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
      dispatch(deleteProduct(product.id))
    }
    return (
      <tr>
        <td>{product.id}</td>
        <td>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </td>
        <td className="text-end">
          <Price value={product.price} />
        </td>
  
        <td className="text-end">
          <Stock value={product.quantity} />
        </td>
        <td className="d-flex justify-content-end gap-3">
          <ButtonLink
            to={`/products/${product.id}/edit`}
            variant="warning"
            icon="fa-regular fa-pen-to-square"
          >
            Edit
          </ButtonLink>
          <DeleteBtn 
            confirm={`Voulez-vous supprimer le produit ${product.title} ?`} 
            onDelete={handleDelete}
          />
        </td>
      </tr>
    );
  };

export const CategoryProductTable = ({id}) => {
  
  const dispatch = useDispatch();
  const {
    items: products,
  } = useSelector((state) => state.products);

  
  useEffect(() => {
    dispatch(fetchProducts(`categorieId=${id}`));
  }, [id]);

  return (
    <table className="table table-hover">
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductRow product={product} key={product.id} />
            ))}
          </tbody>
        </table>
  )
}
