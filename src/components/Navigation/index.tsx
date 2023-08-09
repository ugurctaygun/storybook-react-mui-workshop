import BreadCrumbs from "./BreadCrumbs";
import TabNavigator from "./TabNavigator";

type Tab = {
  label: string;
  hash: string;
};

interface NavigationProps {
  /**
   * Navigation type
   */
  type: "breadcrumb" | "tabs";
  /**
   * Tab values
   */
  tabs: Tab[];
}

/**
 * Primary UI component for user interaction
 */
export const Navigation = ({ type, tabs, ...props }: NavigationProps) => {
  const renderButton = (type: string) => {
    switch (type) {
      case "tabs":
        return <TabNavigator tabs={tabs} />;
      case "breadcrumb":
        return <BreadCrumbs />;
      default:
        break;
    }
  };

  return <>{renderButton(type)}</>;
};
