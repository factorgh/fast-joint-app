import Button from "../../ui/Button";


// eslint-disable-next-line react/prop-types
function MenuItem({recipe}) {
  // eslint-disable-next-line react/prop-types
  const {  title, image } = recipe;

  return (
    <li className="flex gap-2 p-4 ">
      <img className="h-24" src={image} alt={title} />
      <div>
        <p>{title}</p>
        <div>
          <Button to={"/order/new"}>order now</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
