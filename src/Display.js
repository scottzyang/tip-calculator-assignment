function Display({tipPercentage, bill, people}) {
  const perPerson = ((bill * (tipPercentage / 100) + bill) / people).toFixed(2)
  return(
    <>
      <h2>Inputted Values:</h2>
      <p>Total Bill: ${parseFloat(bill).toFixed(2)}</p>
      <p>Tip Percentage: {tipPercentage}%</p>
      <p>Number of People: {people}</p>

      <h2>Amount per Person:</h2>
      <p>${perPerson}</p>
    </>
  )
}

export default Display
