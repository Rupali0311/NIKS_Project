
    const cyberSecurityButton = document.getElementById('cyber-security')
    const otherServicesButton = document.getElementById('other-services')
    const cyberSecurityContainer = document.getElementById('cyber-security-container')
    const otherServicesContainer = document.getElementById('other-services-container')

    document.getElementById('cyber-security').addEventListener('click', () => {
        
        cyberSecurityContainer.classList.remove('right-slide-active');
        otherServicesContainer.classList.remove('left-slide-active');
        // document.querySelector('.other-services').style = 'opacity:1';
        // document.querySelector('.other-services').style = "z-index:10";
        // document.querySelector('.cyber-security').style="opacity:0"
    })

    otherServicesButton.addEventListener('click', () => {
        // console.log('It is working')
        // document.querySelector('.other-services').style = 'opacity:1';
        // document.querySelector('.other-services').style = "z-index:10";
        // document.querySelector('.cyber-security').style = "opacity:0"
        // document.querySelector('.cyber-security').style="z-index:0"
        cyberSecurityContainer.classList.add('right-slide-active');
        otherServicesContainer.classList.add('left-slide-active');
    })

