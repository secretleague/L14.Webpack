import { default as $ } from 'jquery'
import { Animal, Tooltip } from './js'
import css from './css/styles.css';  

$.fn.tooltip = Tooltip

$(document).ready(function() {
  Animal.init();
});
