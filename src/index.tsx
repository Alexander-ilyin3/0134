import App from './App';
import './index.css';
import './scss/main.scss';
import 'core-js/actual';
// import './scss/main.scss';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
