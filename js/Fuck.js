onload = function a(){
    var LoginButton = document.getElementById("LoginButton");

    LoginButton.onclick = function(){
        var EmailInput = $("#EmailInput").val();
        var PasswordInput = $("#PasswordInput").val();
        $.ajax({
            url:"http://192.168.1.97:8080/Login",
            Type: "Post",
            data:{
                "Type" : "Login",
                "Email" : EmailInput,
                "Password" : PasswordInput
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

    var warningButton = document.getElementById("warningButton");
	warningButton.onclick = function () {
		$("#WarningTypeFace").animate({
			"opacity": "0"
		}, 200, "linear", function () {
			$("#WarningTypeFace").hide();
		});
    }
    
    var Forget = document.getElementById("Forget");
    var RePasswordFaceType = document.getElementById("RePasswordFaceType");
    Forget.onclick = function(){
          Forget.style.display = "none";
        // $("#Forget").animate({
		// 	"opacity": "0"
		// }, 200, "linear", function () {
		// 	$("#Forget").hide();
		// });
    }

    RePasswordFaceType.onclick = function() {
        //Forget.style.display = "block";
        $("#Forget").animate({
            opacity: "100"
        }, 200);
        $("#Forget").show();

    }

    var ForgetStart = document.getElementById("ForgetStart");

    ForgetStart.onclick = function(e) {
        e.stopPropagation();
    }


}