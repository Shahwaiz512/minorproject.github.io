
//for responsive navbar hide and show.....

function showForm(){
    const  sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
    sidebar.style.transition = "all 0.2s";
}


    function hideForm(){
    const  sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

//for advertisment blur


function closeAdvertisement() {
    var advertisementWrapper = document.getElementById('advertisement-wrapper');
    advertisementWrapper.style.display = 'none';
    document.body.classList.remove('blur');
}

//for toggling the inforamtion ofo professors


function toggleInfo(elementId){
    var maininfo  =  document.querySelectorAll('.professor-detail > div');
    maininfo.forEach(function(div) {
        div.style.display = 'none'
    });
    var show = document.querySelector('.' + elementId);
    if(show){
        show.style.display = 'block'
    }
}