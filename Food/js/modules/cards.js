import { getResource } from '../services/services'

function cards() {
	class MenuCard {
		constructor(src, alt, title, descr, price, parentSelector, ...classes) {
			this.src = src;  // Путь к изображению
			this.alt = alt;  // Альтернативный текст для изображения
			this.title = title;  // Название меню
			this.descr = descr;  // Описание меню
			this.price = +price;  // Цена меню (преобразуем в число)
			this.classes = classes
			this.parent = document.querySelector(parentSelector);  // Родительский элемент, куда будет добавлена карточка
			this.transfer = 27;  // Курс для перевода в гривны
			this.changeToUAH();  // Вызываем метод для пересчета цены в гривны
		}

		// Метод для перевода цены в гривны
		changeToUAH() {
			this.price = this.price * this.transfer;
		}

		// Метод для отрисовки карточки меню
		render() {
			const element = document.createElement('div');
			this.classes.forEach(className => element.classList.add(className))
			element.innerHTML = `
				<img src=${this.src} alt=${this.alt}>
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.descr}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
				</div>
		`;
			this.parent.append(element);  // Добавляем элемент в родительский контейнер
		}
	}

	getResource('http://localhost:3000/menu')
		.then((data) => {
			data.forEach(({ img, altimg, title, descr, price }) => {
				new MenuCard(img, altimg, title, descr, price, '.menu .container', 'menu__item').render()
			})
		})
}

export default cards;
