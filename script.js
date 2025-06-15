const apiURL = 'https://script.google.com/macros/s/AKfyc.../exec'; // Ganti dengan URL Web App kamu

fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector("#bookTable tbody");
    data.forEach(book => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${book.id}</td>
        <td>${book.judul}</td>
        <td>${book.jilid}</td>
        <td>${book.penulis}</td>
        <td>${book.stok}</td>
        <td>Rp ${parseInt(book.harga).toLocaleString()}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(error => console.error('Gagal mengambil data:', error));
