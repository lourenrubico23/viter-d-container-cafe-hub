import { queryDataInfinite } from "@/components/custom-hooks/queryDataInfinite";
import { devApiVersion } from "@/components/helpers/functions-general";
import LoadMore from "@/components/partials/LoadMore";
import ModalDelete from "@/components/partials/modal/ModalDelete";
import ModalWrapper from "@/components/partials/modal/ModalWrapper";
import ModalWrapperCenter from "@/components/partials/modal/ModalWrapperCenter";
import SearchBar from "@/components/partials/SearchBar";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner";
import NoData from "@/components/partials/spinners/NoData";
import ServerError from "@/components/partials/spinners/ServerError";
import TableLoading from "@/components/partials/spinners/TableLoading";
import Status from "@/components/partials/Status";
import { setIsAdd, setIsDelete } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import ModalAddReceiver from "./ModalAddReceiver";

const ReceiverTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("opacity-0");
  const [itemEdit, setItemEdit] = React.useState(null);

  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");

  const [onSearch, setOnSearch] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const search = React.useRef({ value: "" });
  const { ref, inView } = useInView();

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["receiver", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${devApiVersion}/receiver/search`, // search endpoint
        `${devApiVersion}/receiver/page/${pageParam}`, // list endpoint
        store.isSearch, // search boolean
        { searchValue: search.current.value, id: "" } // search value
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  let counter = 1;



  const handleAdd = () => {
    setItemEdit(null);
    dispatch(setIsAdd({ modal: true, modalCode: "receiver" }));
    console.log("Open", setIsAdd({ modal: true, modalCode: "receiver" }));
  };

  const handleEdit = (item) => {
    dispatch(setIsAdd({ modal: true, modalCode: "receiver" }));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete({ modal: true, modalCode: "receiver" }));
    setIsData(item.receiver_name);
    setIsId(item.receiver_aid);
  };

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  React.useEffect(() => {
    setAnimate("");
  }, []);

  return (
    <>
    
        <section className=" p-4">
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="text-sm ">Receiver</div>
            <div>
              <button
                type="button"
                className="flex items-center gap-2 hover:text-primary underline"
                onClick={() => handleAdd()}
              >
                <FaPlus /> Add
              </button>
            </div>
          </div>
          <div className="place-self-end">
            <SearchBar
              search={search}
              dispatch={dispatch}
              store={store}
              result={result?.pages}
              isFetching={isFetching}
              setOnSearch={setOnSearch}
              onSearch={onSearch}
            />
          </div>
          <div className="shadow-md rounded-md overflow-y-auto min-h-full md:min-h-[calc(70dvh)] lg:max-h-[calc(90dvh)] mb-10 lg:mb-0 lg:min-h-0 relative">
            {isFetching && status !== "pending" && <FetchingSpinner />}
            <table>
              <thead>
                <tr className="text-[black]">
                  <th className="pl-2 w-[1rem]">#</th>
                  <th className="min-w-[10rem]">Status</th>
                  <th className="min-w-[10rem]">Name</th>
                  <th className="min-w-[10rem]">Email</th>
                  <th className="min-w-[10rem]">Phone/Mobile no.</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="relative">
                {(status === "pending" ||
                  result?.pages[0].data.length === 0) && (
                  <tr className="text-center">
                    <td colSpan="100%" className="p-10">
                      {status === "pending" ? <TableLoading /> : <NoData />}
                    </td>
                  </tr>
                )}

                {error && (
                  <tr className="text-center ">
                    <td colSpan="100%" className="p-10">
                      <ServerError />
                    </td>
                  </tr>
                )}

                {result?.pages.map((page, key) => (
                  <React.Fragment key={key}>
                    {page?.data.map((item, key) => (
                      <tr key={key} className="text-[14px]">
                        <td className="pl-2">{counter++}.</td>
                        <td>
                          {item.receiver_is_active === 1 ? (
                            <Status text="Active" />
                          ) : (
                            <Status text="Inactive" />
                          )}
                        </td>
                        <td className="">{item.receiver_name}</td>
                        <td className="">{item.receiver_email}</td>
                        <td className="">{item.receiver_phone_no}</td>

                        <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0">
                          <button
                            className="tooltip-action-table"
                            data-tooltip="Edit"
                            onClick={() => handleEdit(item)}
                          >
                            <FaEdit className="text-gray-600 text-[16px]" />
                          </button>
                          <button
                            className="tooltip-action-table"
                            data-tooltip="Delete"
                            onClick={() => handleDelete(item)}
                          >
                            <MdDelete className="text-gray-600 text-[18px]" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            <div className="place-self-center">
              <LoadMore
                fetchNextPage={fetchNextPage}
                isFetchingNextPage={isFetchingNextPage}
                hasNextPage={hasNextPage}
                result={result?.pages[0]}
                setPage={setPage}
                page={page}
                refView={ref}
              />
            </div>
          </div>
        </section>
  

      {store.isDelete.modal && store.isDelete.modalCode === "receiver" && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"receiver"}
          mysqlEndpoint={`${devApiVersion}/receiver/${id}`}
          item={isData}
        />
      )}

      {store.isAdd?.modal && store.isAdd?.modalCode === "receiver" && (
        <ModalAddReceiver itemEdit={itemEdit} />
      )}
    </>
  );
};

export default ReceiverTable;
