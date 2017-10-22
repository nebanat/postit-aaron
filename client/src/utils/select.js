/**
 * @returns {select} select
 */
export default function () {
  $('input[data-list]').each(function () {
    let availableTags = $(`#${  $(this).attr("data-list")}`).find('option').map(function () {
      return this.value;
    }).get();

    $(this).autocomplete({
      source: availableTags
    }).on('focus', function () {
      $(this).autocomplete('search', ' ');
    }).on('search', function () {
      if ($(this).val() === '') {
        $(this).autocomplete('search', ' ');
      }
    });
  });
}
