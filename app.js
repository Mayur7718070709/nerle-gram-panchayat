const services = [
  { id:"chat", icon:"AI", title:"मराठी AI ग्राममित्र", desc:"२४x७ मराठीत गाव सेवा आणि माहिती मिळवा.", color:"#f4ad3d", action:"चॅट सुरू करा" },
  { id:"voice", icon:"VO", title:"AI मराठी आवाज सहाय्यक", desc:"वाचा नको, फक्त बोला आणि उत्तर ऐका.", color:"#8bb9a3", action:"बोलायला सुरू करा" },
  { id:"complaint", icon:"CM", title:"नागरिक तक्रार व्यवस्थापन", desc:"फोटोसह तक्रार नोंदवा आणि स्थिती पाहा.", color:"#e87963", action:"तक्रार नोंदवा" },
  { id:"scheme", icon:"GS", title:"सरकारी योजना पात्रता", desc:"तुमच्यासाठी योग्य योजना AI द्वारे शोधा.", color:"#8c9ed7", action:"पात्रता तपासा" },
  { id:"tax", icon:"₹", title:"डिजिटल कर व पेमेंट", desc:"घरपट्टी आणि इतर कर QR द्वारे भरा.", color:"#56a981", action:"बिल भरा" },
  { id:"water", icon:"W", title:"पाणी बिल व्यवस्थापन", desc:"बिल पहा, वापर समजा आणि ऑनलाइन भरा.", color:"#63aadb", action:"पाणी बिल पहा" },
  { id:"whatsapp", icon:"WA", title:"WhatsApp गाव सूचना", desc:"महत्त्वाच्या सूचना थेट WhatsApp वर.", color:"#4ab875", action:"सदस्य व्हा" },
  { id:"certificate", icon:"BC", title:"जन्म व मृत्यू दाखले", desc:"डिजिटल अर्ज, ट्रॅकिंग आणि QR दाखला.", color:"#c18bca", action:"अर्ज करा" },
  { id:"analytics", icon:"VA", title:"गाव Analytics डॅशबोर्ड", desc:"डेटावर आधारित पारदर्शक गाव प्रशासन.", color:"#efb764", action:"डॅशबोर्ड पहा" },
  { id:"farmer", icon:"FA", title:"शेतकरी AI सहाय्यक", desc:"पीक, हवामान, रोग आणि बाजारभाव सल्ला.", color:"#76a650", action:"शेती सल्ला घ्या" }
];

