/* bill.js */

export default class Bill {
  constructor() {
      this.amounts = [];
  }

  /** @param {string} amountStr */
  addAmount(amountStr) {
		this.amounts.push(Number(amountStr));
  }
	
	getCount() {
    return this.amounts.length;
  }

  getTotal() {
    return this.amounts.reduce((a, b) => (a + b));
    
  }

  getAverage() {
    return this.amounts.reduce((a, b) => (a + b)) / this.amounts.length;
  }
}