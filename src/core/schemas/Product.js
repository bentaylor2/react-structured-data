import JSONLDAbstractNode from '../JSONLDAbstractNode';

class Product extends JSONLDAbstractNode {
  getJSON(isFirstChildNode = false, schema) {
    const parseChildren = super.parseChildren();
    const details = {
      '@type': 'Product',
      ...schema
    }
    return isFirstChildNode
      ? Object.assign(details, ...parseChildren)
      : Object.assign({product: details}, ...parseChildren);
  }
}

export default Product;
