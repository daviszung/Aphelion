export function Bank(props) {
  const myArr = [];

  function loadItems () {
    const bank = props.state.userObj.bank;
    
    
    for (let i in bank) {
      myArr.push(<div key={i}>{i} : {bank[i]}</div>)
    }
    return myArr;
  }

  return (
    <div id="bankContainer">
      <div id="bankMain" className="bankArea">
        <div id="bankTabContainer"></div>
        <div id="bankInfo"></div>
        <div id="storage">{loadItems()}</div>
      </div>
      <div id="bankSecondary" className="bankArea">
        <div></div>

      </div>
      <div id="keyItemsContainer" className="bankArea">

      </div>
    </div> 
  )
}