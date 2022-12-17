import React from 'react';

const Footer = () => {
    return (
      <footer className="py-6 px-24 text-gray-200 border-t border-gray-600">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4 lg:items-center">
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <a rel="noopener noreferrer" href="#">
                FAQ
              </a>
              <a rel="noopener noreferrer" href="#">
                Account
              </a>
              <a rel="noopener noreferrer" href="#">
                Investor Relations
              </a>
              <a rel="noopener noreferrer" href="#">
                Using with Preprocessors
              </a>
              <a rel="noopener noreferrer" href="#">
                Ways to watch
              </a>
              <a rel="noopener noreferrer" href="#">
                Privacy
              </a>
              <a rel="noopener noreferrer" href="#">
                Corporate Information
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4 lg:items-center">
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Speed Test
              </a>
              <a rel="noopener noreferrer" href="#">
                Only on Netflix
              </a>
              <a rel="noopener noreferrer" href="#">
                Help Center
              </a>
              <a rel="noopener noreferrer" href="#">
                Media Center
              </a>
              <a rel="noopener noreferrer" href="#">
                Jobs
              </a>
              <a rel="noopener noreferrer" href="#">
                Terms of Use
              </a>
              <a rel="noopener noreferrer" href="#">
                Cookie Preferences
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4 lg:items-center">
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Contact Us
              </a>
              <a rel="noopener noreferrer" href="#">
                Legal Notices
              </a>
              <a rel="noopener noreferrer" href="#">
                Breakpoints
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4 lg:items-center">
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <a rel="noopener noreferrer" href="#">
                GitHub
              </a>
              <a rel="noopener noreferrer" href="#">
                Discord
              </a>
              <a rel="noopener noreferrer" href="#">
                Twitter
              </a>
              <a rel="noopener noreferrer" href="#">
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <span className="text-gray-600">
            Netflix
          </span>
        </div>
      </footer>
    );
};

export default Footer;