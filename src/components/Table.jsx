import { Checkbox, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import posts from "../services/mainServices";

const Tables = () => {
  const token = window.localStorage.token;
  const [products, setProducts] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  // Invoke when user click to request another page.
  // console.log(currentItems);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;

    setItemOffset(newOffset);
  };
  // console.log(token);
  useEffect(() => {
    posts
      .products(token)
      .then((response) => response.json())
      .then((data) => setProducts(data.items));
  }, []);

  // overflow-x-scroll
  return (
    <>
      <div className="  mt-4 ml-5 ">
        <div className="  w-full">
          <Table align="center" hoverable={true}>
            <Table.Head align="center">
              <Table.HeadCell className="!w-[100vh]">
                <Checkbox />
              </Table.HeadCell>
              <Table.HeadCell  className='w-[300vh]'>Product name</Table.HeadCell>
              <Table.HeadCell>Products</Table.HeadCell>
              <Table.HeadCell>Categorie</Table.HeadCell>
              <Table.HeadCell>Barcode</Table.HeadCell>
              <Table.HeadCell>Sku</Table.HeadCell>
              <Table.HeadCell>Tavsif</Table.HeadCell>
              <Table.HeadCell>Shipapple</Table.HeadCell>
              <Table.HeadCell>Show-market</Table.HeadCell>
              <Table.HeadCell>Miqdor</Table.HeadCell>
              <Table.HeadCell>Price-per-one</Table.HeadCell>
              <Table.HeadCell>TotalPrice-per-one</Table.HeadCell>
              <Table.HeadCell>Discount</Table.HeadCell>
              <Table.HeadCell>Supplyprice-per-one</Table.HeadCell>
              <Table.HeadCell>Total-supply-price</Table.HeadCell>
              <Table.HeadCell>Тип</Table.HeadCell>
              <Table.HeadCell>Пол</Table.HeadCell>
              <Table.HeadCell>Торговая...</Table.HeadCell>

              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>

            <Table.Body className="">
              {currentItems.map((item) => (
                <Table.Row
                  align="center"
                  key={item.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="!p-4">
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.productName}
                  </Table.Cell>
                  <Table.Cell > wfew{item.id}</Table.Cell>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell className="whitespace-nowrap ">
                    {item.barcode}
                  </Table.Cell>
                  <Table.Cell>{item.sku}</Table.Cell>
                  <Table.Cell>{item.description}</Table.Cell>
                  <Table.Cell>{item.shippable}</Table.Cell>
                  <Table.Cell>{item.showMarket}</Table.Cell>
                  <Table.Cell>{item.stocks[0].count + item.unit}</Table.Cell>
                  <Table.Cell>{item.stocks[0].sellPrice.UZS}UZS</Table.Cell>
                  <Table.Cell>UZS{item.stocks[0].sellPrice.UZS}</Table.Cell>
                  <Table.Cell>-</Table.Cell>
                  <Table.Cell>{item.stocks[0].supplyPrice.UZS} UZS</Table.Cell>
                  <Table.Cell>{item.stocks[0].supplyPrice.UZS} UZS</Table.Cell>
                  <Table.Cell>{item.productProperties[0].value} </Table.Cell>
                  <Table.Cell>{item.productProperties[1].value} </Table.Cell>
                  <Table.Cell>{item.productProperties[2].value} </Table.Cell>

                  <Table.Cell>
                    <a
                      href="/tables"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
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
    </>
  );
};

export default Tables;
