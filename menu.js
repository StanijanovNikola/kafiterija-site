
// Selektovanje inputa i liste
const productsSorting = document.querySelector('.productsInput');
const dropdown = document.querySelector('.dropdownProducts');
const dropdownItems = document.querySelectorAll('.dropdownProducts li');


const sortingInput = document.querySelector('.sortingInput');
const dropdownSort = document.querySelector('.dropdownSortBy');
const dropdownSortbyItems = document.querySelectorAll('.dropdownSortBy li');


// Prikazivanje liste kada je fokus na inputu
productsSorting.addEventListener('click', () => {
    dropdown.classList.remove('hidden');
    dropdown.classList.add('visible');
});

sortingInput.addEventListener('click', () => {
    dropdownSort.classList.remove('sortHidden');
    dropdownSort.classList.add('sortVisible');
})


// Sakrivanje liste kada se klikne van nje
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && e.target !== productsSorting) {
        dropdown.classList.remove('visible');
        dropdown.classList.add('hidden');
    } 
    if(!dropdownSort.contains(e.target) && e.target !== sortingInput) {
        dropdownSort.classList.remove('sortVisible');
        dropdownSort.classList.add('sortHidden')
    }
});

// Dodavanje vrednosti u input kada se klikne na stavku liste
dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        productsSorting.value = item.dataset.value; // Uzimanje vrednosti iz data-value
        dropdown.classList.remove('visible');
        dropdown.classList.add('hidden');
    });
});

dropdownSortbyItems.forEach(item => {
    item.addEventListener('click', () => {
        sortingInput.value = item.dataset.value;
        dropdownSort.classList.remove('sortVisible');
        dropdownSort.classList.add('sortHidden')
    })
})






// for(let i = 0; i <= 15; i++) {
//     productParentsItems[i].classList.add('productDisplay');
    
// }

// paginationPages.forEach(page => {
//     page.addEventListener('click', function(event) {
//         event.preventDefault();
//         const pageValue = event.target.getAttribute("data-value");
//         if(pageValue == nextPage || pageValue == "next") {
//             console.log("next page please!")
//             prevPage++;
//             nextPage++;
//             console.log(prevPage, nextPage)
//             for(let i = 0; i <= 15; i++) {
//                 productParentsItems[i].classList.remove('productDisplay');
//                 productParentsItems[i].classList.add('productHide');
//             }
//             for(let i = 15; i <= 30; i++) {
//                 productParentsItems[i].classList.add('productDisplay');
//             }

//         }
//     })
// })

const productParents = document.querySelectorAll('.product'); //sve kartice
const paginationPages = document.querySelectorAll('.pageLink'); //svi brojevi strana ukljucujuci i prev i next
const paginationParent = document.querySelector("pagination");
const productParentsItems = Array.from(productParents);
const totalItems = productParentsItems.length;




class Item {
    constructor(id, name, price, imagePath, strenght, type) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imagePath = imagePath;
        this.strenght = strenght;
        this.type = type;
    }
}

