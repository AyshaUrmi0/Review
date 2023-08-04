document.getElementById('review-btn').addEventListener('click', function () {

    const myElement = document.getElementById('floatingTextarea2').value;
    


    const p=document.createElement('p');
    p.innerText=myElement;
    console.log(p.innerText);
    const parent=document.querySelector('#commnet-container');
    parent.appendChild(p);



    document.getElementById('floatingTextarea2').value='';

})