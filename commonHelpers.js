import{a as u,i as m,S as f}from"./assets/vendor-527658dd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const p="/goit-js-hw-12/assets/error-abf165dd.svg",c=document.querySelector(".keywords"),y="42438077-634a4b32cfcaa96ebaa8c4719",h="https://pixabay.com/api/";async function g(){const r=document.querySelector(".loading"),s=encodeURIComponent(c.value),e=`${h}?key=${y}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`,n=await u.get(e);return r.classList.add("visually-hidden"),n.data}const v=()=>m.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16",backgroundColor:"#EF4040",iconUrl:p,position:"topRight",close:!0,layout:2,timeout:2e3}),l=document.querySelector(".gallery");function L(r){const s=r.map(e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${e.previewURL}" 
                    alt="${e.tags}"
                />
            </a>
            <div class="gallery-info">
                <div class="column">
                    <h2>likes</h2>
                    <p>${e.likes}</p>
                </div>
                <div class="column">
                    <h2>views</h2>
                    <p>${e.views}</p>
                </div>
                 <div class="column">
                    <h2>comments</h2>
                    <p>${e.comments}</p>
                </div>
                <div class="column">
                    <h2>downloads</h2>
                    <p>${e.downloads}</p>
                </div>
            </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",s),new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}const a=document.querySelector(".form-search"),d=document.querySelector(".btn-more");a.addEventListener("submit",r=>{r.preventDefault();const s=document.querySelector(".loading");l.innerHTML="",c.value&&(s.classList.remove("visually-hidden"),g().then(e=>{if(parseInt(e.totalHits)>0)return d.classList.remove("visually-hidden"),e.hits}).then(e=>{L(e)}).catch(()=>{v()}).finally(()=>{a.reset()}))});d.addEventListener("click",()=>{});
//# sourceMappingURL=commonHelpers.js.map
