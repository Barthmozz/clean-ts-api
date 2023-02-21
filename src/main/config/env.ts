export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/clean-node-api',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'rX1Sw-pY1IIp0T65MZgGb_iBEwml34r1dqhkezzoizYgmI5w_aZkAKv8gi4jd_ReRpH55pVuA_8u9j7ZbBY8y2Vtk1aXQbg'
}
