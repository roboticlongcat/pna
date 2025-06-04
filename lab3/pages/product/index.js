import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import { ajax } from "../../modules/ajax.js";
import { stockUrls } from "../../modules/stockUrls.js";


export class ProductPage {
    constructor(parent, id, cardData) {
        this.parent = parent
        this.id = id
    }

    renderData(item) {
        const product = new ProductComponent(this.pageRoot)
        product.render(item)
    }

     getData() {
        ajax.get(stockUrls.getStockById(this.id), (data) => {
            this.renderData(data);
        })
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                
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
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    addListeners() {
        const deleteBtn = document.getElementById('delete-btn');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => this.deleteProduct());
        }
    }

    deleteProduct() {
        if (!confirm('Вы действительно хотите удалить котенка? :(')) return;

        ajax.delete(stockUrls.removeStockById(this.id), () => {
            alert('Товар удалён');
            this.clickBack();
        }, (err) => {
            alert('Ошибка при удалении');
            console.error(err);
        });
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))

        this.getData()

        this.addListeners();
    }
}

