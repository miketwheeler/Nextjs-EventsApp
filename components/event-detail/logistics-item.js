import LogisticsItemStyle from './logistics-item.module.css';

function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <li className={LogisticsItemStyle.item}>
      <span className={LogisticsItemStyle.icon}>
        <Icon />
      </span>
      <span className={LogisticsItemStyle.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
