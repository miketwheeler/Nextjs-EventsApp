import EventContentStyle from './event-content.module.css';

function EventContent(props) {
  return (
    <section className={EventContentStyle.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
