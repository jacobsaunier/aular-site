/* Orte nach Sportart auf guide.html.
   Liest assets/locations.json (eigene Datei, keine Verbindung nach außen).
   Format: entweder ein Objekt { "Laufen": [ {...}, ... ], ... } oder eine Liste von Einträgen
   mit dem Feld "sport". Eintrag: sport, name, stadtteil, tipp, link, geprueft (true/false). */
(function () {
  var chips = document.querySelector(".chips");
  var liste = document.getElementById("orte-liste");
  if (!chips || !liste) return;

  var daten = null;
  var fehler = false;
  var offen = null;

  chips.hidden = false;

  function normalisiere(json) {
    var out = {};
    if (Array.isArray(json)) {
      json.forEach(function (e) {
        if (!e || !e.sport) return;
        (out[e.sport] = out[e.sport] || []).push(e);
      });
    } else if (json && typeof json === "object") {
      Object.keys(json).forEach(function (k) {
        out[k] = Array.isArray(json[k]) ? json[k] : [];
      });
    }
    return out;
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  function ort(e) {
    var li = el("li", "ort");
    var kopf = el("div", "ort-kopf");
    kopf.appendChild(el("strong", "ort-name", e.name || ""));
    if (e.geprueft !== true) kopf.appendChild(el("span", "ort-pruefen", "zu prüfen"));
    li.appendChild(kopf);
    if (e.stadtteil) li.appendChild(el("p", "ort-teil", e.stadtteil));
    if (e.tipp) li.appendChild(el("p", "ort-tipp", e.tipp));
    if (e.link && /^https?:\/\//i.test(e.link)) {
      var a = el("a", "ort-link", "Webseite");
      a.href = e.link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", (e.name || "Anbieter") + ", Webseite (öffnet in neuem Tab)");
      li.appendChild(a);
    }
    return li;
  }

  function render() {
    liste.textContent = "";
    Array.prototype.forEach.call(chips.querySelectorAll(".chip"), function (b) {
      var an = b.getAttribute("data-sport") === offen;
      b.setAttribute("aria-expanded", an ? "true" : "false");
      b.classList.toggle("chip-an", an);
    });
    if (!offen) return;
    if (fehler) {
      liste.appendChild(el("p", "hinweis", "Die Orte konnten gerade nicht geladen werden."));
      return;
    }
    if (!daten) {
      liste.appendChild(el("p", "hinweis", "Orte werden geladen …"));
      return;
    }
    var eintraege = daten[offen] || [];
    if (!eintraege.length) {
      liste.appendChild(el("p", "hinweis", "Orte folgen"));
      return;
    }
    var ul = el("ul", "orte-karten");
    eintraege.forEach(function (e) { ul.appendChild(ort(e)); });
    liste.appendChild(ul);
  }

  chips.addEventListener("click", function (ev) {
    var b = ev.target.closest ? ev.target.closest(".chip") : null;
    if (!b) return;
    var sport = b.getAttribute("data-sport");
    offen = offen === sport ? null : sport;
    render();
  });

  fetch("assets/locations.json", { credentials: "same-origin" })
    .then(function (r) {
      if (!r.ok) throw new Error("http " + r.status);
      return r.json();
    })
    .then(function (j) {
      daten = normalisiere(j);
      render();
    })
    .catch(function () {
      fehler = true;
      render();
    });
})();
