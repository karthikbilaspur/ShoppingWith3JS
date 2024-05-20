import canvas from './canvas';
import customizer from './pages/customizer';
import home from './pages/Home';

function App() {
  return (
    <main className="app transition-all ease-in">
      <home />
      <canvas />
      <customizer />
    </main>
  )
}

export default App