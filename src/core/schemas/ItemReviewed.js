import JSONLDAbstractNode from '../JSONLDAbstractNode';

class ItemReviewed extends JSONLDAbstractNode {
  getJSON(isFirstChildNode = false, schema) {
    const parseChildren = super.parseChildren(true);

    if (parseChildren.length > 1) {
      throw new Error('The <ItemReviewed /> component can only contain a single child.');
    }
    const details = {
      ...parseChildren[0],
      ...schema
    }
    return isFirstChildNode
      ? Object.assign(details)
      : Object.assign({itemReviewed: details});
  }
}

export default ItemReviewed;
