import { useState } from 'react'
import './App.css'
import { Container, TextField, Stack, Button } from '@mui/material'

function App() {

  const [amount, setAmount] = useState(0)
  const [interest, setInterest] = useState(0)
  const [year, setYear] = useState(0)

  const [totalInterest, setTotalInterest] = useState(0)

  const [isNotValidAmount, setIsNotValidAmount] = useState(false)
  const [isNotValidIntereset, setIsNotValidInterest] = useState(false)
  const [isNotValidYear, setIsNotValidYear] = useState(false)

  const onTextChange=(data)=>{
    if(data.name=="principle"){
      let regexOperationA=(!!data.value.match(/^[0-9]*.?[0-9]+$/))
      setIsNotValidAmount(!regexOperationA)
      setAmount(data.value)
    }else if(data.name=='interest'){
      let regexOperationI=(!!data.value.match(/^[0-9]*.?[0-9]*$/))
      setIsNotValidInterest(!regexOperationI)
      setInterest(data.value)
    }else if(data.name=="year"){
      let regexOperationY=(!!data.value.match(/^[0-9]+$/))
      setIsNotValidYear(!regexOperationY)
      setYear(data.value)
    }
  }

  const calculateInterest=()=>{
    if(amount&&interest&&year){
      setTotalInterest(amount*interest*year/100)
    }else{
      alert("Please fill the fields")
    }
  }

  const reset=()=>{
    setAmount(0)
    setInterest(0)
    setYear(0)
    setTotalInterest(0)
    setIsNotValidYear(false)
    setIsNotValidAmount(false)
    setIsNotValidInterest(false)
    
  }


  return (
    <div className='d-flex justify-content-center align-items-center bg-dark flex-column' style={{ height: '100vh' }}>
      <div className="row bg-light w-50 d-flex justify-content-center text-center p-1 shadow rounded">
        <h1 className='m-2 fw-bold'>Simple Interest Calculator</h1>
        <h5 className='m-2'>Calculate your simple Interest Easily!</h5>
        <div className='bg-warning text-center rounded text-light p-4 w-75 m-2'>
          <h1>₹ {totalInterest}</h1>
          <h6>Total Simple Interest</h6>
        </div>
        <div>
          <TextField id="outlined-principle" label="Principle Amount" variant="outlined" className='mt-3 w-75' onChange={(e)=>onTextChange(e.target)} name='principle' value={amount||''}/>
          {isNotValidAmount ? <div className='text-center text-danger fw-bold'>
            Please Enter a valid Amount
          </div> : ''}
        </div>
        <div>
          <TextField id="outlined-rate" label="Rate of interest" variant="outlined" className='mt-3 w-75'  onChange={(e)=>onTextChange(e.target)} name='interest' value={interest||''}/>
          {isNotValidIntereset ? <div className='text-center text-danger fw-bold'>
            Please Enter a valid Interest
          </div> : ''}
        </div>
        <div>
          <TextField id="outlined-time" label="Time period" variant="outlined" className='mt-3 w-75'   onChange={(e)=>onTextChange(e.target)} name='year' value={year||''}/>
          {isNotValidYear ? <div className='text-center text-danger fw-bold'>
            Please Enter a valid Year
          </div> : ''}
        </div>
        <Stack direction="row" className='w-75 mt-2' spacing={2}>
          <Button disabled={isNotValidAmount||isNotValidIntereset||isNotValidYear} variant="contained" className='bg-dark p-3'  onClick={calculateInterest}>Calculate</Button>
          <Button variant="outlined" onClick={reset}>Reset</Button>
        </Stack>
      </div>
      <footer className="text-center text-light p-3 w-100">
        <p className="m-0">© 2025 Simple Interest Calculator. All rights reserved.</p>
        <p className="m-0"> Developed by <a href="https://yourportfolio.com" target="_blank" className="text-warning">MohammedFazil</a> </p>
        <p className="m-0">
          <a href="" target="_blank" className="text-warning">Learn More about Simple Interest</a>
        </p>
      </footer>
    </div>
  )
}

export default App
