/* Anonymous usage counting for GE3791 pages. No names, no registration numbers, no cookies.
   Settings are in site-config.js (SITE.analytics). If both are blank, this file does nothing.
   A learner can switch counting off on their device with the "Stop counting" link in the footer. */
(function () {
  var A = (window.SITE && window.SITE.analytics) || {};
  var off = false;
  try { off = localStorage.getItem('hve_off') === '1'; } catch (e) {}
  window.hveTrackOff = function (on) { try { localStorage.setItem('hve_off', on ? '1' : '0'); } catch (e) {} return on; };
  window.hveTrackIsOff = function () { return off; };

  function notice() {
    if (!(A.endpoint || A.goatcounter)) return;
    var p = document.createElement('p');
    p.className = 'sub'; p.id = 'hve-priv'; p.style.cssText = 'font-size:13px;margin:14px 0;text-align:center';
    var isOff = off || navigator.doNotTrack === '1';
    p.innerHTML = 'This site counts visits anonymously to improve the course. It stores no names, registration numbers or cookies. ' +
      '<a href="#" id="hve-tg">' + (isOff ? 'Start counting on this device' : 'Stop counting on this device') + '</a><span id="hve-reach"></span>';
    var host = document.querySelector('footer') || document.querySelector('main') || document.body;
    host.appendChild(p);
    document.getElementById('hve-tg').onclick = function (e) { e.preventDefault(); window.hveTrackOff(!isOff); location.reload(); };
    if (A.endpoint && A.showCounter && document.body.getAttribute('data-reach') !== null) {
      fetch(A.endpoint + '?op=stats').then(function (r) { return r.json(); }).then(function (j) {
        if (j && j.devices >= (A.counterMin || 25)) document.getElementById('hve-reach').textContent = ' · ' + j.devices + ' learners have used this site.';
      }).catch(function () {});
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', notice); else notice();
  if (off || navigator.doNotTrack === '1') { window.hveTrack = function () {}; return; }

  function id() {
    try {
      var v = localStorage.getItem('hve_id');
      if (!v) { v = Array.prototype.map.call(crypto.getRandomValues(new Uint8Array(9)), function (b) { return ('0' + b.toString(16)).slice(-2); }).join(''); localStorage.setItem('hve_id', v); }
      return v;
    } catch (e) { return 'na'; }
  }
  var page = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') || 'index';

  function send(ev, val) {
    if (!A.endpoint) return;
    var body = JSON.stringify({ op: 'ev', id: id(), page: page, ev: ev, val: String(val == null ? '' : val).slice(0, 80), cohort: (window.SITE && window.SITE.cohort) || '' });
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(A.endpoint, new Blob([body], { type: 'text/plain' }))) return;
    } catch (e) {}
    try { fetch(A.endpoint, { method: 'POST', mode: 'no-cors', body: body, keepalive: true }); } catch (e) {}
  }
  window.hveTrack = send;

  /* GoatCounter: free, cookie-free page-view counter with its own dashboard */
  if (A.goatcounter) {
    var g = document.createElement('script');
    g.async = true; g.src = 'https://gc.zgo.at/count.js';
    g.setAttribute('data-goatcounter', 'https://' + A.goatcounter + '.goatcounter.com/count');
    document.head.appendChild(g);
  }

  /* one "visit" per device per day, so unique daily visitors can be counted */
  try {
    var day = new Date().toISOString().slice(0, 10);
    if (localStorage.getItem('hve_day') !== day) { localStorage.setItem('hve_day', day); send('visit', ''); }
  } catch (e) { send('visit', ''); }
  send('view', '');

  /* Drive material clicks and any element with data-ev */
  document.addEventListener('click', function (e) {
    var d = e.target.closest && e.target.closest('[data-ev]');
    if (d) { send(d.getAttribute('data-ev'), d.getAttribute('data-val') || ''); return; }
    var a = e.target.closest && e.target.closest('a[href*="drive.google.com"]');
    if (a) send('drive', 'link');
  }, true);
})();
