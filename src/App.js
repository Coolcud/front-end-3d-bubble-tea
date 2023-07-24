import './App.css';
import NewOrderForm from './components/NewOrderForm';

function App() {
  return (
    <div className="App">
      <header>3d Bubble Tea</header>
      <main>
        <h1>Boba Order</h1>
        <div className='order-body'>
          <NewOrderForm></NewOrderForm>
          {/* <button className='btn btn-primary'>Show drink!</button> */}
        </div>
      </main>
    </div>
  );
}

export default App;
