import './App.css';

function App() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear()
  const header = month + day + year
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
          Is today christmas: <span class="christmas">{text}</span>
          {header}
        </h1>
      </header>
    </div>
  );
}

export default App;
