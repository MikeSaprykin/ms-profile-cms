import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Root from './root';

ReactDOM.render(
    <Root />,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
