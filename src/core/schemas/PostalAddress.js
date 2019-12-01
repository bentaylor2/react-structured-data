import JSONLDAbstractNode from '../JSONLDAbstractNode';

class PostalAddress extends JSONLDAbstractNode {
    getJSON(isFirstChildNode = false, schema) {
        const parseChildren = super.parseChildren();
        const details = {
            '@type': 'PostalAddress',
            ...schema
        }
        return isFirstChildNode ?
            Object.assign(details, ...parseChildren) :
            Object.assign({
                address: details
            }, ...parseChildren);
    }
}

export default PostalAddress;
