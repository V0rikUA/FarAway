import Item from "./Item";

export default function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
