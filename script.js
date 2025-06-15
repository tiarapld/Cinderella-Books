const API_URL = "https://script.google.com/macros/s/AKfycbxNw1266Ytwo6cfCODUQPjha30EB01oj6eCkSUuKjYb4BHR4AQduR3qKjUiKzrj7Dau/exec";

async function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  formData.append("action", "add");

  const params = new URLSearchParams(formData).toString();
  const res = await fetch(`${API_URL}?${params}`, { method: "POST" });
  const result = await res.text();
  alert(result);
  form.reset();
  loadData();
}

async function loadData() {
  const res = await fetch(`${API_URL}?action=get`);
  const data = await res.json();
  const tbody = document.getElementById("data-body");
  tbody.innerHTML = "";

  data.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.ID}</td>
      <td>${row.Judul}</td>
      <td>${row.Jilid}</td>
      <td>${row.Penulis}</td>
      <td>${row.Stok}</td>
      <td>${row.Harga}</td>
    `;
    tbody.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", loadData);
