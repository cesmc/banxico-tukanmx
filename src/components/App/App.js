import './style.css';

function App(props) {
  const { title } = props;

  return (
    <div>
      <p>{title}</p>
    </div>
  );
}

export default App;
