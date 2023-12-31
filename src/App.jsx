import { BrowserRouter, Routes,Route } from "react-router-dom";

import { Navbar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Error404 } from "./components/Error404";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Productos"/>} />
        <Route path="/category/:id" element={<ItemListContainer greeting="Productos"/>} />
        <Route path="/items/:id" element={<ItemDetailContainer/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
      
    </BrowserRouter>
  )
}
export default App;