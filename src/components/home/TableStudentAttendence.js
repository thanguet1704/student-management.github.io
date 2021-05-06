import { Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { axiosClient } from '../../api/config';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const columns = [
  {
    title: 'MSV',
    dataIndex: 'msv',
    key: 'msv',
  },
  {
    title: 'Họ và tên',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Chuyên đề',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Thời gian vào',
    dataIndex: 'timeIn',
    key: 'timeIn',
    render: (time) => {
      return moment(time).format('HH:MM');
    },
  },
  {
    title: 'Thời gian ra',
    dataIndex: 'timeOut',
    key: 'timeOut',
    render: (time) => {
      return moment(time).format('HH:MM');
    },
  },
  {
    title: 'Ngày',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: (status) => {
      let color;
      let display;
      switch (status) {
        case 'attend': {
          color = 'green';
          display = 'Có mặt';
          break;
        }

        case 'absent': {
          color = 'red';
          display = 'Vắng';
          break;
        }

        case 'late': {
          color = 'orange';
          display = 'Muộn';
          break;
        }
        default:
          break;
      }

      return (
        <Tag color={color} key={status}>
          {display.toUpperCase()}
        </Tag>
      );
    },
  },
];

export const TableStudentAttendence = ({ searchName }) => {
  const [current, setCurrent] = useState(1);
  const pageSize = 10;
  const [data, setData] = useState({ totalPage: 0, data: [] });
  const history = useHistory();

  const handleOnChange = (value) => {
    setCurrent(value.current);
  };

  const handleGetData = () => {
    axiosClient
      .get(
        `/attendence?searchName=${encodeURIComponent(
          searchName
        )}&limit=${pageSize}&offset=${(current - 1) * pageSize}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        // history.push('/');
      });
  };

  useEffect(() => {
    handleGetData();
  }, [current, searchName]);

  return (
    <Table
      columns={columns}
      dataSource={data.data}
      onChange={(value) => handleOnChange(value)}
      bordered={true}
      pagination={{
        simple: true,
        defaultPageSize: pageSize,
        total: data.totalPage * pageSize,
      }}
    />
  );
};
