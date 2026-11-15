/* "Today's 10 minutes" card and private progress for the home page. Everything stays on this phone (key hve_today). */
(function(){
var S=window.SITE||{},host=document.getElementById('today');if(!host||!S.examDate)return;
function p2(n){return(n<10?'0':'')+n}function ymd(d){return d.getFullYear()+'-'+p2(d.getMonth()+1)+'-'+p2(d.getDate())}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function rd(k){try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}}
var q=S.examDate.split('-').map(Number),now=new Date(),t0=new Date(now.getFullYear(),now.getMonth(),now.getDate());
var left=Math.round((new Date(q[0],q[1]-1,q[2])-t0)/864e5),today=ymd(now);
var PLAN={
 3:{t:'Day 1: Units I and II',u:[1,2],tip:'Learn the 13-mark answer map for one topic. Say it aloud in your own words.'},
 2:{t:'Day 2: Units III and IV',u:[3,4],tip:'Revise the Articles you mix up. Write each with its number and one line of meaning.'},
 1:{t:'Day 3: Unit V and full revision',u:[5],tip:'Read the Top repeated list once. Then stop, eat well and sleep early.'},
 0:{t:'Exam day',u:[],tip:'Read the question paper fully. Answer the questions you know best first.'}};
var plan=left>3?{t:'Start now: Unit I',u:[1],tip:'Small steps every day beat one long night. Begin with Unit I.'}:PLAN[left];
if(!plan){host.innerHTML='<h2>Course complete</h2><p>Thank you for learning with us. You can still use the maps, the quiz and the revision pages.</p>';return}
var T=rd('hve_today')||{};T.days=T.days||[];if(T.date!==today){T.date=today;T.done=[0,0,0,0]}
function save(){try{localStorage.setItem('hve_today',JSON.stringify(T))}catch(e){}}
function streak(){var n=0,d=new Date(t0);for(;;){var k=ymd(d);if(T.days.indexOf(k)>=0){n++;d.setDate(d.getDate()-1)}else if(n===0&&k===today){d.setDate(d.getDate()-1)}else break}return n}
var us=plan.u.length?plan.u:[1];var uname=['I','II','III','IV','V'],mapsOn=S.maps===true;
var steps=[
 ['Read the key points','revision.html'],
 mapsOn?['Open the concept map, Unit '+uname[us[0]-1],'mindmap.html']:['Read the Top repeated list','revision.html'],
 ['Take a 5-question quiz','practice.html'],
 ['Think about this: '+plan.tip,null]];
function bar(pc,txt){return '<div style="margin:6px 0"><div style="display:flex;justify-content:space-between;font-size:.9rem"><span>'+txt[0]+'</span><b>'+txt[1]+'</b></div><div style="height:8px;background:#d9e1f2;border-radius:999px;overflow:hidden"><i style="display:block;height:100%;width:'+pc+'%;background:#2e5496"></i></div></div>'}
function progress(){
 var P=rd('hve_p')||{},ks=['t','u1','u2','u3','u4','u5'],a=ks.filter(function(k){return P[k]}).length;
 var M=rd('hve_mm')||{},seen=Object.keys(M.seen||{}).filter(function(k){return/^u\dn\d+$/.test(k)}).length,tot=85;
 var G=rd('hve_g')||{},qn=G.n||0,best=G.best||0;
 var h=bar(Math.round(a/6*100),['Revision steps ticked',a+' of 6']);
 if(mapsOn)h+=bar(Math.round(seen/tot*100),['Map words opened',seen+' of '+tot]);
 h+=bar(Math.min(100,best),['Best practice quiz score',qn?best+'%':'not yet']);
 return h}
function render(){
 var done=T.done.filter(Boolean).length,s=streak();
 var h='<h2 style="margin:0 0 2px">Today\'s 10 minutes</h2><p style="margin:0 0 8px;font-weight:700">'+esc(plan.t)+(s?' · streak '+s+' day'+(s>1?'s':''):'')+'</p><ol style="list-style:none;padding:0;margin:0">';
 steps.forEach(function(x,i){
  h+='<li style="display:flex;gap:10px;align-items:flex-start;margin:8px 0"><input type="checkbox" id="td'+i+'" data-i="'+i+'" style="width:22px;height:22px;margin-top:3px"'+(T.done[i]?' checked':'')+'><label for="td'+i+'" style="flex:1">'+(x[1]?'<a href="'+x[1]+'" style="font-weight:700">'+esc(x[0])+'</a>':esc(x[0]))+'</label></li>'});
 h+='</ol><p style="margin:6px 0;font-size:.95rem">'+(done===4?'Well done. Come back tomorrow.':done?done+' of 4 done. Keep going.':'Tick each step when you finish it.')+'</p>';
 h+='<details><summary style="cursor:pointer;font-weight:700">My progress</summary>'+progress()+'<p style="font-size:.85rem;margin:6px 0">Private. Stays on this phone. No names, no ranking.</p></details>';
 if(left<=1)h+='<p style="margin:8px 0"><a href="last24.html" style="font-weight:700">Open the last 24 hours page</a></p>';
 host.innerHTML=h;
 [].forEach.call(host.querySelectorAll('input[data-i]'),function(c){c.onchange=function(){T.done[+c.getAttribute('data-i')]=c.checked?1:0;
  var any=T.done.some(Boolean),k=T.days.indexOf(today);if(any&&k<0)T.days.push(today);if(!any&&k>=0)T.days.splice(k,1);save();render();try{window.hveTrack&&hveTrack('revised','today:'+(c.checked?1:0))}catch(e){}}})}
render();
})();