const flowContent = {
  complaint: `<div class="service-flow-head"><span class="service-icon">CM</span><div><span class="section-kicker">END-TO-END TRACKING</span><h2>नागरिक तक्रार नोंदवा</h2></div></div><div class="progress-track"><div class="progress-step done"><span>✓</span>नोंदणी</div><div class="progress-step active"><span>2</span>अधिकारी नियुक्त</div><div class="progress-step"><span>3</span>काम सुरू</div><div class="progress-step"><span>4</span>निकाल</div></div><div class="flow-form"><label>तक्रार प्रकार<select><option>पाणीपुरवठा</option><option>रस्ता / खड्डा</option><option>स्ट्रीट लाईट</option><option>स्वच्छता</option></select></label><label>वॉर्ड<select><option>वॉर्ड ३</option><option>वॉर्ड १</option><option>वॉर्ड २</option></select></label><label class="full-row">तक्रारीचे वर्णन<textarea>मुख्य रस्त्यावरील नळातून पाणी गळत आहे.</textarea></label><label class="full-row">फोटो / पुरावा<input type="file"></label></div><button class="btn btn-primary full" data-success="तक्रार GP-NER-2026-184 नोंदवली. WhatsApp वर अपडेट मिळतील.">तक्रार सबमिट करा →</button>`,
  scheme: `<div class="service-flow-head"><span class="service-icon">GS</span><div><span class="section-kicker">AI ELIGIBILITY ENGINE</span><h2>तुमच्यासाठी सरकारी योजना</h2></div></div><div class="flow-form"><label>वय<input value="३८"></label><label>वार्षिक उत्पन्न<select><option>₹ १ लाखापेक्षा कमी</option><option>₹ १ ते २.५ लाख</option></select></label><label>व्यवसाय<select><option>शेतकरी</option><option>मजूर</option></select></label><label>जमीन<select><option>२ हेक्टरपेक्षा कमी</option><option>भूमिहीन</option></select></label></div><button class="btn btn-primary full" id="checkScheme">AI पात्रता तपासा →</button><div class="flow-result hidden-result" id="schemeResult" style="display:none"><b>तुम्ही ४ योजनांसाठी पात्र आहात</b><p>PM-KISAN · नमो शेतकरी महासन्मान निधी · प्रधानमंत्री पीक विमा · ठिबक सिंचन अनुदान</p></div>`,
  tax: `<div class="service-flow-head"><span class="service-icon">₹</span><div><span class="section-kicker">SECURE UPI PAYMENT</span><h2>घरपट्टी आणि कर</h2></div></div><div class="flow-result"><b>मालमत्ता क्र. NER-W3-0142</b><p>मालक: सुनील पाटील · वॉर्ड ३</p></div><div class="admin-summary"><div><small>घरपट्टी</small><b>₹१,८५०</b><span>FY 2026-27</span></div><div><small>इतर कर</small><b>₹३५०</b><span>स्वच्छता कर</span></div><div><small>एकूण</small><b>₹२,२००</b><span>देय: ३० जून</span></div></div><div class="qr-box"></div><button class="btn btn-primary full" data-success="डेमो पेमेंट यशस्वी! डिजिटल पावती तयार झाली.">UPI ने ₹२,२०० भरा</button>`,
  water: `<div class="service-flow-head"><span class="service-icon">W</span><div><span class="section-kicker">MONTHLY WATER BILL</span><h2>पाणी बिल</h2></div></div><div class="flow-result"><b>ग्राहक क्र. WTR-NER-8821</b><p>या महिन्याचा वापर: १२,४०० लिटर · मागील महिन्यापेक्षा ८% कमी</p></div><div class="admin-summary"><div><small>चालू बिल</small><b>₹३६०</b><span>जून २०२६</span></div><div><small>थकबाकी</small><b>₹०</b><span>वेळेत भरले</span></div><div><small>देय दिनांक</small><b>२० जून</b><span>QR सूचना १५ जून</span></div></div><button class="btn btn-primary full" data-success="पाणी बिलाचे पेमेंट यशस्वी!">बिल भरा →</button>`,
  certificate: `<div class="service-flow-head"><span class="service-icon">BC</span><div><span class="section-kicker">DIGITAL CERTIFICATE</span><h2>जन्म / मृत्यू दाखला अर्ज</h2></div></div><div class="flow-form"><label>दाखला प्रकार<select><option>जन्म दाखला</option><option>मृत्यू दाखला</option></select></label><label>घटनेची तारीख<input type="date" value="2026-05-18"></label><label class="full-row">व्यक्तीचे पूर्ण नाव<input value="आरव सुनील पाटील"></label><label>वडील / पतीचे नाव<input value="सुनील राजाराम पाटील"></label><label>आईचे नाव<input value="स्वाती सुनील पाटील"></label></div><button class="btn btn-primary full" data-success="अर्ज CERT-NER-0932 सबमिट झाला. अंदाजे वेळ: २ कामकाजाचे दिवस.">अर्ज सबमिट करा →</button>`,
  whatsapp: `<div class="service-flow-head"><span class="service-icon">WA</span><div><span class="section-kicker">OFFICIAL WHATSAPP ALERTS</span><h2>गाव सूचना WhatsApp वर</h2></div></div><p>पाणीपुरवठा, ग्रामसभा, आरोग्य शिबिर, कर आणि अर्ज स्थितीचे अधिकृत अपडेट मिळवा.</p><label>WhatsApp मोबाईल नंबर<input value="9876543210"></label><label><select><option>सर्व गाव सूचना</option><option>फक्त माझ्या वॉर्डच्या सूचना</option></select></label><button class="btn btn-primary full" data-success="WhatsApp सूचना सुरू झाल्या! पुष्टीकरण संदेश पाठवला आहे.">सूचना सुरू करा →</button>`,
  analytics: `<div class="service-flow-head"><span class="service-icon">VA</span><div><span class="section-kicker">ROLE-BASED ACCESS</span><h2>गाव Analytics प्रवेश</h2></div></div><p>हा विभाग सरपंच, ग्रामसेवक आणि अधिकृत कर्मचाऱ्यांसाठी आहे. डेमोमध्ये सर्व माहिती dummy आहे.</p><button class="btn btn-primary full" data-open="adminModal">Super Admin Demo उघडा →</button>`
};

const grid = document.getElementById("servicesGrid");
grid.innerHTML = services.map((s,i)=>`<article class="service-card" style="--service-color:${s.color};--service-bg:${s.color}20"><span class="service-number">${String(i+1).padStart(2,"0")}</span><span class="service-icon">${s.icon}</span><h3>${s.title}</h3><p>${s.desc}</p><button data-service="${s.id}">${s.action} →</button></article>`).join("");

