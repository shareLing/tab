
//自定义$()函数 就是简化document.getElementById("id")
function $(id){
 return typeof id==='string'?document.getElementById(id):id;
}
window.onload=function(){

	//设置定时器
	var timer=null;
 //获取鼠标滑过或点过的标签和要切换的内容的元素
 var titles=$('notice-title').getElementsByTagName('li');
  var divs=$('notice-con').getElementsByTagName('div');
 if(titles.length!=divs.length)
 return;
 //遍历title下的所有li
 for (var i=0;i<titles.length;i++){
 			//添加索引
  			titles[i].souyin=i;

  			//鼠标滑过事件 点击时把onmouseover换成onclick
			titles[i].onmouseover=function(){
				//用that这个变量来引用当前滑过的li
				var that=this;
				//如果存在准备执行的定时器，立刻清除，只有当前停留时间大于500ms时开始执行
				if(timer){
					clearTimeout(timer);
					timer=null;
				}
				//添加定时器，延迟半秒执行
				timer=window.setTimeout(function(){
					for(var j=0;j<titles.length;j++){
					titles[j].className='';
					divs[j].style.display='none';
				}
				titles[that.souyin].className='select';
				divs[that.souyin].style.display='block';
			},500);
		 }
						
	}
}
