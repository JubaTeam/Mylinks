'use strict';

(() => {
  const I18N = {
    de: {
      enterKicker: 'PERSONAL LINK HUB',
      welcomeTitle: 'JulBa10',
      welcomeText: 'Klicken zum Eintreten',
      enter: 'Enter',
      settings: 'Einstellungen',
      language: 'Sprache',
      theme: 'Darstellung',
      dark: 'Dunkel',
      light: 'Hell',
      accent: 'Akzentfarbe',
      languageHint: 'Deutsch oder English',
      themeHint: 'Helles oder dunkles Design',
      accentHint: 'Farbe der Highlights',
      infoProfileTitle: 'Profil & Discord-Status',
      infoProfileText: 'Zeigt das JulBa10-Profil und den aktuellen Discord-Status über Lanyard.',
      infoProjectsTitle: 'Projekte & Gaming',
      infoProjectsText: 'Ein Überblick über Projekte, Communities, meine Rolle und weiterführende Links.',
      infoMusicTitle: 'Musikplayer',
      infoMusicText: 'Musik wird über den eingebetteten SoundCloud-Player wiedergegeben.',
      infoSettingsTitle: 'Persönliche Einstellungen',
      infoSettingsText: 'Sprache, Darstellung und Akzentfarbe werden lokal in diesem Browser gespeichert.',
      roleTag: 'YouTube · Gaming',
      location: 'YouTube · Gaming · Glocken',
      noActivity: 'Keine aktive Aktivität',
      bio: 'Hi, ich bin JulBa10. Unter anderem mache ich auch YouTube-Gaming-Videos.',
      kickerProjects: 'COMMUNITIES & SERVER',
      secProjects: 'Communities',
      kickerHosting: 'SERVER',
      secHosting: 'Servers',
      refresh: 'Status',
      infoTitle: 'Über diese Seite',
      info1: 'MyLinks ist meine persönliche Startseite. Hier findest du meine Projekte, Communities, Gaming-Bereiche und wichtige externe Links an einem Ort.',
      info2: 'MyLinks lädt keine Freundesliste. Externe Dienste wie Discord werden erst geöffnet, wenn du einen entsprechenden Link auswählst.',
      footer: 'JulBa10 · Gaming & Communities'
    },
    en: {
      enterKicker: 'PERSONAL LINK HUB',
      welcomeTitle: 'JulBa10',
      welcomeText: 'Click to enter',
      enter: 'Enter',
      settings: 'Settings',
      language: 'Language',
      theme: 'Theme',
      dark: 'Dark',
      light: 'Light',
      accent: 'Accent color',
      languageHint: 'German or English',
      themeHint: 'Light or dark appearance',
      accentHint: 'Highlight color',
      infoProfileTitle: 'Profile & Discord presence',
      infoProfileText: 'Shows the JulBa10 profile and current Discord presence via Lanyard.',
      infoProjectsTitle: 'Projects & gaming',
      infoProjectsText: 'An overview of projects, communities, my role and useful links.',
      infoMusicTitle: 'Music player',
      infoMusicText: 'Music is played through the embedded SoundCloud player.',
      infoSettingsTitle: 'Personal settings',
      infoSettingsText: 'Language, appearance and accent color are stored locally in this browser.',
      roleTag: 'YouTube · Gaming',
      location: 'YouTube · Gaming · Bells',
      noActivity: 'No active activity',
      bio: 'Hi, I’m JulBa10. I also make YouTube gaming videos.',
      kickerProjects: 'COMMUNITIES & SERVERS',
      secProjects: 'Communities',
      kickerHosting: 'SERVERS',
      secHosting: 'Servers',
      refresh: 'Refresh',
      infoTitle: 'About this page',
      info1: 'MyLinks is my personal home page for projects, communities, gaming areas and useful external links.',
      info2: 'MyLinks does not load a friends list. External services such as Discord only open when you select a link.',
      footer: 'JulBa10 · Gaming & Communities'
    }
  };

  const ACCENTS = ['blue', 'violet', 'pink', 'green', 'orange'];
  const store = {
    get: (k) => { try { return localStorage.getItem('tl-' + k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem('tl-' + k, v); } catch {} }
  };

  function applyLang(lang) {
    const next = lang === 'en' ? 'en' : 'de';
    store.set('lang', next);
    document.documentElement.lang = next;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.dataset.i18n;
      if (I18N[next][k]) el.textContent = I18N[next][k];
    });
    document.querySelectorAll('[data-lang-opt]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.langOpt === next));
    });
    window.MyLinksSections?.render();
    window.MyLinksPresence?.rerender();
  }

  function applyTheme(theme) {
    const next = theme === 'light' ? 'light' : 'dark';
    store.set('theme', next);
    document.documentElement.setAttribute('data-theme', next);
    document.querySelectorAll('[data-theme-opt]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.themeOpt === next));
    });
  }

  function applyAccent(accent) {
    const next = ACCENTS.includes(accent) ? accent : 'blue';
    store.set('accent', next);
    document.documentElement.setAttribute('data-accent', next);
    document.querySelectorAll('[data-accent-opt]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.accentOpt === next));
    });
  }

  applyLang(store.get('lang') || document.documentElement.lang);
  applyTheme(store.get('theme') || document.documentElement.dataset.theme);
  applyAccent(store.get('accent') || document.documentElement.dataset.accent);
  window.lucide?.createIcons();

  const welcome = document.getElementById('welcome-screen');
  document.getElementById('enter-button')?.addEventListener('click', () => {
    document.body.classList.remove('locked');
    welcome?.classList.add('hidden');
    window.MyLinksAudio?.startPlayback();
  }, { once: true });

  const settingsBtn = document.getElementById('settings-button');
  const settingsPanel = document.getElementById('settings-panel');
  settingsBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !settingsPanel.classList.contains('open');
    settingsPanel.classList.toggle('open', open);
    settingsPanel.setAttribute('aria-hidden', String(!open));
    settingsBtn.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#settings-panel') && !e.target.closest('#settings-button')) {
      settingsPanel?.classList.remove('open');
      settingsPanel?.setAttribute('aria-hidden', 'true');
      settingsBtn?.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelectorAll('[data-lang-opt]').forEach((b) => {
    b.addEventListener('click', () => applyLang(b.dataset.langOpt));
  });
  document.querySelectorAll('[data-theme-opt]').forEach((b) => {
    b.addEventListener('click', () => applyTheme(b.dataset.themeOpt));
  });
  document.querySelectorAll('[data-accent-opt]').forEach((b) => {
    b.addEventListener('click', () => applyAccent(b.dataset.accentOpt));
  });

  document.getElementById('refresh-btn')?.addEventListener('click', () => {
    window.MyLinksPresence?.refresh();
  });

  const infoOverlay = document.getElementById('info-overlay');
  document.getElementById('info-button')?.addEventListener('click', () => {
    infoOverlay?.classList.add('open');
    infoOverlay?.setAttribute('aria-hidden', 'false');
    window.lucide?.createIcons();
  });
  document.getElementById('info-close')?.addEventListener('click', () => {
    infoOverlay?.classList.remove('open');
    infoOverlay?.setAttribute('aria-hidden', 'true');
  });
  infoOverlay?.addEventListener('click', (e) => {
    if (e.target === infoOverlay) {
      infoOverlay.classList.remove('open');
      infoOverlay.setAttribute('aria-hidden', 'true');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      settingsPanel?.classList.remove('open');
      infoOverlay?.classList.remove('open');
    }
  });
})();
