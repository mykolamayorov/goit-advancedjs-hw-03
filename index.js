import{a as f,S as u,i}from"./assets/vendor-D8hBcPQM.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="52919144-2a7b1f23e18b84640824764ee",g="https://pixabay.com/api/";function y(o){const s={key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(g,{params:s}).then(r=>r.data.hits).catch(r=>{throw console.error("Axios error:",r),r})}const c=document.querySelector("#gallery");let h=new u(".gallery a",{captionsData:"alt",captionDelay:250});function L(){c.innerHTML=""}function _(o){const s=o.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:a,comments:p,downloads:d})=>`
      <li class="gallery_item">
        <a href="${n}">
          <img class="gallery_img" src="${r}" alt="${e}" loading="lazy" />
        </a>
        <div class="gallery_info_wrapper">
          <p class="gallery_info">Likes <span>${t}</span></p>
          <p class="gallery_info">Views <span>${a}</span></p>
          <p class="gallery_info">Comments <span>${p}</span></p>
          <p class="gallery_info">Downloads <span>${d}</span></p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",s),h.refresh()}const b=document.getElementById("search-form"),v=document.getElementById("search-input"),l=document.getElementById("loader");b.addEventListener("submit",o=>{o.preventDefault();const s=v.value.trim();if(!s){i.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}L(),l.classList.remove("hidden"),y(s).then(r=>{r.length===0?i.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):_(r)}).catch(()=>{i.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}).finally(()=>{l.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
