import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
const [step,setStep] = useState(1);
const[answer,setAnswer]=useState(' ');
const[showLetter,setShowLetter]=useState(false);

const correctAnswers ={
  1 : 'kushi',
  2 : 'Idly',
  3 : '23 Aug'
}

const handileCheckAnswers=()=>{
  const correct = correctAnswers[step].toLowerCase();
  if(answer.trim().toLowerCase() === correct){
    setAnswer('');
    if(step === 3){
      setShowLetter(true);
    }
    else{
      setStep(step+1);
    }
  }
  else{
    alert("Antey lee ra meomories endhuku gurthu vuntuntayi niku sarlee mala try cheyu")
  }

};

  return (
    <div className={`app-container ${
      showLetter? 'final-bg':
      step === 1 ? 'normal-bg': step === 2 ? 'romantic-bg1':'romantic-bg2'
    }`}>
      <div className='hearts'>
        {Array.from({ length: 8 }).map((_, i) => {
  const tx = Math.random() * window.innerWidth - window.innerWidth / 2 + 'px';
  const delay = Math.random() * 5 + 's';
  const duration = Math.random() * 4 + 4 + 's';
  return <div key={i} className="heart"
    style={{ '--tx': tx, animationDelay: delay, animationDuration: duration }} />;
})}


      </div>
      {!showLetter && (<div className='question-section'>
        <h1>💕Anniversary Suprise💕</h1>
      

      {step === 1 && (
        <>
        <h2>Q1 . First Question kada simple eh first movie we watched together in hyderabad</h2>
        <input type = "text" value={answer} onChange={(e)=>{
          setAnswer(e.target.value)
        }} placeholder =" Type Answer" />
        <button onClick={handileCheckAnswers}>Next</button>
        </>
      )}

      { step === 2 && (
        <>
        <h2>Q2.Edhi chala Simple ra ehh tiffin nak chala estam</h2>
        <input type="text" value={answer} onChange={(e)=>{
          setAnswer(e.target.value) 
        }} placeholder="Type here.." />
        <button onClick={handileCheckAnswers}>Next</button>
        </>
      )
      }

      {
        step=== 3 && (
          <>
          <h2>Q3.Last One raaa edhii nen chala feel ayina movement first time nanu reject chesina day </h2>
         <input type="text" value={answer}
               onChange={
                (e)=>{
                  setAnswer(e.target.value)
                }
               }
               placeholder='ela rayu ra date ex;- 01 jan'/>
               <button onClick={handileCheckAnswers}>Next</button>
          </>
        )
      }
      
      
      
    </div>
    )
  }


  {
    showLetter &&(
  
 <div className="letter-section">
          <h1>💌 Happy Anniversary to You 💌</h1>
          <p>
            My love, happy anniversary! 💕<br />
            Every day with you is a blessing. You're my sunshine, my strength, and my heart.
            I still remember our first walk at biryanipatnam holding your hand that part of my life is more than any things, our late-night calls, and your smile that melts everything.
            <br /><br />
            You are my forever, and I can't wait to create more memories together.  
            I love you endlessly. 💖
          </p>
          <audio autoPlay loop>
            <source src="/greetingssongBackground.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
    

)}

export default App;
