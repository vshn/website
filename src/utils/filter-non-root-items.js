const filterNonRootItems = (menuItemsNodes) => menuItemsNodes
  .filter((item) => item.parentId === null);

module.exports = filterNonRootItems;
