import React from 'react';
import Todolist from './Pages/Todolist';
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Todolist/>
      <Toaster position='top-right'/>
    </div>
  );
}

export default App;
