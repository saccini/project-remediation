
  const images = [
    {
      src:      'assets/images/P1stoldwMetadataedit.webp',
      alt:      'Page 252 of Sweriges Rikes Lag Gillad och antagen på Riksdagen Åhr 1734, , §§ 1–3',
      caption:  'Fig. 1 \u2014 Sweriges Rikes Lag Gillad och antagen på Riksdagen Åhr 1734, p. 252, digitised [2026-05-01]',
      download: 'assets/images/P1stoldwMetadataedit.webp',
      transcription: 'assets/transcriptions/P1stold252.txt',
      metadata: 'assets/images/P1stoldMetadata.xml',
    },
    {
      src:      'assets/images/P2stoldwMetadataedit.webp',
      alt:      'Page 253 of Sweriges Rikes Lag Gillad och antagen på Riksdagen Åhr 1734, §§ 4–8',
      caption:  'Fig. 2 \u2014 Sweriges Rikes Lag Gillad och antagen på Riksdagen Åhr 1734, p. 253, digitised [2026-05-01]',
      download: 'assets/images/P2stoldwMetadataedit.webp',
      transcription: 'assets/transcriptions/P2stold253.txt',
      metadata: 'assets/images/P2stoldMetadata.xml',
    },
    {
      src:      'assets/images/P3stoldwMetadataedit.webp',
      alt:      'Page 254 of Sweriges Rikes Lag Gillad och antagen på Riksdagen Åhr 1734, §§ 9–14',
      caption:  'Fig. 3 \u2014 Sweriges Rikes Lag Gillad och antagen på Riksdagen Åhr 1734, p. 254, digitised [2026-05-01]',
      download: 'assets/images/P3stoldwMetadataedit.tiff',
      transcription: 'assets/transcriptions/P3stold254.txt',
      metadata: 'assets/images/P3stoldMetadata.xml',
    },
    {
      src:      'assets/images/P4soldwMetadataedit.webp',
      alt:      'Page 255 of Sweriges Rikes Lag Gillad och antagen på Riksdagen Åhr 1734, §§ 15–16',
      caption:  'Fig. 4 \u2014 Sweriges Rikes Lag Gillad och antagen på Riksdagen Åhr 1734, p. 255, digitised [2026-05-01]',
      download: 'assets/images/P4soldwMetadataedit.tiff',
      transcription: 'assets/transcriptions/P4stold255.txt',
      metadata: 'assets/images/P4stoldMetadata.xml',
    },
  ];


