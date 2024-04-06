import Page1 from "src/pages/page1/page1";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Page1 />} />
        {/* Default */}
      </Routes>
    </>
  );
}

export default App;
