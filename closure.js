function dinerBreakfast() {
  let order = "I'd like";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
}

dinerBreakfast("chocolate chip pancakes");
dinerBreakfast("cheesey bread");
dinerBreakfast("grits");
