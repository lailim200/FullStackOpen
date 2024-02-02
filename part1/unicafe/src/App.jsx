import {useState} from 'react'
import Button from './Button'
const StatisticLine = props => <div>
<table><tbody>
  <tr>
    <th>{props.text}</th>
    <th>{props.value}</th>
  </tr>
  </tbody>
</table>
  </div>
const Statistics = (props)=> 
{
  if(props.good ==0 &props.bad==0 & props.neutral == 0)
  {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else
{
  return(<div>

<StatisticLine text = "good" value = {props.good}/>
<StatisticLine text = "neutral" value = {props.neutral}/>
<StatisticLine text = "bad" value = {props.bad}/>
<StatisticLine text= "all" value = {props.bad+props.neutral+props.good}/>
<StatisticLine text = "average" value = {(props.good - props.bad)/(props.bad+props.neutral+props.good)}/>
<StatisticLine text = "positive" value = {(props.good*100)/(props.bad+props.neutral+props.good) + " %"}/>





</div>)
}
}

const App = () => {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)
const changeGood =()=>{
  setGood(good+1)

}

const changeBad =()=>{
  setBad(bad+1)
}
const changeNeutral =()=>{
  setNeutral(neutral+1)
}

  return(<div>
    <h1>give feedback</h1>
    <Button handleClick= {changeGood} text = 'good'/>
    
    <Button handleClick = {changeNeutral} text = 'neutral'/>
    
    <Button handleClick = {changeBad} text = 'bad'/>
    <h1>Statistics</h1>
    <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    
    </div>

  )
} 

export default App