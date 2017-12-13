import JSONLDAbstractNode from '../JSONLDAbstractNode';

class ChildNode extends JSONLDAbstractNode {
  getJSON() {
    const parseChildren = super.parseChildren();
    const details = {
      '@type': this.props.jsonldtype
    }
    return Object.assign(details, this.props.schema, ...parseChildren );
  }
}

export default ChildNode;
