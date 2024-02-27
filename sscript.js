// Send a request to the Node.js server to retrieve predicted data
fetch('/predicted-data')
  .then(response => response.json())
  .then(data => {
    // Get the table element
    const table = document.getElementById('predicted-table');

    // Iterate over the predicted data and populate the table
    data.forEach(prediction => {
      const row = table.insertRow();

      const countryCell = row.insertCell();
      countryCell.textContent = prediction.country;

      const next24HoursCell = row.insertCell();
      next24HoursCell.textContent = prediction.next24Hours;

      const next1WeekCell = row.insertCell();
      next1WeekCell.textContent = prediction.next1Week;

      const next1MonthCell = row.insertCell();
      next1MonthCell.textContent = prediction.next1Month;
    });
  });
