import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AxiosRequest from './AxiosRequest';
import Form from './components/Form';
import Success from './components/Success';
import Layout from './pages/Layout';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<ProductPage />} />
            <Route path='/success' element={<Success />} />
            <Route path='/axios' element={<AxiosRequest />} />
            <Route path='/fetch' element={<Form />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
