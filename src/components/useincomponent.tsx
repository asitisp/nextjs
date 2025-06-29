// import { useAppDispatch, useAppSelector } from '@/redux/hooks';
// import { fetchProducts } from '@/store/productSlice';
// import { useEffect } from 'react';

// const ProductList = () => {
//   const dispatch = useAppDispatch();
//   const { items, loading } = useAppSelector((state) => state.products);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       {items.map((product) => (
//         <div key={product._id}>{product.title}</div>
//       ))}
//     </div>
//   );
// };