const allParagraphs = [

  /* ── img 1 (p. 252) ── */
  [
    {
      original: 'XL Cap.',
      modern:   'Kapitel 40',
      english:  'Chapter 40',
    },
    {
      original: 'Om stöld.',
      modern:   'Om stöld.',
      english:  'On theft.',
    },
    {
      original: '§ 1. HWar som första gången stiäl gods, eller penningar, öfwer tijo daler; böte tre gånger så mycket, som thet stulne wärdt är. Orkar han ej böta; plichte med kroppen, doch ej högre, än efter stöldens wärde.',
      modern:   '1. §. Den som för första gången stjäl gods eller pengar över tio daler; böte tre gånger så mycket som det stulna är värt. Orkar [kan] han ej böta; plikte med kroppen [få kroppsstraff/fängelse], dock ej högre än efter stöldens värde.',
      english:  '1. §. He who for the first time steals goods, or money, over ten daler; shall be fined three times as much as the stolen is worth. If he cannot afford to fine [pay]; he shall be punished with the body [corporal punishment/imprisonment], yet not higher than according to the value of the theft.',
    },
  ],

  /* ── img 2 (p. 253) ── */
  [
    {
      original: 'Mißgiernings Balk.  sid 253',
      modern:   'Brottsbalken. sid 253',
      english:  'The Criminal Code. page 253',
    },
    {
      original: '2. §. Stiäl någor å flera ställen, än ett, eller på åtskilliga tider, och hafwer ej förr warit för tiuf- nad lagförd och straffad; tå skal om hwarje tiufnad särskilt å sin ort ransakas, och ther pröfwas, om han til tiufnaden saker är; gånge sedan Dom öfwer tiufwen för altsamman, ther han sidst lagföres, och plichte, som then ther första gången stulit.',
      modern:   '2. §. Stjäl någon på flera ställen än ett, eller vid åtskilliga tider [tillfällen], och har ej förr varit för tjuvnad lagförd och straffad; då ska om varje tjuvnad särskilt på sin ort rannsakas [utredas], och där prövas om han till tjuvnaden skyldig är; gånge sedan dom över tjuven för alltsammans, där han sist lagföres, och plikte som den där för första gången stulit. ',
      english:  '2. §. If someone steals in more places than one, or at various times, and has not previously been prosecuted and punished for theft; then each theft shall be separately investigated in its place, and there tried, if he is guilty of the theft; then pass judgment upon the thief for all of it together, where he is last prosecuted, and be punished as he who there stole for the first time.',
    },
    {
      original: '3. §. Warder tiuf för stöld andra gången lag- förd; böte fyradubbelt tiufnadens wärde. Orkar han ej böta; plichte med kroppen, som sagdt är, och tå ökes straffet med fem par spö, eller fyra par ris. Kommer han tridie gången åter, och stiger tiufnaden til hundrade daler; warde hängd, ehwad thet är man, eller qwinna. Är tiufnaden mindre; miste ej lifwet: utan plichte med kroppen, efter stöl- dens wärde, och arbete i try åhr under Konungens hächte. Stiäl han fierde gången; warde hängd.',
      modern:   '3. §. Varder [blir] tjuv för stöld andra gången lagförd; böte fyrdubbelt tjuvnadens värde. Orkar han ej böta; plikte med kroppen, som sagt är, och då ökas straffet med fem par spö, eller fyra par ris. Kommer han tredje gången åter, och stiger tjuvnaden till hundra daler; varde hängd, ehuru [oavsett om] det är man eller kvinna. Är tjuvnaden mindre; miste ej livet: utan plikte med kroppen, efter stöldens värde, och arbete i tre år under Konungens häkte [fästning/straffarbete]. Stjäl han fjärde gången; varde hängd.',
      english:  '3. §. If a thief is prosecuted for theft a second time; he shall be fined quadruple the value of the theft. If he cannot afford to fine; he shall be punished with the body, as is said, and then the punishment is increased with five pairs of whips [lashes], or four pairs of birches [strikes with birch rods]. If he returns a third time, and the theft amounts to a hundred daler; he shall be hanged, whether it is a man or a woman. If the theft is less; he shall not lose his life: but be punished with the body, according to the value of the theft, and labor for three years under the King\'s custody [penal labor]. If he steals a fourth time; he shall be hanged.',
    },
    {
      original: '4 §. Alt thet stulit är, bör gäldas åter, förrän böter uttagas. Gitter tiufwen thet ej; förnöjemålsäganden med arbete, när tiuf ej lif misterler til Konungens arbete dömd är.',
      modern:   '4. §. Allt det stulet är, bör gäldas [betalas/lämnas] åter, förrän böter uttagas. Gitter [förmår] tjuven det ej; förnöje målsäganden med arbete, när tjuv ej livet mister, eller till Konungens arbete dömd är.',
      english:  '4. §. All that is stolen ought to be repaid, before fines are extracted. If the thief is unable to do so; he shall satisfy the plaintiff with labor, when the thief does not lose his life, or is sentenced to the King\s labor.',
    },
    {
      original: '5. §. Stiäl någor frucht ur trägård, humble- gård, rofwogård, eller kålgård, ärter, bönor, ållon eller nötter til full mans bördo, eller laß; el- ler stiäl och förer bort ett laß af annars huggen wed,',
      modern:   '5. §. Stjäl någon frukt ur trädgård, humlegård, rovgård, eller kålgård, ärter, bönor, ållon eller nötter till en full mans börda, eller lass; eller stjäl och för bort ett lass av annans huggna ved, ',
      english:  '5. §. If someone steals fruit from a garden, hop garden, turnip garden, or cabbage garden, peas, beans, acorns or nuts to a full man\s burden, or load; or steals and carries away a load of another\s chopped wood, ',
    },
  ],

  /* ── img 3 (p. 254) ── */
  [
    {
      original: 'Mißgiernings Balk. sid 254',
      modern:   'Brottsbalken. sid 254',
      english:  'The Criminal Code. page 254',
    },
    {
      original: 'timmer och gärdsel; stånde tiufsrätt. Är thet min- dre; tå bötes, som om snatteri sägs.',
      modern:   'timmer och gärdselvirke; stånde tjuvsrätt [döms som riktig stöld]. Är det mindre; då bötes, som om snatteri sägs.',
      english:  'timber and fencing material; he shall stand thief\s justice [be judged for regular theft]. If it is less; then he is fined, as is said of petty theft.',
    },
    {
      original: '6. §. Hwar som bryter sig in i något rum, el- ler hus, til at stiäla, ändoch han alsintet finner el- ler tager; straffes första gången med nijo par spö, eller siu par riß. Sker thet andra gången; ware twegildt. Kommer han tridie gången åter; plichte med tiugu siu par spö, eller tiugu ett par ris, och fierde gången med tretijo sex par spö, eller tiugusiu par ris. Hafwer han ock tå något stulit; plichte therföre särskilt, som förr sagdt är.',
      modern:   '6. §. Var som bryter sig in i något rum, eller hus, till att stjäla, ändock [även om] han allsintet [ingenting alls] finner eller tager; straffas första gången med nio par spö, eller sju par ris. Sker det andra gången; vare tvegillt [dubbelt straff]. Kommer han tredje gången åter; plikte med tjugosju par spö, eller tjugoett par ris, och fjärde gången med trettiosex par spö, eller tjugosju par ris. Har han också då något stulit; plikte därför särskilt, som förr sagt är.',
      english:  '§ 6. Whoever breaks into any room, or house, to steal, even though he finds or takes nothing at all; shall be punished the first time with nine pairs of whips, or seven pairs of birches. If it happens a second time; it shall be doubled. If he returns a third time; he shall be punished with twenty-seven pairs of whips, or twenty-one pairs of birches, and the fourth time with thirty-six pairs of whips, or twenty-seven pairs of birches. If he has also then stolen something; he shall be punished for that separately, as previously said.',
    },
    {
      original: '7. §. Bryter tiuf sig in genom fenster, eller eljest i gård och hus om nattetid, och får sår, eller warder dråpen; ware ogildt. Sätter han sig til motwärn, ehwad thet är natt, eller dag; ware lag samma. Giör han them skada, som sitt wärja wil- ja; ligge i tweböte, och plichte thertil för hemfrids brott.',
      modern:   '7. §. Bryter tjuv sig in genom fönster, eller eljest i gård och hus om nattetid, och får sår, eller varder dräpt [dödas]; vare ogillt [d.v.s. försvararen straffas inte]. Sätter han sig till motvärn, ehuru det är natt eller dag; vare lag samma. Gör han dem skada, som sitt värja vilja [vill försvara sin egendom]; ligge i tveböte [dubbla böter], och plikte därtill för hemfridsbrott. ',
      english:  '7. §. If a thief breaks in through a window, or otherwise into a yard and house at nighttime, and gets wounded, or is slain; it shall be void [the defender goes unpunished]. If he puts up a defense [resists], whether it is night or day; the law shall be the same. If he does harm to those who wish to defend theirs; he shall lie in double fines, and be punished additionally for breach of the peace of the home.',
    },
    {
      original: '8 §. Tager annar man tiufwen, än then, som rätter målsägande är, eller godset wårda bor- de; tå äger han tiugunde penningen af alt, thet tiufwen ther hade med sig, som hans egit war.',
      modern:   '8. §. Tager en annan man tjuven, än den som rätt målsägande är, eller godset borde vårda; då äger han tjugonde penningen [5 %] av allt det tjuven där hade med sig, som hans eget var. ',
      english:  '8. §. If another man catches the thief, than the one who is the rightful plaintiff, or ought to care for the goods; then he owns the twentieth penny [5%] of everything the thief had with him there, that was his [the thief\s] own.',
    },
    {
      original: '9. §. Wil ej målsäganden sielf anklaga tiuf- wen för Rätta; käre tå then, som å Konungens wägnar kära äger, och niute målsägande rätt.',
      modern:   '9. §. Vill ej målsäganden själv anklaga tjuven inför Rätta [domstol]; käre då den som å Konungens vägnar äger kära [allmän åklagare], och njute målsäganderätt.',
      english:  '9. §. If the plaintiff himself does not want to accuse the thief in Court; then let the one who on the King\'s behalf has the right to accuse [the prosecutor], and enjoy the plaintiff\'s right. ',
    },
  ],

  /* ── img 4 (p. 255) ── */
  [
    {
      original: 'Mißgiernings Balk. sid 255',
      modern:   'Brottsbalken. sid 255',
      english:  'The Criminal Code. page 255',
    },
    {
      original: '10. §. Hwilken med wilja släpper tiuf, och honom utur wägen skaffar, sedan han gripen och fängslad är; plichte som i Straff Balken, och förr i thenna Balk urskils.',
      modern:   '10. §. Vilken som med vilja släpper tjuv, och honom ur vägen skaffar [hjälper att fly], sedan han gripen och fängslad är; plikte som i Straffbalken, och förr i denna balk urskiljes [bestäms].',
      english:  '10. §. Whoever intentionally releases a thief, and gets him out of the way [helps him escape], after he has been caught and imprisoned; shall be punished as distinguished [specified] in the Punishment Code, and earlier in this Code.',
    },
  ],
];

