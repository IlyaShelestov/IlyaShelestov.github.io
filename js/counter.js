var likeCount = document.querySelector('#likeCount')
var dislikeCount = document.querySelector('#dislikeCount')

var likeCount2 = document.querySelector('#likeCount2');
var dislikeCount2 = document.querySelector('#dislikeCount2');

var likeCount3 = document.querySelector('#likeCount3');
var dislikeCount3 = document.querySelector('#dislikeCount3');


/* FIRST  */
function count(){
    likeCount.value = parseInt(likeCount.value) + 1
}

function count1(){
    dislikeCount.value = parseInt(dislikeCount.value) + 1
}


/* Second */
function count2(){
    likeCount2.value = parseInt(likeCount2.value) + 1
}

function count3(){
    dislikeCount2.value = parseInt(dislikeCount2.value) + 1
}


/* Third */
function count4(){
    likeCount3.value = parseInt(likeCount3.value) + 1
}

function count5(){
    dislikeCount3.value = parseInt(dislikeCount3.value) + 1
}


const buttons = document.querySelectorAll("#toastbtn");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        var toastElList = [].slice.call(document.querySelectorAll('.toast'));
        var toastList = toastElList.map(function(toastEl) {
            return new bootstrap.Toast(toastEl);
        });
        toastList.forEach(toast => toast.show());
    });
});

const more_info_buttons = document.querySelectorAll(".add_info");
const title = document.querySelector("#exampleModal h5");
const description = document.querySelector("#exampleModal p");

for (let i = 0; i < more_info_buttons.length; i++) {
    more_info_buttons[i].addEventListener("click", function() {
        if (i === 0) {
            title.innerHTML = "SINGLE ROOM";
            description.innerHTML = "A single room in a hotel is designed to accommodate one guest. It typically includes a single bed and is tailored for solo travelers or individuals seeking private accommodations. Single rooms usually come equipped with standard amenities such as a private bathroom, a work desk, and other essentials for a comfortable stay.";
        }
        else if (i === 1) {
            title.innerHTML = "DOUBLE ROOM";
            description.innerHTML = "A double room in a hotel is intended for two guests and generally features a double or queen-sized bed. It's ideal for couples or two individuals sharing a room. Double rooms commonly offer amenities suitable for two occupants, including a private bathroom, storage space, and sometimes additional seating areas or a small table.";
        }
        else {
            title.innerHTML = "TWIN ROOM";
            description.innerHTML = "A twin room in a hotel is configured with two separate beds, often twin or single-sized, designed to accommodate two individuals who prefer their own sleeping space. It's perfect for friends, colleagues, or family members traveling together but wishing to have separate beds. Twin rooms typically come with similar amenities to double rooms, such as a private bathroom and other standard hotel facilities.";
        }
    })
}

document.addEventListener('keypress', function(event) {
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));

    if (document.getElementById('exampleModal').classList.contains('show')) {
        return;
    }

    if (event.key === 's') {
        title.innerHTML = "SINGLE ROOM";
        description.innerHTML = "A single room in a hotel is designed to accommodate one guest. It typically includes a single bed and is tailored for solo travelers or individuals seeking private accommodations. Single rooms usually come equipped with standard amenities such as a private bathroom, a work desk, and other essentials for a comfortable stay.";
        modal.show();
    } 
    else if (event.key === 'd') {
        title.innerHTML = "DOUBLE ROOM";
        description.innerHTML = "A double room in a hotel is intended for two guests and generally features a double or queen-sized bed. It's ideal for couples or two individuals sharing a room. Double rooms commonly offer amenities suitable for two occupants, including a private bathroom, storage space, and sometimes additional seating areas or a small table.";
        modal.show();
    }
    else if (event.key === 't') {
        title.innerHTML = "TWIN ROOM";
        description.innerHTML = "A twin room in a hotel is configured with two separate beds, often twin or single-sized, designed to accommodate two individuals who prefer their own sleeping space. It's perfect for friends, colleagues, or family members traveling together but wishing to have separate beds. Twin rooms typically come with similar amenities to double rooms, such as a private bathroom and other standard hotel facilities.";
        modal.show();
    }
});