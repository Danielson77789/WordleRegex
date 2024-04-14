import { useState } from "react";

const useWordle = (solution) => {
    
    
    const handleKeyup = ({key}) => {
        if (key === 'Backspace'){
            setCurrentGuess(prev => prev.slice(0, -1))
            return
        }
    }
    return {currentGuess, handleKeyup}
  };

  export default useWordle;