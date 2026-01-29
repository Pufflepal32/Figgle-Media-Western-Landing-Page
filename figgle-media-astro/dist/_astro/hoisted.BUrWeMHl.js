import"./hoisted.CesLmAN1.js";const n=document.getElementById("contactForm");n&&n.addEventListener("submit",function(i){i.preventDefault();const o=new FormData(n),t={};if(o.forEach((c,r)=>{t[r]=c.toString()}),!t.name||!t.email||!t.message){s("Please fill in all required fields.","error");return}const e=n.querySelector('button[type="submit"]'),a=e.textContent||"Send Message";e.textContent="Sending...",e.disabled=!0,setTimeout(()=>{s("Message sent successfully! We'll be in touch soon.","success"),n.reset(),e.textContent=a,e.disabled=!1},1500)});function s(i,o){const t=document.querySelector(".notification");t&&t.remove();const e=document.createElement("div");e.className=`notification notification-${o}`,e.innerHTML=`
      <span>${i}</span>
      <button class="notification-close">&times;</button>
    `,e.style.cssText=`
      position: fixed;
      bottom: 30px;
      right: 30px;
      padding: 1rem 2rem;
      background: ${o==="success"?"#4a7c4e":"#c65d3b"};
      color: #f5e6d3;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      gap: 1rem;
      z-index: 10000;
      animation: slideIn 0.3s ease;
      font-family: 'Open Sans', sans-serif;
    `,document.body.appendChild(e),e.querySelector(".notification-close")?.addEventListener("click",()=>{e.remove()}),setTimeout(()=>{e.parentNode&&e.remove()},5e3)}
