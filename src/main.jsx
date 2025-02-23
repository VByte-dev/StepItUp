import {createRoot} from 'react-dom/client';
import {BrowserRouter}  from 'react-router-dom';
import App from './App';
import './index.css';

let root = createRoot(document.getElementById('root'));
root.render(
<BrowserRouter><App/></BrowserRouter>
);