export default function filterNonRootItems(menuItemsNodes) {
  return menuItemsNodes.filter((item) => item.parentId === null);
}
