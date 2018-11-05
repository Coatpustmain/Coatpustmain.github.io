document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.11.05.2";

window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("devicemotion", on_device_motion);

//---------------------------------------------------------------------------
function on_device_orientation(e)
{
	document.getElementById("id_alpha").innerHTML = e.alpha;
	document.getElementById("id_beta").innerHTML = e.beta;
	document.getElementById("id_gamma").innerHTML = e.gamma;
	
	var canvas = document.getElementById("id_canvas");
	var context = canvas.getContext("2d");
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	var R = 10
	context.beginPath();
	context.arc(canvas.width / 2 + e.gamma / 90 * (canvas.width / 2 - R), 
				canvas.height / 2 + e.beta / 90 * (canvas.height / 2 - R), R, 0, 2 * Math.PI);
	context.stroke();
}
//---------------------------------------------------------------------------

function on_device_motion(e)
{
	document.getElementById("id_acc_z").innerHTML = Math.round(e.accelerationIncludingGravity.z * 100) / 100;
	document.getElementById("id_acc_x").innerHTML = Math.round(e.accelerationIncludingGravity.x * 100) / 100;
	document.getElementById("id_acc_y").innerHTML = Math.round(e.accelerationIncludingGravity.y * 100) / 100;
}