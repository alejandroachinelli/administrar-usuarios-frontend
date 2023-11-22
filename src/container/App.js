import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import ReadUsers from "../components/ReadUsers";
import AddUser from "../components/AddUser";
import UpdateUser from "../components/UpdateUser";

function App() {
  return (
    <Router>
        <NavigationBar />
        <Routes>
            <Route path="/" element={<ReadUsers />} />
            <Route path="/agregar-usuario" element={<AddUser />} />
            <Route path="/actualizar-usuario" element={<UpdateUser />} />
        </Routes>
    </Router>
  );
}

export default App;
