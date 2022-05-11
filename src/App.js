
import './App.css';
import TableParent from './components/TableParent/TableParent';
import useWindowSize from './customHooks/useWindowSize';

function App() {

  const { width } = useWindowSize();
  return (
    <div className="App">
      <TableParent width={width}/>
    </div>
  );
}

export default App;
