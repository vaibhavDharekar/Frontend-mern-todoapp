import './App.css';
import SignupForm from './components/SignupForm';
import SigninForm from './components/SigninForm';
import TodoApp from './components/TodoApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={SigninForm}/>
        <Route path='/signup' Component={SignupForm}/>
        <Route path='/todoapp' Component={TodoApp}/>
        <Route path='/signin' Component={SigninForm}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
