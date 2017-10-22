
//自定义$()函数 就是简化document.getElementById("id")
function $(id){
 return typeof id==='string'?document.getElementById(id):id;
}
window.onload=function(){
 //获取鼠标滑过或点过的标签和要切换的内容的元素
 var titles=$('notice-title').getElementsByTagName('li');
     divs=$('notice-con').getElementsByTagName('div');
 if(titles.length!=divs.length)
 return;
 //遍历title下的所有li
 for (var i=0;i<titles.length;i++){
 	//添加索引
  			titles[i].souyin=i;
  			//鼠标点击事件，滑过是把onclick换成onmouseover
			titles[i].onclick=function(){
				//清除所有li上的class
				for(var j=0;j<titles.length;j++){
					titles[j].className='';
					divs[j].style.display='none';

				}
				//设置当前为高亮显示
				this.className='select';
				divs[this.souyin].style.display='block';
			}
		}
}