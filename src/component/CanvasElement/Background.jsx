import Wrapper from '../Wrapper.jsx'
import FSS from '../../lib/fss.js'

const Background = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},

	componentDidMount() {
		this.backgroundEffect()
	},

	componentDidUpdate() {
		this.backgroundEffect()
	},

	// shouldComponentUpdate(nextProps) {

	// },

	render() {
		let element = this.props.element
		let elementId = this.props.elementId
		let selectElementId = this.props.selectElementId

		return (
			<Wrapper element={ element } elementId={ elementId } selectElementId={ selectElementId }>
				<div style={{width: '100%', height: '100%'}} ref="background">
					<div></div>
				</div>
			</Wrapper>
		)
	},

	backgroundEffect() {
		let self = this
    let backgroundEffect = this.props.element.backgroundEffect
    let container = self.refs.background
    console.log(backgroundEffect.enable)
		if ( !backgroundEffect.enable ) {
			let el = document.createElement('div')
      container.replaceChild(el, container.firstChild)
			return
		}

    var renderer = new FSS.SVGRenderer();
    var scene = new FSS.Scene();
    var light = new FSS.Light(backgroundEffect.light || '#111122', backgroundEffect.back || '#FF0022');
    // FSS.Plane 定义： function(width, height, segments, slices)
    var geometry = new FSS.Plane(container.offsetWidth, container.offsetHeight, 6, 4);
    var material = new FSS.Material('#FFFFFF', '#FFFFFF');
    var mesh = new FSS.Mesh(geometry, material);
    var now, start = Date.now();

    initialise()
    resize()
    animate()

    function initialise() {
      scene.add(mesh);
      scene.add(light);
      container.replaceChild(renderer.element, container.firstChild)
    }

    function resize() {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    }

    function animate() {
      now = Date.now() - start;
      light.setPosition(300*Math.sin(now*0.001), 200*Math.cos(now*0.0005), 60);
      renderer.render(scene);
      // requestAnimationFrame(animate);
    }

	}
})

export default Background
