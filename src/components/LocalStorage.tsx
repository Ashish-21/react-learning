import { useLocalStorage } from "../hooks/useLocalStorage";

function LocalStorage() {
  const [value, storeValue] = useLocalStorage("name", "ashish");
  return (
    <div>
      {value ?? ""}
      <button
        onClick={() => {
          storeValue("Nice Name Ashish");
        }}
      >
        Update Name
      </button>
    </div>
  );
}
export default LocalStorage;
