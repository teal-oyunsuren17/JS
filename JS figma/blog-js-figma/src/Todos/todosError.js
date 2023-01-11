export default function TodosError({ error }) {
  if (!error) return null;

  return (
    <>
      {" "}
      <div>Aldaa: {error}</div>
    </>
  );
}
