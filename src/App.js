import { Button, Stack, TextField } from '@mui/material';

import './App.css';
import { useState } from 'react';


function App() {

 const [interest,setInterest] = useState(0)
 const [principle,setPrinciple] =useState(0) 
 const [rate,setRate] =useState(0)
 const [year,setYear] =useState(0)
 const [isPrincipleValid,setIsPrincipleValid] = useState(true)
 const [isRateValid,setIsRateValid] = useState(true)
 const [isYearValid,setIsYearValid] = useState(true)

 const validInput=(e)=>{

  const {name,value} =e.target
  if(!!value.match(/^[0-9]*\.?[0-97]+$/)){

    if(name==='principle'){
    setPrinciple(value)
    setIsPrincipleValid(true)

    }
  else if(name==='rate'){
    setRate(value)
    setIsRateValid(true)
  }else if(name==='year'){
    setYear(value)
    setIsYearValid(true)
  }
}
  
  else{
    if(name==='principle'){
    setPrinciple(value)
    setIsPrincipleValid(false)
  }else if(name==='rate'){
  setRate(value)
  setIsRateValid(false)
  }else if(name==='year'){
    setYear(value)
    setIsYearValid(false)
    }
}
}

const handleCalculate=(e)=>{
  e.preventDefault()
  if(!principle || !rate || !year){
    alert("Please fill the form Completely")
  }else{
    setInterest(principle*rate*year/100)
  }
}

const handleReset=()=>{
setPrinciple(0)
setRate(0)
setYear(0)
setIsPrincipleValid(true)
setIsRateValid(true)
setIsYearValid(true)
setInterest(0)
}

  return (
    <div style={{height:'100vh',padding:'20px'}} className='bg-dark d-flex justify-content-center align-items-center w-100'>
      
      
      <div style={{width:'500px',height:'100vh', margin:'50px'}} className='bg-light p-5 rounded'>
        <h3>Simple Interest App</h3>
        <p>Calculate your simple interest Easily</p>
        <div className="interest-card w-100 bg-warning mt-5 d-flex justify-content-center align-items-center flex-column text-light rounded shadow">
            <h1>₹ {' '} {interest}</h1>
            <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className="mt-5" onSubmit={handleCalculate} >
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic1" label="₹ Principle Amount" variant="outlined" name='principle' value={principle || ""} onChange={(e)=>validInput(e)} />
          </div>
          {
            !isPrincipleValid &&
            <div style={{fontSize:'15px'}} className="mt-3 mb-3 text-danger ">
            *Invalid User Input
            </div>
          }
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic2" label="Rate of interest(p.a) %" variant="outlined" value={rate || ""} name='rate' onChange={(e)=>validInput(e)}   />
          </div>
          {
            !isRateValid &&
            <div style={{fontSize:'15px'}} className="mt-3 mb-3 text-danger ">
            *Invalid User Input
            </div>
          }
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic3" label="Time period ( Yr )" variant="outlined"  value={year || ""} name='year' onChange={(e)=>validInput(e)}  />
          </div>

          {
            !isYearValid &&
            <div style={{fontSize:'15px'}} className="mt-3 mb-3 text-danger ">
            *Invalid User Input
            </div>
          }

          <Stack direction="row" spacing={2}>
            <Button style={{height:'70px',width:'200px'}} type='submit' variant="contained" disabled={isPrincipleValid && isRateValid && isYearValid ?false:true}>CACULATE</Button>
            <Button style={{height:'70px',width:'200px'}} variant="outlined" onClick={handleReset}>RESET</Button>
          </Stack>
        </form>
      </div>
    
    
    </div>
  );
}

export default App;
