import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import MyTodos from "./myTodos/myTodos";
import Todos from "./Todos/todos";
import TodosPractice from "./todosPractice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "/Todos",
    element: <TodoApp />,
  },
  {
    path: "/MyTodos",
    element: <MyTodos />,
  },
  {
    path: "/TodosPractice",
    element: <TodosPractice />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

function TodoApp() {
  return (
    <>
      <Todos />
      {/* <MyTodos />  */}
      {/* <TodosPractice /> */}
    </>
  );
}

export function MainApp() {
  return (
    <div>
      <div>Hello world!</div>
      <p>
        <Link to={"/Todos"}>Todos</Link>
      </p>
      <p>
        <Link to={"/MyTodos"}>MyTodos</Link>
      </p>
      <p>
        <Link to={"/TodosPractice"}>TodosPractice</Link>
      </p>

      {/* <ToastExample /> */}
    </div>
  );
}

// function ToastExample() {
//   const toast = useToast();
//   return (
//     <button
//       onClick={() =>
//         toast({
//           title: "Account created.",
//           description: "We've created your account for you.",
//           status: "success",
//           duration: 9000,
//           isClosable: true,
//         })
//       }
//     >
//       Show Toast
//     </button>
//   );
// }
