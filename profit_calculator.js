function calculateProfit(yourInvestment, friendInvestment, totalProfit) {
  const totalInvestment = yourInvestment + friendInvestment;
  const yourRatio = yourInvestment / totalInvestment;
  const friendRatio = friendInvestment / totalInvestment;
  const yourProfit = totalProfit * yourRatio;
  const friendProfit = totalProfit * friendRatio;
  const yourTotal = yourInvestment + yourProfit;
  const friendTotal = friendInvestment + friendProfit;
  return { yourProfit, friendProfit, yourTotal, friendTotal };
}

function displayResults(yourInvestment, friendInvestment, yourProfit, friendProfit) {
  const resultsElement = document.getElementById('results');
  resultsElement.innerHTML = `
    <h2>Profit Distribution</h2>
    <table border="1">
      <tr>
        <th>Investor</th>
        <th>Profit (?)</th>
      </tr>
      <tr>
        <td>You</td>
        <td>${yourProfit}</td>
      </tr>
      <tr>
        <td>Friend</td>
        <td>${friendProfit}</td>
      </tr>
    </table>
    <p>Your total amount: ?${yourTotal}</p>
    <p>Friend's total amount: ?${friendTotal}</p>
  `;
}

const investmentForm = document.getElementById('investment-form');

investmentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const totalInvestment = parseFloat(document.getElementById('total-investment').value);
  const yourInvestment = parseFloat(document.getElementById('your-investment').value);
  const friendInvestment = parseFloat(document.getElementById('friend-investment').value);
  const totalCurrentAmount = parseFloat(document.getElementById('total-current').value);

  const totalProfit = totalCurrentAmount - totalInvestment;

  const { yourProfit, friendProfit, yourTotal, friendTotal } = calculateProfit(
    yourInvestment,
    friendInvestment,
    totalProfit
  );

  displayResults(yourInvestment, friendInvestment, yourProfit, friendProfit);
});