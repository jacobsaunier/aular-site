/* Färbt den oberen Rand des Telefon-Mockups in die Hintergrundfarbe des Videos.
   Liest nur ein Pixel aus dem eigenen Video, keine Verbindung nach außen. */
(function () {
  var v = document.querySelector(".phone-body video");
  if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var body = v.parentNode;
  var c = document.createElement("canvas");
  c.width = 1;
  c.height = 1;
  var x = c.getContext("2d", { willReadFrequently: true });
  function sample() {
    if (v.readyState < 2 || !v.videoWidth) return;
    try {
      x.drawImage(v, Math.floor(v.videoWidth / 2), 2, 1, 1, 0, 0, 1, 1);
      var d = x.getImageData(0, 0, 1, 1).data;
      body.style.setProperty("--top", "rgb(" + d[0] + "," + d[1] + "," + d[2] + ")");
    } catch (e) {}
  }
  setInterval(sample, 200);
})();