const modals = [...document.querySelectorAll(".modal")];
const openModal = id => { modals.forEach(m=>m.classList.remove("open")); document.getElementById(id)?.classList.add("open"); };
const closeModals = () => modals.forEach(m=>m.classList.remove("open"));
document.addEventListener("click", e => {
  const open = e.target.closest("[data-open]");
  if(open) openModal(open.dataset.open);
  if(e.target.classList.contains("modal") || e.target.classList.contains("modal-close")) closeModals();
  const scroll = e.target.closest("[data-scroll]");
  if(scroll) document.getElementById(scroll.dataset.scroll)?.scrollIntoView({behavior:"smooth"});
  const success = e.target.closest("[data-success]");
  if(success){ closeModals(); showToast(success.dataset.success); }
  const service = e.target.closest("[data-service]");
  if(service) handleService(service.dataset.service);
});

function handleService(id){
  if(id==="chat"){ setAssistant("citizen"); document.getElementById("aiPanel").classList.add("open"); return; }
  if(id==="voice"){ setAssistant("citizen"); document.getElementById("aiPanel").classList.add("open"); setTimeout(()=>showToast("आवाज सहाय्यक ऐकत आहे. तुमचा प्रश्न बोला."),250); return; }
  if(id==="farmer"){ setAssistant("farmer"); document.getElementById("aiPanel").classList.add("open"); return; }
  if(id==="analytics") { closeModals(); document.getElementById("dashboard")?.scrollIntoView({behavior:"smooth", block:"start"}); return; }
  const service = services.find(s=>s.id===id);
  document.getElementById("serviceModalContent").innerHTML = flowContent[id] || `<div class="service-flow-head"><span class="service-icon">${service.icon}</span><div><span class="section-kicker">DIGITAL SERVICE</span><h2>${service.title}</h2></div></div><p>${service.desc}</p><button class="btn btn-primary full" data-success="सेवा विनंती यशस्वी!">सुरू करा →</button>`;
  openModal("serviceModal");
  document.getElementById("checkScheme")?.addEventListener("click",()=>document.getElementById("schemeResult").style.display="block");
}

const loginProfiles = {
  member: {
    label: "गाव सदस्य",
    name: "सुनील पाटील",
    title: "गाव सदस्य डॅशबोर्ड",
    kicker: "नेर्ले नागरिक लॉगिन",
    toast: "गाव सदस्य लॉगिन यशस्वी. नागरिक डॅशबोर्ड सुरू झाला.",
    html: `<div class="login-dashboard-grid"><div><small>घरपट्टी बाकी</small><b>₹२,२००</b><span>देय तारीख: ३० जून २०२६</span></div><div><small>पाणी बिल</small><b>₹३६०</b><span>क्यूआर पेमेंट तयार</span></div><div><small>तक्रार</small><b>GP-NER-2026-184</b><span>अधिकारी नियुक्त</span></div><div><small>दाखले</small><b>२ सक्रिय</b><span>जन्म दाखला तपासणीत</span></div></div><div class="flow-result role-summary"><b>सारांश</b><p>• गाव सदस्य: सुनील पाटील · वॉर्ड ३</p><p>• मोबाईल OTP ने पडताळणी पूर्ण.</p><p>• घरपट्टी आणि पाणी बिलासाठी क्यूआर पेमेंट तयार आहे.</p><p>• GP-NER-2026-184 तक्रार अधिकाऱ्याकडे नियुक्त आहे.</p><p>• सेवा अपडेटसाठी WhatsApp सूचना सुरू आहेत.</p></div>`
  },
  admin: {
    label: "ग्रामसेवक / ग्रामपंचायत अॅडमिन",
    name: "ग्रामसेवक अॅडमिन",
    title: "ग्रामसेवक / ग्रामपंचायत अॅडमिन डॅशबोर्ड",
    kicker: "कर्मचारी ऑपरेशन्स लॉगिन",
    toast: "ग्रामसेवक लॉगिन यशस्वी. कार्यप्रवाह डॅशबोर्ड सुरू झाला.",
    html: `<div class="login-dashboard-grid"><div><small>प्रलंबित सेवा</small><b>२७</b><span>आज ८ तातडीच्या</span></div><div><small>महसूल वसुली</small><b>₹८.७६L</b><span>९२% वसूल</span></div><div><small>पाणी सूचना</small><b>३</b><span>वॉर्ड ३ मध्ये जास्त वापर</span></div><div><small>ऑडिट रिपोर्ट</small><b>२३/२५</b><span>पुनरावलोकनासाठी तयार</span></div></div><div class="flow-result role-summary"><b>सारांश</b><p>• २७ सेवा विनंत्या प्रलंबित आहेत.</p><p>• आज ८ तातडीच्या अर्जांवर कारवाई आवश्यक आहे.</p><p>• महसूल वसुली ₹८.७६L असून ९२% पूर्ण झाली आहे.</p><p>• वॉर्ड ३ मध्ये पाणी वापर जास्त असल्याची सूचना आहे.</p><p>• २३ ऑडिट रिपोर्ट एक्सपोर्टसाठी तयार आहेत.</p></div>`
  },
  sarpanch: {
    label: "सरपंच",
    name: "सरपंच कार्यालय",
    title: "सरपंच प्रशासन डॅशबोर्ड",
    kicker: "AI निर्णय डॅशबोर्ड",
    toast: "सरपंच लॉगिन यशस्वी. प्रशासन डॅशबोर्ड सुरू झाला.",
    html: `<div class="login-dashboard-grid"><div><small>गाव आरोग्य</small><b>८७/१००</b><span>चांगली प्रगती</span></div><div><small>तक्रारी निकाली</small><b>९६%</b><span>वेळेत सेवा कामगिरी</span></div><div><small>वॉर्ड जोखीम</small><b>वॉर्ड ३</b><span>पाणी +२२%</span></div><div><small>मासिक महसूल</small><b>₹१.१९L</b><span>थेट वसुली दृश्य</span></div></div><div class="flow-result role-summary"><b>सारांश</b><p>• गाव आरोग्य स्कोअर ८७/१०० आहे.</p><p>• ९६% तक्रारी ठरलेल्या वेळेत निकाली लागल्या आहेत.</p><p>• वॉर्ड ३ मध्ये पाणी तपासणी सुचवली आहे.</p><p>• ८७ घरांची कर वसुली प्रलंबित आहे.</p><p>• आज ग्रामसभा सूचना मंजुरी बाकी आहे.</p></div>`
  }
}

