var buttonTopStaff = document.querySelector('.topStaff');
var buttonLowStaff = document.querySelector('.lowStaff');
var btnAlbums = document.querySelector('.btns-albums');
buttonLowStaff.addEventListener('click', function(event) { 
	var video = document.querySelector('.mediaContentVideo');
	var photo = document.querySelector('.mediaContentPhoto');
	var h3arr = document.querySelector('.h3arrow');
	h3arr.setAttribute("style", "display:none");
	video.setAttribute("style", "display:inline-block");
	photo.setAttribute("style", "display:none");
	btnAlbums.setAttribute("style", "display:none");

});
var party = document.querySelector('.party');
var talants = document.querySelector('.talants');
var ourChild = document.querySelector('.ourChilds');
var fiz = document.querySelector('.fiz');
var win = document.querySelector('.win');;
talants.addEventListener('click', function(event) { 
	var photo = document.querySelector('.mediaContentPhoto');
		photo.innerHTML =
		`<section id="exemple" class="containerMed">
		<div class="wrap small-width">
			<div id="try"></div>
			<ul id="box-container">
				<li class="box">
					<a href="mediaImg/talants/image1.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/talants/image1.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/talants/image2.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/talants/image2.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/talants/image3.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/talants/image3.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/talants/image4.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/talants/image4.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/talants/image5.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/talants/image5.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/talants/image6.jpg" class="swipebox" title="City">
						<img width='10%' height='10%' src="mediaImg/talants/image6.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/talants/image7.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/talants/image7.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/talants/image8.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/talants/image8.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/talants/image9.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/talants/image9.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/talants/image10.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/talants/image10.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/talants/image11.jpg" class="swipebox" title="Street">
						<img width='10%' height='10%' src="mediaImg/talants/image11.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/talants/image12.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/talants/image12.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/talants/image13.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/talants/image13.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/talants/image14.jpg" class="swipebox" title="City">
						<img width='10%' height='10%' src="mediaImg/talants/image14.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/talants/image15.jpg" class="swipebox" title="Street">
						<img width='10%' height='10%' src="mediaImg/talants/image15.jpg" alt="image">
					</a>
				</li>
				
				<li class="box">
					<a href="mediaImg/talants/image16.jpg" class="swipebox" title="Street">
						<img width='10%' height='10%' src="mediaImg/talants/image16.jpg" alt="image">
					</a>
				</li>
			</ul>
		</div>
	</section>`;
});
win.addEventListener('click', function(event) {  //день победы
	var photo = document.querySelector('.mediaContentPhoto');
		photo.innerHTML =
		`<section id="exemple" class="containerMed">
		<div class="wrap small-width">
			<div id="try"></div>
			<ul id="box-container">
				<li class="box">
					<a href="mediaImg/win/image1.jpg" class="swipebox" title="Вьется в тесной печурке огонь...">
						<img width='10%' height='10%' src="mediaImg/win/image1.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/win/image2.jpg" class="swipebox" title="Взрослые готовы к празднику">
						<img width='10%' height='7%' src="mediaImg/win/image2.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/win/image3.jpg" class="swipebox" title="Репетиция. Дети тонко чувствуют тему ...">
						<img width='10%' height='7%' src="mediaImg/win/image3.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/win/image4.jpg" class="swipebox" title="Группа №10. Дети готовы к празднику.">
						<img width='10%' height='10%' src="mediaImg/win/image4.jpg" alt="image">
					</a>
				</li>
			</ul>
		</div>
	</section>`;
});
party.addEventListener('click', function(event) {   // ПРАЗДНИКИ
	var photo = document.querySelector('.mediaContentPhoto');
		photo.innerHTML =
		`<section id="exemple" class="containerMed">
		<div class="wrap small-width">
			<div id="try"></div>
			<ul id="box-container">
				<li class="box">
					<a href="mediaImg/party/image1.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/party/image1.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image2.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/party/image2.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image3.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/party/image3.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image4.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/party/image4.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image5.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/party/image5.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image6.jpg" class="swipebox" title="City">
						<img width='10%' height='10%' src="mediaImg/party/image6.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image7.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/party/image7.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image8.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/party/image8.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image9.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/party/image9.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image10.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/party/image10.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image11.jpg" class="swipebox" title="Street">
						<img width='10%' height='10%' src="mediaImg/party/image11.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image12.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/party/image12.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image13.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/party/image13.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image14.jpg" class="swipebox" title="City">
						<img width='10%' height='10%' src="mediaImg/party/image14.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image15.jpg" class="swipebox" title="Street">
						<img width='10%' height='10%' src="mediaImg/party/image15.jpg" alt="image">
					</a>
				</li>
				
				<li class="box">
					<a href="mediaImg/party/image16.jpg" class="swipebox" title="Street">
						<img width='10%' height='10%' src="mediaImg/party/image16.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image17.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/party/image17.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image18.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/party/image18.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image19.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/party/image19.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image20.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/party/image20.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/party/image21.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/party/image21.jpg" alt="image">
					</a>
				</li>
			</ul>
		</div>
	</section>`;
}); 
fiz.addEventListener('click', function(event) {    //ФИЗКУЛЬТУРНЫЕ ПРАЗДНИКИ
	var photo = document.querySelector('.mediaContentPhoto');
		photo.innerHTML =
		`<section id="exemple" class="containerMed">
		<div class="wrap small-width">
			<div id="try"></div>
			<ul id="box-container">
				<li class="box">
					<a href="mediaImg/fiz/image1.jpg" class="swipebox" title="В хоккей играют настоящие мужчины...">
						<img width='10%' height='10%' src="mediaImg/fiz/image1.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image2.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/fiz/image2.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image3.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/fiz/image3.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image4.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/fiz/image4.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image5.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/fiz/image5.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image6.jpg" class="swipebox" title="City">
						<img width='10%' height='10%' src="mediaImg/fiz/image6.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image7.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/fiz/image7.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image8.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/fiz/image8.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image9.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/fiz/image9.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image10.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/fiz/image10.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image11.jpg" class="swipebox" title="Street">
						<img width='10%' height='10%' src="mediaImg/fiz/image11.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image12.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/fiz/image12.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image13.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/fiz/image13.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image14.jpg" class="swipebox" title="City">
						<img width='10%' height='10%' src="mediaImg/fiz/image14.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image15.jpg" class="swipebox" title="Street">
						<img width='10%' height='10%' src="mediaImg/fiz/image15.jpg" alt="image">
					</a>
				</li>
				
				<li class="box">
					<a href="mediaImg/fiz/image16.jpg" class="swipebox" title="Street">
						<img width='10%' height='10%' src="mediaImg/fiz/image16.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image17.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/fiz/image17.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image18.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/fiz/image18.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image19.jpg" class="swipebox" title="Папа может....">
						<img width='10%' height='10%' src="mediaImg/fiz/image19.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image20.jpg" class="swipebox" title="Сюрприз для папы">
						<img width='10%' height='7%' src="mediaImg/fiz/image20.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image21.jpg" class="swipebox" title="Гордимся своими папами">
						<img width='10%' height='10%' src="mediaImg/fiz/image21.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image22.jpg" class="swipebox" title="Street">
						<img width='10%' height='10%' src="mediaImg/fiz/image22.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image23.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/fiz/image23.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image24.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/fiz/image24.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image25.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/fiz/image25.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image26.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/fiz/image26.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/fiz/image27.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/fiz/image27.jpg" alt="image">
					</a>
				</li>
			</ul>
		</div>
	</section>`;
});
ourChild.addEventListener('click', function(event) {   //НАШИ ВОСПИТАННИКИ
	var photo = document.querySelector('.mediaContentPhoto');
		photo.innerHTML =
		`<section id="exemple" class="containerMed">
		<div class="wrap small-width">
			<div id="try"></div>
			<ul id="box-container">
				<li class="box">
					<a href="mediaImg/childs/image1.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/childs/image1.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image2.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/childs/image2.jpg" alt="image">
					</a>
				</li>
				
				<li class="box">
					<a href="mediaImg/childs/image4.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/childs/image4.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image5.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/childs/image5.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image6.jpg" class="swipebox" title="City">
						<img width='10%' height='10%' src="mediaImg/childs/image6.jpg" alt="image">
					</a>
				</li>
				
				<li class="box">
					<a href="mediaImg/childs/image8.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/childs/image8.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image9.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/childs/image9.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image10.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/childs/image10.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image11.jpg" class="swipebox" title="Street">
						<img width='10%' height='10%' src="mediaImg/childs/image11.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image12.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/childs/image12.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image13.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/childs/image13.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image14.jpg" class="swipebox" title="City">
						<img width='10%' height='10%' src="mediaImg/childs/image14.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image15.jpg" class="swipebox" title="Street">
						<img width='10%' height='10%' src="mediaImg/childs/image15.jpg" alt="image">
					</a>
				</li>
				
				<li class="box">
					<a href="mediaImg/childs/image19.jpg" class="swipebox" title="Street">
						<img width='10%' height='10%' src="mediaImg/childs/image19.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image17.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/childs/image17.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image18.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/childs/image18.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image16.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/childs/image16.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image20.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/childs/image20.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image21.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/childs/image21.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image22.jpg" class="swipebox" title="City">
						<img width='10%' height='10%' src="mediaImg/childs/image22.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image23.jpg" class="swipebox" title="Street">
						<img width='10%' height='10%' src="mediaImg/childs/image23.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image24.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/childs/image24.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image25.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/childs/image25.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image26.jpg" class="swipebox" title="City">
						<img width='10%' height='7%' src="mediaImg/childs/image26.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image27.jpg" class="swipebox" title="Street">
						<img width='10%' height='10%' src="mediaImg/childs/image27.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image28.jpg" class="swipebox" title="Mustache Guy">
						<img width='10%' height='10%' src="mediaImg/childs/image28.jpg" alt="image">
					</a>
				</li>
				<li class="box">
					<a href="mediaImg/childs/image29.jpg" class="swipebox" title="Fog">
						<img width='10%' height='10%' src="mediaImg/childs/image29.jpg" alt="image">
					</a>
				</li>
			</ul>
		</div>
	</section>`;
	})
