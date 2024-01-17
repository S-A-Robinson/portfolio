import './App.css';

function App() {
  return (
    <div className="app">
      <span className='box-back'></span>
      <span className='box-front'></span>
      <ul className='nav-list' data-text='HOME'>
        <li className='nav-item' data-text='HOME'>
          HOME
        </li>
        <li className='nav-item' data-text='ABOUT'>
          ABOUT
        </li>
        <li className='nav-item' data-text='PORTFOLIO'>
          PORTFOLIO
        </li>
        <li className='nav-item' data-text='CONTACT'>
          CONTACT
        </li>
      </ul>
      <div className='disc'></div>
    </div>
  );
}

export default App;
