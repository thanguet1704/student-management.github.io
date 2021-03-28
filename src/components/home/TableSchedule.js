import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const days = [
  {
    value: 'day0',
    display: '',
  },
  {
    value: 'day1',
    display: 'Thứ 2',
  },
  {
    value: 'day2',
    display: 'Thứ 3',
  },
  {
    value: 'day3',
    display: 'Thứ 4',
  },
  {
    value: 'day4',
    display: 'Thứ 5',
  },
  {
    value: 'day5',
    display: 'Thứ 6',
  },
  {
    value: 'day6',
    display: 'Thứ 7',
  },
];

const times = [
  {
    value: 'time1',
    display: '07:00-08:00',
  },
  {
    value: 'time2',
    display: '08:00-09:00',
  },
  {
    value: 'time3',
    display: '09:00-10:00',
  },
  {
    value: 'time4',
    display: '11:00-12:00',
  },
  {
    value: 'time5',
    display: '12:00-13:00',
  },
  {
    value: 'time6',
    display: '13:00-14:00',
  },
  {
    value: 'time7',
    display: '14:00-15:00',
  },
  {
    value: 'time8',
    display: '15:00-16:00',
  },
  {
    value: 'time9',
    display: '16:00-17:00',
  },
  {
    value: 'time10',
    display: '17:00-18:00',
  },
  {
    value: 'time11',
    display: '18:00-19:00',
  },
];

const colors = [
  '#4caf50',
  '#80ff00',
  '#03a9f4',
  '#ffcccc',
  '#03a9f4',
  '#e91e63',
  '#673ab7',
  '#00bcd4',
  '#cddc39',
  '#ff9800',
  '#ffc107',
  '#bbdefb',
  '#64b5f6',
];
const useStyles = makeStyles({
  border: {
    width: '600',
    margin: 'auto',
    fontSize: '1.2rem',
    padding: 10,
    textAlign: 'center',
    border: '1px solid #000',
    borderCollapse: 'collapse',
    wordWrap: 'break-word',
  },
});

export const TableSchedule = (props) => {
  const classes = useStyles();
  return (
    <table className={clsx(classes.border)}>
      <tr>
        {days.map((day) => (
          <th
            className={clsx(classes.border)}
            style={{ width: 200 }}
            id={day.value}
          >
            {day.display}
          </th>
        ))}
      </tr>
      {/* hang1 */}
      <tr>
        <th className={classes.border}>07:00</th>
        <td
          className={clsx(classes.border)}
          rowSpan="2"
          style={{ backgroundColor: colors[Math.floor(Math.random() * 13)] }}
        >
          Các vấn đề hiện đại của Công nghệ thông tin (308-GD2)
        </td>
        <td className={classes.border}></td>
        <td
          className={clsx(classes.border)}
          style={{ backgroundColor: colors[Math.floor(Math.random() * 13)] }}
          rowSpan="3"
        >
          Quản trị mạng (302-G2)
        </td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
      </tr>
      {/* hang2 */}
      <tr>
        <th className={classes.border}>08:00</th>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
      </tr>
      {/* hang3 */}
      <tr>
        <th className={classes.border}>09:00</th>
        <td className={classes.border}></td>
        <td
          className={clsx(classes.border)}
          rowSpan="3"
          style={{ backgroundColor: colors[Math.floor(Math.random() * 13)] }}
        >
          Các vấn đề hiện đại của Công nghệ thông tin (308-GD2)
        </td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
      </tr>
      {/* hang4 */}
      <tr>
        <th className={classes.border}>10:00</th>
        <td
          className={clsx(classes.border)}
          rowSpan="4"
          style={{ backgroundColor: colors[Math.floor(Math.random() * 13)] }}
        >
          Mạng không dây (103-G2)
        </td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
      </tr>
      {/* hang5 */}
      <tr>
        <th className={classes.border}>11:00</th>
        <td className={clsx(classes.border)}></td>
        <td className={classes.border}></td>
        <td
          className={clsx(classes.border)}
          rowSpan="4"
          style={{ backgroundColor: colors[Math.floor(Math.random() * 13)] }}
        >
          Mạng không dây (103-G2)
        </td>
        <td className={classes.border}></td>
      </tr>
      {/* hang6 */}
      <tr>
        <th className={classes.border}>12:00</th>
        <td className={clsx(classes.border)}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
      </tr>
      {/* hang7 */}
      <tr>
        <th className={classes.border}>13:00</th>
        <td className={clsx(classes.border)}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
      </tr>
      {/* hang8 */}
      <tr>
        <th className={classes.border}>14:00</th>
        <td className={clsx(classes.border)}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
      </tr>
      {/* hang9 */}
      <tr>
        <th className={classes.border}>15:00</th>
        <td className={clsx(classes.border)}></td>
        <td
          className={clsx(classes.border)}
          rowSpan="3"
          style={{ backgroundColor: colors[Math.floor(Math.random() * 13)] }}
        >
          Quản trị mạng (302-G2)
        </td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
      </tr>
      {/* hang10 */}
      <tr>
        <th className={classes.border}>16:00</th>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
      </tr>
      {/* hang11 */}
      <tr>
        <th className={classes.border}>17:00</th>
        <td className={clsx(classes.border)}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
        <td className={classes.border}></td>
      </tr>
    </table>
  );
};
