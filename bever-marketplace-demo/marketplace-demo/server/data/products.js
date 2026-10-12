// Demonstration data. Suppliers, prices, certifications and stock are fictional.

export const suppliers = [
  { id: 'sup-01', name: 'Ashanti Cocoa Collective', country: 'Ghana', city: 'Kumasi', verified: true },
  { id: 'sup-02', name: 'Sidama Highland Growers', country: 'Ethiopia', city: 'Hawassa', verified: true },
  { id: 'sup-03', name: 'Tamale Shea Women\'s Cooperative', country: 'Ghana', city: 'Tamale', verified: false },
  { id: 'sup-04', name: 'Aba Leatherworks', country: 'Nigeria', city: 'Aba', verified: true },
  { id: 'sup-05', name: 'Kano Spice House', country: 'Nigeria', city: 'Kano', verified: false },
  { id: 'sup-06', name: 'Bolga Basket Weavers', country: 'Ghana', city: 'Bolgatanga', verified: true },
  { id: 'sup-07', name: 'Lagos Ankara Mills', country: 'Nigeria', city: 'Lagos', verified: true },
  { id: 'sup-08', name: 'Rift Valley Botanicals', country: 'Kenya', city: 'Nakuru', verified: false },
];

export const categories = [
  { id: 'agricultural-produce', name: 'Agricultural Produce' },
  { id: 'food-ingredients', name: 'Food Ingredients' },
  { id: 'textiles', name: 'Textiles' },
  { id: 'beauty', name: 'Beauty & Personal Care' },
  { id: 'leather-goods', name: 'Leather Goods' },
  { id: 'crafts', name: 'Handcrafts' },
];

// price = USD per unit. minOrderQty (MOQ) = smallest quantity a buyer may order.
export const products = [
  { id: 'p-001', name: 'Fermented Cocoa Beans (Grade I)', category: 'agricultural-produce', supplierId: 'sup-01', price: 4.2, unit: 'kg', minOrderQty: 500, leadTimeDays: 21, description: 'Sun-dried, fully fermented cocoa beans sorted to Grade I. Packed in 64 kg jute sacks.' },
  { id: 'p-002', name: 'Sidama Washed Arabica (Green)', category: 'agricultural-produce', supplierId: 'sup-02', price: 7.8, unit: 'kg', minOrderQty: 300, leadTimeDays: 30, description: 'Washed Arabica green coffee from Sidama smallholders. Bright citrus acidity.' },
  { id: 'p-003', name: 'Raw Cashew Nuts', category: 'agricultural-produce', supplierId: 'sup-05', price: 1.9, unit: 'kg', minOrderQty: 1000, leadTimeDays: 28, description: 'In-shell raw cashew nuts, current season, moisture under 10%.' },
  { id: 'p-004', name: 'Dried Hibiscus Flowers (Zobo)', category: 'food-ingredients', supplierId: 'sup-05', price: 3.5, unit: 'kg', minOrderQty: 100, leadTimeDays: 14, description: 'Whole dried hibiscus calyces for teas, drinks and natural coloring.' },
  { id: 'p-005', name: 'Ground Ginger', category: 'food-ingredients', supplierId: 'sup-05', price: 5.1, unit: 'kg', minOrderQty: 50, leadTimeDays: 10, description: 'Finely milled dried Nigerian ginger with strong pungency.' },
  { id: 'p-006', name: 'Unrefined Shea Butter', category: 'beauty', supplierId: 'sup-03', price: 6.0, unit: 'kg', minOrderQty: 25, leadTimeDays: 12, description: 'Hand-processed grade A unrefined shea butter in 25 kg cartons.' },
  { id: 'p-007', name: 'Cold-Pressed Baobab Oil', category: 'beauty', supplierId: 'sup-08', price: 24.0, unit: 'liter', minOrderQty: 10, leadTimeDays: 18, description: 'Cold-pressed baobab seed oil, unrefined, in 5 L HDPE jerry cans.' },
  { id: 'p-008', name: 'Moringa Leaf Powder', category: 'beauty', supplierId: 'sup-08', price: 9.5, unit: 'kg', minOrderQty: 20, leadTimeDays: 15, description: 'Shade-dried moringa leaves milled to a fine green powder.' },
  { id: 'p-009', name: 'Ankara Wax Print Fabric', category: 'textiles', supplierId: 'sup-07', price: 18.0, unit: 'roll (6 yd)', minOrderQty: 30, leadTimeDays: 20, description: '100% cotton wax print in assorted patterns, 6-yard rolls.' },
  { id: 'p-010', name: 'Adire Indigo Tie-Dye Fabric', category: 'textiles', supplierId: 'sup-07', price: 22.0, unit: 'roll (2 yd)', minOrderQty: 20, leadTimeDays: 25, description: 'Hand-dyed Yoruba adire cloth in natural indigo.' },
  { id: 'p-011', name: 'Handmade Leather Tote Bag', category: 'leather-goods', supplierId: 'sup-04', price: 32.0, unit: 'piece', minOrderQty: 12, leadTimeDays: 30, description: 'Full-grain leather tote stitched in Aba. Brass hardware.' },
  { id: 'p-012', name: 'Leather Sandals (Assorted Sizes)', category: 'leather-goods', supplierId: 'sup-04', price: 14.5, unit: 'pair', minOrderQty: 24, leadTimeDays: 21, description: 'Hand-cut leather sandals, sizes 38 to 45, mixed per carton.' },
  { id: 'p-013', name: 'Bolga Market Basket', category: 'crafts', supplierId: 'sup-06', price: 19.0, unit: 'piece', minOrderQty: 10, leadTimeDays: 35, description: 'Hand-woven elephant grass basket with leather-wrapped handle.' },
  { id: 'p-014', name: 'Woven Storage Baskets (Set of 3)', category: 'crafts', supplierId: 'sup-06', price: 27.0, unit: 'set', minOrderQty: 8, leadTimeDays: 35, description: 'Nested set of three lidded storage baskets in natural dyes.' },
];
