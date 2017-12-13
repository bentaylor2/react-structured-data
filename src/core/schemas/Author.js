import JSONLDAbstractNode from '../JSONLDAbstractNode';

class Author extends JSONLDAbstractNode {
  getJSON(isFirstChildNode = false, schema) {
    const parseChildren = super.parseChildren();
    const details = {
      '@type': 'Person',
      ...schema
    }
    return isFirstChildNode
      ? Object.assign(details, ...parseChildren)
      : Object.assign({author: details}, ...parseChildren);
  }
}

export default Author;
