import{a as g,i as h,S as b}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const m="/goit-js-hw-12/assets/error-abf165dd.svg",y=document.querySelector(".keywords"),i=document.querySelector(".loading"),f="42438077-634a4b32cfcaa96ebaa8c4719",p="https://pixabay.com/api/",n=15;let l=1;async function w(){l=1;const s=encodeURIComponent(y.value),e=`${p}?key=${f}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${l}&per_page=${n}`;localStorage.setItem("KEY_FOR_SEARCH",s);const a=await g.get(e),o=a.data.totalHits;return localStorage.setItem("TOTAL_HITS",o),i.classList.add("visually-hidden"),a.data}async function $(){i.classList.remove("visually-hidden");const s=localStorage.getItem("TOTAL_HITS");if(l<s/n){l++;const e=localStorage.getItem("KEY_FOR_SEARCH"),a=`${p}?key=${f}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${l}&per_page=${n}`,o=await g.get(a);return i.classList.add("visually-hidden"),o.data.hits}}const R=()=>h.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16",backgroundColor:"#EF4040",iconUrl:m,position:"topRight",close:!0,layout:2,timeout:3e3}),C=()=>h.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",messageSize:"16",backgroundColor:"#FFA000",iconUrl:m,position:"topRight",close:!0,layout:2,timeout:3e3}),v=document.querySelector(".gallery");function L(s){const e=s.map(o=>`<li class="gallery-item">
            <a class="gallery-link" href="${o.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${o.previewURL}" 
                    alt="${o.tags}"
                />
            </a>
            <div class="gallery-info">
                <div class="column">
                    <h2>likes</h2>
                    <p>${o.likes}</p>
                </div>
                <div class="column">
                    <h2>views</h2>
                    <p>${o.views}</p>
                </div>
                 <div class="column">
                    <h2>comments</h2>
                    <p>${o.comments}</p>
                </div>
                <div class="column">
                    <h2>downloads</h2>
                    <p>${o.downloads}</p>
                </div>
            </div>
        </li>`).join("");v.insertAdjacentHTML("beforeend",e),new b(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function S(){const a=2*document.querySelector(".gallery-item").getBoundingClientRect().height;setTimeout(()=>{window.scrollBy({top:a,left:0,behavior:"smooth"})},1e3)}const u=document.querySelector(".form-search"),d=document.querySelector(".btn-more");u.addEventListener("submit",s=>{s.preventDefault(),v.innerHTML="",y.value&&(i.classList.remove("visually-hidden"),w().then(e=>{if(e.totalHits>0)return e.totalHits>l*n&&d.classList.remove("visually-hidden"),e.hits}).then(e=>{L(e),S()}).catch(()=>{R(),localStorage.clear()}).finally(()=>{u.reset()}))});d.addEventListener("click",s=>{s.preventDefault(),$().then(e=>{L(e),S()}).catch(()=>{d.classList.add("visually-hidden"),i.classList.add("visually-hidden"),C(),localStorage.clear()})});
//# sourceMappingURL=commonHelpers.js.map
