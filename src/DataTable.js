import React from 'react';
import { useHistory } from 'react-router-dom';
import MaterialTable from 'material-table';
import { tableIcons } from './dataTableIcons';

// Head Row
const headStyle = {
  fontWeight: 'bold',
  fontSize: 'large',
};

// Body Rows
const rowStyle = {
  fontWeight: 'normal',
};

// detailPanel fields (each field)
const panelItemStyle = {
  paddingLeft: '6em', // to avoid tooltip
};

export default props => {
  const { columns, rows, collectionName } = props;
  const history = useHistory();
  const detailFields = columns.filter(col => col.detail === true);

  return (
    <MaterialTable
      title={`${collectionName}s`.toUpperCase()}
      icons={tableIcons}
      columns={columns}
      data={rows}
      options={{
        headerStyle: headStyle,
        rowStyle: rowStyle,
        pageSize: 5,
      }}
      actions={[
        {
          icon: tableIcons.View,
          tooltip: `View ${collectionName}`,
          onClick: (event, rowData) => {
            const url = `/${collectionName}s/${rowData.id}`;
            history.push(url);
          },
        },
      ]}
      detailPanel={
        detailFields.length > 0 && [
          {
            icon: tableIcons.Unfold,
            tooltip: 'Show Details',
            render: rowData =>
              detailFields.map(
                item =>
                  rowData[item.field] && (
                    <div style={panelItemStyle}>
                      {item.title}: {rowData[item.field]}
                    </div>
                  )
              ),
          },
        ]
      }
    />
  );
};
