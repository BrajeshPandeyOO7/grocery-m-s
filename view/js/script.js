var form = document.getElementById("productForm");
form.addEventListener('submit', submitForm);
function submitForm(e) {
    e.preventDefault();
    const formData = document.forms['productForm']
    let name = formData['name'].value
    let category = formData['category'].value
    let brand = formData['brand'].value;
    let unit_price = formData['unit_price'].value
    let quantity_instock = formData['quantity_instock'].value
    let weight = formData['weight'].value
    let manufacture_date = formData['manufacture_date'].value
    let expiry_date = formData['expiry_date'].value
    
    fetch('http://localhost:4000/api/product', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            category,
            brand,
            unit_price,
            quantity_instock,
            weight,
            manufacture_date,
            expiry_date
        })
    }).then(res => res.json()).then(res => {
        if(res?.ok){
            getAllProductList()
        }
    })
    .catch(err => console.log(err.message))
 return false;
}

const createEle= (tag_name) => document.createElement(tag_name);
const getDateMY = (date) => `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getFullYear()}`

function getAllProductList() {
    fetch('http://localhost:4000/api/product', {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        const { ok, data } = res;
        const table = document.getElementById("table_body");
        console.log(table.childNodes.length)
        while (table.childNodes.length > 1) {
            table.removeChild(table.lastChild);
        }
        if(ok){
            data.forEach(item => {
                const tr = createEle('tr');
                const {
                    name,
                    category,
                    brand,
                    supplier_id,
                    unit_price,
                    quantity_instock,
                    weight,
                    manufacture_date,
                    expiry_date
                } = item;
                const td_name = createEle('td')
                td_name.textContent = name;
                tr.appendChild(td_name)

                const td_cat = createEle('td');
                td_cat.textContent = category;
                tr.appendChild(td_cat)

                const td_brand = createEle('td');
                td_brand.textContent = brand;
                tr.appendChild(td_brand);

                const td_price = createEle('td');
                td_price.textContent = unit_price;
                tr.appendChild(td_price)

                const td_quan = createEle('td');
                td_quan.textContent = quantity_instock;
                tr.appendChild(td_quan);

                const td_weight = createEle('td');
                td_weight.textContent = weight;
                tr.appendChild(td_weight)

                const td_mfc = createEle('td');
                td_mfc.textContent = getDateMY(new Date(manufacture_date))
                tr.appendChild(td_mfc);

                const td_expr = createEle('td');
                td_expr.textContent = getDateMY(new Date(expiry_date))
                tr.appendChild(td_expr);

                table.appendChild(tr)
            });
        }
    })
    .catch(err => console.log(err.message))
}

getAllProductList()
