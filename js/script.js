document.getElementById("messageForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById("pesan").value;
  
    const output = document.getElementById("output");
    output.innerHTML = `
      <p><b>Current time:</b> ${new Date().toLocaleString()}</p><br><br>
      <p><b>Nama: ${name}</b></p><br>
      <p><b>Tanggal Lahir:</b> ${birthdate}</p><br>
      <p><b>Jenis Kelamin:</b> ${gender}</p><br>
      <p><b>Pesan:</b> ${pesan}</p><br>
    `;
  });
  