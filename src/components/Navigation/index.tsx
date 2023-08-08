import BreadCrumbs from './BreadCrumbs';
import TabNavigator from "./TabNavigator";

interface NavigationProps {
    /**
     * Button type
     */
    type: "breadcrumb" | "tab";
  }
  
  /**
   * Primary UI component for user interaction
   */
  export const Navigation = ({
    type,
    ...props
  }: NavigationProps) => {
    const renderButton = (type: string) => {
      switch (type) {
        case "tabs":
          return (
            <TabNavigator tabs={[{label: 'Home' , hash:'home'}]}/>
          );
        case "breadcrumb":
          return (
          <BreadCrumbs />
          );
        default:
          break;
      }
    };
  
    return <>{renderButton(type)}</>;
  };
  