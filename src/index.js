import './assets/style/style.css'

window.addEventListener('click', async (e) => {
    if (e.target.id === 'submit') {
        try {
            await fetch('https://api-knitwear.up.railway.app/checkout', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    fio: document.getElementById('checkoutFIO').value,
                    email: document.getElementById('checkoutEmail').value,
                    phone: document.getElementById('checkoutPhone').value,
                    com: document.getElementById('checkoutCom').value,
                    service: window.location.search.replace('?service=', '')
                })
            })

            window.location.href = '/checkout-submit.html'
            
        } catch (er) {
            console.error(er)
        }
    }
})