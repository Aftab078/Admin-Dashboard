  import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
  import { lazy, Suspense } from 'react';
  import Loader from "./componets/Loader"; 

  const Dashboard = lazy(()=>import("./pages/Prodcuts"));
  const Prodcuts = lazy(()=>import("./pages/Prodcuts"));
  const Transcation = lazy(()=>import("./pages/Transcation"));
  const Customers = lazy(()=>import("./pages/Customers"));
  const App = () => {
  return ( 
  <Router>  
  <Suspense fallback={<Loader />}>
  <Routes> 
   <Route path="/admin/dashboard" element={<Dashboard />} />
   <Route path="/admin/product" element={<Prodcuts />} />
   <Route path="/admin/transcation" element={<Transcation />} />
   <Route path="/admin/Custmoer" element={<Customers />} />
      {/* Charts */}
     
       
    
      {/*  Apps */}
  </Routes>
  </Suspense>
  </Router>
  );
 };
   
 export default App; 
