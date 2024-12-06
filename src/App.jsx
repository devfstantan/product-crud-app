import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { CategoryList } from './features/categories/pages/CategoryList';
import { CategoryCreate } from './features/categories/pages/CategoryCreate';
import { CategoryShow } from './features/categories/pages/CategoryShow';
import { CategoryEdit } from './features/categories/pages/CategoryEdit';
import { ProductList } from './features/products/pages/ProductList';
import { ProductCreate } from './features/products/pages/ProductCreate';
import { ProductShow } from './features/products/pages/ProductShow';
import { ProductEdit } from './features/products/pages/ProductEdit';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>

        {/* Cateogries Routes */}
        <Route path='/categories' element={<CategoryList />}  />
        <Route path='/categories/create' element={<CategoryCreate />}  />
        <Route path='/categories/:id' element={<CategoryShow />}  />
        <Route path='/categories/:id/edit' element={<CategoryEdit />}  />

        {/* Products Routes */}
        <Route index element={<ProductList />}  />
        <Route path='/products/create' element={<ProductCreate />}  />
        <Route path='/products/:id' element={<ProductShow />}  />
        <Route path='/products/:id/edit' element={<ProductEdit />}  />

      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
