import React, { forwardRef, useEffect, useState } from "react";
import Axios from "axios";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Delete from "@material-ui/icons/Delete";


function ReservationsPage() {
  const [Reservation, setReservation] = useState([]);

  const [open, setOpen] = useState(false);

  const [data, setData] = useState();
  const [Produit, setProduit] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/reserve").then((response) => {
      setReservation(response.data);
    });
  }, []);
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    Details: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  const actions = [

    {
      icon: Delete,
      tooltip: "Delete Reservation",
      position: "row",
      onClick: (event, rowData) => {
        Axios.post("http://localhost:3001/deletereservation", {
          id_res: rowData.id_reservation,
        }).then((response) => { });
        Axios.get("http://localhost:3001/reserve").then((response) => {
          setReservation(response.data);
        });
      },
    },
  ];
  return (
    <div style={{ marginTop: "50px" }}>

      <MaterialTable
        icons={tableIcons}
        title="Reservations"
        columns={[
          { title: "ID ", field: "id_reservation" },
          { title: "Firstname", field: "firstname" },
          { title: "Lastname", field: "lastname" },
          { title: "Phone", field: "phone", },
          { title: "Email", field: "email", },
          { title: "CIN", field: "cin", },
        ]}
        data={Reservation}
        actions={actions}
        options={{
          actionsColumnIndex: -1,
          // selection: true,
        }}
      />
    </div>
  );
}

export default ReservationsPage;