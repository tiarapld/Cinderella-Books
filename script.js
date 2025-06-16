const API_URL = "https://script.google.com/macros/s/AKfycbxNw1266Ytwo6cfCODUQPjha30EB01oj6eCkSUuKjYb4BHR4AQduR3qKjUiKzrj7Dau/exec";

async function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  formData.append("action", "add");

  const res = await fetch(API_URL, {
    method: "POST",
    body: formData
  });

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
      <td>${row.id}</td>
      <td>${row.judul}</td>
      <td>${row.jilid}</td>
      <td>${row.penulis}</td>
      <td>${row.stok}</td>
      <td>${row.harga}</td>
    `;
    tbody.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", loadData);

