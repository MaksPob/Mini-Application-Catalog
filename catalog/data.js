!function () {
    var objFromServer = {    
        phones: [
            {  id:  'phoneOne', text: 'iPhone-x новый телефон 32GB', memory: '32GB',price: '10000',img: "iphone3.png"},  
            { id:  'phoneTwo',text: 'iPhone-x новый телефон 64GB',memory: '64GB',price: '16000',img: "iphone3.png"},
            {  id:  'phoneThree',text: 'iPhone-x новый телефон 128GB',memory: '128GB',price: '13000',img: "iphone3.png"
            }
        ],   
        laptops: [
            {   id:  'laptopOne',text: 'MacBook Pro новый 32GB',memory: '32GB',price: '10000',img: "mac.png"},
            {   id:  'laptopTwo',text: 'MacBook Pro новый 64GB',memory: '64GB', price: '32000',img: "mac.png"},
            {   id:  'laptopThree',text: 'MacBook Pro новый 128GB',memory: '128GB',price: '32000',img: "mac.png"},
        ],
        washers: [
            {   id:  'washerOne',text: 'Стиральная машина Samsung', memory: '32GB',price: '64000',img: "sam.png"},
            {   id:  'washerTwo',text: 'Стиральная машина Bosh',memory: '64GB',price: '128000',img: "sam.png"},
            {   id:  'washerThree',text: 'Стиральная машина Indesit', memory: '128GB', price: '10000',img: "sam.png"},
        ],
        computers: [
            {   id:  'computerOne',text: 'Компьютеры Samsung',memory: '32GB',price: '100000',img: "comp.png"},
            {   id:  'computerTwo', text: 'Компьютеры Bosh',memory: '64GB',price: '128000', img: "comp.png"},
            {   id:  'computerThree',text: 'Компьютеры Indesit',memory: '128GB',price: '64000',img: "comp.png"},
        ]
    };  
        window.App.obj = []; 
        window.App.newArr = [];
        window.App.obj.push(objFromServer);
        window.App.tapMenu = [];

        window.App.testLengthArr = function (arr) {
            if ( arr.length !== 0 ) {
                arr.splice(0,arr.length);
            } 
        }

        window.App.findSelectElement = function(checkMem,checkPr) {  
            window.App.testLengthArr(window.App.newArr);
            if ( typeof window.App.tapMenu === "undefined") {
                console.log('Нужно выбрать категорию с товаром');
                return;
            }
            window.App.tapMenu.forEach(function(element) {
                if ( checkMem !== "-" && checkPr !== "-") {
                    console.log(element);
                    var numIndexMem = element.memory.indexOf(checkMem);
                    var numIndexPr = element.price.indexOf(checkPr);
                    if ( numIndexMem !== -1 && numIndexPr !== -1 ) {
                        window.App.newArr.push(element);
                    }
                    return;
                }
                if (checkMem !== "-" || checkPr !== "-") {
                    if ( checkMem === "-" ) {
                        var numIndex = element.price.indexOf(checkPr);
                        if ( numIndex !== -1 ) {
                            window.App.newArr.push(element);
                        }    
                    }
                    if ( checkPr === "-" ) {
                        var numIndex = element.memory.indexOf(checkMem);
                        if ( numIndex !== -1 ) {
                            window.App.newArr.push(element);
                        }    
                    }
                } 
            });
        }

        window.App.searchInJson = function(objFromServer, valueFinField) {   
            window.App.testLengthArr(window.App.newArr);
            var copyObj = objFromServer;
            for (var key in copyObj) {
                console.log(copyObj[key]);
                copyObj[key].forEach(function(el) {
                    console.log(el);
                    var searchInText = el.text.indexOf(valueFinField),
                        searchInMemory = el.memory.indexOf(valueFinField),
                        searchInPrice = el.price.indexOf(valueFinField);
                    if ( searchInText !== -1 || searchInMemory !== -1 || searchInPrice !== -1 ) {
                        window.App.newArr.push(el); 
                    }
                   
                });
            }
        }
}();