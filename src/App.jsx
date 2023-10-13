
const Hello = (props)=>{

  console.log(props)
  return(
    <div>
      <p>
        hello, yourname is { props.username} and your age is {props.age}.
      </p>
    </div>
  )
}
/*
-this called component (function = component)
*/

function App(){
  
  const name1 = 'pradeep'
  const name2 = 'srikanth'
  const age1 = 28
  const age2 = 27

  return(
    <div>
    Hello world!

    <Hello username = {name1} age={age1}/>
    <Hello username = {name2} age={age2}/>
    </div>
  )
}
export default App;