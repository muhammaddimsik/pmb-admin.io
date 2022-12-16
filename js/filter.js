function filterTable() {
  let dropdown, table, rows, cells, country, filter;
  dropdown = document.getElementById("drop");
  table = document.getElementById("example");
  rows = table.getElementsByTagName("tr");
  filter = dropdown.value;

  for (let row of rows) {
    cells = row.getElementsByTagName("td");
    country = cells[3] || null;
    if (filter === "All" || !country || filter === country.textContent) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}
