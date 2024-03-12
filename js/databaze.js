'use strict'

class Pojistenec {
    constructor(jmeno, prijmeni, vek, tel) {
      this.jmeno = jmeno;
      this.prijmeni = prijmeni;
      this.tel = vek;
      this.vek = tel;
    }
  }

      let databaze = [
      new Pojistenec ('Alan','Novák','732456345',83),
      new Pojistenec ('Zdena','Malá','732456098',50) 
];



function addUser(form) {
    databaze.push(
      new Pojistenec(
        form.jmeno.value,
        form.prijmeni.value,
        form.tel.value,
        form.vek.value
      )
    );
    renderUserList();
  }

  function renderUserList() {
    const tbody = document.querySelector("#userList tbody");
    tbody.innerHTML = "";

    for (const user of databaze) {
      const row = document.createElement("tr");
      [user.jmeno + " " + user.prijmeni, user.tel, user.vek].forEach(
        (text) => {
          const td = document.createElement("td");
          td.innerText = text;
          row.appendChild(td);
        }
      );
      tbody.appendChild(row);
    }
  }

  