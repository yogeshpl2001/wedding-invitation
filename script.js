/* ANANTH & ROJA — ROYAL IVORY / CHAMPAGNE GOLD / EMERALD */
:root {
  --ivory: #f7f3e9;
  --paper: #fffdf8;
  --emerald: #183c32;
  --deep-emerald: #102b24;
  --gold: #b9975b;
  --gold-light: #dfc99d;
  --ink: #34372f;
  --muted: #77766c;
  --serif: "Cormorant Garamond", Georgia, serif;
  --sans: "DM Sans", Arial, sans-serif;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: var(--ivory); color: var(--ink); font-family: var(--sans); }
.topline { height: 4px; background: linear-gradient(90deg, var(--emerald), var(--gold), var(--emerald)); }
.site-header { height: 84px; display: flex; align-items: center; justify-content: space-between; padding: 0 7%; background: rgba(255,253,248,.96); position: sticky; top: 0; z-index: 20; border-bottom: 1px solid rgba(185,151,91,.2); }
.brand { text-decoration: none; color: var(--emerald); display: flex; flex-direction: column; align-items: center; gap: 1px; }
.brand-mark { font: 600 29px var(--serif); letter-spacing: 1px; }
.brand-mark span { color: var(--gold); font-style: italic; padding: 0 3px; }
.brand-caption { font-size: 8px; letter-spacing: 2px; }
.main-nav { display: flex; align-items: center; gap: 29px; }
.main-nav a, .language-toggle { color: var(--ink); text-decoration: none; font-size: 10px; letter-spacing: 1.4px; text-transform: uppercase; background: none; border: 0; cursor: pointer; font-family: var(--sans); }
.main-nav a:hover, .language-toggle:hover { color: var(--gold); }
.language-toggle { border: 1px solid var(--gold); padding: 9px 12px; color: var(--emerald); }
.menu-toggle { display: none; }
.hero { min-height: 690px; height: calc(100vh - 88px); max-height: 900px; position: relative; display: grid; place-items: center; overflow: hidden; color: white; text-align: center; }
.hero-image, .hero-overlay { position: absolute; inset: 0; }
.hero-image { background: url("https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=90") center 48%/cover; transform: scale(1.02); }
.hero-overlay { background: linear-gradient(90deg, rgba(12,29,23,.64), rgba(17,35,27,.35), rgba(12,29,23,.63)); }
.hero-content { position: relative; z-index: 1; width: min(780px, 90%); padding: 65px 20px 85px; animation: rise-in 1s ease both; }
.eyebrow, .section-kicker { font-size: 9px; letter-spacing: 3px; font-weight: 600; }
.eyebrow { color: #f1dfbd; }
.ornament { color: var(--gold-light); font-size: 23px; margin: 20px 0 8px; }
.hero h1 { font: 400 clamp(58px, 9vw, 105px)/.95 var(--serif); margin: 0; letter-spacing: -2px; }
.hero h1 em { color: var(--gold-light); font-weight: 400; }
.hero-kannada { font: 400 23px "Noto Sans Kannada", sans-serif; margin: 13px 0 24px; color: #f1dfbd; }
.hero-invite { max-width: 490px; margin: 0 auto 27px; font-size: 10px; line-height: 2.1; letter-spacing: 2px; }
.hero-date { display: flex; align-items: center; justify-content: center; gap: 17px; font: 500 22px var(--serif); letter-spacing: 2px; color: #f2dfb8; }
.hero-date i { height: 22px; width: 1px; background: var(--gold-light); transform: rotate(18deg); }
.hero-time { font-size: 9px; letter-spacing: 2.2px; margin: 17px 0 30px; }
.gold-button, .outline-button, .whatsapp-button { display: inline-block; text-decoration: none; letter-spacing: 1.8px; font-size: 9px; padding: 15px 24px; transition: .25s ease; }
.gold-button { color: #fff; border: 1px solid var(--gold-light); background: rgba(185,151,91,.2); }
.gold-button:hover { background: var(--gold); }
.hero-bottom-note { position: absolute; bottom: 25px; z-index: 2; font-size: 8px; letter-spacing: 3px; color: #f0dfc1; }
.section-pad { padding: 105px 7%; text-align: center; }
.section-kicker { color: var(--gold); margin: 0 0 17px; }
.section-pad h2, .countdown-section h2, .closing h2 { font: 500 clamp(36px, 5vw, 53px)/1.1 var(--serif); margin: 0 auto 25px; color: var(--emerald); }
.intro { background: var(--paper); }
.intro h2 { max-width: 650px; }
.small-divider { color: var(--gold); font-size: 19px; margin: 20px auto; display: flex; align-items: center; justify-content: center; gap: 13px; }
.small-divider:before, .small-divider:after { content: ""; width: 55px; height: 1px; background: var(--gold-light); }
.intro-copy { max-width: 620px; margin: auto; color: var(--muted); font: 17px/1.9 var(--serif); }
.script-signature { margin: 32px 0 0; color: var(--emerald); font: italic 31px var(--serif); }
.script-signature span, .closing-names span { color: var(--gold); }
.countdown-section { background: var(--emerald); color: white; padding: 86px 20px; text-align: center; }
.light { color: var(--gold-light); }
.countdown-section h2 { color: var(--paper); margin-bottom: 42px; }
.countdown { display: flex; justify-content: center; gap: clamp(18px, 5vw, 65px); }
.countdown div { display: flex; flex-direction: column; gap: 8px; min-width: 75px; }
.countdown strong { font: 500 clamp(37px, 6vw, 62px) var(--serif); color: var(--gold-light); }
.countdown span { font-size: 8px; letter-spacing: 2px; color: #e8e0d1; }
.countdown-date { margin: 35px 0 0; font-size: 10px; letter-spacing: 2px; color: #e8e0d1; }
.celebration { background: var(--ivory); }
.event-card { max-width: 850px; margin: 40px auto 25px; background: var(--paper); border: 1px solid #e2d5bb; display: grid; grid-template-columns: 180px 1fr 90px; align-items: center; padding: 35px; text-align: left; box-shadow: 0 18px 50px rgba(51,54,43,.06); }
.event-date { border-right: 1px solid #e4d8c1; display: flex; flex-direction: column; align-items: center; color: var(--gold); gap: 5px; }
.event-date strong { font: 500 65px/.9 var(--serif); color: var(--emerald); }
.event-date span { font-size: 8px; letter-spacing: 2px; }
.event-details { padding: 0 35px; }
.event-label, .family-role { color: var(--gold); font-size: 9px; letter-spacing: 2px; }
.event-details h3, .venue-card h3 { font: 500 31px var(--serif); color: var(--emerald); margin: 9px 0; }
.event-details p { color: var(--muted); font-size: 12px; line-height: 1.8; }
.event-details .event-time { color: var(--gold); font-weight: 600; }
.event-flower { color: var(--gold-light); font-size: 57px; text-align: center; }
.event-note, .gallery-note { color: var(--muted); font: italic 17px var(--serif); }
.families { background: #eee8db; }
.family-grid { max-width: 850px; margin: 45px auto 0; display: grid; grid-template-columns: 1fr 60px 1fr; align-items: center; }
.family-card { background: rgba(255,253,248,.7); border: 1px solid #e0d2b6; padding: 35px 20px; }
.family-card h3 { color: var(--emerald); font: 500 36px var(--serif); margin: 13px 0; }
.family-card p:not(.family-role) { color: var(--muted); font: 16px var(--serif); margin: 8px 0; }
.family-emblem { color: var(--gold); font: italic 36px var(--serif); }
.venue { background: var(--paper); }
.venue-card { max-width: 650px; margin: 38px auto 0; padding: 42px 25px; border: 1px solid #dfd0b1; background: var(--ivory); }
.venue-icon { color: var(--gold); font-size: 35px; }
.venue-card h3 { margin: 15px 0; }
.venue-card p { color: var(--muted); line-height: 1.9; font-size: 13px; }
.outline-button { margin-top: 17px; color: var(--emerald); border: 1px solid var(--gold); }
.outline-button:hover { background: var(--emerald); color: white; }
.gallery-section { background: var(--ivory); }
.gallery-grid { max-width: 1000px; margin: 38px auto 15px; display: grid; grid-template-columns: 1.15fr 1fr 1fr; gap: 15px; align-items: center; }
.gallery-photo { display: block; height: 300px; border: 0; padding: 0; overflow: hidden; background: #e8dfce; cursor: zoom-in; }
.gallery-photo:nth-child(2) { height: 350px; }
.gallery-photo img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease; }
.gallery-photo:hover img { transform: scale(1.05); }
.gallery-disclaimer { color: #8b887e; font-size: 10px; line-height: 1.7; }
