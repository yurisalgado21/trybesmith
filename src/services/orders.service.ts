// import { Model } from 'sequelize';
// import OrderModel from '../database/models/order.model';
// import { Order } from '../types/Order';
// import ProductModel from '../database/models/product.model';

// async function getAll() {
//   try {
//     const orders = await OrderModel.findAll({
//       attributes: ['id', 'userId'],
//       include: [
//         {
//           model: ProductModel,
//         },
//       ],
//     });
//   } catch (error) {
//     console.log(error as Error);
//   }
// }

// export default {
//   getAll,
// };