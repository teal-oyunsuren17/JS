// import Modal from "react-bootstrap/Modal";
// import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import { v4 as uuidv4 } from "uuid";
// import { toast } from "react-toastify";
// import Item from "./Item";

// export function Example() {
//   const [show, setShow] = useState(false);
//   const [list, setList] = useState([]);
//   const [text, setText] = useState("");
//   const [editingText, setEditingText] = useState({});
//   const [picturePath, setPicturePath] = useState("");
//   const [editingImg, setEditingImg] = useState({});
//   const [price, setPrice] = useState("");
//   const [editingPrice, setEditingPrice] = useState({});
//   const [email, setEmail] = useState("");
//   const [editingEmail, setEditingEmail] = useState({});
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [editingPhoneNumber, setEditingPhoneNumber] = useState({});

//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((req) => req.json())
//       .then((data) => setCategories(data.products));
//   }, []);

//   console.log(categories);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   function handleDelete() {
//     setShow(false);
//   }

//   function handleSave() {
//     setShow(false);
//     const newList = {
//       text: text,
//       id: uuidv4(),
//       done: false,
//       edit: true,
//       url: picturePath,
//       price: price,
//       email: email,
//       phoneNumber: phoneNumber,
//     };
//     const newLists = [newList, ...list];
//     setList(newLists);
//     setText("");
//     setPicturePath("");
//     setPrice("");
//     setEmail("");
//     setPhoneNumber("");

//     toast("🦄 Wow so easy!", {
//       position: "top-right",
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//       duration: 3000,
//     });
//   }

//   function changeEmail(e) {
//     setEmail(e.target.value);
//   }

//   function changePhoneNumber(e) {
//     setPhoneNumber(e.target.value);
//   }

//   function changePrice(e) {
//     setPrice(e.target.value);
//   }

//   function changeImage(e) {
//     setPicturePath(e.target.value);
//   }

//   function changeText(e) {
//     setText(e.target.value);
//   }

//   function editList(id, index) {
//     const newList = [...list];
//     const bairlal = newList.findIndex((list) => list.id === id);
//     newList[bairlal].edit = !newList[bairlal].edit;
//     setList(newList);

//     const newEditImg = { ...editingImg };
//     newEditImg[id] = categories[index].thumbnail;
//     setEditingImg(newEditImg);

//     const newEditText = { ...editingText };
//     newEditText[id] = categories[index].title;
//     setEditingText(newEditText);

//     const newEditPrice = { ...editingPrice };
//     newEditPrice[id] = categories[index].price;
//     setEditingPrice(newEditPrice);

//     const newEditEmail = { ...editingEmail };
//     newEditEmail[id] = categories[index].brand;
//     setEditingEmail(newEditEmail);

//     const newEditPhoneNumber = { ...editingPhoneNumber };
//     newEditPhoneNumber[id] = categories[index].category;
//     setEditingPhoneNumber(newEditPhoneNumber);
//   }

//   function editImg(id, e) {
//     const newEditingImg = { ...editingImg };
//     newEditingImg[id] = e.target.value;
//     setEditingImg(newEditingImg);
//   }

//   function editText(id, e) {
//     const newEditingText = { ...editingText };
//     newEditingText[id] = e.target.value;
//     setEditingText(newEditingText);
//   }

//   function editPrice(id, e) {
//     const newEditingPrice = { ...editingPrice };
//     newEditingPrice[id] = e.target.value;
//     setEditingPrice(newEditingPrice);
//   }

//   function editEmail(id, e) {
//     const newEditingEmail = { ...editingEmail };
//     newEditingEmail[id] = e.target.value;
//     setEditingEmail(newEditingEmail);
//   }

//   function editPhoneNumber(id, e) {
//     const newEditingPhoneNumber = { ...editingPhoneNumber };
//     newEditingPhoneNumber[id] = e.target.value;
//     setEditingPhoneNumber(newEditingPhoneNumber);
//   }

//   function editSave(id, index) {
//     const newList = [...list];
//     newList[index].url = editingImg[id];
//     newList[index].text = editingText[id];
//     newList[index].price = editingPrice[id];
//     newList[index].email = editingEmail[id];
//     newList[index].phoneNumber = editingPhoneNumber[id];
//     setList(newList);

