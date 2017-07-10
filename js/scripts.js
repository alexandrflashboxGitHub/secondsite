 $(function(){
	





	
	
	
 $(document).ready(function() {
	 
	 
	  }) ;
 });
//функция для поиска елементов возвращает массив елементов
//елем ключевая точка входа
		
     var arr=[];
	 
    var find=function findElem(elem){
	var children =elem.children;
	for(var i=0;i<children.length;i++){
		
		var el =children[i];
		arr.push(el);
     if(el.children){
		findElem(el); 
	 }
		
	}	
	return arr;
	}
	
	//можем записать функцию в другое значение она будет работать все потому что мы использовали именнованное функциональное выражение
	var vendor=find;
	find=null;
	
	
 


 var arr = vendor(document.documentElement);

  
 //использовать данный массив можно по разному можно раскрасить елементы а можно найти в массиве то что нас интересует и что нибудь с етим сделать
  
  for(var i=0;i<arr.length;i++){
	  if(i%2==0){arr[i].style.backgroundColor="orange";}
	  else{ arr[i].style.backgroundColor="red"; }
	
	  
  }
  var arrh=[];
  var head=document.documentElement.getElementsByTagName("head");
 for(var i=0;i<head.length;i++){
	 
	arrh[i]= head[i];
 }
alert(arrh.length);
  
  
 
  

