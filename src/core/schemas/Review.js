import JSONLDAbstractNode from '../JSONLDAbstractNode';

class Review extends JSONLDAbstractNode {
  getJSON(isFirstChildNode = false, schema) {
    const parseChildren = super.parseChildren();
    const details = {
      '@type': 'Review',
      ...schema
    }
    return Object.assign(details, ...parseChildren);
  }
}

export default Review;
