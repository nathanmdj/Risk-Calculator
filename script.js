function calculateRisk() {
  const entryPrice = parseFloat(document.getElementById('entryP').value);
  const riskAmount = parseFloat(document.getElementById('riskAmount').value);
  const stopLoss = parseFloat(document.getElementById('stopLoss').value);
  const leverage = parseFloat(document.getElementById('leverage').value);

  if (isNaN(entryPrice) || isNaN(riskAmount) || isNaN(stopLoss)) {
    document.getElementById('result').innerText = 'Please enter valid numbers.';
    return;
  }

  const stopLossPercent = Math.abs((entryPrice - stopLoss)) / entryPrice
  console.log(stopLossPercent)

  const positionSize = riskAmount / (stopLossPercent * leverage);
  console.log(positionSize);

  const pos2 = positionSize / entryPrice * leverage;
  document.getElementById('result').innerText = `Position Size: $${positionSize.toFixed(2)} or ${pos2.toFixed(5)} CONT QTY`;
}
