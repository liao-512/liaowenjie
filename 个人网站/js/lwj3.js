
// 密码2次确认
			function check2pwd() {  
			                    if(input1.value != input2.value) {  
			                        alert("两次输入密码不一致！")
			                        input1.value = "";  
			                        input2.value = "";  
			                    }else{
									alert("---------------注册中---------------")
								}
			            }
function check(){
	alert("---------------登录中---------------")
}

	let formone=document.querySelector('.formone');
	let registerpage=document.querySelector('.registerpage');
	// 注册
	let registerbtn=document.querySelector('.registerbtn');
	let resetbtn=document.querySelector('.resetbtn');
	registerbtn.addEventListener("click",()=>{
		formone.style.display='none';
		registerpage.style.display="flex";
	})
	// 撤销按钮隐藏注册
	resetbtn.addEventListener("click",()=>{
		formone.style.display='flex';
		registerpage.style.display="none";
	})	