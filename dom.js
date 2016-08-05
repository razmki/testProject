var buttonTopStaff = document.querySelector('.topStaff');
var buttonLowStaff = document.querySelector('.lowStaff');
console.log(buttonLowStaff);
buttonLowStaff.addEventListener('click', function(event) { 
	var text1 = document.querySelector('.text1');
	var text2 = document.querySelector('.text2');

	text1.setAttribute("style", "display:none");
	text2.setAttribute("style", "display:inline");
})

var staffs1 = [
	{
		name : 'Гуралюк Людмила Николаевна',
		prof : 'Заведующий ГУО «Ясли-сад №44 г.Бреста» ',
		img : 'dir.jpg'
	},
	{
		name : 'Копытич Татьяна Владимировна',
		prof : 'Заместитель заведующего по основной деятельности',
		img : 'kop.jpg'
	},
	{
		name : 'Беневят Жанна Петровна',
		prof : 'Заместитель заведующего по хозяйственной работе',
		img : 'ben.jpg'
	}
];
var staffs2 = [
	{
		group : '1 Группа',
		name : 'Мусвидас Людмила Ивановна',
		prof : 'Воспитатель высшей квалификационной категории'
	},
	{
		group : '1 Группа',
		name : 'Лира Татьяна Павловна',
		prof : 'Воспитатель высшей квалификационной категории'
	},
	{
		group : '1 Группа',
		name : 'Яльницкая Ольга Михайловна',
		prof : 'Помощник воспитателя'
	},
	{
		group : '2 Группа',
		name : 'Ровнейко Татьяна Ивановна',
		prof : 'Воспитатель первой квалификационной категории'
	},
	{
		group : '2 Группа',
		name : 'Дубовик Инна Леонтьевна',
		prof : 'Воспитатель дошкольного образования'
	},
	{
		group : '2 Группа',
		name : 'Бусько Алла Михайловна',
		prof : 'Помощник воспитателя'
	},
	{
		group : '3 Группа',
		name : 'Иовик Нина Ивановна',
		prof : 'Воспитатель первой квалификационной категории'
	},
	{
		group : '3 Группа',
		name : 'Ходос Алла Сергеевна',
		prof : 'Воспитатель высшей квалификационной категории'
	},
	{
		group : '3 Группа',
		name : 'Стовбуник Мария Николаевна',
		prof : 'Помощник воспитателя'
	},
	{
		group : '4 Группа',
		name : 'Игнатовец Елена Филипповна',
		prof : 'Воспитатель первой квалификационной категории'
	},
	{
		group : '4 Группа',
		name : 'Прокопюк Ольга Александровна',
		prof : 'Воспитатель высшей квалификационной категории'
	},
	{
		group : '4 Группа',
		name : 'Данилюк Анна Игоревна',
		prof : 'Помощник воспитателя'
	},
	{
		group : '5 Группа',
		name : 'Ковалевич Светлана Ивановна',
		prof : 'Воспитатель высшей квалификационной категории'
	},
	{
		group : '5 Группа',
		name : 'Колесова Валентина Леонидовна',
		prof : 'Воспитатель высшей квалификационной категории'
	},
	{
		group : '5 Группа',
		name : 'Осиюк Татьяна Николаевна',
		prof : 'Помощник воспитателя'
	},
	{
		group : '6 Группа',
		name : 'Кожало Мария Арсеньевна',
		prof : 'Воспитатель высшей квалификационной категории'
	},
	{
		group : '6 Группа',
		name : 'Китель Ирина Ивановна',
		prof : 'Воспитатель дошкольного образования'
	},
	{
		group : '6 Группа',
		name : 'Грицук Татьяна Денисовна',
		prof : 'Помощник воспитателя'
	},
	{
		group : '7 Группа',
		name : 'Кочурко Светлана Леонидовна',
		prof : 'Воспитатель первой квалификационной категории',
	},
	{
		group : '7 Группа',
		name : 'Майсеенко Елена Васильевна',
		prof : 'Воспитатель высшей квалификационной категории'
	},
	{
		group : '7 Группа',
		name : 'Янчук Людмила Игнатьевна',
		prof : 'Помощник воспитателя'
	},
	{
		group : '8 Группа',
		name : 'Лозюк Диана Юрьевна',
		prof : 'Воспитатель высшей квалификационной категории',
	},
	{
		group : '8 Группа',
		name : 'Левонюк Лариса Николаевна',
		prof : 'Воспитатель высшей квалификационной категории'
	},
	{
		group : '8 Группа',
		name : 'Марченок Лариса Юрьевна',
		prof : 'Помощник воспитателя'
	},
	{
		group : '9 Группа',
		name : 'Михалюк Светлана Дмитриевна',
		prof : 'Воспитатель высшей квалификационной категории',
	},
	{
		group : '9 Группа',
		name : 'Шарипова Татьяна Дмитриевна',
		prof : 'Воспитатель высшей квалификационной категории'
	},
	{
		group : '9 Группа',
		name : 'Крисюк Галина Михайловна',
		prof : 'Помощник воспитателя'
	},
	{
		group : '10 Группа',
		name : 'Гайдукова Елена Александровна',
		prof : 'Воспитатель дошкольного образования',
	},
	{
		group : '10 Группа',
		name : 'Вакульчик Валентина Иосифовна',
		prof : 'Воспитатель высшей квалификационной категории'
	},
	{
		group : '10 Группа',
		name : 'Вабищевич Людмила Васильевна',
		prof : 'Помощник воспитателя'
	},
	{
		group : '11 Группа',
		name : 'Бохон Елена Михайловна',
		prof : 'Воспитатель высшей квалификационной категории',
	},
	{
		group : '11 Группа',
		name : 'Лебедич Надежда Николаевна',
		prof : 'Воспитатель высшей квалификационной категории'
	},
	{
		group : '11 Группа',
		name : 'Игнатчик Светлана Ивановна',
		prof : 'Помощник воспитателя'
	},
	{
		group : '12 Группа',
		name : 'Бушук Елена Михайловна',
		prof : 'Воспитатель первой квалификационной категории',
	},
	{
		group : '12 Группа',
		name : 'Костюкович Татьяна Михайловна',
		prof : '????'
	},
	{
		group : '12 Группа',
		name : 'Вовченко Галина Чеславовна',
		prof : 'Помощник воспитателя'
	},



];

