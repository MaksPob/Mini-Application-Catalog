(function () {
    var View = {
        init: function () {
            var menu = document.querySelector('.list'),    
                newPage = document.getElementById('newPage'),            
                btnFind = document.querySelector('.btn_find'),    
                searchInField = document.querySelector('.find'),    
                selects = document.querySelector('.selects'),
                navbar = document.querySelector('.findText'),
                memoryCheck = document.querySelector('.memoryCheck'),
                priceCheck = document.querySelector('.priceCheck');
            
                menu.addEventListener('click', function (e) {
                    var target = e.target;
                    while (target != this) {
                        if (target.tagName == 'LI') {
                            View.workWithMenu(target);
                        return;
                        }
                        target = target.parentNode;
                    }
                });
                
                btnFind.addEventListener('click', function (e) {
                    if ( searchInField.value === '' ) {
                        return;
                    }
                    if ( newPage.children.length !== 0 ) {
                        View.deleteLastElem(newPage);
                    }
                    var valueFinField = searchInField.value;
                    window.App.searchInJson(window.App.obj[0],valueFinField);
                    View.parseArr(window.App.newArr);
                });
                memoryCheck.addEventListener('change', function (e) {
                    changeSelectsEvents();
                });
                priceCheck.addEventListener('change', function (e) {
                   changeSelectsEvents();
                });
                navbar.addEventListener('mouseover', function (e) {
                    console.log(e.target);
                    if ( e.target.className === 'find' || e.target.className === 'btn_find') {
                        var hideDiv = e.target.offsetParent.children[1].children[3];
                        hideDiv.style.display = 'none';
                    } 
                });
                navbar.addEventListener('mouseout', function (e) {
                    selects.style.display = 'block';
                });

                function changeSelectsEvents() {
                    searchInField.value = '';
                    var checkMem = memoryCheck.value ;
                    var checkPr = priceCheck.value ;
                    if ( checkMem === "-" && checkPr === "-") {
                        View.deleteLastElem(newPage);
                        View.parseArr(window.App.tapMenu);
                    } else {
                        console.log(checkMem + ':' + checkPr);
                        View.workWithSelects(checkMem, checkPr);  
                        View.parseArr(window.App.newArr);
                    }
                }
        },

        workWithMenu: function(node) {         
            var mainTag = document.getElementsByTagName('main')[0];    
                mainTag.style.display = 'none';
                if ( node.outerText === 'Телефоны' ) {
                    this.deleteLastElem(newPage);
                    window.App.tapMenu = window.App.obj[0].phones;   
                    this.parseArr(window.App.tapMenu);
                }
                if ( node.outerText === 'Ноутбуки') {
                    this.deleteLastElem(newPage);
                    window.App.tapMenu = window.App.obj[0].laptops;
                    this.parseArr(window.App.tapMenu);
                }
                if ( node.outerText === 'Бытовая техника') {
                    this.deleteLastElem(newPage);
                    window.App.tapMenu = window.App.obj[0].washers;
                    this.parseArr(window.App.tapMenu);
                }
                if ( node.outerText === 'Компьютеры') {
                    this.deleteLastElem(newPage);
                    window.App.tapMenu = window.App.obj[0].computers;
                    this.parseArr(window.App.tapMenu);
                }
        },

        workWithSelects: function(checkMem,checkPr) {      
            var mainTag = document.getElementsByTagName('main')[0];
                mainTag.style.display = 'none';
                newPage.style.display = 'block';
                    View.deleteLastElem(newPage);
                    window.App.findSelectElement(checkMem,checkPr);   

        },
        
        makeNewDOM: function(element) {      
            var mainTag = document.getElementsByTagName('main')[0];
                mainTag.style.display = 'none';
                var newDiv = document.createElement('div');
                newDiv.setAttribute('class', element.id);
                var newPText = document.createElement('p'),
                    newImg = document.createElement('img');
                newImg.setAttribute('src', element.img);
                newImg.setAttribute('width', '300px');
                newImg.setAttribute('height', '150px');
                newPText.innerHTML = element.text + '  Память: '+ element.memory +  ' Цена: ' + element.price;
                newDiv.appendChild(newPText);
                newDiv.appendChild(newImg);
                newPage.appendChild(newDiv);
        },

        deleteLastElem: function(newPage) {    
                if ( newPage.children.length === 0 ) {
                    return;
                }
                var i = 0,
                    elem = newPage.children;
                for (;i < elem.length; i += 1) {
                    var lastElem = elem[i];
                        lastElem.remove();
                    if (newPage.children !== 0) {
                        View.deleteLastElem(newPage);
                    }
                }
        },
         parseArr: function(tapMenu) { 
            tapMenu.forEach(function(tapElem) {
                View.makeNewDOM(tapElem);
            });
        }
        
    };
    document.addEventListener('DOMContentLoaded', function () {   
        View.init();
    });

}());
