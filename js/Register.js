onload = function () {
	var warningButton = document.getElementById("warningButton");
	warningButton.onclick = function () {
		$("#WarningTypeFace").animate({
			"opacity": "0"
		}, 200, "linear", function () {
			$("#WarningTypeFace").hide();
		});
	}
}
function RegisterButton() {
	var name = $("#name").val();
	var email = $("#email").val();
	var Code = $("#Code").val();
	var password = $("#password").val();
	var ConfirmPassword = $("#ConfirmPassword").val();
	$.ajax({
		url:"http://192.168.1.97:8080/test",
		Type:"Post",
		data:{
			"Type":"Register",
			"Name":name,
			"email":email,
			"Code":Code,
			"password":password,
			"ConfirmPassword":ConfirmPassword
		},
		success : function(data){
			var json = JSON.parse(data);
			$("#WarningTypeFace").animate({
				opacity: "100"
			}, 1000);
			$("#Tips").text(json.Tips);
			$("#WarningTypeFace").show();
		},
		error: function() {
			$("#WarningTypeFace").animate({
				opacity: "100"
			}, 1000);
			$("#Tips").text("网络连接超时");
			$("#WarningTypeFace").show();
		}
	})
}
function CodeButton(){
	var email = $("#email").val();
	var CodeButton = document.getElementById("CodeButton1");
	var number = 60;
	if(email != ""){
		CodeButton.disabled = true;
		CodeButton.innerHTML = "重新发送(" + number + ")";
		var clock = setInterval(function () {
			number = number - 1;
			CodeButton.innerHTML = "重新发送(" + number + ")";
			if (number == 0) {
				number = 60;
				CodeButton.disabled = false;
				CodeButton.innerHTML = "获取验证码";
				window.clearInterval(clock);
			}
		}, 1000);
	}
	$.ajax({
		url:"http://192.168.1.97:8080/test",
		Type:"Post",
		data:{
			"Type":"Code",
			"email":email
		},
		success:function(data){
			var json = JSON.parse(data);

			if(json.CodeButtonStyle == "true"){
			}else{
				$("#WarningTypeFace").animate({
					opacity: "100"
				}, 1000);
				$("#Tips").text(json.Tips);
				$("#WarningTypeFace").show();
			}
		},
		error:function(){
			$("#WarningTypeFace").animate({
				opacity: "100"
			}, 1000);
			$("#Tips").text("网络连接超时");
			$("#WarningTypeFace").show();
			number = 60;
			CodeButton.disabled = false;
			CodeButton.innerHTML = "获取验证码";
			window.clearInterval(clock);
			
		}
	})
}
