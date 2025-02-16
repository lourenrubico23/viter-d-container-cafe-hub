import { queryDataInfinite } from "@/components/custom-hooks/queryDataInfinite";
import {
  devApiVersion,
  formatDate,
} from "@/components/helpers/functions-general";
import LoadMore from "@/components/partials/LoadMore";
import ModalWrapperCenter from "@/components/partials/modal/ModalWrapperCenter";
import SearchBar from "@/components/partials/SearchBar";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner";
import NoData from "@/components/partials/spinners/NoData";
import ServerError from "@/components/partials/spinners/ServerError";
import TableLoading from "@/components/partials/spinners/TableLoading";
import { StoreContext } from "@/store/StoreContext";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { useInView } from "react-intersection-observer";

const LogTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("opacity-0");

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
    queryKey: ["notificationlog", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${devApiVersion}/notificationlog/search`, // search endpoint
        `${devApiVersion}/notificationlog/page/${pageParam}`, // list endpoint
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
        <div className="text-sm ">Notification Log</div>

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
                <th>Date Sent</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Receiver</th>
              </tr>
            </thead>
            <tbody className="relative">
              {(status === "pending" || result?.pages[0].data.length === 0) && (
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
                      <td className="pl-2 ">{counter++}.</td>
                      <td className="">
                        {formatDate(item.notification_log_created)}
                      </td>
                      <td className="">{item.notification_log_name}</td>
                      <td className="">{item.notification_log_email}</td>
                      <td className="">{item.notification_log_phone}</td>
                      <td className="">{item.notification_log_message}</td>
                      <td className="">{item.notification_log_receiver}</td>
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
    </>
  );
};

export default LogTable;
