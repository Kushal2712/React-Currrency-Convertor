import React, { Component } from 'react'

export default class Currency extends Component {
    constructor(){
        super()
        this.state={
            curr:Number=1,
            changeval:1
        }

        
    }
    handlevalue=(e)=>{
        this.setState({
            curr:e.target.value,
        })
    }

    changeusa=()=>{
        this.setState({
            changeval:this.state.curr*70,
        })
    }
    changeinr=()=>{
        this.setState({
            changeval:this.state.curr/70
        })
    }
   

    
    render() {
        return (
            <div id="Box">
               
<h2>Currency Calculator</h2>
<table>
  <tr><td><input id="fromamount" type="text" size="13" value={this.state.curr} onChange={this.handlevalue} ></input> </td>
    <td>
    <button onClick={this.changeusa}>Convert to USD</button>
    </td>
</tr>

<tr><td>< input id="toamount" type="text" size="13" value={this.state.changeval}></input> </td>
  <td>
  <button onClick={this.changeinr}>Convert to INR</button>
  </td>
</tr>


</table>


</div>

)

    }
}
