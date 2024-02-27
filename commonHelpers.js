import{a as h,i as g,S as w}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const y="/goit-js-hw-12/assets/error-abf165dd.svg",m=document.querySelector(".keywords"),l=document.querySelector(".loading"),f="42438077-634a4b32cfcaa96ebaa8c4719",p="https://pixabay.com/api/",c=15;let a=1;async function $(){a=1;const s=encodeURIComponent(m.value),e=`${p}?key=${f}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${a}&per_page=${c}`;localStorage.setItem("KEY_FOR_SEARCH",s);const t=await h.get(e),i=t.data.totalHits;return localStorage.setItem("TOTAL_HITS",i),l.classList.add("visually-hidden"),t.data}async function R(){l.classList.remove("visually-hidden");const s=localStorage.getItem("TOTAL_HITS");if(a<s/c){a++;const e=localStorage.getItem("KEY_FOR_SEARCH"),t=`${p}?key=${f}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${a}&per_page=${c}`,i=await h.get(t);return l.classList.add("visually-hidden"),i.data}}const C=()=>g.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16",backgroundColor:"#EF4040",iconUrl:y,position:"topRight",close:!0,layout:2,timeout:3e3}),H=()=>g.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",messageSize:"16",backgroundColor:"#FFA000",iconUrl:y,position:"topRight",close:!0,layout:2,timeout:3e3}),v=document.querySelector(".gallery");function L(s){const e=s.map(t=>`<li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${t.previewURL}" 
                    alt="${t.tags}"
                />
            </a>
            <div class="gallery-info">
                <div class="column">
                    <h2>likes</h2>
                    <p>${t.likes}</p>
                </div>
                <div class="column">
                    <h2>views</h2>
                    <p>${t.views}</p>
                </div>
                 <div class="column">
                    <h2>comments</h2>
                    <p>${t.comments}</p>
                </div>
                <div class="column">
                    <h2>downloads</h2>
                    <p>${t.downloads}</p>
                </div>
            </div>
        </li>`).join("");v.insertAdjacentHTML("beforeend",e)}function S(){new w(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function b(){const t=2*document.querySelector(".gallery-item").getBoundingClientRect().height;setTimeout(()=>{window.scrollBy({top:t,left:0,behavior:"smooth"})},1e3)}const u=document.querySelector(".form-search"),n=document.querySelector(".btn-more");u.addEventListener("submit",s=>{s.preventDefault(),v.innerHTML="",n.classList.add("visually-hidden"),m.value&&(l.classList.remove("visually-hidden"),$().then(e=>{if(e.totalHits>0)return e.totalHits>a*c&&n.classList.remove("visually-hidden"),e.hits}).then(e=>{L(e),S(),b()}).catch(()=>{C()}).finally(()=>{u.reset()}))});n.addEventListener("click",s=>{s.preventDefault(),R().then(e=>(e.totalHits<(a+1)*c&&(n.classList.add("visually-hidden"),l.classList.add("visually-hidden"),H()),e.hits)).then(e=>{L(e),S(),b()}).catch(()=>{n.classList.add("visually-hidden"),l.classList.add("visually-hidden")})});
//# sourceMappingURL=commonHelpers.js.map
