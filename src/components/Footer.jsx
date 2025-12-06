import React from 'react';
import MyContainer from './container/MyContainer';

const Footer = () => {
    return (
      <div>
        <footer className="bg-gray-900 text-white py-8 px-4">
          <MyContainer className={"text-center"}>
            <p className="mb-4">&copy; 2024 Your Name. All rights reserved.</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/maimuna03134/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                GitHub
              </a>
              <a
                href="http://www.linkedin.com/in/raikatun-naim-webdev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/share/1EvtWr2QGL/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                Facebook
              </a>
            
            </div>
          </MyContainer>
        </footer>
      </div>
    );
};

export default Footer;