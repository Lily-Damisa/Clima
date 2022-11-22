import './App.css';
import Weather from './Components/Weather';

function App() {
  return (
    <div className="App bg-[url('../assets/weather-img.jpg')] bg-auto bg-cover bg-no-repeat">
    {/* <div className="App bg-[url('../assets/weather-img.jpg')]"> */}
      <div className='grid h-screen place-items-center '>
        <Weather />
      </div>
    </div>
  );
}

export default App;
