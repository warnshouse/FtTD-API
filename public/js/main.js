document.querySelector("#submit").addEventListener("click", apiReq);
document.querySelector("#textbox").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    apiReq();
  }
});

async function apiReq() {
  try {
    const name = document.querySelector("#textbox").value;
    const res = await fetch(`/api/${name}`);
    const data = await res.json();
    document.querySelector("#name").textContent = (data["jpName"]) ? 
      name[0].toUpperCase() + name.substring(1).toLowerCase() : "Not Found!";
    document.querySelector("#jpName").textContent = `Japanese Name: ${data["jpName"]}`;
    document.querySelector("#num").textContent = `Number: ${data["num"]}`;
    document.querySelector("#epDebut").textContent = `Debut Episode: ${data["epDebut"]}`;
    document.querySelector("#timePd").textContent = `Time Period Found: ${data["timePd"]}`;
  }
  catch (err) {
    console.log(err);
  }
}