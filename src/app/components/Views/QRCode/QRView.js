import React from "react";
import Footer from "../../Reusable_Components/Footer";
import QRCode from "react-qr-code";

class QRView extends React.Component {
  state = {qr: "", qrImg: "" };


  genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

  componentDidMount() {
    document.body.style.background = "#4d3254";
    document.body.style.color = "#FFFFFF";
    var QRKey = this.genRanHex(16);
    this.setState({qr: QRKey})
  }

  render() {
    return (
      <div>
        <div id="qrcode" style={{fontSize: "24px", textAlign: "center"}}>
          <p />
        Carte Cadeau #: {this.state.qr}
        <p></p>
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 640, width: "100%" }}>
            <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={this.state.qr}
            viewBox={`0 0 256 256`}
            />
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

QRView.defaultProps = {};

export default QRView;
