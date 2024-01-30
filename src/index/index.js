console.log('hello world');
import { title } from '../title/title';
import { nav } from '../nav/nav';
import { socialLinks } from '../social_links/social_links';

const container = document.createElement('main');

const left_column = document.createElement('div');
left_column.append(title(), nav(), socialLinks());

const right_column = document.createElement('div');

container.append(left_column, right_column);

document.body.append(container);
