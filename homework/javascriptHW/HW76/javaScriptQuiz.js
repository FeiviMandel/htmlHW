(function () {
    'use strict';
    class Item {
        constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    }
    class Order {
        constructor(customer, address, items) {
            this.customer = customer;
            this.address = address;
            this.items = items;
            this.totalOrder = 0;
        }
        get total() {
            for (let index = 0; index < this.items.length; index++) {
                this.totalOrder += this.items[index].price * this.items[index].quantity;
            }
            return this.totalOrder;
        }
        br() {
            let br = document.createElement("br");
            document.body.append(br);
        }
        print() {
            document.body.append(`Customer: ${this.customer} `);
            this.br();
            document.body.append(`Address: ${this.address}`);
            this.br();
            document.body.append(`total: ${this.total}`);
            this.br();
            this.br();
            document.body.append('Items:');
            for (let index = 0; index < this.items.length; index++) {
                this.br();
                document.body.append(`Item: ${this.items[index].name} `);
                this.br();
                document.body.append(`Quantity: ${this.items[index].quantity}`);
                this.br();
                document.body.append(`Price: ${this.items[index].price}`);
                this.br();
            }
            this.br();
        }
    }
    fetch('javaScriptQuiz.json')
        .then(r => {
            if (!r.ok) {
                throw new Error(`${r.status} ${r.statusText}`);
            }
            return r.json();
        })
        .then(orders => {
            orders.forEach(order => {
                let orderItems = [];
                order.items.forEach(item => {
                    const itm = new Item(item.item, item.total / item.quantity, item.quantity);
                    orderItems.push(itm);
                });
                let o = new Order(order.customer, order.address, orderItems);
                o.print();
            });
        })
        .catch(err => console.error(err));
})();