import{a as m,i as p,S as $}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const h="/goit-js-hw-12/assets/error-abf165dd.svg",f=document.querySelector(".keywords"),n=document.querySelector(".loading"),g="42438077-634a4b32cfcaa96ebaa8c4719",y="https://pixabay.com/api/",l=15;let i=1;async function b(){i=1;const s=encodeURIComponent(f.value),e=`${y}?key=${g}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${i}&per_page=${l}`;localStorage.setItem("KEY_FOR_SEARCH",s);const o=await m.get(e),a=o.data.totalHits;return localStorage.setItem("TOTAL_HITS",a),n.classList.add("visually-hidden"),o.data}async function w(){n.classList.remove("visually-hidden");const s=localStorage.getItem("TOTAL_HITS");if(i<s/l){i++;const e=localStorage.getItem("KEY_FOR_SEARCH"),o=`${y}?key=${g}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${i}&per_page=${l}`,a=await m.get(o);return n.classList.add("visually-hidden"),a.data.hits}}const I=()=>p.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16",backgroundColor:"#EF4040",iconUrl:h,position:"topRight",close:!0,layout:2,timeout:2e3}),R=()=>p.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",messageSize:"16",backgroundColor:"#EF4040",iconUrl:h,position:"topRight",close:!0,layout:2,timeout:2e3}),v=document.querySelector(".gallery");function L(s){const e=s.map(o=>`<li class="gallery-item">
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
        </li>`).join("");v.insertAdjacentHTML("beforeend",e),new $(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}const u=document.querySelector(".form-search"),d=document.querySelector(".btn-more");let S=1;u.addEventListener("submit",s=>{s.preventDefault(),v.innerHTML="",f.value&&(n.classList.remove("visually-hidden"),b().then(e=>{if(e.totalHits>0)return e.totalHits>S*l&&d.classList.remove("visually-hidden"),e.hits}).then(e=>{L(e)}).catch(()=>{I()}).finally(()=>{u.reset()}))});d.addEventListener("click",s=>{s.preventDefault(),w().then(e=>{L(e)}).catch(()=>{d.classList.add("visually-hidden"),n.classList.add("visually-hidden"),R(),S=1})});
//# sourceMappingURL=commonHelpers.js.map
