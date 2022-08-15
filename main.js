// যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
const selecth2 = document.getElementsByTagName('h2');
for (const h2 of selecth2) {
  h2.style.color = '#add8e6';
}

// ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 
const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = 'tomato';
backpack.style.padding = '15px';

// card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা
const cards = document.getElementsByClassName('card');
for (const card of cards) {
  card.style.borderRadius = '30px';
  card.style.overflow = 'hidden';
}

//কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 
function onConsole(){
  console.log('Register Now');
}

// এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 
const buyNow = document.querySelectorAll('.buy-now-button');
for (const btn of buyNow) {
  if (btn.innerText === 'Buy Now' || btn.innerText === 'Buy Now >>') {
    btn.addEventListener('click', function(event){
      event.target.parentNode.removeChild(event.target);
    });
  }
}

// একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 
const emailInput = document.querySelector('.form-control');
const emailBtn = document.querySelector('#emailBtn');
emailBtn.setAttribute('disabled', true);

emailInput.addEventListener('keyup', function(event) {
  if (event.target.value !== 'email') {
    emailBtn.setAttribute('disabled', true);
  }else{
    emailBtn.removeAttribute('disabled');
  }
});

// (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 
const showimage1 = document.getElementById('showimage1');
const showimage2 = document.getElementById('showimage2');
const showimage3 = document.getElementById('showimage3');
const showimg1 = document.getElementById('showimg1');

showimage1.addEventListener('mouseenter', function(){
  showimg1.src = './images/shoes/shoe-1.png';
});
showimage2.addEventListener('mouseenter', function(){
  showimg1.src = './images/shoes/shoe-2.png';
});
showimage3.addEventListener('mouseenter', function(){
  showimg1.src = './images/shoes/shoe-3.png';
});

// (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 
const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('dblclick', function() {
  // subscribe.classList.remove('orange-bg');
  subscribe.classList.toggle('pink-bg');
});
