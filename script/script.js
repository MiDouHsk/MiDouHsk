	const btn = document.querySelectorAll("button")
	btn.forEach(function (button,index) {
	button.addEventListener("click",function(event){
			var btnItem = event.target
			var product = btnItem.parentElement
			var productImg = product.querySelector("img").src
			var productName = product.querySelector("h1").innerText
			var productPrice = product.querySelector("span").innerText
			//console.log("productPrice,productName,productImg")
			addcart(productPrice,productName,productImg)
		})
	});
	function addcart(productPrice,productName,productImg){
		var addtr = document.createElement("tr")
		var cartItem = document.querySelectorAll("tbody tr")
		/*var cartItem = document.querySelectorAll("tbody tr")
		for(var i = 0; i <= cartItem.length; i++) {
			var productT = document.querySelectorAll(".title")
			if(productT[i].innerHTML == productName){
				alert("sản phẩm đã được thêm +1 vào giỏ hàng")
				return
			}
		}*/
		var trcontent = '<tr><td style="display: flex;align-items: center;"><img src="'+productImg+'"></td><td><p class="title">'+productName+'</p></td><td><img src="../img/"></td><td><p>L</p></td><td><input type="number" value="1" min="1" name=""></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td style="cursor: pointer;"><span class="cart-delete">X</span></td></tr>'
		addtr.innerHTML = trcontent
		var cartTable = document.querySelector("tbody")

		//console.log("cartTable")
		cartTable.append(addtr)
		carttotal()
		deleteCart()
		
	}

	function carttotal(){
		var cartItem = document.querySelectorAll("table tbody tr")
		var totalC = 0
		var totalE = 0
		//console.log(cartItem.length)
		for(var i = 0; i < cartItem.length; i++){
			var inputValue = cartItem[i].querySelector("input").value
			//console.log(inputValue)
			var productPrice = cartItem[i].querySelector(".prices").innerText
			//console.log(productPrice)
			var totalA = inputValue*productPrice*1000
			//totalB = totalA.toLocaleString('de-DE')
			totalC = totalC+totalA
			
		}
		var cartTotalA = document.querySelector(".cart-content-right span")
		var sosanpham = document.querySelector("cart-content-right tr")
		//console.log(sosanpham)
		cartTotalA.innerHTML = totalC
		console.log(cartTotalA)
		inputchange()
		
	}


	function deleteCart(){
		var cartItem = document.querySelectorAll("tbody tr")
		for(var i=0; i< cartItem.length;i++){
			var productT = document.querySelectorAll(".cart-delete")
			productT[i].addEventListener("click",function(event){
				var cartDelete = event.target
				var cartitemR = cartDelete.parentElement.parentElement
				cartitemR.remove()
				console.log(cartitemR)
			})
			
		}
	} 

	function inputchange() {
		var cartItem = document.querySelectorAll("tbody tr")
		for(var i=0; i< cartItem.length;i++){
			var inputValue = cartItem[i].querySelector("input")
			inputValue.addEventListener("change",function(){
				carttotal()
			})
		}
	}

	const cartshow = document.querySelector(".fa-bag-shopping")	
	const cartbtn = document.querySelector(".close")
	const cartcontent = document.querySelector(".cart-content-right-button")	
	cartshow.addEventListener("click",function(){
		console.log(cartshow)
		document.querySelector(".cart").style.right = "0"
	})
	cartbtn.addEventListener("click",function(){
		console.log(cartshow)
		document.querySelector(".cart").style.right = "-100%"
	})
	cartcontent.addEventListener("click",function(){
		console.log(cartshow)
		document.querySelector(".cart").style.right = "-100%"
	})
