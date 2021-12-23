
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzQUFoEQGoNHPkuhi7pMylgJoLPro-uLymLbN4FYakMgYDY-AdQNh6KXXkm2lCoMo-x/exec';
        const form = document.forms['web-standard'];
        const btnSubmit = document.querySelector('.btn-submit');
        const btnLoading = document.querySelector('.btn-loading');
        const alert = document.querySelector('.alert');
        const secDet = document.querySelectorAll('.section-detail');
        const secBtn = document.querySelectorAll('.sec-btn');
        const secDetTgl = document.querySelectorAll('.sec-det-tgl');
        const body = document.getElementsByTagName('body')[0];
            
        body.setAttribute('class', 'for-overflow-hidden');
        
        form.addEventListener('submit', e => {
          e.preventDefault();
          btnLoading.classList.toggle('d-none');
          btnSubmit.classList.toggle('d-none');
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                btnLoading.classList.toggle('d-none');
                btnSubmit.classList.toggle('d-none');
                alert.classList.toggle('d-none');
                form.reset();     
                console.log('Success!', response)
            })
            .catch(error => console.error('Error!', error.message))
        })

        function overDownToggle(i){
            i.classList.toggle('clicked');
            body.classList.toggle('hide-scroll');
        }
        function detailEvents(a, b, c){
            a.addEventListener('click', b);
            secDetTgl[c].addEventListener('click', b);
        }

        function detailExc(a, b, c){
            function home(){
                overDownToggle(a);
            }
            detailEvents(b ,home, c);
        }

        for(let i = 0; i < secDet.length; i++){
            detailExc(secDet[i], secBtn[i], i);
        }



        const termBtn = document.querySelector('.term-btn');
        const termList = document.querySelector('.term-list');
        const myCheckbox = document.querySelector('.my-checkbox');

        termBtn.addEventListener('click', function(){
            termList.classList.toggle('term-list-clicked');
        });

        function isChecked(){
            if(myCheckbox.checked){
                btnSubmit.classList.remove('btn-gone');
            } else {
                btnSubmit.classList.add('btn-gone');
            }
        }