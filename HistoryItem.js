export default class HistoryItem{
    constructor(original, discount, final){
        this.original = original;
        this.discount = discount;
        this.final = final;
    }
}

global.historyList = [];
global.SampleVar = 'This is Global Variable.';