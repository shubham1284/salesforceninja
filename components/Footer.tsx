export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <a href="#home" className="footer-logo">
            Cloud<span>Force</span>
          </a>
          <p className="footer-tagline">
            Premium Salesforce solutions by a certified developer for businesses that demand
            quality, security, and reliability in their Salesforce org.
          </p>
        </div>
        <div>
          <div className="footer-col-title">Products</div>
          <ul className="footer-links">
            <li><a href="#">LWC Components</a></li>
            <li><a href="#">SSO Integrations</a></li>
            <li><a href="#">Automation Tools</a></li>
            <li><a href="#">Data Utilities</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a
                href="https://cube8441-dev-ed.develop.my.site.com/CodeWithShubham/account-intelligence"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </li>
            <li><a href="#">AppExchange</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 CloudForce. All rights reserved.</div>
        <div className="footer-cert">Salesforce AppExchange Certified</div>
      </div>
    </footer>
  );
}
