  //幻灯片自动播放
        var o=document.querySelector('#yi');//获取操作对象
		var as=document.querySelector('.lun').querySelectorAll('a');
		var lis=document.querySelector('.item').querySelectorAll('li');
		var al=document.querySelector('.al');
		var ar=document.querySelector('.ar');

		var index=0;//保存当前展示的轮播图的索引，默认0
		var len=as.length;
		var t;

		t=setInterval(moveNext,2000);//自动播放时间

		for(var i=0;i<lis.length;i++){
			lis[i]._index=i;//新增属性，保存位置
		//为每一个li追加点击事件
			lis[i].onclick=function(){
				//当前显示的li，修改为未选中状态
				lis[index].className='';
				as[index].className='';//当前显示的轮播图改为不显示
				this.className='current';//被点击的li，改为选中状态
				as[this._index].className='on';//轮播显示为对应
				index=this._index;
			};
		}
	//切换下一张
	function moveNext(){
		as[index].className='';//当前显示的轮播图改为不显示
		lis[index].className='';//当前指示器不显示
		index++;//索引递增
		if (index==len) {
			index=0;//最后一张切换为第一张
		}
		as[index].className='on';//下一张显示
		lis[index].className='current';
	}
	
		
//时钟
		var timer;
		function startTime(){
			var today =new Date(); //定义日期对象
			var h=to2bit(today.getHours());//获取时
			var m=to2bit(today.getMinutes());//获取分
			var s=to2bit(today.getSeconds());//获取秒
			
			var div =document.getElementById("sj");//通过id获取div对象
			div.innerHTML= h + ':' + m + ':' + s;//显示在div里
			timer = setTimeout('startTime()',140);//定时刷新
			
		}
//实现小于10时在前面加0
		function to2bit(n){
			return n<10? '0' + n:'' +n;
			
		}
			timer=setTimeout('startTime()',140);


