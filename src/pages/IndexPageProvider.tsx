import { useContext } from "react";
import { AppShellComponent } from "../components/Appshell/AppShellComponent";
import { DataContext, DataProvider } from "../context/provider/DataProvider";
import HomePage from "./Home/HomePage";
import LandLordPage from "./Home/LandLordPage";

export const IndexProvider = () => {
  return (
    <DataProvider>
      <IndexPage />
    </DataProvider>
  );
};

const IndexPage = (): JSX.Element => {
  const { page } = useContext(DataContext);

  function render() {
    switch (page) {
      case "home":
        return <HomePage />;
      case "damage-report":
        return <LandLordPage />;
      default:
        return <HomePage />;
    }
  }

  return <AppShellComponent>{render()}</AppShellComponent>;
};
