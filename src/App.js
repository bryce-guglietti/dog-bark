
function App() {
  let audio = new Audio("/woof.mp3");

  const start = () => {
    audio.play()
  }
  return (
    <div className="App">
      <img 
      className = "image" alt = "dog" 
      onClick={start} 
      src = "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=400"
      draggable="false"/>

      <h1 className="name">Harold</h1>
      <div className="footer">
        created by Bryce Guglietti
      </div>
    </div>
  );
}

export default App;
