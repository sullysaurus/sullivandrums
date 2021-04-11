import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Hi my name is Danny and I am a drummer here in Raleigh, NC. Originally from New York, I grew up the grandson of a jazz drummer and still play his kit today (the background of this website). I'm always looking to teach new students, collaborate with other musicians or just talk drums. If you are looking for any of the above, connect with me on Instagram or send me an email. Thanks!
          </p>
          {close}
        </article>

        <article
          id="music"
          className={`${this.props.article === 'music' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Music</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            <h3>I'm always looking for new musicians to collaborate with.</h3>
            
            <h4>My current recording set up</h4> 
            
            <b>Drums</b> 
            <ul>
              <li>1959 trans badge Ludwig kit</li>
              <li>New and vintage Zildjian / Istanbul Agop cymbals</li>
            </ul>

            <b>Recording Gear</b>
            <ul>
              <li> Mac | Logic | Focusrite 18i20</li>
              <li>Beyerdynamic m160 (2)</li>
              <li>Sure SM7B </li>
              <li>Sure SM57</li>
              <li>Sure Beta 52A</li>
              <li>Heil PR28 (2)</li>
            </ul>
            
            <b>Projects</b>
            <ul>
              <li><a href="https://soundcloud.com/deadseasparrow/sets/up-the-mountain/s-mE9K2MjiB9W">Dead Sea Sparrow</a></li>
              <li><a href="http://www.withourmindsandourmachines.com/">Islandverse</a></li>
            </ul>

            <b>Gear For Sale</b>
            <ul>
              <li> <a href="https://reverb.com/shop/sullivandrumshop">Sullivan Drum Shop</a></li>
            </ul>
      
          </p>
          {close}
        </article>

        <article
          id="lessons"
          className={`${this.props.article === 'lessons' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Lessons</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Coming soon.
          </p>
          <p>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#" name="contact" netlify>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://instagram.com/sullivandrums" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="icon fa-youtube"
              >
                <span className="label">Youtube</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
