import { render } from 'preact';
import { App } from './test-app/app';

render(
  <App />,
  document.getElementById('footer-widget-placeholder') as HTMLElement
);
