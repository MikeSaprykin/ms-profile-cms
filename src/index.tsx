import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './routing.config';

ReactDOM.render(
    <BrowserRouter>
        {renderRoutes(routes)}
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
