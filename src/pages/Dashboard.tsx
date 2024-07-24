 import AdminSidebar from "../componets/AdminSidebar";

 const dashboard = () => {
   return (
     <div className="adminContainer">
     <AdminSidebar />
     <main>hello</main>
    <section>

      <BarChart  
      data_2={[300, 144, 433, 655, 237, 755, 190]}
      data_1={[300, 144, 433, 655, 237, 755, 190]}
      title_1="Revenue"
      title_2="Transcastion"
      bgColor_1="rgb(0,115,255)"
      bgColor_2="rgb(53,162,235,0.8)"
      />
    </section>
     </div>
   );
 };
  
 
 export default dashboard; 
    