const allZones = [
  /* img1 */ [
    { top:'46%',  left:'11%', width:'80%', height:'4%', label:'§ 1' },
    { top:'50%', left:'11%', width:'80%', height:'4%', label:'§ 2'  },
    { top:'54%', left:'11%', width:'80%', height:'18%', label:'§ 3' },
  ],
  /* img2*/ [
    { top:'5%',  left:'12%', width:'52%', height:'4%', label:'§ 4' },
    { top:'9%', left:'12%', width:'52%', height:'16%', label:'§ 5' },
    { top:'25%', left:'12%', width:'52%', height:'23%', label:'§ 6' },
    { top:'48%', left:'12%', width:'52%', height:'10%', label:'§ 7' },
    { top:'58%', left:'12%', width:'52%', height:'11%', label:'§ 8' },
  ],
  /* img3*/ [
    { top:'3%',  left:'36%', width:'58%', height:'5%',  label:'§ 9' },
    { top:'8%', left:'36%', width:'58%', height:'5%', label:'§ 10'},
    { top:'14%', left:'35%', width:'58%', height:'21%', label:'§ 11'},
    { top:'35%', left:'35%', width:'58%', height:'16%', label:'§ 12'},
    { top:'51%', left:'34%', width:'58%', height:'9.5%',  label:'§ 13'},
    { top:'60%', left:'34%', width:'58%', height:'10%',  label:'§ 14'},
  ],
  /* img4*/ [
    { top:'3%',  left:'10%', width:'60%', height:'5%', label:'§ 15'},
    { top:'9%', left:'10%', width:'60%', height:'9.5%', label:'§ 16'},
  ],
];

