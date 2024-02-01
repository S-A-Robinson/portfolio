import './App.css';

function App() {

  return (
    <div className="app">
      <div className='page-container'>
        <div className='nav-list-container'>
          <ul className='nav-list'>
            <li className='nav-item-container'>
              <div className='nav-item'>
                <a href='localhost:3000' data-text='HOME'>HOME</a>
              </div>
            </li>
            <li className='nav-item-container'>
              <div className='nav-item'>
                <a href='localhost:3000' data-text='ABOUT'>ABOUT</a>
              </div>
            </li>
            <li className='nav-item-container'>
              <div className='nav-item'>
                <a href='localhost:3000' data-text='PORTFOLIO'>PORTFOLIO</a>
              </div>
            </li>
            <li className='nav-item-container'>
              <div className='nav-item'>
                <a href='localhost:3000' data-text='CONTACT'>CONTACT</a>
              </div>
            </li>
          </ul>
          {/* <div className='disc'></div> */}
          {/* <div className='disc-tray'></div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
