import { useState } from 'react';

import { PasswordDisplay } from './components/passwordDisplay';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
     <PasswordDisplay passwordGenerated={'344444'}/>
    </div>
  );
}

export default App;
