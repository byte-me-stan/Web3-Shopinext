import moment from "moment";
import Modals from "./modal/Modal";

const getTime = (date) => {
  return moment.utc(date).format("DD MMM, YYYY");
}

export const productColumns = [
   
    {
      field: "product",
      headerName: "Product",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.mediaUrl} alt="avatar" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "description",
      headerName: "Description",
      width: 230,
    },
    {
      field: "supplier",
      headerName: "Supplier",
      width: 230,
    },
  
    {
      field: "quantity",
      headerName: "Quantity",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
  ];

  export const userColumns = [
    
    {
      field: "fullName",
      headerName: "fullName",
      width: 230,
      renderCell: (params) => {
        return (
          <p>{`${params.row.firstName} ${params.row.lastName}`}</p>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      width: 150,
    },
    {
      field: "country",
      headerName: "Country",
      width: 150,
    },
    {
      field: "city",
      headerName: "City",
      width: 150,
    },
  ];

  
  
  export const orderColumns = [
    {
      field: "product",
      headerName: "Product",
      width: 230,
      renderCell: (params) => {
        return (
          <>
          <Modals items={params?.row.orderItems} name='Orders'/>
        </>
        );
      },
    },
    {
      field: "customer",
      headerName: "Customer",
      width: 230,
      renderCell: (params) => {
        return (
          <p>{params?.row.shippingAddress?.fullName}</p>
        );
      },
    },
  
    {
      field: "date",
      headerName: "Date",
      width: 150,
      renderCell: (params) => {
        return (
          <p>{getTime(params?.row.createdAt)}</p>
        );
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 100,
      renderCell: (params) => {
        return (
          <p>{`$${params.row.totalPrice}`}</p>
        );
      },
    },
    {
      field: "Status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <p className={params.row.orderStatus}>{params.row.orderStatus}</p>
        );
      },
    },
  ];

  export const invoiceColumns = [
    {
      field: "product",
      headerName: "Product",
      width: 230,
      renderCell: (params) => {
        return (
          <>
          <Modals items={params?.row.invoiceItems} name='Invoices'/>
        </>
        );
      },
    },
    {
      field: "customer",
      headerName: "Customer",
      width: 230,
      renderCell: (params) => {
        return (
          <p>{params?.row.customerName}</p>
        );
      },
    },
  
    {
      field: "date",
      headerName: "Date",
      width: 150,
      renderCell: (params) => {
        return (
          <p>{getTime(params?.row.createdAt)}</p>
        );
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 100,
      renderCell: (params) => {
        return (
          <p>{`$${params.row.totalPrice}`}</p>
        );
      },
    },
  ];
  
