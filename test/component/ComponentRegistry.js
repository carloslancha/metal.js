'use strict';

import ComponentRegistry from '../../src/component/ComponentRegistry';

describe('ComponentRegistry', function() {
  it('should return undefined for getting constructor of unregistered component', function() {
    assert.ok(!ComponentRegistry.getConstructor('UnregisteredComponent'));
  });

  it('should return constructor of registered components', function() {
    class MyComponent1 {}
    class MyComponent2 {}

    ComponentRegistry.register('MyComponent1', MyComponent1);
    ComponentRegistry.register('MyComponent2', MyComponent2);

    assert.strictEqual(MyComponent1, ComponentRegistry.getConstructor('MyComponent1'));
    assert.strictEqual(MyComponent2, ComponentRegistry.getConstructor('MyComponent2'));
  });

  it('should store templates', function() {
    assert.strictEqual('object', typeof ComponentRegistry.Templates);
  });
});