import React, {Component} from 'react';
import {BlogLayout} from 'components/Layout';
import Footer from './Footer';

export default class Contact extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <BlogLayout/>
        <section className="blog-heading text-center">
          <div className="container">
            <h1 className="text-uppercase">Contact us</h1>
            <div className="desc">
              <p>Posts that have media-related tests</p>
            </div>
          </div>
        </section>
        <section className="blog-content blog-standard contact-page">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="content">
                  <div className="post">
                    <div className="post-meta">
                      <div className="post-format">
                        <a href="#"><i className="fa fa-map-marker"></i></a>
                      </div>
                    </div>
                    <div className="contact-info">
                      <div className="info-content">
                        <div className="item phone">
                          <i className="fa fa-phone"></i>
                          <span>+0000 987654321</span>
                        </div>
                        <div className="item">
                          <i className="fa fa-map-marker"></i>
                          <span>121 King Street, Melbourne Victoria 3000 Australia</span>
                        </div>
                        <div className="item">
                          <i className="fa fa-envelope"></i>
                          <span><a href="http://xgio.net/cdn-cgi/l/email-protection#6f1806011b0a1d1c2f06010900410c0002"><span className="__cf_email__" data-cfemail="0a7d63647e6f78794a63646c6524696567">[email&#160;protected]</span></a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="post-body">
                      <div className="post-entry">
                        <p>Duis mollis eget augue et lobortis. Nam nunc justo, aliquet sed condimentum vel, faucibus in dolor. Proin eleifend hendrerit rhoncus. Maecenas in tellus posuere, placerat metus vehicula, aliquet sapien. Maecenas egestas aliquet nisi
                          efficitur accumsan. Nullam dui eros, porta eu lorem eget, lacinia tempus velit. Vestibulum magna eros, dapibus ac velit ac, accumsan rutrum velit. Sed ultricies aliquet odio, sed tincidunt lacus dapibus non. Donec eget purus in velit
                          ornare molestie. Donec eu semper ipsum. Vivamus vulputate ultricies dolor, sed imperdiet quam mattis eget.</p>
                      </div>
                      <div className="contact-form">
                        <form action="http://xgio.net/winters/POST">
                          <div className="form-item">
                            <input type="text" placeholder="Your name *"/>
                          </div>
                          <div className="form-item">
                            <input type="text" placeholder="Your email *"/>
                          </div>
                          <div className="form-item">
                            <input type="text" placeholder="Website"/>
                          </div>
                          <div className="form-item form-captcha">
                            <img src="assets/images/captcha-demo.png" alt="" className="wpcf7-captchac" />
                            <span className="wpcf7-form-control-wrap">
                            <input type="text" placeholder="Captcha"/>
                            </span>
                          </div>
                          <div className="form-textarea">
                            <textarea placeholder="Message"></textarea>
                          </div>
                          <div className="form-actions">
                            <input type="submit" placeholder="Send"/>
                          </div>
                        </form>
                      </div>
                      <div className="post-share">
                        <span className="share-toggle pi-btn">
                        <i className="fa fa-share-alt"></i>
                        </span>
                        <div className="share">
                          <a href="#"><i className="fa fa-facebook"></i></a>
                          <a href="#"><i className="fa fa-twitter"></i></a>
                          <a href="#"><i className="fa fa-dribbble"></i></a>
                          <a href="#"><i className="fa fa-instagram"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="related-post">
                    <h4>Related posts</h4>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="related-post-item">
                          <div className="post-media">
                            <div className="image-wrap">
                              <img src="assets/images/popular-post/1.jpg" alt=""/>
                            </div>
                          </div>
                          <div className="post-body">
                            <div className="post-title">
                              <h2><a href="blog-single.html">Ut sit amet massa</a></h2>
                            </div>
                            <span className="post-date">March 05, 2015</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="related-post-item">
                          <div className="post-media">
                            <div className="image-wrap">
                              <img src="assets/images/popular-post/2.jpg" alt=""/>
                            </div>
                          </div>
                          <div className="post-body">
                            <div className="post-title">
                              <h2><a href="blog-single.html">Ut sit amet massa</a></h2>
                            </div>
                            <span className="post-date">March 05, 2015</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="related-post-item">
                          <div className="post-media">
                            <div className="image-wrap">
                              <img src="assets/images/popular-post/3.jpg" alt=""/>
                            </div>
                          </div>
                          <div className="post-body">
                            <div className="post-title">
                              <h2><a href="blog-single.html">Ut sit amet massa</a></h2>
                            </div>
                            <span className="post-date">March 05, 2015</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sidebar sidebar-right">
                  <div className="widget widget_about">
                    <h4>About me</h4>
                    <div className="author-thumb">
                      <img src="assets/images/2.jpg" alt=""/>
                    </div>
                    <h3 className="author-name text-uppercase"><a href="#">Steven Typer</a></h3>
                    <div className="desc">
                      <p>Cras imperdiet in sem sed sodales. Nunc urna lectus, elementum id rhoncus ac, accumsan sed sapien.</p>
                    </div>
                    <div className="about-social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-google-plus"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-tumblr"></i></a>
                    </div>
                  </div>
                  <div className="widget widget_latest_post">
                    <h4>Latest post</h4>
                    <ul>
                      <li>
                        <div className="image-wrap">
                          <img src="assets/images/latest/1.jpg" alt=""/>
                        </div>
                        <div className="content-text">
                          <a href="#">Suspendisse lobortis mollis arcu quis</a>
                          <span className="date">Jan 10, 2014</span>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <img src="assets/images/latest/2.jpg" alt=""/>
                        </div>
                        <div className="content-text">
                          <a href="#">Suspendisse lobortis mollis arcu quis</a>
                          <span className="date">Jan 10, 2014</span>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <img src="assets/images/latest/3.jpg" alt=""/>
                        </div>
                        <div className="content-text">
                          <a href="#">Suspendisse lobortis mollis arcu quis</a>
                          <span className="date">Jan 10, 2014</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget_categories">
                    <h4>Categories</h4>
                    <ul>
                      <li><a href="#">Music</a></li>
                      <li><a href="#">Travel</a></li>
                      <li><a href="#">Restaurant</a></li>
                      <li><a href="#">Lifestyle</a></li>
                    </ul>
                  </div>
                  <div className="widget widget_flickr">
                    <h4>Flickr</h4>
                    <ul className="flickr">
                      <li><a href="#"><img src="assets/images/flickr/1.jpg" alt=""/></a></li>
                      <li><a href="#"><img src="assets/images/flickr/2.jpg" alt=""/></a></li>
                      <li><a href="#"><img src="assets/images/flickr/3.jpg" alt=""/></a></li>
                      <li><a href="#"><img src="assets/images/flickr/4.jpg" alt=""/></a></li>
                      <li><a href="#"><img src="assets/images/flickr/5.jpg" alt=""/></a></li>
                      <li><a href="#"><img src="assets/images/flickr/6.jpg" alt=""/></a></li>
                      <li><a href="#"><img src="assets/images/flickr/7.jpg" alt=""/></a></li>
                      <li><a href="#"><img src="assets/images/flickr/8.jpg" alt=""/></a></li>
                      <li><a href="#"><img src="assets/images/flickr/9.jpg" alt=""/></a></li>
                    </ul>
                  </div>
                  <div className="widget widget_calendar">
                    <div id="calendar_wrap">
                      <table id="wp-calendar">
                        <caption>March 2015</caption>
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">M</th>
                            <th scope="col" title="Tuesday">T</th>
                            <th scope="col" title="Wednesday">W</th>
                            <th scope="col" title="Thursday">T</th>
                            <th scope="col" title="Friday">F</th>
                            <th scope="col" title="Saturday">S</th>
                            <th scope="col" title="Sunday">S</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <td colSpan="3" id="prev"><a href="#">« Jan</a></td>
                            <td className="pad">&nbsp;</td>
                            <td colSpan="3" id="next" className="pad">&nbsp;</td>
                          </tr>
                        </tfoot>
                        <tbody>
                          <tr>
                            <td colSpan="6" className="pad">&nbsp;</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td id="today">14</td>
                            <td>15</td>
                          </tr>
                          <tr>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                          </tr>
                          <tr>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                          </tr>
                          <tr>
                            <td>30</td>
                            <td>31</td>
                            <td className="pad" colSpan="5">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="widget widget_tag_cloud">
                    <h4>Tag cloud</h4>
                    <div className="tagcloud">
                      <a href="#">Recipe</a>
                      <a href="#">Chicken</a>
                      <a href="#">Wordpress</a>
                      <a href="#">Photoshop</a>
                      <a href="#">JQuery</a>
                      <a href="#">Chicken</a>
                      <a href="#">Wordpress</a>
                      <a href="#">Photoshop</a>
                      <a href="#">JQuery</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}
