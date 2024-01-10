import './App.css'
import libertycard from './assets/libertycard.svg'


function App() {

  return (
    <>
      <div style={{ 
          backgroundImage: `URL(${libertycard})`,
          height: 1100,
          width: 800,
        }}>
          <h1 style={{opacity: 1}}>WELCOME TO PHILLY PARTY BRIDGE</h1>
          <div className="card">
            <h4>Relaxed games for enthusiastic players</h4>
          </div>
          <div>
            <a href=" https://cloud1-fsar.nfdc.net" target="_blank">
              Members login
            </a>
          </div>
      </div>
    </>
  )
}

export default App