//     cancelEdit(id);
//   }

//   function removeList(index) {
//     const newList = [...list];
//     newList.splice(index, 1);
//     setList(newList);
//   }

//   function cancelEdit(id) {
//     const newList = [...list];
//     const bairlal = newList.findIndex((list) => list.id === id);
//     newList[bairlal].edit = !newList[bairlal].edit;
//     setList(newList);
//   }

//   function changeCheckbox(id) {
//     const newLists = [...list];
//     const index3 = newLists.findIndex((list) => list.id === id);
//     newLists[index3].done = !newLists[index3].done;
//     setList(newLists);
//   }

//   return (
//     <div className=" m-5 text-center">
//       <div className="d-flex justify-content-between">
//         <h1>Ангилал</h1>
//         <div>
//           <Button variant="primary" onClick={handleShow}>
//             Шинэ
//           </Button>

//           <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//               <Modal.Title>Ангилал нэмэх</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <div>
//                 <input
//                   type={"text"}
//                   value={picturePath}
//                   placeholder="picture url"
//                   onChange={changeImage}
//                 />
//               </div>
//               <div>
//                 <input
//                   value={text}
//                   placeholder="Buteegdehuunii ner"
//                   onChange={changeText}
//                 />
//               </div>
//               <div>
//                 <input value={price} placeholder="Une" onChange={changePrice} />
//               </div>
//               <div>
//                 <label id="email" />
//                 <input
//                   value={email}
//                   placeholder="Email"
//                   onChange={changeEmail}
//                 />
//               </div>
//               <div>
//                 <input
//                   value={phoneNumber}
//                   placeholder="Phone Number"
//                   onChange={changePhoneNumber}
//                 />
//               </div>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleDelete}>
//                 Устгах
//               </Button>
//               <Button variant="primary" onClick={handleSave}>
//                 Хадгалах
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </div>
//       </div>

//       {categories.map((c) => (
//         <Item {...c} />
//       ))}
//       {categories.map((category) =>
//         list.map((list, index) => (
//           <div key={list.id}>
//             {list.edit ? (
//               <div
//                 style={{
//                   marginBottom: "20px",
//                   display: "flex",
//                   flexDirection: "row",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <div>
//                   <input
//                     type={"checkbox"}
//                     onChange={() => changeCheckbox(list.id)}
//                     checked={list.done}
//                   />
//                 </div>
//                 <div>
//                   <img
//                     src={category.thumbnail}
//                     alt="new"
//                     style={{ width: "100px" }}
//                   />
//                 </div>
//                 <div style={{ width: "15%" }}>
//                   {category.title}
//                   {/* {list.text} */}
//                 </div>
//                 <div style={{ width: "10%" }}>
//                   {category.price}
//                   {/* {list.price} */}
//                 </div>
//                 <div style={{ width: "10%" }}>
//                   {category.brand}
//                   {/* {list.email} */}
//                 </div>
//                 <div style={{ width: "10%x" }}>
//                   {category.category}
//                   {/* {list.phoneNumber} */}
//                 </div>

//                 {!list.done && (
//                   <button onClick={() => editList(list.id, index)}>
//                     zasah
//                   </button>
//                 )}
//                 <button onClick={() => removeList(index)}>remove</button>
//               </div>
//             ) : (
//               <>
//                 <input
//                   value={editingImg[list.id]}
//                   onChange={(e) => editImg(list.id, e)}
//                 />
//                 <input
//                   value={editingText[list.id]}
//                   onChange={(e) => editText(list.id, e)}
//                 />
//                 <input
//                   value={editingPrice[list.id]}
//                   onChange={(e) => editPrice(list.id, e)}
//                 />
//                 <input
//                   value={editingEmail[list.id]}
//                   onChange={(e) => editEmail(list.id, e)}
//                 />
//                 <input
//                   value={editingPhoneNumber[list.id]}
//                   onChange={(e) => editPhoneNumber(list.id, e)}
//                 />
//                 <button onClick={() => cancelEdit(list.id)}>bolih</button>
//                 <button onClick={() => editSave(list.id, index)}>
//                   hadgalah
//                 </button>
//               </>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
