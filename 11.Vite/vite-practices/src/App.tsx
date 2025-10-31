import "./App.css";

function App() {
  return (
    <>
      {/* 부모 div에 flex 추가, size는 w-auto 등으로 변경 */}
      <div className="flex items-center gap-2 w-auto border-3 border-blue-700/90 bg-red-500/50 hover:bg-fuchsia-700/30 text-pink-500 p-4">
        Colors
      </div>
      <button className="size-[100px] border-2 border-blue-700/90 bg-red-500 hover:bg-fuchsia-700 text-black">
        ButtonA
      </button>
    </>
  );
}
export default App;
