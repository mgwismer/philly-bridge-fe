
import { InfoContent } from './ContentPage/infocontent'
import { HeaderContent } from './TitlePage/HeaderContent'
import './styles.scss'


function App() {

  return (
    <>
      <div className='background-image'>
          <div className='container'>
            <HeaderContent/>
            <InfoContent/>
            <div className='members-link'>
              <a href="https://cloud1-fsar.nfdc.net/acbl/acbl1.php?ppb=1">
                Members login
              </a>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
