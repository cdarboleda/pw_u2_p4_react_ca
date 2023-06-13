const rootElement = document.getElementById('root');
const element = React.createElement(
    'h1', {className: 'container'},'Hola Mundo en React.JS'
);
ReactDOM.render(element, rootElement);
