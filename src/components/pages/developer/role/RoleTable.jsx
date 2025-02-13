import useQueryData from "@/components/custom-hooks/useQueryData";
import { devApiVersion } from "@/components/helpers/functions-general";
import ModalArchive from "@/components/partials/modal/ModalArchive";
import ModalDelete from "@/components/partials/modal/ModalDelete";
import ModalRestore from "@/components/partials/modal/ModalRestore";
import ModalWrapperCenter from "@/components/partials/modal/ModalWrapperCenter";
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
import { FaArchive, FaEdit, FaPlus } from "react-icons/fa";
import { MdDelete, MdRestore } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import ModalAddRole from "./ModalAddRole";

const RoleTable = ({ setIsOpenRole }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("opacity-0");

  const [isFilter, setIsFilter] = React.useState(false);
  const [filterData, setFilterData] = React.useState("");
  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [itemData, setItemData] = React.useState(null);
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

  const handleClose = () => {
    // set animation
    setAnimate("opacity-0");
    // clear the modal
    setTimeout(() => {
      // dispatch(setIsSearch(false));
      setIsOpenRole(false);
    }, 200);
  };

  const handleAdd = () => {
    setItemEdit(null);
    dispatch(setIsAdd({ modal: true, modalCode: "role" }));
  };

  const handleItemEdit = (item) => {
    setItemEdit(item);
    dispatch(setIsAdd({ modal: true, modalCode: "role" }));
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive({ modal: true, modalCode: "role" }));
    setId(item.role_aid);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore({ modal: true, modalCode: "role" }));
    setId(item.role_aid);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete({ modal: true, modalCode: "role" }));
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

  React.useEffect(() => {
    setAnimate("");
  }, []);

  return (
    <>
      <ModalWrapperCenter
        className={`relative transition-all ease-in-out transform duration-200 md:max-h-[700px] md:w-[1200px] h-[680px] w-[320px] bg-light ${animate} overflow-auto rounded-md`}
        handleClose={handleClose}
        opacity="opacity-50"
      >
        <section id="role" className="p-4 ">
          <div className="flex items-center justify-between gap-2 w-full pb-4">
            <div className="text-sm ">Role</div>
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
                          <Status
                            text={
                              item.role_is_active == 1 ? "Active" : "Inactive"
                            }
                          />
                        </td>
                        <td className="px-6">{item.role_name}</td>
                        <td className="px-6">{item.role_description}</td>
                        <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0 mr-2">
                          <ul className="gap-4 justify-center pl-4 flex group-hover:bg-gray-100">
                            {item.role_is_active == 0 ? (
                              <>
                                <li
                                  className="tooltip-action-table"
                                  data-tooltip="Restore"
                                  onClick={() => handleRestore(item)}
                                >
                                  <MdRestore className="text-gray-600 text-[18px]" />
                                </li>
                                <li
                                  className="tooltip-action-table"
                                  data-tooltip="Delete"
                                  onClick={() => handleDelete(item)}
                                >
                                  <MdDelete className="text-gray-600 text-[18px]" />
                                </li>
                              </>
                            ) : (
                              <>
                                <li
                                  className="tooltip-action-table"
                                  data-tooltip="Edit"
                                  onClick={() => handleItemEdit(item)}
                                >
                                  <FaEdit className="text-gray-600 text-[16px]" />
                                </li>
                                <li
                                  className="tooltip-action-table"
                                  data-tooltip="Archive"
                                  onClick={() => handleArchive(item)}
                                >
                                  <FaArchive className=" text-gray-600 text-[14px]" />
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
      </ModalWrapperCenter>

      {store.isArchive && store.isArchive?.modalCode === "role" && (
        <ModalArchive
          mysqlEndpoint={`${devApiVersion}/role/active/${id}`}
          msg={"Are you sure you want to archive this role?"}
          successMsg={"Archived successfully."}
          queryKey={"role"}
        />
      )}
      {store.isRestore && store.isRestore?.modalCode === "role" && (
        <ModalRestore
          mysqlEndpoint={`${devApiVersion}/role/active/${id}`}
          msg={"Are you sure you want to restore this role?"}
          successMsg={"Restored successfully."}
          queryKey={"role"}
        />
      )}
      {store.isDelete && store.isDelete?.modalCode === "role" && (
        <ModalDelete
          mysqlEndpoint={`${devApiVersion}/role/${id}`}
          msg={"Are you sure you want to delete this role?"}
          successMsg={"Deleted successfully."}
          item={dataItem.role_name}
          queryKey={"role"}
        />
      )}
      {store.isAdd && store.isAdd?.modalCode === "role" && (
        <ModalAddRole itemEdit={itemEdit} />
      )}
    </>
  );
};

export default RoleTable;
