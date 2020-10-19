"use strict";
class PanelButton extends React.Component {
	
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/ React.createElement(
      "img",
      {
        src: "./images/icons/" + this.props.icon + ".svg",
		//style: {
			//width: "8.7vh", 
			//height: "10vh"
		//},
		//allow: "autoplay",
		//onClick: tick3(),
		onMouseOver: tick(),
      }
    );
  }
}