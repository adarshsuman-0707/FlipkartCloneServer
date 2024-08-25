const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema({
  categoryId : { type: Schema.Types.ObjectId, auto: true },
  categoryName : { type: String, required: true },
  description : { type: String ,required: true },
  parentCategoryId : { type: Schema.Types.ObjectId, ref: 'Category', default: null },
  imageUrl : { type: String,required : true  },
  createdAt : { type: Date, default : Date.now },
  updatedAt : { type: Date, default : Date.now },
  status : { type: String, enum: ['active', 'inactive'], default: 'active' },
  products : [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});
const Category = mongoose.model('Category', categorySchema);
module.exports = Category;