import { defineCustomElements } from './utils';
import db from './db';
import './styles/main.css';
import CardViewer from './components/card-viewer';
import PageHeader from './components/page-header';

defineCustomElements();

window.onload = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.setAttribute('data-theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
  }
};

const app = document.querySelector('#app')!;

const viewer = document.createElement('card-viewer') as CardViewer;
viewer.cards = db.cards;

const pageHeader = document.createElement('page-header') as PageHeader;

app.append(pageHeader, viewer);
