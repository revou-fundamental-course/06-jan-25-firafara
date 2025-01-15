document.getElementById("messageForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah halaman refresh saat form disubmit
  
    // Ambil data dari form
    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message").value;
  
    // Tampilkan data di bagian output
    const output = document.getElementById("output");
    output.innerHTML = `
      <p>Current time: ${new Date().toLocaleString()}</p>
      <p>Nama: ${name}</p>
      <p>Tanggal Lahir: ${birthdate}</p>
      <p>Jenis Kelamin: ${gender}</p>
      <p>Pesan: ${message}</p>
    `;
  });
  