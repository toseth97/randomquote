import { useState, useEffect } from "react";

function App() {
  const color = ['aqua', 'aquamarine',  'black', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue',  'chocolate', 'coral', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'firebrick',  'forestgreen', 'fuchsia',  'gold', 'goldenrod', 'green', 'greenyellow',  'hotpink', 'indianred', 'indigo', 'khaki',  'lawngreen',   'lime', 'limegreen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue',   'navy','olive',  'orange',  'peru', 'pink', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'sandybrown', 'seagreen', 'sienna', 'skyblue',  'steelblue',  'teal',  'tomato', 'turquoise', 'violet', 'yellowgreen'];

  
  let random_color = color[Math.floor(Math.random() * color.length)]


  const [quote, setQuote ] = useState({})
  const [load, setLoad] = useState(false)

  useEffect(()=>{
      try{
        (async()=>{
          await fetch("https://api.quotable.io/random").then(res=> res.json()).then(data=>setQuote(data))
          
          setLoad(true)

        })()
      }catch(err){
        setLoad(false)
        console.log(err)
      }
  },[])


  const changeQuote = async ()=>{
    try{
      (async()=>{
        await fetch("https://api.quotable.io/random").then(res=> res.json()).then(data=>setQuote(data))
        random_color = color[Math.floor(Math.random() * color.length)]
        setLoad(true)

      })()
    }catch(err){
      setLoad(false)
      console.log(err)
    }
  }




  return (
    <div className="App" id="app" style={{backgroundColor:random_color}}>
      {
        load?<div id="quote-box" >
        <p id="text" style={{color:random_color, transition:"1s cubic-bezier(0.86, 0, 0.07, 1)"}}><span style={{fontSize:"4.4rem", fontWeight:"bolder"}}>" </span>{quote.content}</p>
        <p id="author" style={{color:random_color, opacity:.7 , transition:"1s cubic-bezier(0.86, 0, 0.07, 1)"}}>-{quote.author}</p>
        <div id="forQuotes">
        <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.content}${quote.author}`}><i className='bx bxl-twitter' style={{backgroundColor:random_color, transition:"1s cubic-bezier(0.86, 0, 0.07, 1)"}}></i></a>
        <button  id="new-quote" style={{border:`2px solid ${random_color}`, padding:".3rem 2rem" , color:random_color}} onClick={changeQuote}>New Quote</button>
        </div>
        <small  style={{color:random_color, transition:"1s cubic-bezier(0.86, 0, 0.07, 1)"}}>by Lawal Tobiloba</small>
      </div>:null
      }
    </div>
  );
}

export default App;
