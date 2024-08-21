import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ListArea from "./ui/ListArea";
import Cart from "./ui/Cart";

function App() {
  return (
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center mx-auto w-full p-5 bg-background-100 ">
      <main className="flex flex-col lg:flex-row gap-8">
        <ListArea />
        <Cart />
      </main>
    </div>
  );
}

export default App;