var staffListNode1 = document.querySelector('.staff-list1');
var staffListNode2 = document.querySelector('.staff-list2');

var setStaffs = (list, div) => {
	list.forEach((item) => {
		var img = document.createElement('img');
		var h2 = document.createElement('h2');
		var h4 = document.createElement('h4');
		var clearBoth = document.createElement('div');
		clearBoth.setAttribute("style", "clear: both");
		img.setAttribute('src',item.img);
		h2.innerHTML = item.name;
		h4.innerHTML = item.prof;
		img.classList.add( 'img-staff' );
		div.appendChild(img);
		div.appendChild(h2);
		div.appendChild(h4);
		div.appendChild(clearBoth);
	})
}
var setStaffs2 = (list, div) => {
	var check = 0;
	list.forEach((item) => {
		var img = document.createElement('img');
		var h2 = document.createElement('h2');
		var h4 = document.createElement('h4');
		var h3 = document.createElement('h3');
		var clearBoth = document.createElement('div');
		clearBoth.setAttribute("style", "clear: both");
		h2.classList.add('col-md-12', 'text-center');
		h3.classList.add('col-md-6');
		h4.classList.add('col-md-6');
		if (check == 0 || check%3 == 0) {
			h2.innerHTML = item.group;
			h2.setAttribute("style", "padding-bottom: 15px");
		}
		h3.innerHTML = item.name;
		h4.innerHTML = item.prof;
		div.appendChild(h2);
		div.appendChild(h3);
		div.appendChild(h4);
		div.appendChild(clearBoth);
		check += 1;
	})
}
setStaffs(staffs1, staffListNode1);
setStaffs2(staffs2, staffListNode2);
buttonTopStaff.addEventListener('click', function(event) { 

var text1 = document.querySelector('.text1');
var text2 = document.querySelector('.text2');


text1.setAttribute("style", "display:inline");
text2.setAttribute("style", "display:none");


 })
