
import useTheme from './hooks/UseTheme';
import { ThemeProvider } from './provider/ThemeProvider';

function App() {
  const { mode, toggle } = useTheme();
  return (
    <>
      <h1>Hello, World!</h1>
      <button onClick={toggle}>Mode: {mode}</button>
    </>
  )
}

export default App