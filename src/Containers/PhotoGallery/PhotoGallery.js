/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import '../Calculator/index.module.scss';

class HomeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { output: [], open: false, link: '' };
    this.goHome = this.goHome.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.display = this.display.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(result => {
        this.setState({ output: result });
      });
  }

  onOpenModal(e) {
    const link = e;
    this.setState(link);
    this.setState(true);
  }

  onCloseModal() {
    this.setState(false);
  }

  goHome() {
    const { history } = this.props;
    history.push('/');
  }

  display() {
    // eslint-disable-next-line array-callback-return
    return this.state.output.map((value, index) => {
      if (index < 20) {
        return (
          <div key={index} className="displayImage">
            <div className="displayCardImage">
              <div className="outDiv">
                <image
                  src={value.thumbnailUrl}
                  // eslint-disable-next-line no-undef
                  onClick={() => onOpenModal(value.thumbnailUrl)}
                  alt="defaultImage"
                  className="displayImageHover"
                />
                <div className="middle">
                  <div className="text">Hello World!</div>
                </div>
              </div>
              <div className="displayTitle">{value.title}</div>
              <h3>Paragraph!</h3>
              <p className="displayParagraph">
                Welcome to class commpunent! This paragraph contains a lot of
                lines in the source code, but the browser ignores it.
              </p>
            </div>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div>
        <button type="button" className="galleryColor" onClick={this.goHome}>
          Back To Home!
        </button>
        <div className="displayImageMainDiv">{this.display()}</div>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <img src={this.state.link} alt="imageE" className="modelImage" />
        </Modal>
      </div>
    );
  }
}
export default withRouter(HomeButton);
