import React, { Component } from "react";
import * as Table from "reactabular-table";

class UsersTable extends Component {
  render() {
    const rows = [
      {
        id: 100,
        firstName: "Adam",
        lastName: "John",
        role: "Administrator"
      },
      {
        id: 101,
        firstName: "Brian",
        lastName: "George",
        role: "Team Leader"
      }
    ];

    const columns = [
      {
        property: "firstName",
        header: {
          label: "Fist name"
        }
      },
      {
        property: "lastName",
        header: {
          label: "Last Name"
        }
      },
      {
        property: "role",
        header: {
          label: "Role"
        }
      }
    ];

    return (
      <div className="users-table-container">
        <Table.Provider
          className="pure-table pure-table-striped"
          columns={columns}
        >
          <Table.Header />

          <Table.Body rows={rows} rowKey="id" />
        </Table.Provider>
      </div>
    );
  }
}

export default UsersTable;
