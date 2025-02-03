
import { InfoContent } from './ContentPage/infocontent'
import { Announcements } from './Announcements/announcements'

import { HeaderContent } from './TitlePage/HeaderContent'
import './styles.scss'


function App() {

  return (
    <>
      <div className='background-image'>
          <div className='container'>
            <HeaderContent/>
            <div className='main-containers'>
                <InfoContent/>
                <Announcements/>
            </div>
            <div className='members-link'>
              <a href="https://delta.fsar.com/acbl/acbl1.php">
                Members login
              </a>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
