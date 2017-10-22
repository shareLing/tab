
//自定义$()函数 就是简化document.getElementById("id")
function $(id){
 return typeof id==='string'?document.getElementById(id):id;
}

window.onload=function(){
	//当前高亮显示的页签的索引
	var index=0;
	var timer=null;

	//获取所有的页签（就是鼠标点击或滑过的地方）和要切换的内容
 	var titles=$('notice-title').getElementsByTagName('li');
    var divs=$('notice-con').getElementsByTagName('div');
    //遍历每一个页签且给他们绑定事件
    for(var i=0;i<titles.length;i++){
    	titles[i].index=i;
    	//鼠标滑入
    	titles[i].onmouseover=function(){
    		clearInterval(timer);
    		changeOption(this.index);
    	}
    	//鼠标离开
    	titles[i].onmouseout=function(){
	    	timer=setInterval(autoplay,2000);

	    	}
    }
	//如果存在准备执行的定时器，立刻清除，只有当前停留时间大于2000ms时开始执行
	if(timer){
		clearInterval(timer);
		timer=null;
	}
	//添加定时器，改变当前高亮的索引
	timer=setInterval(autoplay,2000);

	function autoplay(){
		index++;
		if(index>=titles.length){
			index=0;
		}
		changeOption(index);
		
	}

	//自定义函数
	function changeOption(index1){
		for(var j=0;j<titles.length;j++){
					titles[j].className='';
					divs[j].style.display='none';
				}
		//高亮显示当前页签
		titles[index1].className='select';
		divs[index1].style.display='block';
		index=index1;
	}
}