let selectedLoginRole = "member";

document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  selectedLoginRole = document.querySelector("input[name='loginRole']:checked")?.value || "member";
  document.getElementById("selectedRoleText").textContent = loginProfiles[selectedLoginRole].label;
  openModal("otpModal");
});

document.getElementById("otpForm").addEventListener("submit", e => {
  e.preventDefault();
  if (document.getElementById("otpInput").value !== "123456") {
    showToast("डेमोसाठी OTP 123456 वापरा.");
    return;
  }
  const profile = loginProfiles[selectedLoginRole];
  document.getElementById("memberDashboardKicker").textContent = profile.kicker;
  document.getElementById("memberDashboardTitle").textContent = profile.title;
  document.getElementById("memberDashboardContent").innerHTML = profile.html;
  document.getElementById("sessionRole").textContent = profile.label;
  document.getElementById("sessionBar").hidden = false;
  const loginButton = document.querySelector("[data-open='loginModal']");
  if (loginButton) loginButton.textContent = profile.label + " लॉग इन";
  closeModals();
  openModal("memberDashboardModal");
  showToast(profile.toast);
});

let toastTimer;
function showToast(text){const toast=document.getElementById("toast");toast.querySelector("p").textContent=text;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),3500)}

const aiPanel=document.getElementById("aiPanel"), chatBody=document.getElementById("chatBody"), quickPrompts=document.getElementById("quickPrompts");
const assistantData={
  citizen:{welcome:"नमस्कार! मी ग्राममित्र AI. नेर्ले ग्रामपंचायत सेवा, योजना, कर किंवा तक्रारीबद्दल मराठीत विचारा.",prompts:["माझे घरपट्टी बिल","तक्रार स्थिती","योजना शोधा"],answers:["तुमच्या मालमत्ता क्र. NER-W3-0142 चे चालू घरपट्टी बिल ₹२,२०० आहे. देय तारीख ३० जून २०२६ आहे.","तुमची तक्रार GP-NER-2026-184 पाणीपुरवठा विभागाकडे नियुक्त झाली आहे. अपेक्षित निकाल आज संध्याकाळी ५ पर्यंत.","तुमच्या प्रोफाइलनुसार ४ योजना पात्र दिसत आहेत. योजना पात्रता सेवा उघडून उत्पन्न व व्यवसायाची माहिती तपासा."]},
  farmer:{welcome:"नमस्कार शेतकरी मित्र! पीक, हवामान, रोग, माती आणि बाजारभावाबद्दल विचारा. आज नेर्लेत पावसाची शक्यता ३५% आहे.",prompts:["ऊस रोग ओळखा","आजचा बाजारभाव","पाऊस कधी?","पीक योजना"],answers:["फोटो तपासणी डेमोसाठी: उसाच्या पानांवर लाल ठिपके दिसल्यास रेड रॉटची शक्यता असू शकते. बाधित भाग वेगळा करा आणि कृषी अधिकाऱ्यांचा सल्ला घ्या.","डेमो बाजारभाव: सांगली बाजार समितीमध्ये सोयाबीन ₹४,६८०/क्विंटल आणि कांदा ₹१,७५०/क्विंटल आहे.","नेर्ले परिसरात पुढील २४ तासांत हलक्या पावसाची ३५% शक्यता आहे. फवारणी करण्यापूर्वी स्थानिक हवामान अपडेट तपासा.","तुमच्यासाठी PM-KISAN, नमो शेतकरी निधी आणि पीक विमा योजना लागू होऊ शकतात."]}
};
let activeAssistant="citizen";
function setAssistant(type){
  activeAssistant=type;
  document.querySelectorAll("[data-assistant]").forEach(b=>b.classList.toggle("active",b.dataset.assistant===type));
  chatBody.innerHTML=`<div class="message bot">${assistantData[type].welcome}</div>`;
  quickPrompts.innerHTML=assistantData[type].prompts.map((p,i)=>`<button data-prompt="${i}">${p}</button>`).join("");
}
document.getElementById("aiFab").onclick=()=>aiPanel.classList.toggle("open");
document.getElementById("closeAi").onclick=()=>aiPanel.classList.remove("open");
document.querySelectorAll("[data-assistant]").forEach(b=>b.onclick=()=>setAssistant(b.dataset.assistant));
quickPrompts.onclick=e=>{if(e.target.dataset.prompt!==undefined)addChat(e.target.textContent,assistantData[activeAssistant].answers[+e.target.dataset.prompt])};
document.getElementById("chatForm").onsubmit=e=>{e.preventDefault();const input=document.getElementById("chatInput");if(!input.value.trim())return;addChat(input.value,activeAssistant==="farmer"?"तुमच्या प्रश्नाचे विश्लेषण केले. अधिक अचूक शेती सल्ल्यासाठी पीक, क्षेत्र आणि फोटोची माहिती जोडा.":"मी तुमचा प्रश्न समजलो. या डेमोमध्ये संबंधित ग्रामपंचायत सेवा उघडून पुढील प्रक्रिया पूर्ण करता येईल.");input.value=""};
function addChat(q,a){chatBody.insertAdjacentHTML("beforeend",`<div class="message user">${q}</div><div class="message bot">${a}</div>`);chatBody.scrollTop=chatBody.scrollHeight}
document.getElementById("voiceBtn").onclick=()=>showToast("आवाज सहाय्यक ऐकत आहे...");
document.getElementById("languageBtn").onclick=()=>showToast("मराठी ही प्राथमिक भाषा आहे. English आणि हिंदी पुढील आवृत्तीत.");
document.getElementById("menuBtn").onclick=()=>showToast("सेवा निवडण्यासाठी खाली स्क्रोल करा.");
setAssistant("citizen");


