import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="widget widget_newsletter">
                <h4>Newsletter</h4>
                <div className="desc">
                  <p>Subscribe now if you want to recieve updates and news via email.</p>
                </div>
                <form id="subscribe-form" action="http://xgio.net/winters/POST">
                  <div className="form-item form-remove">
                    <input type="text" id="subscribe-email" placeholder="Enter your email"/>
                  </div>
                  <div className="form-actions form-remove">
                    <input type="submit" id="subscribe-button" placeholder="Send"/>
                  </div>
                  <div className="subscribe-status"></div>
                </form>
              </div>
            </div>
            <div className="col-md-3">
              <div className="widget widget_meta">
                <h4>Meta</h4>
                <ul>
                  <li><a href="#">Log in</a></li>
                  <li><a href="#">Entries RSS</a></li>
                  <li><a href="#">Comments RSS</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="widget widget_latest_tweet">
                <h4>Latest tweet</h4>
                <div className="latest-tweets" data-username="hoa_doi_2911" data-number="5" data-modpath="twitter/index.html">
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="widget widget_archive">
                <h4>Archives</h4>
                <ul>
                  <li><a href="#">September 2014</a></li>
                  <li><a href="#">July 2014</a></li>
                  <li><a href="#">June 2014</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-center">
          <p>Copyrights © 2018 All Rights Reserved by Xgio</p>
        </div>
      </footer>
    );
  }
}
