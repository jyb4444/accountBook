import { 
  Login,
  Registration,
  Create,
  List,
  Success,
  Error,
  NotFound
} from './page/index';
import PrivateRoutes from './components/privateRoute/privateRoute';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reg" element={<Registration />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/create" element={<Create />} />
        <Route path="/account" element={<List />} />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
