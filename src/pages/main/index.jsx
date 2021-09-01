import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { ResultSearch } from "../../components/ResultSearch";
import { consultedAPI } from "../../services/consultedAPI";

import "./index.css";

function Main() {
  

  const [inputValue, setInputValue] = useState('')
  const [inputConsult, setInputConsult] = useState('')
  const [valueSearch, setValueSearch] = useState([])


  
  const submitHandler = (e) => {

      e.preventDefault()

      if(inputValue.length === 8) {
      setInputConsult(inputValue)
      } else {

        alert("Coloque um valor de 8 números")
      }
  }

  const handleAPIData =  async (inputConsult) => {

    const response =  await consultedAPI(inputConsult)
   
    setValueSearch(response)
  }



  const handleInputValue = (e) => {

    const value = e.target.value

    setInputValue(value)

  }

  useEffect(() => {

    if(inputConsult.length !== 0) {

    handleAPIData(inputConsult)

    }

  }, [inputConsult])

  return (
    <div className="content">
      <header>
        <h1>CEP AQUI</h1>
      </header>

      <main>
        <form className="search-container" onSubmit={submitHandler}>
          <input type="number" name="input" value={inputValue} onChange={handleInputValue}/>
          <Button />
        </form>
          {valueSearch.length !== 0 && <ResultSearch result={valueSearch}/>}
          
      </main>
    </div>
  );
}

export default Main;
