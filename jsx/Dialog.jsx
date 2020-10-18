'use strict';
/*
PROPS:
	title,
    description,
    confirmFunc,
    cancelFunc,
    confirmText,
    cancelText
*/


class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.title == undefined) this.props.title = "Party Member Banned";
    if (this.props.description == undefined) this.props.title = "One or more members of your recent competitive parties were convicted of cheating and permanently banned from official CS:GO servers.";
    if (this.props.confirmFunc == undefined) this.props.confirmFunc = "hideDialog";
    if (this.props.cancelFunc == undefined) this.props.cancelFunc = "hideDialog";
    if (this.props.confirmText == undefined) this.props.confirmText = "Confirm";
    if (this.props.cancelText == undefined) this.props.cancelText = "Cancel";
    return (
      <div id="dialog-frame">
			<div id="dialog-title">{this.props.title}</div>
          <div id="dialog-description">{this.props.description}</div>
			<div id="dialog-buttons">
				<div id="button" onmouseenter="tick()" onclick="{this.props.confirmFunc}()">{this.props.confirmText}</div>
				<div id="button" onmouseenter="tick()" onclick="{this.props.cancelFunc}()">{this.props.cancelText}</div>
			</div>
		</div>
    );
  }
}


