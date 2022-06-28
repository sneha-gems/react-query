export default function TableHead({ columns }) {
  return (
    <>
      <thead>
        <tr>
          {columns &&
            columns.map((item, index) => (
              <th key={index} class="border border-slate-300 ...">
                {item}
              </th>
            ))}
        </tr>
      </thead>
    </>
  );
}
