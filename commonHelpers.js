import{a as h,i as f,S as $}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const y="/goit-js-hw-12/assets/error-abf165dd.svg",c=document.querySelector(".keywords"),i=document.querySelector(".loading"),g="42438077-634a4b32cfcaa96ebaa8c4719",v="https://pixabay.com/api/",n=15;let a=1;async function E(){a=1;const r=encodeURIComponent(c.value),e=`${v}?key=${g}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${a}&per_page=${n}`,o=await h.get(e);return i.classList.add("visually-hidden"),o.data}async function b(){if(i.classList.remove("visually-hidden"),a<=500/n){a++;const r=localStorage.getItem("KEY_FOR_SEARCH"),e=`${v}?key=${g}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${a}&per_page=${n}`,o=await h.get(e);return i.classList.add("visually-hidden"),o.data.hits}}const w=()=>f.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16",backgroundColor:"#EF4040",iconUrl:y,position:"topRight",close:!0,layout:2,timeout:2e3}),_=()=>f.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",messageSize:"16",backgroundColor:"#EF4040",iconUrl:y,position:"topRight",close:!0,layout:2,timeout:2e3}),L=document.querySelector(".gallery");function S(r){const e=r.map(o=>`<li class="gallery-item">
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
        </li>`).join("");L.insertAdjacentHTML("beforeend",e),new $(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}const m=document.querySelector(".form-search"),d=document.querySelector(".btn-more");let R=1,p;m.addEventListener("submit",r=>{r.preventDefault(),L.innerHTML="",c.value&&(i.classList.remove("visually-hidden"),p=encodeURIComponent(c.value),localStorage.setItem("KEY_FOR_SEARCH",p),E().then(e=>{if(e.totalHits>0)return e.totalHits>R*n&&d.classList.remove("visually-hidden"),e.hits}).then(e=>{S(e)}).catch(()=>{localStorage.removeItem("KEY_FOR_SEARCH"),w()}).finally(()=>{m.reset()}))});d.addEventListener("click",r=>{r.preventDefault(),b().then(e=>{S(e)}).catch(()=>{d.classList.add("visually-hidden"),i.classList.add("visually-hidden"),_(),R=1,localStorage.removeItem("KEY_FOR_SEARCH")})});
//# sourceMappingURL=commonHelpers.js.map
