import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className=" text-center flex flex-[auto 1fr-auto] h-screen flex-col overflow ">
      <div>
      <h1 className="text-slate-800 font-semibold text-xl">
        The best recipe.
          <br />
          
       <span className="text-yellow-200 my-3 text-sm">Straight out of the oven, straight to you.</span> 
        </h1>
        
      </div>
      
      <main>
        <CreateUser/>
      </main>
     
    </div>
  );
}

export default Home;
