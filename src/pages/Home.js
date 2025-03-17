import HomeGoToNotesButton from "../components/Home/HomeGoToNotesButton";
import HomeLogos from "../components/Home/HomeLogos";
import HomeStats from "../components/Home/HomeStats";
import ParticleCanvas from "../components/Home/Particles";
import "../css/home.css";
function Home() {
  return (
    <div className="homeBg">
      <HomeLogos />
      <HomeStats />
      <HomeGoToNotesButton />
      <ParticleCanvas />
    </div>
  );
}

export default Home;
