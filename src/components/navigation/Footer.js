import { connect } from "react-redux"
import Logo from '../../assets/img/Logo.png'

function Footer() {
    return (
        
        <footer class="footer bd-footer py-4 py-md-5 mt-0 bg-body-tertiary">
        <div class="container py-4 py-md-2 px-4 px-md-3 text-body-secondary">
          <div class="row">
            <div class="col-lg-3 mb-3">
                <a class="navbar-brand ms-4" href="#">
                <img src={Logo} alt="Company-Logo" width="40" height="40"></img>
                </a>
              <ul class="list-unstyled small">
                <li class="mb-2">Designed and built with all the love in the world by the <a href="/docs/5.3/about/team/">Bootstrap team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</li>
                <li class="mb-2">Code licensed <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
                <li class="mb-2">Currently v5.3.0-alpha1.</li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Links</h5>
              <ul class="list-unstyled">
                <li class="nav-link mb-2"><a href="/">Home</a></li>
                <li class="mb-2"><a href="/docs/5.3/">Docs</a></li>
                <li class="mb-2"><a href="/docs/5.3/examples/">Examples</a></li>
                <li class="mb-2"><a href="https://icons.getbootstrap.com/">Icons</a></li>
                <li class="mb-2"><a href="https://themes.getbootstrap.com/">Themes</a></li>
                <li class="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
                <li class="mb-2"><a href="https://cottonbureau.com/people/bootstrap">Swag Store</a></li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3">
              <h5>Guides</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="/docs/5.3/getting-started/">Getting started</a></li>
                <li class="mb-2"><a href="/docs/5.3/examples/starter-template/">Starter template</a></li>
                <li class="mb-2"><a href="/docs/5.3/getting-started/webpack/">Webpack</a></li>
                <li class="mb-2"><a href="/docs/5.3/getting-started/parcel/">Parcel</a></li>
                <li class="mb-2"><a href="/docs/5.3/getting-started/vite/">Vite</a></li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3">
              <h5>Projects</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="https://github.com/twbs/bootstrap">Bootstrap 5</a></li>
                <li class="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap 4</a></li>
                <li class="mb-2"><a href="https://github.com/twbs/icons">Icons</a></li>
                <li class="mb-2"><a href="https://github.com/twbs/rfs">RFS</a></li>
                <li class="mb-2"><a href="https://github.com/twbs/bootstrap-npm-starter">npm starter</a></li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3">
              <h5>Community</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="https://github.com/twbs/bootstrap/issues">Issues</a></li>
                <li class="mb-2"><a href="https://github.com/twbs/bootstrap/discussions">Discussions</a></li>
                <li class="mb-2"><a href="https://github.com/sponsors/twbs">Corporate sponsors</a></li>
                <li class="mb-2"><a href="https://opencollective.com/bootstrap">Open Collective</a></li>
                <li class="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5">Stack Overflow</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{

}) (Footer)