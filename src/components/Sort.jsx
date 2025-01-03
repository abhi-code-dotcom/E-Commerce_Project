import React from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs';
import styled from 'styled-components';
import { useFilterContext } from '../context/Filter_Context';

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
  useFilterContext();  
  return <Wrapper className="sort-section">
    {/* 1st column */}
    <div className="sorting-list--grid">
      <button
        className={grid_view ? "active sort-btn" : "sort-btn"}
        onClick={setGridView}>
        <BsFillGridFill className="icon" />
      </button>

      <button
        className={!grid_view ? "active sort-btn" : " sort-btn"}
        onClick={setListView}>
        <BsList className="icon" />
      </button>
    </div>
    {/* 2nd column */}
    <div className="product-data">
      <p>{`${filter_products.length}`} Products Availaible</p>
    </div>
    {/* 3rd column */}
    <div className="sort-selection">
      <form action="#">
        {/* <label htmlFor="sort" className='label'>Sort By: </label> */}
        <p>Sort By:</p><select name="sort" id="sort" className='sort-selection--style' onClick={sorting}>
          <option value="lowest">Price(Low to High)</option>
          <option value="highest">Price(High to Low)</option>
          <option value="a-z">Sort(a-z)</option>
          <option value="z-a">Sort(z-a)</option>
        </select>
      </form>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 1rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
.label{
  font-size:1.65rem;
}
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .label{
      font-size:1.9rem;
    }
    .product-data p{
      font-size:1.9rem;
      padding-left:1.8rem;
    }
    .section{
      display: flex;
  justify-content: space-between;
  margin-top: 5rem;
    }
    
  }
`;
export default Sort
