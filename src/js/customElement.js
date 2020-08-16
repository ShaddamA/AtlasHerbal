class navbar extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid container">
                    <a class="navbar-brand mr-5" href="index.html"><span class="text-dark-green font-weight-bold">ATLAS HERBAL</span></a>
                </div>
            </nav>
        `;
    }

}

class footerbar extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
            <p class="text-center">Copyright &copy; 2020, <span class="text-dark-green font-weight-bold">ATLAS HERBAL</span>. All Right Reserved</p>
        `;
    }
} 

customElements.define("header-navbar",navbar)
customElements.define("footer-bar", footerbar)