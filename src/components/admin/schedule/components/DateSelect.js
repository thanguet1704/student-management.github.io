import { DatePicker, Space, Typography } from 'antd';
import moment from 'moment';

const dateFormat = 'MM/DD/YYYY';

export const DateSelect = (props) => {
  return (
    <Space>
      <Typography style={{ width: 80 }}>{props.title}:</Typography>
      <DatePicker
        size="large"
        defaultValue={moment(new Date(), dateFormat)}
        format={dateFormat}
        style={{ width: 179 }}
        onChange={(date, dateString) => {
          console.log(date, dateString);
          props.setDate(new Date(dateString).toISOString());
        }}
      />
    </Space>
  );
};
