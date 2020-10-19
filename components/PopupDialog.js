"use strict";
/*
PROPS:
	titleText,
    descriptionText,
    confirmFunc,
    cancelFunc,
    confirmText,
    cancelText
*/

class PopupDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.titleText == undefined) this.props.titleText = 'Party Member Banned';
    if (this.props.descriptionText == undefined)
      this.props.descriptionText =
        'One or more members of your recent competitive parties were convicted of cheating and permanently banned from official CS:GO servers.';
    if (this.props.confirmFunc == undefined)
      this.props.confirmFunc = "hideDialog";
    if (this.props.cancelFunc == undefined)
      this.props.cancelFunc = "hideDialog";
    if (this.props.confirmText == undefined) this.props.confirmText = "Confirm";
    if (this.props.cancelText == undefined) this.props.cancelText = "Cancel";
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        id: "dialog-frame"
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
		
          id: "dialog-title",
		  className: this.props.type,
        },
        this.props.titleText
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          id: "dialog-description"
        },
        this.props.descriptionText
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          id: "dialog-buttons"
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            id: "button1",
			onMouseEnter: eval(this.props.tickFunc),
            onClick: eval(this.props.confirmFunc),
			className: this.props.type,
			style: {
				display: this.props.confirmText.length > 0 ? "block" : "none",
			},
          },
          this.props.confirmText
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            id: "button2",
            onMouseEnter: eval(this.props.tickFunc),
            onClick: eval(this.props.cancelFunc),
			className: this.props.type,
			style: {
				display: this.props.cancelText.length > 0 ? "block" : "none",
			},
          },
          this.props.cancelText
        )
      )
    );
  }
}

