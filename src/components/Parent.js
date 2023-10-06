import Child from "./Child";
const testArray = ["a", "b", "c"];
const testArrayObjects = [
  { name: "a", id: 1 },
  { name: "b", id: 2 },
  { name: "c", id: 3 },
];

function Parent() {
  return (
    <div>
      <h1>Parent component</h1>
      <Child clasName="props-class" />
      {testArray.map((item, index) => {
        return <Child key={index} name={item} />;
      })}
      {testArrayObjects.map((item) => {
        return <Child key={item.id} obj={item} />;
      })}
    </div>
  );
}
export default Parent;