let currentImg   = 0;
let selectedZone = 0;
let currentTab   = 'original';

function renderZones(pageIndex) {
  const overlay = document.getElementById('zone-overlay');
  overlay.innerHTML = '';
  allZones[pageIndex].forEach((z, i) => {
    const div = document.createElement('div');
    div.className = 'zone' + (i === 0 ? ' active' : '');
    div.id = 'zone-' + i;
    div.style.cssText = `top:${z.top}; left:${z.left}; width:${z.width}; height:${z.height};`;
    div.onclick = () => selectZone(i);
    overlay.appendChild(div);
  });
}

function changeImage(dir) {
  currentImg = Math.max(0, Math.min(images.length - 1, currentImg + dir));
  const data = images[currentImg];
  const img  = document.getElementById('main-img');

  img.src = data.src;
  img.alt = data.alt;

  document.getElementById('img-caption').textContent = data.caption;
  document.getElementById('img-counter').textContent = (currentImg + 1) + ' / ' + images.length;
  document.getElementById('prev-btn').disabled       = currentImg === 0;
  document.getElementById('next-btn').disabled       = currentImg === images.length - 1;
  document.getElementById('trans-download').href = data.transcription;

  renderZones(currentImg);
  selectZone(0);
}

function selectZone(i) {
  if (typeof responsiveVoice !== 'undefined') stopSpeech();
  document.querySelectorAll('.zone').forEach(z => z.classList.remove('active'));
  const zone = document.getElementById('zone-' + i);
  if (zone) zone.classList.add('active');
  selectedZone = i;
  showTranslation();
}

