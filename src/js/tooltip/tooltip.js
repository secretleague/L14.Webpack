import { default as $ } from 'jquery'

export default function(text) {
  const $el = this;

  if ($el.data('tooltip')) return
  $el.data('tooltip', true);

  const $tooltip = $('<div />', {
    text,
    class: 'tooltip'
  });

  $el.append($tooltip);
  addEvents();

  function handleMouseEnter() {
    $tooltip.show();
  }

  function handleMouseLeave() {
    $tooltip.hide();
  }

  function addEvents() {
    $el.hover(handleMouseEnter, handleMouseLeave);
  }
}
