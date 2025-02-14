import useQueryData from "@/components/custom-hooks/useQueryData";
import {
  devApiVersion,
  hexToRgb,
} from "@/components/helpers/functions-general";
import DashboardNavigation from "@/components/partials/dashboard/DashboardNavigation";
import DashboardUpperNav from "@/components/partials/dashboard/DashboardUpperNav";
import ModalError from "@/components/partials/modal/ModalError";
import ModalSuccess from "@/components/partials/modal/ModalSuccess";
import { setIsAdd } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import UserTable from "./UserTable";
import ModalAddUser from "./modal/ModalAddUser";
import ModalSend from "./modal/ModalSend";
import ModalSendingEmailStatus from "./modal/ModalSendingEmailStatus";
import ModalSentEmailSummary from "./modal/ModalSentEmailSummary";
import { FaPlus } from "react-icons/fa";
import ModalWrapperCenter from "@/components/partials/modal/ModalWrapperCenter";

const User = ({ setIsOpenUserList }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("opacity-0");

  const [itemEdit, setItemEdit] = React.useState(null);
  const [isSend, setIsSend] = React.useState(false);
  const [isSendingLoading, setIsSendingLoading] = React.useState(false);
  const [queryCount, setQueryCount] = React.useState(0);
  const [emailCount, setEmailCount] = React.useState(0);
  const [confirmSend, setConfirmSend] = React.useState(false);
  const [recipientList, setRecipientList] = React.useState([]);
  const [isSuccessSendingEmail, setIsSuccessSendingEmail] =
    React.useState(false);
  const [queryStatus, setQueryStatus] = React.useState(null);
  const [payloadData, setPayloadData] = React.useState(null); // Store form values

  const {
    isFetching,
    error,
    data: colorsData,
  } = useQueryData(
    `${devApiVersion}/colors`, // endpoint
    "get", // method
    "colors" // key
  );

  const handleAdd = () => {
    setItemEdit(null);
    dispatch(setIsAdd({ modal: true, modalCode: "user" }));
    console.log("Open", setIsAdd({ modal: true, modalCode: "user" }));
  };

  const handleClose = () => {
    // set animation
    setAnimate("opacity-0");
    // clear the modal
    setTimeout(() => {
      // dispatch(setIsSearch(false));
      setIsOpenUserList(false);
    }, 200);
  };

  document
    .querySelector(":root")
    .style.setProperty(
      "--primary-color",
      hexToRgb(colorsData?.data[0]?.colors_primary || "#000000")
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--secondary-color",
      hexToRgb(colorsData?.data[0]?.colors_secondary || "#000000")
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--accent-color",
      hexToRgb(colorsData?.data[0]?.colors_accent || "#000000")
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--light-color",
      hexToRgb(colorsData?.data[0]?.colors_light || "#000000")
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--dark-color",
      hexToRgb(colorsData?.data[0]?.colors_dark || "#000000")
    );

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
        <div className="mx-5 pt-4">
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="text-sm ">User</div>
            <div>
              <button
                type="button"
                className="flex items-center gap-2 hover:text-primary underline"
                onClick={handleAdd}
              >
                <FaPlus /> Add
              </button>
            </div>
          </div>
          <div className="pb-4">
            <UserTable
              setIsOpenUserList={setIsOpenUserList}
              setItemEdit={setItemEdit}
              itemEdit={itemEdit}
              setEmailCount={setEmailCount}
              setRecipientList={setRecipientList}
              recipientList={recipientList}
            />
          </div>
        </div>
      </ModalWrapperCenter>

      {store.error && <ModalError />}
      {store.success && <ModalSuccess />}

      {/* {console.log("Modal Send Open: ", isSend)} */}
      {!itemEdit && isSend && (
        <ModalSend
          recipientList={recipientList}
          payloadData={payloadData}
          setIsSend={setIsSend}
          setConfirmSend={setConfirmSend}
          setQueryCount={setQueryCount}
          setIsSendingLoading={setIsSendingLoading}
          isSendingLoading={isSendingLoading}
          setIsSuccessSendingEmail={setIsSuccessSendingEmail}
          setQueryStatus={setQueryStatus}
          msg={`Are you sure you want to add this user and send a validation
                email?`}
          mysqlEndpoint={`${devApiVersion}/user`}
          queryKey={`user`}
        />
      )}
    
        {confirmSend && (
          <ModalSendingEmailStatus
            recipientList={recipientList}
            queryCount={queryCount}
          />
        )}
        {isSuccessSendingEmail && (
          <ModalSentEmailSummary
            queryCount={queryCount}
            recipientList={recipientList}
            setIsSuccessSendingEmail={setIsSuccessSendingEmail}
            setQueryCount={setQueryCount}
            queryStatus={queryStatus}
            message={"The email has been sent successfully!"}
          />
        )}
 

      {store.isAdd?.modal && store.isAdd?.modalCode === "user" && (
        <ModalAddUser
          itemEdit={itemEdit}
          setIsSend={setIsSend}
          setPayloadData={setPayloadData}
          setEmailCount={setEmailCount}
          setRecipientList={setRecipientList}
        />
      )}
    </>
  );
};

export default User;