function switchTab(btn) {
  if (typeof responsiveVoice !== 'undefined') stopSpeech();
  currentTab = btn.dataset.tab;
  document.querySelectorAll('.trans-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  showTranslation();
}

function showTranslation() {
  const el = document.getElementById('trans-body');
  const pageParagraphs = allParagraphs[currentImg];

  el.innerHTML = '';

  pageParagraphs.forEach((p, i) => {
    const block = document.createElement('div');
    block.className = 'para-block' + (i === selectedZone ? ' para-block-active' : '');
    block.id = 'para-block-' + i;
    block.onclick = () => selectZone(i);

    const text = document.createElement('p');
    const content = p[currentTab] || '';
    text.textContent = content;

    if (currentTab === 'original') {
      text.classList.add('is-original');
    }

    block.appendChild(text);
    el.appendChild(block);
  });

  const active = document.getElementById('para-block-' + selectedZone);
  if (active) active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });

  el.className = 'trans-body';
}


function toggleSpeech() {
  if (typeof responsiveVoice === 'undefined') {
    alert('Text to speech is not available right now. Please check your internet connection.');
    return;
  }
  if (responsiveVoice.isPlaying()) {
    stopSpeech();
  } else {
    startSpeech();
  }
}

function startSpeech() {
  const p = allParagraphs[currentImg][selectedZone];
  const text = p[currentTab];
  if (!text || !text.trim()) return;

  const voice = currentTab === 'english' ? 'UK English Female' : 'Swedish Female';

  responsiveVoice.speak(text, voice, {
    onstart: function() {
      document.getElementById('tts-btn').textContent = '\u23F9 Stop';
      document.getElementById('tts-btn').classList.add('speaking');
    },
    onend: function() {
      document.getElementById('tts-btn').textContent = '\u25B6 Listen';
      document.getElementById('tts-btn').classList.remove('speaking');
    },
    onerror: function() {
      document.getElementById('tts-btn').textContent = '\u25B6 Listen';
      document.getElementById('tts-btn').classList.remove('speaking');
    }
  });
}

function stopSpeech() {
  if (typeof responsiveVoice === 'undefined') return;
  responsiveVoice.cancel();
  document.getElementById('tts-btn').textContent = '\u25B6 Listen';
  document.getElementById('tts-btn').classList.remove('speaking');
}

function openLightbox() {
  const src = document.getElementById('main-img').src;
  const alt = document.getElementById('main-img').alt;
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-img').alt = alt;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});

/* ── GALLERY SETUP (ONLY RUNS ON ARTEFACT PAGE) ── */
const imgCounter = document.getElementById('img-counter');
const overlay = document.getElementById('zone-overlay');

if (imgCounter && overlay) {
    imgCounter.textContent = '1 / ' + images.length;
    renderZones(0);
    selectZone(0);
}

/* ── HELP MODAL LOGIC (RUNS ON ANY PAGE THAT HAS THE BUTTON) ── */
document.addEventListener('DOMContentLoaded', () => {
    const helpBtn = document.getElementById('help-btn');
    const helpModal = document.getElementById('help-modal');
    const closeHelpBtn = document.getElementById('close-help-btn');

    if (helpBtn && helpModal && closeHelpBtn) {
        // Open modal
        helpBtn.addEventListener('click', () => {
            helpModal.style.display = 'block';
        });

        // Close modal on X click
        closeHelpBtn.addEventListener('click', () => {
            helpModal.style.display = 'none';
        });

        // Close modal when clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === helpModal) {
                helpModal.style.display = 'none';
            }
        });
    }
});

