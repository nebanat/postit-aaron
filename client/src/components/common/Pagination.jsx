import React from 'react';


const Pagination = ({ pageNumber, currentPaginatePage, onPaginateClick }) => {
  /**
   * @param { page } page
   * @return { jsx } jsx
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
   * @return { jsx } jsx
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
   * @return { jsx } jsx
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
