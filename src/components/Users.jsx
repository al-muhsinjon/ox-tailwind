// import { Pagination } from "flowbite-react";
import { Card } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";


const Users = (props) => {
  const { data } = props;

  const navigate = useNavigate()
  const LoadDetail = (id) => {
    navigate('/customer/detail/'+id)
  }

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };

  return (
    <>
    <div className="images">
        {currentItems.map(image => {

            return (
                <Card className="w-[80%] m-auto mt-2 shadow-md block cursor-pointer bg-white border border-gray-200 rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" onClick={()=> LoadDetail(image.id)}   >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {image.name}
                </h5>
                <p className="font-normal text-gray-700 md:flex md:justify-between   dark:text-gray-400">
                  <span className="flex items-center"> <BsFillTelephoneFill className="w-10"/> {image.phone}</span>
                  <span className="flex items-center"> <GiMoneyStack className="w-10" /> {image.summa.toLocaleString('en-US')} so'm</span>
                  <b>{image.date}</b>
                </p>
              </Card>
            )
        }
            )}
    </div>
    <div className="m-auto w-auto mt-10 text-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel="&#62;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="&#60;"
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-center m-auto"
        pageLinkClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        previousLinkClassName="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        nextLinkClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        activeLinkClassName="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-500 dark:text-white "
        />
        </div>
      {/* <div className="flex items-center justify-center text-center"> */}
  {/* <Pagination
    currentPage={1}
    layout="pagination"
    onPageChange={handlePageClick}
    showIcons={true}
    totalPages={1000}
    previousLabel="Go back"
    nextLabel="Go forward"
  />
</div> */}
    </>
  );
};

export default Users;
