import { Header } from './components/Header';
import { MainSections } from './components/MainSections';
import { ModelSections } from './components/ModelSections';
import model3 from './assets/img/Homepage-Model-3-Desktop-NA.avif';
import modely from './assets/img/Homepage-Model-Y-Global-Desktop.avif';
import models from './assets/img/Homepage-Model-S-Desktop-LHD-6.22.avif';
import modelx from './assets/img/Homepage-Model-X-Desktop-LHD.avif';
import solar from './assets/img/425_HP_SolarPanels_D.avif';
import solarR from './assets/img/Homepage-SolarRoof-Desktop-Global.avif';
import powerw from './assets/img/Homepage-Powerwall-Desktop.avif';
import { FinalSection } from './components/FinalSection';
import model3MObile from './assets/img/Homepage-Model-3-Mobile-NA.avif';
import modelXMObile from './assets/img/Homepage-Model-X-Mobile-LHD_001.avif';
import modelYMObile from './assets/img/Homepage-ModelY-LHD-Mobile.avif';
import modelSMObile from './assets/img/Homepage-Model-S-Mobile-LHD-6.22.avif';
import solarMObile from './assets/img/Homepage-SolarPanels-Mobile.avif';
import solarRMObile from './assets/img/Homepage-SolarRoof-Mobile.avif';
import powermpb from './assets/img/Homepage-Powerwall-Mobile.avif';

function App() {
  return (
    <>
      <Header />
      <main className='snap-y snap-mandatory relative  w-full h-screen   [&>div]:overflow-hidden'>
        <div className='snap-start'>
          <MainSections />
        </div>
        <div className='snap-start'>
          <ModelSections
            title='Model 3'
            textone='Starting at $32,740'
            texttrue='After Federal Tax Credit'
            btnone='Explore Inventory'
            btntrue='Custom Order'
            img={model3}
            imgm={model3MObile}
          />
        </div>
        <div className='snap-start'>
          <ModelSections
            title='Model Y'
            textone='Starting at $40,240'
            texttrue='After Federal Tax Credit'
            btnone='Explore Inventory'
            btntrue='Custom Order'
            img={modely}
            imgm={modelYMObile}
          />
        </div>
        <div className='snap-start'>
          <ModelSections
            title='Model S'
            textsub='Explore Inventory'
            btnone='Custom Order'
            btntrue='Demno Driver'
            img={models}
            imgm={modelSMObile}
          />
        </div>
        <div className='snap-start'>
          <ModelSections
            title='Model X'
            textsub='Explore Inventory'
            btnone='Custom Order'
            btntrue='Demno Driver'
            img={modelx}
            imgm={modelXMObile}
          />
        </div>
        <div className='snap-start'>
          <ModelSections
            title='Solar Panels'
            textsub='Schedule a Virtual Consultation'
            btnone='Order Now'
            btntrue='Learn More'
            img={solar}
            imgm={solarMObile}
          />
        </div>
        <div className='snap-start'>
          <ModelSections
            title='Solar Roof'
            textone='Produce Clean Energy From Your Roof'
            btnone='Order Now'
            btntrue='Learn More'
            img={solarR}
            imgm={solarRMObile}
          />
        </div>
        <div className='snap-start'>
          <ModelSections
            title='Solar Roof'
            textone='Produce Clean Energy From Your Roof'
            btnone='Order Now'
            btntrue='Learn More'
            img={powerw}
            imgm={powermpb}
          />
        </div>
        <div className='snap-start'>
          <FinalSection />
        </div>
      </main>
    </>
  );
}

export default App;