buttonTopStaff.addEventListener('click', function(event) { 
	var video = document.querySelector('.mediaContentVideo');
	var photo = document.querySelector('.mediaContentPhoto');
	var h3arr = document.querySelector('.h3arrow');
	video.setAttribute("style", "display:none");
	btnAlbums.setAttribute("style", "display:block");
	photo.setAttribute("style", "display:block");
	h3arr.setAttribute("style", "display:block");
})








var videoObj = [
	{ 
		id : 1,
		linkHtml : '<iframe width="330" height="220"  src="http://ok.ru/videoembed/41701870183" frameborder="0" allowfullscreen></iframe>'
	},
	{
		id : 2,
		linkHtml : '<iframe width="330" height="220" src="http://ok.ru/videoembed/41786935911" frameborder="0" allowfullscreen></iframe>'
	},
	{
		id : 3,
		linkHtml : '<iframe width="330" height="220" src="http://ok.ru/videoembed/40152009319" frameborder="0" allowfullscreen></iframe>'
	},
	{
		id : 4,
		linkHtml : '<iframe width="330" height="220" src="http://ok.ru/videoembed/39469189735" frameborder="0" allowfullscreen></iframe>'
	},
	{
		id : 5,
		linkHtml : '<iframe width="330" height="220" src="http://ok.ru/videoembed/36299344487" frameborder="0" allowfullscreen></iframe>'
	},
	{
		id : 6,
		linkHtml : '<iframe width="330" height="220" src="http://ok.ru/videoembed/36306487911" frameborder="0" allowfullscreen></iframe>'
	}
// 	{
// 		id : 7,//days9
// 		linkHtml : '<iframe width="560" height="315" src="//ok.ru/videoembed/27888716391" frameborder="0" allowfullscreen></iframe>'
// 	},
// 	{
// 		id : 7,//ddday9
// 		linkHtml : '<iframe width="560" height="315" src="//ok.ru/videoembed/27900775015" frameborder="0" allowfullscreen></iframe>'
// 	},
// 	{
// 		id : 7,//ddday9
// 		linkHtml : '<iframe width="560" height="315" src="//ok.ru/videoembed/27895269991" frameborder="0" allowfullscreen></iframe>'
// 	},
// 	{
// 		id : 7,//ddday9
// 		linkHtml : '<iframe width="560" height="315" src="//ok.ru/videoembed/27852737127" frameborder="0" allowfullscreen></iframe>'
// 	},

// {
// 		id : 7,//ddday9
// 		linkHtml : '<iframe width="560" height="315" src="//ok.ru/videoembed/27871021671" frameborder="0" allowfullscreen></iframe>'
// 	},

// {
// 		id : 7,//ddday9
// 		linkHtml : '<iframe width="560" height="315" src="//ok.ru/videoembed/27889109607" frameborder="0" allowfullscreen></iframe>'
// 	},

// {
// 		id : 7,//ddday9
// 		linkHtml : '<iframe width="560" height="315" src="//ok.ru/videoembed/27895269991" frameborder="0" allowfullscreen></iframe>'
// 	},
	// <iframe width="560" height="315" src="//ok.ru/videoembed/27900512871" frameborder="0" allowfullscreen></iframe>
	// <iframe wid
	// th="560" height="315" src="//ok.ru/videoembed/27629455975" frameborder="0" allowfullscreen></iframe>
	//tv Deti na TV



];
var VideoListNode = document.querySelector('.mediaContentVideo');


var setStaffs = (list, div) => {
	list.forEach((item) => {
		var span = document.createElement('span');
		span.setAttribute('class', 'col-md-4 col-xs-12 col-sm-6 col-lg-4');
		span.innerHTML = item.linkHtml;
		div.appendChild(span);
	})
}
setStaffs(videoObj, VideoListNode);