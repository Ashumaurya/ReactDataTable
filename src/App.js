import TempUserContextProvider from "./context/tempData";
import Layout from "./components/layout/layout";
import UserDataContextProvider from "./context/userData";

function App() {
  return (
    <div className='App'>
      <TempUserContextProvider>
        <UserDataContextProvider>
          <Layout />
        </UserDataContextProvider>
      </TempUserContextProvider>
    </div>
  );
}

export default App;
