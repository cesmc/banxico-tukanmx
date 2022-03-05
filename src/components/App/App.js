import './style.css';

function App(props) {
  const { title } = props;

  return (
    <div className='app-container'>
      <h1 className='app-title'>{title}</h1>
      <form className='form-container'>
        <div className='form-token'>
          <p className='form-title'>🔓 Token</p>
          <input placeholder='You need a Banxio token.' />
          <a href='https://www.banxico.org.mx/SieAPIRest/service/v1/token'>You can find it on.</a>
        </div>
        <div className='form-series'>
          <p className='form-title'>🔑 Series</p>
          <div className='form-series--input-button'>
            <input className='form-series--input' placeholder='Example: SF61745,SP68257' />
            <button className='form-button'>Fetch</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