const items = [
    new Item(0, "Coffee Machiatto", 2, "images/iceCoffe.jpg", 3, "Coffee"),
    new Item(1, "asdsdg", 3.5, "images/iceCoffe.jpg", 1, "Coffee"),
    new Item(2, "Cappuccino", 3.8, "images/iceCoffe.jpg", 2, "Coffee"),
    new Item(3, "Juice", 4.2, "images/iceCoffe.jpg", 6, "Juices"),
    new Item(4, "Juice", 3.2, "images/iceCoffe.jpg", 5, "Juices"),
    new Item(5, "Juice", 2.5, "images/iceCoffe.jpg", 4, "Juices"),
    new Item(6, "Juice", 3.7, "images/iceCoffe.jpg", 7, "Juices"),
    new Item(7, "Cold Brew", 4.0, "images/iceCoffe.jpg", 5, "Coffee"),
    new Item(8, "Iced Coffee", 3.0, "images/iceCoffe.jpg", 2, "Coffee"),
    new Item(9, "Turkish Coffee", 3.5, "images/iceCoffe.jpg", 1, "Coffee"),
    new Item(10, "Matcha Latte", 4.5, "images/teaMain.jpg", 3, "Tea"),
    new Item(11, "123546", 3.8, "images/teaMain.jpg", 8, "Tea"),
    new Item(12, "Chai Latte", 4.0,"images/teaMain.jpg", 9, "Tea"),
    new Item(13, "Affogato", 5.0, "images/teaMain.jpg", 10, "Tea"),
    new Item(14, "Irish Coffee", 6.5, "images/teaMain.jpg", 4, "Tea"),
    new Item(15, " 123467", 4.5, "images/teaMain.jpg", 5, "Tea"),
    new Item(16, "Hot Chocolate", 3.8, "images/teaMain.jpg", 5, "Tea"),
    new Item(17, "Chai Latte", 4.0, "images/teaMain.jpg", 3, "Tea"),
    new Item(18, "Chockolate", 5.0, "images/teaMain.jpg", 2, "Tea"),
    new Item(19, "Irish Coffee", 6.5, "images/teaMain.jpg", 2, "Tea"),
    new Item(20, "1123566", 4.5, "images/ChockolateDropdown.png", 1, "Sweets"),
    new Item(21, "Hot Chocolate", 3.8, "images/ChockolateDropdown.png", 7, "Sweets"),
    new Item(22, "Chai Latte", 4.0, "images/ChockolateDropdown.png", 6, "Sweets"),
    new Item(23, "rtguhftgj", 5.0, "images/ChockolateDropdown.png", 7, "Sweets"),
    new Item(24, "Irish Coffee", 6.5, "images/ChockolateDropdown.png", 5, "Sweets"),
    new Item(25, "Espresso", 2, "images/ChockolateDropdown.png", 4, "Sweets"),
    new Item(26, "Latte", 3.5, "images/ChockolateDropdown.png", 3, "Sweets"),
    new Item(27, "Cappuccino", 3.8, "images/ChockolateDropdown.png", 3, "Sweets"),
    new Item(28, "Mocha", 4.2, "images/ChockolateDropdown.png", 3, "Sweets"),
    new Item(29, "Juice", 3.2, "images/ChockolateDropdown.png", 5, "Juices"),
    new Item(30, "Juice", 2.5, "images/JuicesDropdown.jpg", 2, "Juices"),
    new Item(31, "Juice ", 3.7, "images/JuicesDropdown.jpg", 1, "Juices"),
    new Item(32, "Juice", 4.0, "images/JuicesDropdown.jpg", 8, "Juices"),
    new Item(33, "Juice", 3.0, "images/JuicesDropdown.jpg", 9, "Juices"),
    new Item(34, "Juice", 3.5, "images/JuicesDropdown.jpg", 1, "Juices"),
    new Item(35, "Juice", 4.5, "images/JuicesDropdown.jpg", 2, "Juices"),
    new Item(36, "Juice", 3.8, "images/JuicesDropdown.jpg", 2, "Juices"),
    new Item(37, "Juice", 4.0,"images/JuicesDropdown.jpg", 2, "Juices"),
    new Item(38, "Coffee", 3.9, "images/iceCoffe.jpg", 7, "Coffee"),
    new Item(39, "Coffee", 5, "images/iceCoffe.jpg", 4, "Coffee"),
    new Item(40, "Coffee", 3.9, "images/iceCoffe.jpg", 2, "Coffee"),
    new Item(41, "Coffee", 3.5, "images/iceCoffe.jpg", 7, "Coffee"),
    new Item(42, "Coffee", 2, "images/iceCoffe.jpg", 1, "Coffee"),
    new Item(43, "Coffee", 3.1, "images/iceCoffe.jpg", 5, "Coffee"),
    new Item(44, "Coffee", 3.9, "images/iceCoffe.jpg", 7, "Coffee"),
    new Item(45, "Coffee", 2.6, "images/iceCoffe.jpg", 4, "Coffee"),
    new Item(46, "Coffee", 3, "images/iceCoffe.jpg", 7, "Coffee"),
    new Item(47, "Coffee", 1, "images/iceCoffe.jpg", 1, "Coffee"),
    new Item(48, "Juice", 2.5, "images/JuicesDropdown.jpg", 2, "Juices"),
    new Item(49, "Juice ", 3.7, "images/JuicesDropdown.jpg", 1, "Juices"),
    new Item(50, "Juice", 4.0, "images/JuicesDropdown.jpg", 8, "Juices"),
    new Item(51, "Juice", 3.0, "images/JuicesDropdown.jpg", 9, "Juices"),
    new Item(52, "Juice", 3.5, "images/JuicesDropdown.jpg", 1, "Juices"),
    new Item(53, "Juice", 4.5, "images/JuicesDropdown.jpg", 2, "Juices"),
    new Item(54, "Juice", 3.8, "images/JuicesDropdown.jpg", 2, "Juices"),
    new Item(55, "Juice", 4.0,"images/JuicesDropdown.jpg", 2, "Juices"),
    new Item(56, "Juice", 2.5, "images/JuicesDropdown.jpg", 2, "Juices"),
    new Item(57, "Juice ", 3.7, "images/JuicesDropdown.jpg", 1, "Juices"),
    new Item(58, "Juice", 4.0, "images/JuicesDropdown.jpg", 8, "Juices"),
    new Item(59, "Juice", 3.0, "images/JuicesDropdown.jpg", 9, "Juices"),
    new Item(60, "Juice", 3.5, "images/JuicesDropdown.jpg", 1, "Juices"),
    new Item(61, "Juice", 4.5, "images/JuicesDropdown.jpg", 2, "Juices"),
    new Item(62, "Juice", 3.8, "images/JuicesDropdown.jpg", 2, "Juices"),
    new Item(63, "Juice", 4.0,"images/JuicesDropdown.jpg", 2, "Juices"),
]

