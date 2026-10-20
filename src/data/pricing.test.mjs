import assert from "node:assert/strict";
import test from "node:test";
import children from "./pricing/children.json" with { type: "json" };
import men from "./pricing/men.json" with { type: "json" };
import women from "./pricing/women.json" with { type: "json" };

const lengthKeys = ["full", "short", "medium", "long"];

function assertCategory(label, category) {
  assert.ok(Array.isArray(category.groups), `${label} must have groups`);
  assert.ok(category.groups.length > 0, `${label} must not be empty`);

  for (const group of category.groups) {
    assert.ok(group.id, `${label} group is missing id`);
    assert.ok(group.title, `${group.id} is missing a title`);
    assert.ok(
      Array.isArray(group.items) && group.items.length > 0,
      `${group.id} has no items`,
    );

    for (const item of group.items) {
      assert.ok(item.id, `${group.id} has an item without id`);
      assert.ok(item.name, `${item.id} is missing a name`);
      assert.ok(item.price || item.prices, `${item.id} is missing a price`);

      if (item.prices) {
        for (const key of lengthKeys) {
          assert.ok(item.prices[key], `${item.id} is missing prices.${key}`);
        }
      }
    }
  }
}

test("women pricing data is complete", () => {
  assertCategory("women", women);
});

test("men pricing data is complete", () => {
  assertCategory("men", men);
});

test("children pricing data is complete", () => {
  assertCategory("children", children);
});
