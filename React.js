function Calculator(){
  const [calc,setCalc]=React.useState({
    current:"0",
    total:"0",
    isInitial:true,
    preOp:""});

  function handleNumber(value)
  {
    let newValue=value;
  
    if(!calc.isInitial)
      {
    newValue=calc.current+value;
      }
    
    setCalc({current:newValue,total:calc.total,isInitial:false,preOp:calc.preOp});
  }
  function handleOperator(value)
  {
    const total=doCalculation();
    
    setCalc({current:total.toString(),total:total.toString(),isInitial:true ,preOp:value});
    
  }
  function doCalculation()
  {
    let total=parseInt(calc.total);
   
    switch(calc.preOp)
      {
        case "+":
          total +=parseInt(calc.current);
          break;
        case "-":
          total -=parseInt(calc.current);
          break;
        case "*":
          total *=parseInt(calc.current);
          break;
         case "/":
          total /=parseInt(calc.current);
          break;
        default:
          total =parseInt(calc.current);
      } 
    return total;
  }
  function renderDisplay()
  {
    return calc.current;
  }
  function handleClear()
  {
   setCalc({
    current:"0",
    total:"0",
    isInitial:true,
    preOp:""});
  }
 
return(
<div className="calculator">
  <div className="display"> {renderDisplay()}</div>
  <Calcbutton value="1" onClick={handleNumber}/>
  <Calcbutton value="2" onClick={handleNumber}/>
  <Calcbutton value="3" onClick={handleNumber}/>
  <Calcbutton  className="operator" onClick={handleOperator }value="/"/>
  
  <Calcbutton value="4" onClick={handleNumber}/>
  <Calcbutton value="5" onClick={handleNumber}/>
  <Calcbutton value="6" onClick={handleNumber}/>
  <Calcbutton className="operator"  onClick={handleOperator} value="-"/>
  
  <Calcbutton value="7" onClick={handleNumber}/>
  <Calcbutton value="8" onClick={handleNumber}/>
  <Calcbutton value="9" onClick={handleNumber}/>
  <Calcbutton className="operator"  onClick={handleOperator } value="*"/>
  
  <Calcbutton value="C" onClick={handleClear}/>
  <Calcbutton value="0" onClick={handleNumber}/>
  <Calcbutton value="=" onClick={handleOperator}/>
  <Calcbutton className="operator"  onClick={handleOperator } value="+"/>
  </div> 
      )  
}


function Calcbutton(props)
{
  return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
}
ReactDOM.render(<div className="app-container"><Calculator/></div>,document.getElementById("root"));
