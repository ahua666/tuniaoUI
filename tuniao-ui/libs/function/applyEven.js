//防抖
export function debounceFun(func, delay=500) {
	//定时器
	let timer;
	return function(...args) {
		// 清除之前设置的定时器
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}

//节流
export function throttleFun(func, delay=500) {
	//定时器
	let timer = null;
	return function(...args) {
		if(!timer){
			timer = setTimeout(() => {
				//执行前清空
				timer = null;
				console.log("执行了")
				func.apply(this, args);
			}, delay);
		}
	};
}
