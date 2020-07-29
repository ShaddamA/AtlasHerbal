class navbar extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid container">
                    <a class="navbar-brand mr-5" href="index.html"><span class="text-dark-green font-weight-bold">ATLAS HERBAL</span></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li class="nav-item mr-5">
                                <a class="nav-link active" aria-current="page" href="reseller.html">Reseller</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link active" href="#contact">Kontak</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link active" href="#about">Tentang Kami</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link active" href="#">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
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