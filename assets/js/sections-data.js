 'use strict';

(() => {
  const SECTIONS = [
    {
      id: 'sec-gaming', kickerDe: 'Gaming', kickerEn: 'Gaming', titleDe: 'Gaming', titleEn: 'Gaming',
      items: [
        { name: 'Fichtelhillz Trucker', category: 'ETS2 · Trucking', statusDe: 'Community', statusEn: 'Community', roleDe: 'Supporter', roleEn: 'Supporter', platform: 'Discord', descDe: '🚛 Fichtelhillz Trucker – Deine Community rund ums Trucking! 🏔 Erlebe gemeinsame Touren, Convoys, Austausch & jede Menge Spaß in ETS2. Egal ob Anfänger oder erfahrener Trucker – bei uns bist du willkommen! 🎮🚚', descEn: 'A community for trucking, shared tours, convoys and exchange in Euro Truck Simulator 2.', detailsDe: 'JulBa10 ist im Server als Supporter tätig.', detailsEn: 'JulBa10 is a Supporter on this server.', links: [{label:'Discord beitreten',url:'https://discord.gg/msYvhKYBef'}] }
      ]
    },
    {
      id: 'sec-gaming2', kickerDe: 'Gaming', kickerEn: 'Gaming', titleDe: 'Oktavstadt', titleEn: 'Oktavstadt',
      items: [
        { name: 'Oktavstadt', category: 'Roblox · Glocken-Spiel', statusDe: 'Offizieller Server', statusEn: 'Official server', roleDe: 'Leitung', roleEn: 'Management', platform: 'Roblox & Discord', descDe: 'Hallo! Das ist der offizielle Server des Glocken-Spiels Oktavstadt. Bei uns dreht sich alles um Glocken. Jeder ist hier willkommen!', descEn: 'The official community for Oktavstadt, a Roblox bell game. Everything here revolves around bells, and everyone is welcome.', detailsDe: 'JulBa10 gehört zur Leitung des Servers.', detailsEn: 'JulBa10 is part of the server management.', links: [{label:'Discord beitreten',url:'https://discord.gg/ycgreHRA6A'}] }
      ]
    },
    {
      id: 'sec-communities', kickerDe: 'Communities', kickerEn: 'Communities', titleDe: 'Communities', titleEn: 'Communities',
      items: [
        { name: 'Fichtellhillz Warriors', category: 'Community', statusDe: 'Community', statusEn: 'Community', roleDe: 'Mitglied', roleEn: 'Member', platform: 'Discord', descDe: 'Mir san wie a g’standne Rund’n im finstern Woid. Ehrlich, herb und voll dabei. Gaudi, Heimat und a Z’ammhalt wie Granit. Wer’s urig mag, hockt se zu uns.', descEn: 'A close-knit community built around fun, home and togetherness.', detailsDe: 'Eine urige Community mit Heimatgefühl und Zusammenhalt.', detailsEn: 'A down-to-earth community focused on belonging and having fun.', links: [{label:'Discord beitreten',url:'https://discord.gg/zPknFVeV'}] },
        { name: 'JulBa10 s Community', category: 'Community · Mehrsprachig', statusDe: 'Community', statusEn: 'Community', roleDe: 'Leitung', roleEn: 'Management', platform: 'Deutsch · English · Nederlands', descDe: 'Eine Community rund um JulBa10 und Julians YouTube-Kanal – zugleich ein offener Treffpunkt für alle. Wir sprechen Deutsch, Englisch und Niederländisch.', descEn: 'A community partly focused on JulBa10 and Julian’s YouTube channel, but open to everyone. German, English and Dutch are welcome.', detailsDe: 'JulBa10 ist Teil der Leitung.', detailsEn: 'JulBa10 is part of the management.', links: [{label:'Discord beitreten',url:'https://discord.gg/KmdpUn3Xad'}] },
        { name: 'GameFreakz Aufnahme Studio!', category: 'Aufnahme-Studio', statusDe: 'Community', statusEn: 'Community', roleDe: 'Mitglied', roleEn: 'Member', platform: 'Discord', descDe: 'GameFreakz Aufnahme Studio!', descEn: 'GameFreakz recording studio community.', detailsDe: 'Discord-Community rund um das Aufnahme-Studio.', detailsEn: 'Discord community for the recording studio.', links: [{label:'Discord beitreten',url:'https://discord.gg/jKY5MEJPSE'}] },
        { name: 'Liboriusglocke Community', category: 'Community', statusDe: 'Community', statusEn: 'Community', roleDe: 'Besitzer · 2. Account', roleEn: 'Owner · second account', platform: 'Discord', descDe: 'Die Liboriusglocke Community. JulBa10s zweiter Account ist dort Besitzer; damit ist er ebenfalls mit dem Server verbunden.', descEn: 'The Liboriusglocke community. JulBa10’s second account is the owner there, so he is also connected to this server.', detailsDe: 'Besitzerrolle über den zweiten Account.', detailsEn: 'Owner role through the second account.', links: [{label:'Discord beitreten',url:'https://discord.gg/WJue9VQS9y'}] }
      ]
    },
    {
      id: 'sec-bells', kickerDe: 'Glocken', kickerEn: 'Bells', titleDe: 'Glocken-Communitys', titleEn: 'Bell communities',
      items: [
        { name: 'Glocken', category: 'Glocken-Community', statusDe: 'Discord-Server', statusEn: 'Discord server', roleDe: 'Mitglied', roleEn: 'Member', platform: 'Discord', descDe: 'Ein Discord-Server rund um Kirchenglocken und das gemeinsame Interesse am Glockenwesen.', descEn: 'A Discord server for church bells and the shared interest in bells.', detailsDe: 'Austausch mit anderen Glockeninteressierten.', detailsEn: 'Connect and chat with other bell enthusiasts.', links: [{label:'Discord beitreten',url:'https://discord.gg/DUN3PEszjX'}] },
        { name: 'Annaglocke', category: 'Glocken-Community', statusDe: 'Discord-Server', statusEn: 'Discord server', roleDe: 'Administrator', roleEn: 'Administrator', platform: 'Discord · YouTube', descDe: 'Glocken-Community von Annaglocke. JulBa10 ist dort Administrator.', descEn: 'Annaglocke bell community. JulBa10 is an administrator there.', detailsDe: 'YouTube-Kanal: Annaglocke.', detailsEn: 'YouTube channel: Annaglocke.', links: [{label:'Discord beitreten',url:'https://discord.gg/t4HYdGs8Cd'},{label:'YouTube-Kanal',url:'https://www.youtube.com/channel/UC74nf0V1Q7jrRPSmY0AlJDg'}] },
        { name: 'Glockenfreund Fichtelgebirge', category: 'Glocken-Community', statusDe: 'Discord-Server', statusEn: 'Discord server', roleDe: 'Mitglied', roleEn: 'Member', platform: 'Discord', descDe: 'Community für Freunde und Interessierte des Glockenwesens im Fichtelgebirge.', descEn: 'A community for bell enthusiasts in the Fichtelgebirge region.', detailsDe: 'Austausch rund um Glocken und Geläute.', detailsEn: 'Discussion about bells and peals.', links: [{label:'Discord beitreten',url:'https://discord.gg/wPY43SCz6X'}] }
      ]
    },
    {
      id: 'sec-minecraft', kickerDe: 'Minecraft', kickerEn: 'Minecraft', titleDe: 'Minecraft', titleEn: 'Minecraft',
      items: [
        { name: 'OP Sucht', category: 'Minecraft-Server', statusDe: 'Server', statusEn: 'Server', roleDe: 'Spieler', roleEn: 'Player', platform: 'Minecraft · Website', descDe: 'Minecraft-Server OP Sucht.', descEn: 'Minecraft server OP Sucht.', detailsDe: 'Weitere Informationen findest du auf der offiziellen Website.', detailsEn: 'Find more information on the official website.', links: [{label:'Discord',url:'https://discord.gg/opsucht'},{label:'Website',url:'https://www.opsucht.net/'}] }
      ]
    }
  ];

  function safeUrl(raw) {
    try { const u = new URL(raw); return (u.protocol === 'https:' || u.protocol === 'http:') ? u.href : null; }
    catch { return null; }
  }
  function renderSections() {
    const host = document.getElementById('showcase-sections'); if (!host) return;
    const lang = document.documentElement.lang === 'en' ? 'en' : 'de'; host.textContent = '';
    SECTIONS.forEach((sec) => {
      const section = document.createElement('section'); section.className = 'section-block'; section.id = sec.id;
      const head = document.createElement('div'); head.className = 'section-head';
      const titleGroup = document.createElement('div');
      const kicker = document.createElement('span'); kicker.className = 'section-kicker'; kicker.textContent = lang === 'en' ? sec.kickerEn : sec.kickerDe;
      const h2 = document.createElement('h2'); h2.textContent = lang === 'en' ? sec.titleEn : sec.titleDe;
      titleGroup.append(kicker,h2); const count = document.createElement('span'); count.className = 'section-count'; count.textContent = String(sec.items.length); head.append(titleGroup,count); section.appendChild(head);
      const intro = document.createElement('p'); intro.className = 'section-intro';
      intro.textContent = lang === 'en' ? 'Servers and communities Julian is part of. Open a card for more information or use the invite link.' : 'Server und Communitys, in denen Julian aktiv ist. Öffne eine Karte für weitere Informationen oder nutze direkt den Einladungslink.';
      section.appendChild(intro); const grid = document.createElement('div'); grid.className = 'data-cards-grid';
      sec.items.forEach((item) => {
        const card = document.createElement('article'); card.className = 'data-card';
        const top = document.createElement('div'); top.className = 'data-card-top'; const cat = document.createElement('span'); cat.className = 'data-category'; cat.textContent = item.category;
        const status = document.createElement('span'); status.className = 'data-status-pill'; status.textContent = lang === 'en' ? item.statusEn : item.statusDe; top.append(cat,status);
        const titleRow = document.createElement('div'); titleRow.className = 'data-title-row'; const h3 = document.createElement('h3'); h3.textContent = item.name;
        const roleTag = document.createElement('span'); roleTag.className = 'data-role-chip'; roleTag.textContent = lang === 'en' ? item.roleEn : item.roleDe; titleRow.append(h3,roleTag);
        const platformLine = document.createElement('div'); platformLine.className = 'data-platform-line'; platformLine.textContent = item.platform;
        const desc = document.createElement('p'); desc.className = 'data-desc'; desc.textContent = lang === 'en' ? item.descEn : item.descDe;
        const detailBox = document.createElement('p'); detailBox.className = 'data-extra-detail'; detailBox.hidden = true; detailBox.textContent = lang === 'en' ? item.detailsEn : item.detailsDe;
        const actions = document.createElement('div'); actions.className = 'data-actions';
        (item.links || []).forEach((l) => { const href = safeUrl(l.url); if (!href) return; const a = document.createElement('a'); a.className = 'mini-btn'; a.href = href; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = l.label; actions.appendChild(a); });
        const detailBtn = document.createElement('button'); detailBtn.type = 'button'; detailBtn.className = 'mini-btn detail-toggle'; detailBtn.textContent = lang === 'en' ? 'More info' : 'Details';
        detailBtn.addEventListener('click', () => { const open = detailBox.hidden; detailBox.hidden = !open; detailBtn.textContent = open ? (lang === 'en' ? 'Less' : 'Weniger') : (lang === 'en' ? 'More info' : 'Details'); }); actions.appendChild(detailBtn);
        card.append(top,titleRow,platformLine,desc,detailBox,actions); grid.appendChild(card);
      });
      section.appendChild(grid); host.appendChild(section);
    });
  }
  window.MyLinksSections = { render: renderSections }; renderSections();
})();
