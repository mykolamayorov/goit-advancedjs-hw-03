import{S as f,i}from"./assets/vendor-BrddEoy-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="52919144-2a7b1f23e18b84640824764ee",m="https://pixabay.com/api/";function g(o){const n=`${m}?key=${d}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(r=>{if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return r.json()}).then(r=>r.hits)}const c=document.querySelector("#gallery");let y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(){c.innerHTML=""}function L(o){const n=o.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:s,comments:p,downloads:u})=>`
      <li class="gallery_item">
        <a href="${a}">
          <img class="gallery_img" src="${r}" alt="${e}" loading="lazy" />
        </a>
        <div class="gallery_info_wrapper">
          <p class="gallery_info">Likes <span>${t}</span></p>
          <p class="gallery_info">Views <span>${s}</span></p>
          <p class="gallery_info">Comments <span>${p}</span></p>
          <p class="gallery_info">Downloads <span>${u}</span></p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",n),y.refresh()}const _=document.getElementById("search-form"),$=document.getElementById("search-input"),l=document.getElementById("loader");_.addEventListener("submit",o=>{o.preventDefault();const n=$.value.trim();if(!n){i.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}h(),l.classList.remove("hidden"),g(n).then(r=>{r.length===0?i.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(r)}).catch(()=>{i.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}).finally(()=>{l.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
