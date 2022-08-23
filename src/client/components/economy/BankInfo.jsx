export function BankInfo(props) {
  return (
    <div id="bankInfo">Space: {props.state.userObj.bankSpace}/{props.state.userObj.maxBankSpace}</div>
  )
}