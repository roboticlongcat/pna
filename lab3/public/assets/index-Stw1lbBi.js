(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();class l{constructor(e,t){this.parent=e,this.onSearch=t}getHTML(){return`
            <div class="search-filter mb-3">
                <input type="text" placeholder="Введите название..." id="search-input" class="form-control" />
            </div>
        `}addListeners(){const e=this.parent.querySelector("#search-input");e&&e.addEventListener("input",()=>{const t=e.value.trim();this.onSearch(t)})}render(){this.parent.innerHTML=this.getHTML(),this.addListeners()}}class p{constructor(e){this.parent=e}getHTML(e){return`
            <div class="card" style="width: 300px;">
                <img class="card-img-top" src="${e.src}" alt="картинка">
                <div class="card-body">
                    <h5 class="card-title">${e.title}</h5>
                    <p class="card-text">${e.text}</p>
                    <button class="btn btn-primary" id="click-card-${e.id}" data-id="${e.id}"> Нажми на меня </button>
                </div>
            </div>
        `}addListeners(e,t){document.getElementById(`click-card-${e.id}`).addEventListener("click",t)}render(e,t){const r=this.getHTML(e);this.parent.insertAdjacentHTML("beforeend",r),this.addListeners(e,t)}}class h{constructor(e){this.parent=e}getHTML(e){return`
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${e.src}" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">${e.title}</h5>
                        <p class="card-text">${e.text}</p>
                        <button class="btn btn-primary">Нажми на меня</button>
                    </div>
                </div>
            `}render(e){const t=this.getHTML(e);this.parent.insertAdjacentHTML("beforeend",t)}}class u{constructor(e){this.parent=e}addListeners(e){document.getElementById("back-button").addEventListener("click",e)}getHTML(){return`
                <button id="back-button" class="btn btn-primary" type="button">Назад</button>
            `}render(e){const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),this.addListeners(e)}}class g{get(e,t){const r=new XMLHttpRequest;r.open("GET",e),r.send(),r.onreadystatechange=()=>{r.readyState===4&&this._handleResponse(r,t)}}post(e,t,r){const s=new XMLHttpRequest;s.open("POST",e),s.setRequestHeader("Content-Type","application/json"),s.send(JSON.stringify(t)),s.onreadystatechange=()=>{s.readyState===4&&this._handleResponse(s,r)}}patch(e,t,r){const s=new XMLHttpRequest;s.open("PATCH",e),s.setRequestHeader("Content-Type","application/json"),s.send(JSON.stringify(t)),s.onreadystatechange=()=>{s.readyState===4&&this._handleResponse(s,r)}}delete(e,t){const r=new XMLHttpRequest;r.open("DELETE",e),r.send(),r.onreadystatechange=()=>{r.readyState===4&&this._handleResponse(r,t)}}_handleResponse(e,t){try{const r=e.responseText?JSON.parse(e.responseText):null;t(r,e.status)}catch(r){console.error("Ошибка парсинга JSON:",r),t(null,e.status)}}}const c=new g;class b{constructor(){this.baseUrl="http://localhost:3000"}getStocks(){return`${this.baseUrl}/stocks`}getStockById(e){return`${this.baseUrl}/stocks/${e}`}createStock(){return`${this.baseUrl}/stocks`}removeStockById(e){return`${this.baseUrl}/stocks/${e}`}updateStockById(e){return`${this.baseUrl}/stocks/${e}`}}const i=new b;class m{constructor(e,t,r){this.parent=e,this.id=t}renderData(e){new h(this.pageRoot).render(e)}getData(){c.get(i.getStockById(this.id),e=>{this.renderData(e)})}get pageRoot(){return document.getElementById("product-page")}getHTML(){return`
                
                <div id="product-page">
                </div>
                <h2> Теперь лови забавные факты о котиках! </h2>
                <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        1. Коты спят в среднем 13–16 часов в сутки.
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Это примерно 70% их жизни!
То есть если бы кот был человеком, он бы спал примерно до 55 лет, а потом такой: "Ну ладно, пора вставать… и полежать ещё чуть-чуть."
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        2. Усы кота такие чувствительные, что он может ощутить изменения в воздухе менее чем на 0.1 мм.
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Фактически, усы — это встроенные лазеры-датчики, и они помогают коту понять, пролезет ли он в щель.
        Но при этом:
        🐈 «Попробую влезть в банку от селёдки. А вдруг?»
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        3. Около 10% всех владельцев кошек признаются, что устраивают с котами "разговоры по душам" чаще, чем с людьми.
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
            <p>Человек: "Котик, у меня сегодня такой день был..."</p>
            <p>Кот: "Мяу"</p>
            <p>Человек: "Ты всегда меня понимаешь 😿"</p>
      </div>
    </div>
  </div>
</div>    
<button id="delete-btn" class="btn btn-danger mt-3">Удалить котенка :(</button>
            `}clickBack(){new d(this.parent).render()}addListeners(){const e=document.getElementById("delete-btn");e&&e.addEventListener("click",()=>this.deleteProduct())}deleteProduct(){confirm("Вы действительно хотите удалить котенка? :(")&&c.delete(i.removeStockById(this.id),()=>{alert("Товар удалён"),this.clickBack()},e=>{alert("Ошибка при удалении"),console.error(e)})}render(){this.parent.innerHTML="";const e=this.getHTML();this.parent.insertAdjacentHTML("beforeend",e),new u(this.pageRoot).render(this.clickBack.bind(this)),this.getData(),this.addListeners()}}class d{constructor(e){this.parent=e,this.currentFilter=""}getHTML(){return`
            <div class="main-page">
                <div id="search-filter"></div>
                <div id="products"></div>
            </div>
        `}getData(){let e=i.getStocks();if(this.currentFilter){const t=e.includes("?")?"&":"?";e+=`${t}title=${encodeURIComponent(this.currentFilter)}`}c.get(e,t=>{this.renderData(t)})}renderData(e){this.pageRoot.innerHTML="",e.forEach(t=>{new p(this.pageRoot).render(t,()=>this.clickCard(t.id))})}clickCard(e){new m(this.parent,e).render()}onSearch(e){this.currentFilter=e,this.getData()}render(){this.parent.innerHTML=this.getHTML();const e=this.parent.querySelector("#search-filter");this.searchFilter=new l(e,this.onSearch.bind(this)),this.searchFilter.render(),this.pageRoot=this.parent.querySelector("#products"),this.getData()}}const y=document.getElementById("root"),f=new d(y);f.render();
