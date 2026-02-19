import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Tenacious Tech</h3>
                <p>Empowering minds through math, science & technology.</p>

                <a href="mailto:blogit@outlook.com">
                    Contact Us
                </a>

                <p className="copyright">
                    © {new Date().getFullYear()} Tenacious Tech. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
