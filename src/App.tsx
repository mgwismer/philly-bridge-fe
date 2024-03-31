
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
              <a href="https://cloud1-fsar.nfdc.net/">
                Members login
              </a>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