let pagesNodeList = document.querySelectorAll('.pages');
let allPagesNodeList = document.querySelectorAll('.pageItem');
const allPages = Array.from(allPagesNodeList);
const pages = Array.from(pagesNodeList);


const totalProductItems = [...items];

const productsContainer = document.querySelector('.productsParent');
productsContainer.innerHTML = '';


function paginator(items, pageSize, pageNumber) {
    productsContainer.innerHTML = ''
    
    let start = pageNumber * pageSize;
    let end = start + pageSize
    let selectedItems = items.slice(start, end);

    selectedItems.forEach(item => {
        const productDiv = document.createElement('div');
        
    
        productDiv.innerHTML = `
        <div class="productImgParent">
                <img src="${item.imagePath}" alt="${item.name}" class="productImg">
            </div>
            <div class="productNameParent">
                <h4 class="productName">${item.name}</h4>
            </div>
            <div class="priceAndStrenghtOfItem">
                <h4>Price: $${item.price}</h4>
                <h4>Strenght: ${item.strenght} / 10</h4>
            </div>
        `
        productDiv.classList.add('product');
        
        productsContainer.appendChild(productDiv)
    })

}

paginator(items, 12, 0);



let activeItems = [...items];
let currentPage = 0;

let sortedItems = [...items];




function creatingPaginationPages(totalItems, itemsPerPage = 12) {
    const paginationParent = document.querySelector(".pagination");
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let html = "";
    if(totalPages > 1) {
        html += `
        <li class="pageItem previousPage">
            <a href="#" class="pageLink" data-value="prev">Prev</a>
        </li>
        
    `;
    }
    
    

    // Početak HTML-a (prev dugme + wrapper)
    
    html+= `<div class="pages">`;

    // Dinamičko pravljenje brojeva stranica
    for (let i = 1; i <= totalPages; i++) {
        html += `
            <li class="pageItem currentPage">
                <a href="#" class="pageLink" data-value="${i}">${i}</a>
            </li>
        `;
    }

    html += `</div>`;

    // Zatvaranje wrappera + next dugme
    if(totalPages > 1) {
    html += `
        <li class="pageItem nextPage">
            <a href="#" class="pageLink" data-value="next">Next</a>
        </li>
    `;
    }

    paginationParent.innerHTML = html;
}



function updatePrevNextButtons() {
    const prevBtn = document.querySelector('.previousPage');
    const nextBtn = document.querySelector('.nextPage');
    const totalPages = Math.ceil(activeItems.length / 12);

    if (prevBtn) {
        if (currentPage === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = '';
        }
    }

    if (nextBtn) {
        if (currentPage === totalPages - 1) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = '';
        }
    }
}

function setupPaginationEventListeners() {
    const paginationPages = document.querySelectorAll('.pageLink');
    const totalPages = Math.ceil(activeItems.length / 12);

    paginationPages.forEach(page => {
        page.addEventListener('click', (event) => {
            event.preventDefault();
            let pageValue = event.target.getAttribute("data-value");

            if (pageValue === "prev" && currentPage > 0) {
                currentPage--;
            } else if (pageValue === "next" && currentPage < totalPages - 1) {
                currentPage++;
            } else if (!isNaN(pageValue)) {
                currentPage = parseInt(pageValue) - 1;
            }

            paginator(activeItems, 12, currentPage);

            document.querySelectorAll('.pageLink').forEach(link => {
                link.classList.remove("currentPageActive");
            });

            paginationPages.forEach(page => {
                const value = page.getAttribute("data-value");
                if (!isNaN(value) && parseInt(value) === currentPage + 1) {
                    page.classList.add("currentPageActive");
                }
            });
            updatePrevNextButtons();
          
        });
    });
}

