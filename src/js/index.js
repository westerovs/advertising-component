class Component {
    constructor(params) {
        this.params = params
    }

    // вспомогательная ф-ция для удобного рендера в выбранное место
    render = (container, template, place = 'beforeend') => {
        if (container instanceof Element) {
            container.insertAdjacentHTML(place, template)
        }
    }

    templateComponent = (params) => {
        const { w, h, x, y, srcImg, href1, href2, alt, badge, badgeDesc, star, title, className, play, demo } = params

        const inlineSize = `width: ${ w }px; height: ${ h }px;`
        const inlinePos = `top: ${ y }px; left: ${ x }px;`
        
        return `
            <div style="${ inlineSize } ${ inlinePos }" class="component ${ !className ? '' : className }">
              <div class="component__row">
                  <p class="component__badge ${ badge ? 'component__badge--pop' : '' }">Popular</p>
                  <p class="component__badge ${ badgeDesc ? 'component__badge--desc' : '' }">Microgaming</p>
                  <img
                      class="component__img"
                      src="${ srcImg }"
                      width="${ w }"
                      height="${ h }"
                      alt="${ alt }">
              </div>

              <div class="component__controls ${ star ? 'component__controls-star' : ''  }">
                  <h3 class="component__title">${ title }</h3>
                  <div class="component__row-btn">
                      <a href="${ href1 }" class="component__btn ${ play ? 'component__btn--play' : '' }">Play</a>
                      <a href="${ href2 }" class="component__btn ${ demo ? 'component__btn--demo' : '' }">Demo</a>
                </div>
              </div>
            </div>`
    }

    createComponent = () => {
        this.render(this.params.node, this.templateComponent(this.params))
    }
    
    destroy = () => {
        const component = this.params.node.querySelector('.component')
        component.remove()
    }
    
    destroyAll = () => {
        const components = this.params.node.querySelectorAll('.component')
        components.forEach(component => component.remove())
    }
}

// элемент куда нужно вставить блок
const wrapper = document.querySelector('.wrapper')

const component = new Component({
    node: wrapper,
    w: 400,
    h: 250,
    x: 0,
    y: 20,
    srcImg: './src/img/cover.jpg',
        href1: '#',
    href2: '#',
    alt: 'description...',
    title: 'The long long name Game. Super game',
    badge: true,
    badgeDesc: true,
    star: true,
    className: 'my-class',
    play: true,
    demo: true
})
const component2 = new Component({
    node: wrapper,
    w: 300,
    h: 250,
    x: 100,
    y: 320,
    srcImg: './src/img/cover.jpg',
        href1: '#',
    href2: '#',
    alt: 'description...',
    title: 'The long long name Game. Super game',
    badge: true,
    badgeDesc: true,
    star: true,
    className: 'my-class',
    play: true,
    demo: true
})
const component3 = new Component({
    node: wrapper,
    w: 400,
    h: 250,
    x: 450,
    y: 130,
    srcImg: './src/img/cover.jpg',
    href1: '#',
    href2: '#',
    alt: 'description...',
    title: 'The long long name Game. Super game',
    badge: true,
    badgeDesc: true,
    star: true,
    className: 'my-class',
    play: true,
    demo: true
})

component.createComponent()
component2.createComponent()
component3.createComponent()

// setTimeout(() => component3.destroyAll(), 1000)
