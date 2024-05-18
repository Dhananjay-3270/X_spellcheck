import { useState } from 'react'

import './App.css'

function App() {
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };
 
const [inputtext,setText] = useState("")
const[suggested,setSuggested] = useState("");

 const handleInputChange = (e) => {
  
  const text = e.target.value;
  setText(text);

  // console.log(text, "Text");
  // Implement a basic spelling check and correction
  const words = text.split(" ");
  console.log(words);
  const correctedWords = words.map((word) => {
    // console.log(word);
    const correctedWord = customDictionary[word.toLowerCase()];

    return correctedWord || word;
  });
  console.log(correctedWords);
  const correctedText = correctedWords.join(" ");
  console.log(correctedText);

  // Set the suggested text (first corrected word)
  const firstCorrection = correctedWords.find(
    (word, index) => word !== words[index]
  );
setSuggested(firstCorrection);
};




  return (
    <>
  <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={inputtext}
          onChange={handleInputChange}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {suggested && (
          <p>
            Did you mean: <strong>{suggested}</strong>?
          </p>
        )}
    </>
  )
}

export default App
