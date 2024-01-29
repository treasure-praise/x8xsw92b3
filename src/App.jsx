// import "./App.css";

import { useState } from "react";
// import CurrencyInput from "react-currency-input-field";

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields before adding the item
    if (
      itemName.trim() === "" ||
      quantity.trim() === "" ||
      price.trim() === ""
    ) {
      // You may add some error handling or display a message for incomplete form
      return;
    }

    // Create a new item object
    const newItem = {
      name: itemName,
      quantity: parseInt(quantity),
      price: parseFloat(price),
    };

    // Add the new item to the items array
    setItems([...items, newItem]);

    // Clear the form fields
    setItemName("");
    setQuantity("");
    setPrice("");
  };

  return (
    <>
      <div className=" mx-auto mt-24 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50">
        <div className="grid gap-4 w-full max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-center">Purchase Form</h1>
          <p className="text-gray-500">Enter the items you want to purchase</p>
          <form className="grid gap-4 " onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label className="font-semibold" htmlFor="item-name">
                Item Name
              </label>
              <input
                className="form-input px-4 py-3 rounded-md "
                id="item-name"
                placeholder="Enter item name"
                value={itemName}
                onChange={handleItemNameChange}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="quantity">Quantity</label>
              <input
                className="form-input px-4 py-3 rounded-md"
                id="quantity"
                placeholder="Enter quantity"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="price">Price</label>
              <input
                className="form-input px-4 py-3 rounded-md"
                id="price"
                placeholder="Enter price ₦"
                type="number"
                value={price}
                onChange={handlePriceChange}
              />
              {/* <CurrencyInput
                groupSeparator=","
                decimalSeparator="."
                prefix="₦ "
                type="text"
                id="price"
                name="price"
                placeholder="Enter price "
                value={price}
                onChange={handlePriceChange}
              /> */}
            </div>
            <button
              className="w-full bg-black px-4 py-3 rounded-md text-white"
              type="submit"
            >
              Add Item
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-24 block max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50">
        <h1 className="text-2xl font-bold text-center mb-4">Purchase List</h1>
        {items.length > 0 ? (
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-200 px-4 py-2">Item Name</th>
                <th className="border border-gray-200 px-4 py-2">Quantity</th>
                <th className="border border-gray-200 px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-200 px-4 py-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    ₦ {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">
            No items added to the purchase list.
          </p>
        )}
      </div>
    </>
  );
}

export default App;
