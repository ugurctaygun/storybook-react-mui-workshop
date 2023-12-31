import Edit from "./Edit";
import Display from "./Display";

interface itemType {
  ID: string;
  Cost: number;
  Quantity: number;
  Description: string;
  Unit: string;
  Amount: number;
}

interface ItemProperties {
  /**
   * Item data to display
   */
  item: itemType;
  /**
   * Disables item interactivity
   */
  itemIsDisabled: boolean;
  /**
   * Toggles the edit view of row component
   */
  isEdit: boolean;
  /**
   * Toggles the edit view of row component
   */
  itemIndex: number;
  /**
   * Handles
   */
  handleEditItem: Function;
  /**
   * Handles
   */
  handleDeleteItem: Function;
  /**
   * Handles
   */
  handleCopyItem: Function;
  /**
   * Handles
   */
  handleClose: Function;
  /**
   * Handles
   */
  updateItem: Function;
   /**
   * Handles
   */
   actionType: "Icons" | "Menu";
   handleMultiSelect?: Function;
   hasMultiSelect?: boolean
}

const Item = ({
  item,
  isEdit,
  handleEditItem = () => {},
  handleDeleteItem = () => {},
  handleCopyItem = () => {},
  handleClose = () => {},
  itemIndex,
  updateItem,
  itemIsDisabled,
  actionType = "Icons",
  handleMultiSelect = () => {},
  hasMultiSelect = false,
  selectedItems
}: ItemProperties) => {
  return (
    <>
     <Display
          item={item}
          handleEditItem={handleEditItem}
          handleDeleteItem={handleDeleteItem}
          handleCopyItem={handleCopyItem}
          itemIndex={itemIndex}
          itemIsDisabled={itemIsDisabled}
          actionType={actionType}
          handleMultiSelect={handleMultiSelect}
          hasMultiSelect={hasMultiSelect}
          selectedItems={selectedItems}
        />
      {/* {isEdit ? (
        <Edit
          item={item}
          itemIndex={itemIndex}
          updateItem={updateItem}
          handleClose={handleClose}
          handleDeleteItem={handleDeleteItem}
          handleCopyItem={handleCopyItem}
          itemIsDisabled={itemIsDisabled}
        />
      ) : (
        <Display
          item={item}
          handleEditItem={handleEditItem}
          handleDeleteItem={handleDeleteItem}
          handleCopyItem={handleCopyItem}
          itemIndex={itemIndex}
          itemIsDisabled={itemIsDisabled}
        />
      )} */}
    </>
  );
};

export default Item;
