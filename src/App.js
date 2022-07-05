import Questions from './components/Questions'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

const App = () => {
  return (
    <div className='row container m-auto main p-3'>
        <div className='col-md-4 d-flex align-items-center justify-content-center text-center'>
            <h2 className='text-danger'>Questions And Answers About Login</h2>
        </div>
        <div className='col-md-8'>
            <Questions/>
        </div>
    </div>
  )
}

export default App