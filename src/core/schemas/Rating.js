import JSONLDAbstractNode from '../JSONLDAbstractNode';

class Rating extends JSONLDAbstractNode {
  getJSON(isFirstChildNode = false, schema) {
    const parseChildren = super.parseChildren();
    const details = {
      '@type': 'Rating',
      ...schema
    }
    return isFirstChildNode
      ? Object.assign(details, ...parseChildren)
      : Object.assign({reviewRating: details}, ...parseChildren);
  }
}

export default Rating;
