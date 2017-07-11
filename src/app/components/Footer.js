import React from 'react';


const footerStyle = {
  'padding-top': '40px',
  'padding-bottom': '40px',
  'margin-top': '100px',
  'color': '#777',
  'text-align': 'center',
  'border-top': '1px solid #e5e5e5'
};

class Footer extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <footer style={footerStyle} className="navbar-fixed-bottom">
        <div>
          <iframe style={{"border":"0px"}} src="https://ghbtns.com/github-btn.html?user=taurenk&repo=structure-challenge-webapp&type=star&count=true&size=small" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
          <iframe style={{"border":"0px"}} src="https://ghbtns.com/github-btn.html?user=taurenk&repo=structure-challenge-webapp&type=fork&count=true&size=small" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
        </div>
        <div>
          Version 1.0.1 By <a href="https://github.com/taurenk">Tauren Kristich </a>
        </div>
      </footer>
    );
  }
}


export default Footer;
