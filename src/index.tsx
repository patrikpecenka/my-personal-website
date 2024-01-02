import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'pages/App';
import i18n from 'i18n'
import { I18nextProvider } from 'react-i18next';
import Lenis from '@studio-freight/lenis'

import 'main.scss'

const lenis = new Lenis()

lenis.on('scroll', (e: any) => {
  console.log(e)
})

function raf(time: any) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

