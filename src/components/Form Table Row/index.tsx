import Edit from './Edit';
import Display from './Display';

const Item = ({
    item,
    purchaseOrderItems,
    isEdit,
    isEditValid,
    handleEditItem,
    handleDeleteItem,
    handleCopyItem,
    handleClose,
    index,
    updateItem,
    validateItem,
    itemsValidity,
    currencySymbol,
    createrFieldDisable,
    getAutoSelectFieldDropdown,
    callDropDownVisibility,
    poState,
    companyCode
}) => {
    const itemIsEditable = () => {
        if(poState === 'Finance' && createrFieldDisable ) {
            return false
        }
        return createrFieldDisable
    }
    return (
        <>
            {isEdit ? (
                <Edit
                    item={item}
                    index={index}
                    updateItem={updateItem}
                    handleClose={handleClose}
                    isEditValid={isEditValid}
                    purchaseOrderItems={purchaseOrderItems}
                    validateItem={validateItem}
                    handleDeleteItem={handleDeleteItem}
                    handleCopyItem={handleCopyItem}
                    itemsValidity={itemsValidity}
                    currencySymbol={currencySymbol}
                    createrFieldDisable={createrFieldDisable}
                    getAutoSelectFieldDropdown={getAutoSelectFieldDropdown}
                    callDropDownVisibility={callDropDownVisibility}
                    itemIsEditable={itemIsEditable()}
                    companyCode={companyCode}
                />
            ) : (
                <Display
                    item={item}
                    handleEditItem={handleEditItem}
                    handleDeleteItem={handleDeleteItem}
                    handleCopyItem={handleCopyItem}
                    index={index}
                    currencySymbol={currencySymbol}
                    createrFieldDisable={createrFieldDisable}
                    itemIsEditable={itemIsEditable()}
                />
            )}
        </>
    );
};

export default Item;
