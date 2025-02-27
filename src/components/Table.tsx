type TableProps = {
  name: string;
  umur: number;
  job: string;
};

function Table(props: TableProps) {
  return (
    <>
      <ul>
        <li>nama: {props.name}</li>
        <li>umur: {props.umur}</li>
        <li>job: {props.job}</li>
      </ul>
    </>
  );
}

export default Table;
