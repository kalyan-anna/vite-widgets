import { render } from 'preact';
import { App } from './test-app/app';

render(
  <App />,
  document.getElementById('contact-widget-holder') as HTMLElement
);
