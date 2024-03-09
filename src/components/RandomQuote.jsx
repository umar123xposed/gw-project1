import React, { useEffect, useState } from 'react'

const RandomQuote = () => {


    const quote= ["The only way to do great work is to love what you do. - Steve Jobs",

    "Believe you can and you're halfway there.- Theodore Roosevelt",
    
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer"]
    
    const [State, setState]= useState(0)
    const [Quote, SetQuote]= useState(quote[State])

    useEffect(()=>{
        if(State<8){
        SetQuote(quote[State])
        }
        else{
            SetQuote("Thats it for today :)")
        }
    })



  return (
    <div className='container d-flex flex-column align-items-center my-5'>
        <h1 className='d text-white'>Quote of the day!</h1>
        <div className="card w-65 mb-3 b bg-dark-subtle">
  <div className="card-body d-flex flex-column align-items-center">
    <p className="card-text">{Quote}</p>
    <button class="btn btn-outline-primary" onClick={()=>{setState(State+1)}}>Next</button>
  </div>
</div>
      
    </div>
  )
}

export default RandomQuote
