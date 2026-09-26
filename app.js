// 1) Создай проект Supabase и вставь сюда Project URL и Publishable key.
const SUPABASE_URL = 'PASTE_SUPABASE_URL_HERE';
const SUPABASE_KEY = 'PASTE_SUPABASE_PUBLISHABLE_KEY_HERE';

const configured = !SUPABASE_URL.includes('PASTE_') && !SUPABASE_KEY.includes('PASTE_');
const sb = configured ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;
const $ = id => document.getElementById(id);
let name = localStorage.getItem('am_name') || '';
let user = null;
let allMessages = [];

function esc(s){return String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}
function avatar(s){return (s||'?').trim()[0]?.toUpperCase()||'?'}
function clock(t){return new Date(t).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}
function showError(s){$('loginError').textContent=s||''}

async function enter(){
  if(!configured){$('login').classList.add('hidden');$('setup').classList.remove('hidden');return}
  const n=$('name').value.trim(); if(!n){$('name').focus();return}
  showError('Подключение...');
  const {data,error}=await sb.auth.getSession();
  if(error){showError(error.message);return}
  if(data.session) user=data.session.user;
  else {
    const r=await sb.auth.signInAnonymously({options:{data:{display_name:n.slice(0,24)}}});
    if(r.error){showError('Supabase: '+r.error.message);return}
    user=r.data.user;
  }
  name=n.slice(0,24);localStorage.setItem('am_name',name);
  $('login').classList.add('hidden');$('app').classList.remove('hidden');
  $('myName').textContent=name;$('myAvatar').textContent=avatar(name);showError('');
  await loadMessages(); subscribe();
}

async function loadMessages(){
  const {data,error}=await sb.from('messages').select('*').order('created_at',{ascending:true}).limit(500);
  if(error){$('status').textContent='Ошибка загрузки: '+error.message;return}
  allMessages=data||[];render();
}

function render(){
  const q=$('search').value.toLowerCase();
  $('messages').innerHTML=allMessages.filter(m=>(m.text||'').toLowerCase().includes(q)||(m.user_name||'').toLowerCase().includes(q)).map(m=>`<div class="msg ${m.user_id===user?.id?'mine':''}"><div class="meta">${esc(m.user_name)}</div><div>${esc(m.text||'').replace(/\n/g,'<br>')}</div><div class="time">${clock(m.created_at)}</div></div>`).join('');
  $('messages').scrollTop=$('messages').scrollHeight;
}

function subscribe(){
  sb.channel('messages-live').on('postgres_changes',{event:'INSERT',schema:'public',table:'messages'},payload=>{
    if(!allMessages.some(x=>x.id===payload.new.id)){allMessages.push(payload.new);render()}
  }).subscribe();
}

async function send(){
  const text=$('text').value.trim();if(!text||!user)return;
  $('text').disabled=true;
  const {error}=await sb.from('messages').insert({user_id:user.id,user_name:name,text:text.slice(0,4000)});
  $('text').disabled=false;
  if(error){$('status').textContent='Не отправлено: '+error.message;return}
  $('status').textContent='';$('text').value='';$('text').focus();
}

$('loginBtn').onclick=enter;
$('name').onkeydown=e=>{if(e.key==='Enter')enter()};
$('form').onsubmit=e=>{e.preventDefault();send()};
$('search').oninput=render;
$('theme').onclick=()=>document.body.classList.toggle('dark');
if(name)$('name').value=name;
if(!configured){$('loginError').textContent='Сначала подключи Supabase в app.js'}