// Obriši prethodno aktivnu klasu
document.querySelectorAll('.currentPage').forEach(item => {
    item.classList.remove('active');
});

// Dodaj aktivnu klasu novoj stranici
document.querySelector(`.currentPage a[data-value="${currentPage + 1}"]`)
    ?.parentElement.classList.add('active');

creatingPaginationPages(70);

setupPaginationEventListeners();

function filterByType(items, type) {
    return items.filter(item => item.type === type);
}

// Testiranje: Prikaz samo kafa
const coffeeItems = filterByType(sortedItems, "Coffee");

// Testiranje: Prikaz samo čajeva
const teaItems = filterByType(sortedItems, "Tea");


// Testiranje: Prikaz samo čokolada
const chocolateItems = filterByType(sortedItems, "Sweets");


const sortedByHighestPrice = items.slice().sort((a, b) => b.price - a.price);
const sortedByLowestPrice = items.slice().sort((a, b) => a.price - b.price)
const sortedByStrenght = items.slice().sort((a, b) => b.strenght - a.strenght)


const sortingByType = document.querySelectorAll(".dropdownProducts");


const sortingByTypeList = Array.from(sortingByType)
sortingByTypeList.forEach(type => {
    type.addEventListener('click', (item) =>{
        item.preventDefault();
        let value = item.target.getAttribute("data-value")
        if(value == "Chockolate") {
            activeItems = filterByType(sortedItems, "Sweets");
        } else if(value == "Coffee") {
            activeItems = filterByType(sortedItems, "Coffee");
        } else if(value == "Tea") {
            activeItems = filterByType(sortedItems, "Tea");
        } else if (value == "Juices") {
            activeItems = filterByType(sortedItems, "Juices");
        } else {
            activeItems = items;
        }

   
        paginator(activeItems, 12, currentPage);
        const totalPages = Math.ceil(activeItems.length / 12);
        console.log(activeItems.length, totalPages);
        const realActiveItems = activeItems.length;
        
        creatingPaginationPages(realActiveItems, 12);
        setupPaginationEventListeners();
        
    })
})



const dropdownSortBy = document.querySelectorAll('.dropdownSortBy');

const dropdownSortByList = Array.from(dropdownSortBy);


paginationPages.forEach(page => {
    page.addEventListener('click', (event) => {
        
        event.preventDefault();
        let pageValue = event.target.getAttribute("data-value");
      
        if (pageValue === "prev" && currentPage > 0) {
            currentPage--; 
        } else if (pageValue === "next" && currentPage < totalPages - 1) {
            currentPage++;
        } else if (!isNaN(pageValue)) {
            currentPage = parseInt(pageValue) - 1;
        }

        paginator(activeItems, 12, currentPage);
        
      
    });
});


paginationPages.forEach(element => {
    // Hover efekat — ali samo ako element NIJE aktivan
    element.addEventListener('mouseover', (e) => {
        if (!e.target.classList.contains('active-page')) {
            e.target.classList.add('hoverPaginatorPages');
        }
    });

    element.addEventListener('mouseout', (e) => {
        e.target.classList.remove('hoverPaginatorPages');
    });

    // Klik na stranicu
    element.addEventListener('click', (e) => {
        // Ukloni "active-page" sa svih
        paginationPages.forEach(el => el.classList.remove('active-page'));

        // Dodaj "active-page" samo na kliknutu
        e.target.classList.add('active-page');
    });
});




dropdownSortByList.forEach(sortingItem => {
    sortingItem.addEventListener('click', (sortByItem) => {
        sortByItem.preventDefault();
        let sortByValue = sortByItem.target.getAttribute("data-value");
        if(sortByValue == "Higher price first") {
            activeItems = activeItems.sort((a, b) => b.price - a.price);
        } else if(sortByValue == "Lower Price First") {
            activeItems = activeItems.sort((a, b) => a.price - b.price);
        } else if(sortByValue == "Strenght") {
            activeItems = activeItems.sort((a, b) => b.strenght - a.strenght);
            if(activeItems > 12 && currentPage === 0) {
              
            }
        }
        currentPage = 0;
        
        paginator(activeItems, 12, 0);
        
        
    })
})



/// slideshow cards ////