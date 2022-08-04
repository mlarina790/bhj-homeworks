let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.responseType = "json";
xhr.send();

const itemsBlock = document.getElementById('items');
const loader = document.getElementById('loader');

function loadItems() {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.toggle('loader_active');
        let regValue = xhr.response;
        for (const key in regValue.response.Valute) {
            if (Object.hasOwnProperty.call(regValue.response.Valute, key)) {
                const element = regValue.response.Valute[key];
                let charCode = element.CharCode;
                let value = element.Value;
                let newItemBlock = document.createElement('div');
                newItemBlock.classList.add('item');
                newItemBlock.innerHTML =
                    `           
                <div class="item__code">
                ${charCode}
                </div>
                <div class="item__value">
                ${value}
                </div>
                <div class="item__currency">
                руб.
                </div>            
                `
                itemsBlock.appendChild(newItemBlock);

            }
        }
    };
}

xhr.addEventListener('readystatechange', loadItems);