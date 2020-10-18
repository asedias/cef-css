

document.querySelectorAll("PanelButton").forEach((domContainer) => {
  ReactDOM.render(
    /*#__PURE__*/ React.createElement(PanelButton, {
      //icon: domContainer.dataset.id,
      icon: domContainer.id,
    }),
    domContainer
  );
});

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    document.getElementById("dialog").style.display = "none";
  }
}

function tick() {
	if (document.readyState == "complete") {
		var audio = new Audio('sounds/mainmenu_rollover.wav');
		audio.play();
	}
}

function alert() {
	console.log("mouseover");
}

function showSimpDialog() {
	showDialog("This is a Title!", 'Sub', 'OK', 'Cancel');
}

function showDialog(title, desc, ok, cancel) {
	document.querySelectorAll("PopupDialog").forEach((domContainer) => {
		ReactDOM.render(
			/*#__PURE__*/ React.createElement(PopupDialog, {
				titleText: title.toString(),
				descriptionText: desc.toString(),
				confirmFunc: 'hideDialog',
				cancelFunc: 'hideDialog',
				confirmText: ok.toString(),
				cancelText: cancel.toString(),
				tickFunc: 'tick'
			}),
			domContainer
		);
	});
	if (document.readyState == "complete") {
		var audio = new Audio('sounds/popup_reveal.wav');
		audio.play();
	}
	var dialog = document.getElementById("dialog");
	var frame = document.getElementById("dialog-frame");
	dialog.style.display = "flex";
	dialog.animate([
		// keyframes
			{ opacity: 0, display: "flex" }, 
			{ opacity: 1, }
		], {
			// timing options
			duration: 100,
			easing: "ease-out",
			fill: "forwards",
		}
	);
	frame.animate([
		// keyframes
			{ transform: 'scale(2)', opacity: 0, }, 
			{ transform: 'scale(1)', opacity: 1}
		], {
			// timing options
			duration: 100,
			easing: "ease-out",
		}
	);
}

function hideDialog() {
	if (document.readyState == "complete") {
		var audio = new Audio('sounds/mainmenu_press_home.wav');
		audio.play();
	}
	var dialog = document.getElementById("dialog");
	var frame = document.getElementById("dialog-frame");
	dialog.animate([
		// keyframes
			{ opacity: 1, }, 
			{ opacity: 0, display: "none"  }
		], {
			// timing options
			duration: 100,
			easing: "ease-out",
			fill: "forwards",
		}
	);
	frame.animate([
		// keyframes
			{ transform: 'scale(1)', opacity: 1},
			{ transform: 'scale(2)', opacity: 0, }
		], {
			// timing options
			duration: 100,
			easing: "ease-out",
		}
	);
	setTimeout(function() { dialog.style.display = "none"; }, 100);
}
