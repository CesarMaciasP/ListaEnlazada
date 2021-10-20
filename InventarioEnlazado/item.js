export default class Item{

    constructor(code, name, quantity, cost){
      this.code=code
      this.name=name
      this.quantity=quantity
      this.cost=cost
      this.totalValue = cost * quantity
      this.next = null
    }

    infoHtml(){
      return `<div>
        <h3>${this.name}   #${this.code}</h3>
        <p>${this.quantity}   x   $${this.cost}</p>
        <p>TOTAL: ${this.totalValue}</p>
      </div>`;
    }
  }

