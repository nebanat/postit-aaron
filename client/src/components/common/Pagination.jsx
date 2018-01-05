import React from 'react';

/**
 * @description defines Pagination component
 *
 * @param { object } props  - contains Pagination properties
 *
 * @return { jsx } jsx  - displays pagination
 */
const Pagination = ({ pageNumber, currentPaginatePage, onPaginateClick }) => {
  /**
   * @description displays a list of pagination pages
   *
   * @param { page } page - holds the page number
   *
   * @return { jsx } jsx - returns the list of pagination pages
   */
  const showList = page => (
      <li key={ page }
          value={ page }
          onClick={() => onPaginateClick(page)}
          active = 'active'
          className={ currentPaginatePage === page ?
            'active purple darken-4 waves-effect' : 'waves-effect' }>

         <a href="#">{ page }</a>

      </li>
  );
  /**
   * @description returns pagination base on pageNumber property
   *
   * @return { jsx } jsx - display paginated pages
   */
  const showPages = () => {
    const pages = [];
    for (let i = 1; i <= pageNumber; i += 1) {
      pages.push(showList(i));
    }
    return pages;
  };
  /**
   * @description renders pagination
   *
   * @return { jsx } jsx - shows pagination
   */
  return (
    <div>
      <ul className="pagination">
          { showPages() }
       </ul>
    </div>
  );
};

export default Pagination;
