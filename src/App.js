import Login from "./login/Login";
import CreateAccount from "./account/CreateAccount";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create_accout" element={<CreateAccount />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
