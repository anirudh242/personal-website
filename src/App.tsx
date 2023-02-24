import { useEffect } from 'react';
import './App.css';
import Name from './components/Name';

function App() {
  return (
    <div className="font-display flex h-screen text-white bg-gray-900">
      <Name name={'Anirudh Bhardwaj'} />
    </div>
  );
}

export default App;