document.addEventListener("click", e => {
  if (!e.target.closest("#playTourAudio")) return;
  const text = "नमस्कार. ग्रामसेतू ए आय प्रॉडक्ट टूरमध्ये आपले स्वागत आहे. फक्त दोन मिनिटांत नागरिक मोबाईल ओ टी पी ने लॉग इन करतो, मराठीत प्रश्न विचारतो, तक्रार नोंदवतो, घरपट्टी किंवा पाणी बिलाचा क्यू आर पेमेंट करतो, आणि व्हॉट्सअॅपवर अपडेट मिळवतो. ग्रामपंचायत अॅडमिनला सेवा विनंत्या, महसूल वसुली, पाणी व्यवस्थापन आणि ऑडिट रेडी रिपोर्ट दिसतात. सरपंचला ए आय डॅशबोर्डवर वॉर्डनिहाय जोखीम, महसूल, तक्रारी आणि आजची कृती दिसते. हे प्रत्येक गावासाठी सुरक्षित सबस्क्रिप्शन बेस्ड डिजिटल ग्रामपंचायत प्लॅटफॉर्म आहे.";
    if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "mr-IN";
    utterance.rate = 0.82;
    window.speechSynthesis.speak(utterance);
    showToast("मराठी प्रॉडक्ट टूर ऑडिओ सुरू झाला.");
  } else {
    showToast("या ब्राउझरमध्ये ऑडिओ निवेदन समर्थित नाही.");
  }
});


document.getElementById("openMemberDashboard")?.addEventListener("click", () => openModal("memberDashboardModal"));


