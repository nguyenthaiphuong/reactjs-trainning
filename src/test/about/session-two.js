import React, {Component} from 'react';

export default class SessionTwo extends Component {
  render() {
    return(
      <section className="blog-content blog-standard">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
              <div className="content">
                <div className="post">
                  <div className="post-media">
                    <div className="image-wrap">
                      <img src="assets/images/1.jpg" alt=""/>
                    </div>
                  </div>
                  <div className="post-body">
                    <div className="post-entry">
                      <p>Mauris id sapien ante. Praesent vulputate feugiat quam. Duis aliquam nisl non tellus ullamcorper, eget blandit nunc suscipit. Ut placerat urna ac nisl pretium, at gravida purus pulvinar. In pulvinar sit amet dolor non finibus. Aliquam
                        at arcu egestas quam accumsan luctus. Mauris in sagittis lorem. Cras dapibus varius eros at vestibulum. <br/> Duis mollis eget augue et lobortis. Nam nunc justo, aliquet sed condimentum vel, faucibus in dolor. Proin eleifend hendrerit
                        rhoncus. Maecenas in tellus posuere, placerat metus vehicula, aliquet sapien. Maecenas egestas aliquet nisi efficitur accumsan. Nullam dui eros, porta eu lorem eget, lacinia tempus velit.<br/>Integer volutpat velit eget sollicitudin
                        tincidunt. Sed tincidunt ligula libero, eget tincidunt erat volutpat sit amet. In at nisi ac nunc euismod vestibulum. Vestibulum ornare magna at ligula accumsan volutpat et vel dolor. Cras semper porta cursus. Etiam euismod nisl
                        at ultrices interdum. Proin nec lorem in urna fermentum malesuada quis ut lectus. Nulla et risus nibh.</p>
                    </div>
                    <div className="signature text-right">
                      <div className="inner">
                        <img src="assets/images/signature.png" alt="Winters Template"/>
                        <cite className="name">Winters</cite>
                      </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
