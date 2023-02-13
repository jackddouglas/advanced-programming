function toggle(on) {
	if (on) {
		document.getElementById("light").src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0Tkw5CwNO-e7uVAJFV0MowHaMW%26pid%3DApi&f=1&ipt=4c1bb14e106d8899b9d5f9649d7a03df3c7fbb591c1697980ce736b6da20ba36&ipo=images";
	} else {
		document.getElementById("light").src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F03%2FLight-Bulb-PNG-Clipart.png&f=1&nofb=1&ipt=5112591018b8d91a3806ded80dd56b3b4f654f26e075dac7624ebadca92c1cbd&ipo=images";
	}
}

function size() {
	var text = document.getElementById("style");

	if (text.style.fontSize != "3em") {
		text.style.fontSize = "3em";
	} else {
		text.style.fontSize = "1em";
	}
}

// function turnOn() {
// 	document.getElementById("light").src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0Tkw5CwNO-e7uVAJFV0MowHaMW%26pid%3DApi&f=1&ipt=4c1bb14e106d8899b9d5f9649d7a03df3c7fbb591c1697980ce736b6da20ba36&ipo=images";
// }

// function turnOff() {
// 	document.getElementById("light").src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F03%2FLight-Bulb-PNG-Clipart.png&f=1&nofb=1&ipt=5112591018b8d91a3806ded80dd56b3b4f654f26e075dac7624ebadca92c1cbd&ipo=images";
// }
