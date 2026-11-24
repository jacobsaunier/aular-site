/* Telefon-Mockup auf der Startseite.
   1. Startet das Demo-Video nur auf großen Bildschirmen und ohne "Bewegung reduzieren".
      Auf dem Handy wird das Video gar nicht erst geladen.
   2. Färbt den oberen Rand des Telefons in die Hintergrundfarbe des Videos.
   Liest nur ein Pixel aus dem eigenen Video, keine Verbindung nach außen. */
(function () {
  var v = document.querySelector(".phone-body video");
  if (!v) return;
  var body = v.parentNode;
  var gross = window.matchMedia("(min-width: 761px)");
  var ruhig = window.matchMedia("(prefers-reduced-motion: reduce)");
  var c = document.createElement("canvas");
  c.width = 1;
  c.height = 1;
  var x = c.getContext("2d", { willReadFrequently: true });
  var timer = null;

  function sample() {
    if (v.readyState < 2 || !v.videoWidth) return;
    try {
      x.drawImage(v, Math.floor(v.videoWidth / 2), 2, 1, 1, 0, 0, 1, 1);
      var d = x.getImageData(0, 0, 1, 1).data;
      body.style.setProperty("--top", "rgb(" + d[0] + "," + d[1] + "," + d[2] + ")");
    } catch (e) {}
  }

  function start() {
    if (!gross.matches || ruhig.matches) return;
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
    if (!timer) timer = setInterval(sample, 200);
  }

  function stop() {
    v.pause();
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function pruefen() {
    if (gross.matches && !ruhig.matches) start();
    else stop();
  }

  if (gross.addEventListener) {
    gross.addEventListener("change", pruefen);
    ruhig.addEventListener("change", pruefen);
  }
  pruefen();
})();
