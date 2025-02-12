import useQueryData from "@/components/custom-hooks/useQueryData";
import { devApiVersion } from "@/components/helpers/functions-general";
import Loadmore from "@/components/partials/Loadmore";
import SearchBar from "@/components/partials/SearchBar";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner";
import NoData from "@/components/partials/spinners/NoData";
import ServerError from "@/components/partials/spinners/ServerError";
import TableLoading from "@/components/partials/spinners/TableLoading";
import Status from "@/components/partials/Status";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
  setIsSearch,
} from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { FaFileZipper, FaTrashArrowUp } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

const RoleTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isFilter, setIsFilter] = React.useState(false);
  const [filterData, setFilterData] = React.useState("");
  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const search = React.useRef({ value: "" });
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();
  const [onSearch, setOnSearch] = React.useState(false);
  let count = 1;

  const {
    isFetching,
    isLoading,
    error,
    data: roles,
  } = useQueryData(
    `${devApiVersion}/role`, // endpoint
    "get", // method
    "role" // key
  );

  const handleItemEdit = (item) => {
    setItemEdit(item);
    dispatch(setIsAdd(true));
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setId(item.role_aid);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.role_aid);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.role_aid);
    setData(item);
  };

  const handleFilterStatus = (e) => {
    search.current.value = "";
    dispatch(setIsSearch(false));
    setFilterData(e.target.value);
    return e;
  };

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <section id="role" className="py-8 border-t-4">
        <div className="flex items-center justify-between gap-2 w-full pb-4">
          <div></div>
          <div>
            <button
              type="button"
              className="flex items-center gap-2 hover:text-primary"
            >
              <FaPlus /> Add
            </button>
          </div>
        </div>
        {/* <div>
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-6">
            <div className="relative flex flex-col gap-1 w-[8rem]">
              <label htmlFor="status" className="text-xs text-textNav">
                Status
              </label>
              <select
                className="py-1.5 px-2 text-xs text-textSelect  rounded-md cursor-pointer"
                name="status"
                id=""
                value={filterData}
                onChange={(e) => handleFilterStatus(e)}
              >
                <option value="">All</option>
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
            </div>
            <div className=""></div>
          </div>
        </div> */}
        <div className="bg-white overflow-auto max-h-[calc(100dvh-350px)] md:max-h-[calc(100dvh-340px)] lg:max-h-[calc(100dvh-350px)]">
          <div className="relative w-full rounded-md overflow-auto">
            {isFetching && !isLoading && <FetchingSpinner />}
            <table>
              <thead className="sticky top-0 bg-white z-10">
                <tr>
                  <th className="w-[3rem] text-left pl-3 px-6">#</th>
                  <th className="w-[7rem] text-left px-2">Status</th>
                  <th className="min-w-[10rem] text-left px-6">Role</th>
                  <th className="w-full text-left px-6">Description</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="relative">
                {(isLoading || roles?.count === 0) && (
                  <tr>
                    <td colSpan="100%" className="p-10">
                      <div className="h-full w-full">
                        {isLoading ? (
                          <TableLoading cols={2} count={20} />
                        ) : (
                          <NoData />
                        )}
                      </div>
                    </td>
                  </tr>
                )}
                {error && (
                  <tr>
                    <td colSpan="100%" className="p-10">
                      <div className="h-full w-full">
                        <ServerError />
                      </div>
                    </td>
                  </tr>
                )}
                {roles?.data.map((item, key) => {
                  return (
                    <tr
                      key={key}
                      className="cursor-pointer group relative hover:bg-gray-100"
                    >
                      <td className="pl-3 px-6">{count++}.</td>
                      <td className="px-2">
                        <Status status={item.role_is_active} />
                      </td>
                      <td className="px-6">{item.role_name}</td>
                      <td className="px-6">{item.role_description}</td>
                      <td
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        id="actions"
                        className="group-hover:bg-gray-100 opacity-0 group-hover:opacity-100 sticky top-0 bg-white h-full w-0 right-0 pr-6 flex justify-end items-center z-50"
                      >
                        <ul className="gap-4 justify-center pl-4 flex group-hover:bg-gray-100">
                          {item.role_is_active === 0 ? (
                            <>
                              <li
                                className="tooltip-action-table"
                                data-tooltip="Restore"
                                onClick={() => handleRestore(item)}
                              >
                                <FaTrashArrowUp className="text-textNav" />
                              </li>
                              <li
                                className="tooltip-action-table"
                                data-tooltip="Delete"
                                onClick={() => handleDelete(item)}
                              >
                                <FaTrash className="text-textNav" />
                              </li>
                            </>
                          ) : (
                            <>
                              <li
                                className="tooltip-action-table"
                                data-tooltip="Edit"
                                onClick={() => handleItemEdit(item)}
                              >
                                <FaEdit className="text-textNav" />
                              </li>
                              <li
                                className="tooltip-action-table"
                                data-tooltip="Archive"
                                onClick={() => handleArchive(item)}
                              >
                                <FaFileZipper className="text-textNav" />
                              </li>
                            </>
                          )}
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="loadmore flex justify-center flex-col items-center"></div>
          </div>
        </div>
      </section>

      {store.isArchive && (
        <ModalArchive
          mysqlApiArchive={`${devApiVersion}/role/active/${id}`}
          msg={"Are you sure you want to archive this role?"}
          successMsg={"Archived successfully."}
          queryKey={"role"}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          mysqlApiRestore={`${devApiVersion}/role/active/${id}`}
          msg={"Are you sure you want to restore this role?"}
          successMsg={"Restored successfully."}
          queryKey={"role"}
        />
      )}
      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`${devApiVersion}/role/${id}`}
          msg={"Are you sure you want to delete this role?"}
          successMsg={"Deleted successfully."}
          item={dataItem.role_name}
          queryKey={"role"}
        />
      )}
    </>
  );
};

export default RoleTable;
