export default function Category({ name, options = [] }) {
  return (
    <section>
      <h3>{name}</h3>
      <ul>
        {options.map((singleOption, index) => (
          <li key={index}>{singleOption}</li>
        ))}
      </ul>
    </section>
  );
}
