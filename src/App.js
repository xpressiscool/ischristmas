import './App.css';

function App() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  let text;
  if (day === 25 && month === 12) {
    text = "Yes"
  } else {
    text = "No"
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='text'>
          {text}
        </h1>
      </header>
    </div>
  );
}

export default App;
