import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import paticlesConfid from "./paticles-config";

function Fondo() {

  const particlesRender = () =>{
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if(screenWidth >= 1280 && screenHeight >= 800){
      return true
    }
    if (screenWidth <= 412 || screenHeight <= 915) {
      return false;
    }
    if (screenWidth >= 820 && screenHeight >= 1180) {
      return true;
    }
    if (screenWidth >= 768 && screenHeight >= 1024) {
      return true;
    }
  };

  let particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    
    particlesRender() && (
      <Particles className="fondo" id="tsparticles" options={paticlesConfid} init={particlesInit} />
    )
    
    
  );
}

export default Fondo;
