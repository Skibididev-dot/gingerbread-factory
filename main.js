(function(){
const $=(s)=>document.querySelector(s);
const money=n=>'$'+n.toFixed(2);
const DARK='#4a2c17',CR='#fbf3e2';
const eyes=(a,b,y,r=1.9)=>`<g fill="${DARK}" stroke="none"><circle cx="${a}" cy="${y}" r="${r}"/><circle cx="${b}" cy="${y}" r="${r}"/></g>`;
const ic=d=>`<path d="${d}" fill="none" stroke="${CR}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
// shape = silhouette, det = icing and face details
const S={
round:['<circle cx="50" cy="50" r="40"/>',''],
snail:['<circle cx="38" cy="48" r="26"/><path d="M8 82Q6 70 20 70H80Q88 58 80 42L87 40Q98 58 92 72Q97 82 84 82z"/>',
 `<g fill="none" stroke="${CR}" stroke-width="2"><circle cx="38" cy="48" r="17"/><circle cx="38" cy="48" r="8"/></g>${eyes(86,86,66,1.8)}`],
porcupine:['<path d="M16 62L20 34L30 50L36 26L46 46L54 22L62 46L72 26L76 50L88 38L86 66z"/><ellipse cx="52" cy="68" rx="36" ry="20"/><circle cx="14" cy="70" r="5"/><rect x="30" y="80" width="10" height="10" rx="3"/><rect x="62" y="80" width="10" height="10" rx="3"/>',
 `${eyes(27,27,63,2)}<circle cx="11" cy="70" r="2.4" fill="${DARK}"/>`+ic('M40 66Q52 72 64 66')],
man:['<circle cx="50" cy="20" r="13"/><path d="M40 30L14 38Q8 48 18 52L38 46L32 80Q30 90 40 90L50 76L60 90Q70 90 68 80L62 46L82 52Q92 48 86 38L60 30z"/>',
 `${eyes(45,55,18,1.8)}${ic('M45 24Q50 28 55 24')}<g fill="${CR}" stroke="none"><circle cx="50" cy="44" r="2.6"/><circle cx="50" cy="56" r="2.6"/><circle cx="50" cy="68" r="2.6"/></g>`],
fox:['<path d="M12 14L38 36H62L88 14L86 58Q50 98 14 58z"/>',
 `${eyes(36,64,52)}<circle cx="50" cy="79" r="4" fill="${DARK}"/>`+ic('M20 58Q36 66 44 70M80 58Q64 66 56 70M20 24L32 34M80 24L68 34')],
squirrel:['<ellipse cx="38" cy="62" rx="18" ry="26"/><circle cx="38" cy="30" r="14"/><circle cx="29" cy="19" r="5"/><circle cx="47" cy="19" r="5"/><path d="M54 84Q98 76 80 30Q72 12 62 28Q82 46 54 58z"/>',
 `${eyes(43,43,28,1.8)}<circle cx="47" cy="34" r="2" fill="${DARK}"/>`+ic('M64 34Q80 44 72 62M60 48Q72 56 66 70')],
bear:['<circle cx="26" cy="28" r="11"/><circle cx="74" cy="28" r="11"/><circle cx="50" cy="56" r="30"/>',
 `<circle cx="50" cy="66" r="11" fill="${CR}" stroke="none"/><circle cx="50" cy="62" r="3.6" fill="${DARK}"/>${eyes(38,62,46)}`+ic('M50 66V70M45 71Q50 74 55 71')],
moose:['<path d="M36 44H8L4 20L11 20L15 34L21 12L28 12L26 34H36z"/><path d="M64 44H92L96 20L89 20L85 34L79 12L72 12L74 34H64z"/><path d="M34 42H66L70 70Q66 92 50 92Q34 92 30 70z"/><circle cx="29" cy="48" r="6"/><circle cx="71" cy="48" r="6"/>',
 `${eyes(42,58,58)}<ellipse cx="50" cy="82" rx="10" ry="6" fill="${CR}" stroke="none"/><g fill="${DARK}" stroke="none"><circle cx="46" cy="82" r="1.7"/><circle cx="54" cy="82" r="1.7"/></g>`],
cat:['<path d="M20 38L20 8L46 28z"/><path d="M80 38L80 8L54 28z"/><circle cx="50" cy="60" r="32"/>',
 `${eyes(38,62,56,2.2)}<path d="M46 66L54 66L50 71z" fill="${DARK}" stroke="none"/>`+ic('M14 62L32 66M14 72L32 70M86 62L68 66M86 72L68 70')],
flower:['<circle cx="74" cy="50" r="16"/><circle cx="62" cy="71" r="16"/><circle cx="38" cy="71" r="16"/><circle cx="26" cy="50" r="16"/><circle cx="38" cy="29" r="16"/><circle cx="62" cy="29" r="16"/><circle cx="50" cy="50" r="16"/>',
 `<circle cx="50" cy="50" r="13" fill="${CR}" stroke="none"/><circle cx="50" cy="50" r="5" fill="#c98f52" stroke="none"/>`],
star:['<polygon points="50,6 61,37 94,37 68,57 78,90 50,70 22,90 32,57 6,37 39,37"/>',
 `<circle cx="50" cy="52" r="14" fill="none" stroke="${CR}" stroke-width="2"/><circle cx="50" cy="52" r="2.5" fill="${CR}"/>`]
};
function art(k,extra,label){
  const [sh,det]=S[k];
  return `<svg viewBox="0 0 100 100" role="img" aria-label="${label||k}"><ellipse cx="50" cy="94" rx="34" ry="3.5" fill="#4a2c17" opacity=".13"/><g fill="#9a6633" stroke="#9a6633" stroke-width="3.5" stroke-linejoin="round">${sh}</g><g fill="#c98f52" stroke="none">${sh}</g>${det}${extra||''}</svg>`;
}
const P=[
['snail','Snail',2,'Slow to bake, quick to disappear. A little spiral shell piped in cream icing.'],
['porcupine','Porcupine',2,'Covered in gingerbread spikes, and soft where it counts.'],
['man','Gingerbread Man',2,'The classic, with icing buttons and a cheerful smile.'],
['fox','Fox',2,'A sly little face with pointed ears and a dab of icing for a nose.'],
['squirrel','Squirrel',2,'Bushy tail, small appetite for acorns. Ours is mostly tail.'],
['bear','Bear',2,'A round, friendly bear with a cream muzzle.'],
['moose','Moose',3,'Big antlers with plenty to snap off and share.'],
['cat','Cat',3,'Whiskers piped by hand, one at a time.'],
['flower','Flower',3,'Six petals and an icing centre. Lovely as a gift.'],
['star','Star',3,'A bold five-point star with a ring of icing in the middle.']
].map(([id,name,price,desc])=>({id,name,price,desc}));
const card=p=>`<article class="card"><div class="thumb">${art(p.id,'',p.name+' gingerbread cookie')}</div><h4>${p.name}</h4><div class="p">$${p.price}</div><p class="d">${p.desc}</p><button class="btn" data-add="${p.id}">Add to Cart</button></article>`;
$('#small').innerHTML=P.filter(p=>p.price==2).map(card).join('');
$('#big').innerHTML=P.filter(p=>p.price==3).map(card).join('');
$('#featured').innerHTML=['man','fox','moose','star'].map(i=>card(P.find(p=>p.id==i))).join('');
$('#heroArt').innerHTML=art('bear')+art('man')+art('star');

// cart
let cart=[];
try{cart=JSON.parse(localStorage.getItem('gf-cart'))||[]}catch(e){}
const save=()=>{try{localStorage.setItem('gf-cart',JSON.stringify(cart))}catch(e){}};
function add(item){
  const f=cart.find(c=>c.key===item.key);
  f?f.qty++:cart.push({...item,qty:1});
  render();bump();
}
function bump(){const c=$('#cartCount');c.classList.remove('bump');void c.offsetWidth;c.classList.add('bump')}
function render(){
  save();
  const n=cart.reduce((a,c)=>a+c.qty,0),t=cart.reduce((a,c)=>a+c.qty*c.price,0);
  $('#cartCount').textContent=n;
  $('#subtotal').textContent=$('#total').textContent=money(t);
  $('#checkoutBtn').disabled=!n;
  $('#cartItems').innerHTML=n?cart.map((c,i)=>`<div class="line"><div class="thumb">${art(c.shape,c.extra||'',c.name)}</div><div><b>${c.name}</b><span>${money(c.price)} each</span><div class="qty"><button data-q="${i}" data-d="-1" aria-label="Decrease quantity">&minus;</button><span>${c.qty}</span><button data-q="${i}" data-d="1" aria-label="Increase quantity">+</button><button class="rm" data-rm="${i}">Remove</button></div></div><div class="lt">${money(c.price*c.qty)}</div></div>`).join(''):'<p class="empty">Your cart is empty.<br>Add a cookie to get started.</p>';
}
function drawer(o){
  $('#drawer').classList.toggle('on',o);$('#overlay').classList.toggle('on',o);
  $('#drawer').setAttribute('aria-hidden',!o);
}
document.addEventListener('click',e=>{
  const t=e.target.closest('button');if(!t)return;
  if(t.dataset.add){const p=P.find(x=>x.id==t.dataset.add);add({key:p.id,name:p.name,price:p.price,shape:p.id});t.textContent='Added ✓';setTimeout(()=>t.textContent='Add to Cart',1000)}
  if(t.dataset.q){const c=cart[+t.dataset.q];c.qty+=+t.dataset.d;if(c.qty<1)cart.splice(+t.dataset.q,1);render()}
  if(t.dataset.rm){cart.splice(+t.dataset.rm,1);render()}
});
$('#cartOpen').onclick=()=>drawer(true);
$('#cartClose').onclick=$('#overlay').onclick=()=>drawer(false);
document.addEventListener('keydown',e=>{if(e.key==='Escape')drawer(false)});
$('#menuBtn').onclick=()=>{const o=$('#nav').classList.toggle('open');$('#menuBtn').setAttribute('aria-expanded',o)};
$('#nav').onclick=e=>{if(e.target.tagName=='A'){$('#nav').classList.remove('open');$('#menuBtn').setAttribute('aria-expanded',false)}};

// checkout (demo)
const dlg=$('#checkout');
$('#checkoutBtn').onclick=()=>{
  $('#coTotal').textContent=$('#total').textContent;
  $('#checkoutForm').hidden=false;$('#done').hidden=true;
  drawer(false);dlg.showModal();
};
$('#coCancel').onclick=()=>dlg.close();
$('#checkoutForm').onsubmit=e=>{
  e.preventDefault();
  const name=new FormData(e.target).get('name').split(' ')[0];
  const n=cart.reduce((a,c)=>a+c.qty,0);
  $('#doneMsg').textContent=`Thanks, ${name}. This was a demo, so nothing was charged, but your ${n} cookie${n>1?'s':''} would have been on their way. Order #GF-${Math.floor(1000+Math.random()*9000)}.`;
  cart=[];render();e.target.reset();
  $('#checkoutForm').hidden=true;$('#done').hidden=false;
};
$('#doneClose').onclick=()=>dlg.close();

// decorate your own
const shapes=[['round','Round'],['man','Gingerbread Man'],['star','Star']];
const icings=[['#fbf3e2','White'],['#b5404b','Red'],['#7f9a6c','Green']];
const tops=[['sprinkles','Sprinkles'],['candy','Candy buttons'],['chips','Chocolate chips']];
const D={shape:'round',icing:0,tops:new Set(['sprinkles'])};
$('#optShape').innerHTML=shapes.map(([v,l],i)=>`<label><input type="radio" name="shape" value="${v}" ${i?'':'checked'}><span>${l}</span></label>`).join('');
$('#optIcing').innerHTML=icings.map(([c,l],i)=>`<label><input type="radio" name="icing" value="${i}" ${i?'':'checked'}><span><i class="sw" style="background:${c}"></i>${l}</span></label>`).join('');
$('#optTops').innerHTML=tops.map(([v,l])=>`<label><input type="checkbox" value="${v}" ${D.tops.has(v)?'checked':''}><span>${l}</span></label>`).join('');
function decor(){
  const c=icings[D.icing][0];
  let x=`<g transform="translate(50 50) scale(.84) translate(-50 -50)" fill="none" stroke="${c}" stroke-width="3.2" stroke-dasharray=".1 6.5" stroke-linecap="round" stroke-linejoin="round">${S[D.shape][0]}</g>`;
  if(D.tops.has('sprinkles'))x+=[[42,46,20,'#b5404b'],[56,42,-40,'#fbf3e2'],[50,58,70,'#7f9a6c'],[60,56,10,'#b5404b'],[38,60,-20,'#fbf3e2'],[48,36,50,'#7f9a6c']].map(([a,b,r,k])=>`<rect x="${a-3}" y="${b-.8}" width="6" height="1.8" rx=".9" fill="${k}" transform="rotate(${r} ${a} ${b})"/>`).join('');
  if(D.tops.has('candy'))x+=[[44,52,'#b5404b'],[56,52,'#7f9a6c'],[50,62,'#b5404b']].map(([a,b,k])=>`<circle cx="${a}" cy="${b}" r="3.2" fill="${k}"/><circle cx="${a-1}" cy="${b-1}" r="1" fill="#fff" opacity=".5"/>`).join('');
  if(D.tops.has('chips'))x+=[[40,44],[58,48],[46,66],[54,40],[62,60]].map(([a,b])=>`<ellipse cx="${a}" cy="${b}" rx="2.4" ry="1.7" fill="#3a2010"/>`).join('');
  return x;
}
function prev(){$('#preview').innerHTML=art(D.shape,decor(),'Preview of your decorated cookie')}
$('#optShape').onchange=e=>{D.shape=e.target.value;prev()};
$('#optIcing').onchange=e=>{D.icing=+e.target.value;prev()};
$('#optTops').onchange=e=>{e.target.checked?D.tops.add(e.target.value):D.tops.delete(e.target.value);prev()};
$('#customAdd').onclick=()=>{
  const sn=shapes.find(s=>s[0]==D.shape)[1],t=[...D.tops].sort();
  const desc=`${sn}, ${icings[D.icing][1].toLowerCase()} icing${t.length?', '+t.join(', '):''}`;
  add({key:`custom|${D.shape}|${D.icing}|${t}`,name:`Decorate Your Own (${desc})`,price:4,shape:D.shape,extra:decor()});
  drawer(true);
};
prev();render();
})();
