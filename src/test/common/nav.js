import React, {Component} from 'react';

export default class Nav extends Component {
  render() {
    return(
    <nav className="pi-navigation" data-menu-responsive="992">
      <div className="container">
        <div className="open-menu">
          <span className="item item-1"></span>
          <span className="item item-2"></span>
          <span className="item item-3"></span>
        </div>
        <div className="close-menu"></div>
        <ul className="navlist">
          <li className="menu-item-has-children">
            <a href="#">Home</a>
            <ul className="sub-menu">
              <li className="menu-item-has-children">
                <a href="grid.html">Grid</a>
                <ul className="sub-menu">
                  <li><a href="grid.html">Fullwidth</a></li>
                  <li><a href="grid-rightsidebar.html">Right sidebar</a></li>
                  <li><a href="grid-leftsidebar.html">Left sidebar</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="list.html">List</a>
                <ul className="sub-menu">
                  <li><a href="list.html">Fullwidth</a></li>
                  <li><a href="list-rightsidebar.html">Right sidebar</a></li>
                  <li><a href="list-leftsidebar.html">Left sidebar</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="timeline.html">Timeline</a>
                <ul className="sub-menu">
                  <li><a href="timeline.html">Fullwidth</a></li>
                  <li><a href="timeline-rightsidebar.html">Right sidebar</a></li>
                  <li><a href="timeline-leftsidebar.html">Left sidebar</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="index-2.html">Standard</a>
                <ul className="sub-menu">
                  <li><a href="standard.html">Fullwidth</a></li>
                  <li><a href="index-2.html">Right sidebar</a></li>
                  <li><a href="standard-leftsidebar.html">Left sidebar</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="current-menu-item"><a href="#">About</a></li>
          <li><a href="category.html">Category</a></li>
          <li><a href="category.html">Restaurant</a></li>
          <li className="megamenu col-5 menu-item-has-children">
            <a href="category.html">Mega menu</a>
            <ul className="sub-menu">
              <li>
                <div className="post">
                  <div className="post-media">
                    <div className="image-wrap">
                      <img src="assets/images/popular-post/1.jpg" alt=""/>
                    </div>
                  </div>
                  <div className="post-body">
                    <div className="post-title">
                      <h2><a href="single.html">Ut sit amet massa</a></h2>
                    </div>
                    <span className="post-date">March 05, 2015</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="post">
                  <div className="post-media">
                    <div className="image-wrap">
                      <img src="assets/images/popular-post/2.jpg" alt=""/>
                    </div>
                  </div>
                  <div className="post-body">
                    <div className="post-title">
                      <h2><a href="single.html">Ut sit amet massa</a></h2>
                    </div>
                    <span className="post-date">March 05, 2015</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="post">
                  <div className="post-media">
                    <div className="image-wrap">
                      <img src="assets/images/popular-post/3.jpg" alt=""/>
                    </div>
                  </div>
                  <div className="post-body">
                    <div className="post-title">
                      <h2><a href="single.html">Ut sit amet massa</a></h2>
                    </div>
                    <span className="post-date">March 05, 2015</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="post">
                  <div className="post-media">
                    <div className="image-wrap">
                      <img src="assets/images/popular-post/1.jpg" alt=""/>
                    </div>
                  </div>
                  <div className="post-body">
                    <div className="post-title">
                      <h2><a href="single.html">Ut sit amet massa</a></h2>
                    </div>
                    <span className="post-date">March 05, 2015</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="post">
                  <div className="post-media">
                    <div className="image-wrap">
                      <img src="assets/images/popular-post/2.jpg" alt=""/>
                    </div>
                  </div>
                  <div className="post-body">
                    <div className="post-title">
                      <h2><a href="single.html">Ut sit amet massa</a></h2>
                    </div>
                    <span className="post-date">March 05, 2015</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li><a href="single.html">Single</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="search-box">
          <span className="icon-search">
            <i className="fa fa-search"></i>
          </span>
          <form action="http://xgio.net/winters/GET">
            <input type="search" placeholder="Search and hit enter"/>
          </form>
        </div>
        <div className="share-box">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-dribbble"></i></a>
          <a href="#"><i className="fa fa-pinterest"></i></a>
        </div>
      </div>
    </nav>
    );
  }
}
