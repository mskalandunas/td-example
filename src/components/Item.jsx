export const Item = props => {
  const { description } = props;

  return (
    <label>
      <input type="checkbox"></input>
      {description}
    </label>
  );
};