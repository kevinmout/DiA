import { useContext } from "react";
import { AppShellComponent } from "../components/Appshell/AppShellComponent";
import { DataContext, DataProvider } from "../context/provider/DataProvider";
import { DamageReport } from "./Home/components/DamageReport";
import DamageIndicatorApp from "./Home/DamageIndicator";
import HomePage from "./Home/HomePage";

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
        return <DamageReport />;
      default:
        return <HomePage />;
    }
  }

  return <AppShellComponent>{render()}</AppShellComponent>;
};
