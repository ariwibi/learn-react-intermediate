import SayHello from "./components/PropTypes";
import News from "./components/LathTypeProps";
import SpaState from "./components/SpaState";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import CompanySearchPage from "./components/QueryParams";
import LocalContext from "./components/ReactContext";
import { useState } from "react";
import MyContext from "./components/MyContext";
function App() {
  // function btnAlertHandler() {
  //   alert("hello typeProps");
  // }
  // return (
  //   <>
  //     <SayHello
  //       name={"ari"}
  //       count={1}
  //       isDark={false}
  //       data={["ari", "alice", "1"]}
  //       data1={{
  //         namex: "ari wibowo",
  //         city: "bulukumba",
  //         since: 2002,
  //       }}
  //       onSubmit={btnAlertHandler}
  //       mode={"light"}
  //     />
  //     <News
  //       title="Annual Planting"
  //       description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet sagittis metus, eget dapibus risus laoreet sed. Praesent ante magna ..."
  //       image="https://picsum.photos/id/239/800/600"
  //       isFeatured={true}
  //       tags={["plant", "nature"]}
  //       bookmark={() => alert("Bookmarked!")}
  //       style={{
  //         // ini opsional
  //         width: 300,
  //         border: "1px solid black",
  //         margin: "0 auto",
  //         padding: 16,
  //         borderRadius: 10,
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "left",
  //       }}
  //     />
  //     <SpaState />
  //   </>
  // );
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <RootLayout />,
  //     children: [
  //       {
  //         index: true,
  //         element: <HomePage />,
  //       },
  //       {
  //         path: "about",
  //         element: <AboutPage />,
  //       },
  //       {
  //         path: "faq",
  //         element: <FaqPage />,
  //       },
  //     ],
  //   },
  // ]);
  // return <RouterProvider router={router} />;

  // return <CompanySearchPage />;
  const [local, setLocal] = useState("id");
  // setLocal(local === "id" ? "en" : "id");
  return (
    <LocalContext.Provider value={{ local, setLocal }}>
      <MyContext />
    </LocalContext.Provider>
  );
}

export default App;
