import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Project from "./components/Project";
function App() {
  return (
    <>
      <div className="flex min-h-screen w-full subpixel-antialiased">
        <HeaderLeft/>

        <main className="flex-[3]">
          <Home/>
          <Experience/>
          <Project/>
          <Contact/>
        </main>





      </div>
    </>
  );
}

export default App;
