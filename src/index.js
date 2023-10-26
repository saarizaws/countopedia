import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Counter from './Components/Counter'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <h1 className='text-primary'>Countopedia</h1>
    <Header/>
    <Counter/>
    </>
);
