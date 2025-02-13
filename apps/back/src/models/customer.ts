import { Schema, model } from 'mongoose';

import { ICustomer } from 'mhz-types';

const customerSchema = new Schema<ICustomer>({
  first_name: { type: String },
  last_name: { type: String },
  phone: { type: String },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  isEmailConfirmed: { type: Boolean, default: false },
  card: { type: String },
  adress: {
    region: { type: String },
    city: { type: String },
    street: { type: String },
    house: { type: String },
    room: { type: String },
  },
  cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  favouriteProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  comparisons: [{ type: Schema.Types.ObjectId, ref: 'Comparison' }],
  configurations: [{ type: Schema.Types.ObjectId, ref: 'Configuration' }],
  date_created: { type: Date, default: Date.now },
  date_logged_in: { type: Date },
  date_updated: { type: Date },
});

export default model('Customer', customerSchema);
