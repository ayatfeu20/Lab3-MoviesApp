import React from 'react';


const Footer = () => {
  
  return (
    <footer>
    <div className="footer-container">
    <div className="row align-items-center justify-content-center Footer-bottom">
        <p className="footer-brand">
          &copy;{new Date().getFullYear()} | Made with ❤️  | by Ayat Mannaa
        </p>
      </div>
      
      
    </div>
</footer>
  );
};

export default Footer;