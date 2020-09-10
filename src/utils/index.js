import Vue from 'vue'

const data = [
  /* 农行系列 */
  // 山东省
  // 济南
  { id: '1', code: '103451015327', name: '济南文苑支行', province: '山东省', city: '济南市', banktype: '中国农业银行' },
  { id: '2', code: '', name: '章丘绣惠支行', province: '山东省', city: '济南市', banktype: '中国农业银行' },
  { id: '3', code: '103451013312', name: '济南东风支行', province: '山东省', city: '济南市', banktype: '中国农业银行' },
  { id: '4', code: '102451006052', name: '济南闵子骞支行', province: '山东省', city: '济南市', banktype: '中国农业银行' },
  { id: '5', code: '102451013277', name: '济南舜耕路支行', province: '山东省', city: '济南市', banktype: '中国农业银行' },
  { id: '6', code: '', name: '济南山财支行', province: '山东省', city: '济南市', banktype: '中国农业银行' },
  { id: '7', code: '103451015521', name: '济南长青分行', province: '山东省', city: '济南市', banktype: '中国农业银行' },
  // 青岛
  { id: '8', code: '', name: '青岛延安路第二支行', province: '山东省', city: '青岛市', banktype: '中国农业银行' },
  { id: '9', code: '', name: '青岛东风路支行', province: '山东省', city: '青岛市', banktype: '中国农业银行' },
  { id: '10', code: '', name: '青岛正阳路第二支行', province: '山东省', city: '青岛市', banktype: '中国农业银行' },
  { id: '11', code: '103452002540', name: '青岛小湛山支行', province: '山东省', city: '青岛市', banktype: '中国农业银行' },
  { id: '12', code: '105452003024', name: '青岛振华路支行', province: '山东省', city: '青岛市', banktype: '中国农业银行' },
  { id: '13', code: '', name: '青岛王台支行', province: '山东省', city: '青岛市', banktype: '中国农业银行' },
  // 淄博
  { id: '14', code: '', name: '淄博朱台支行', province: '山东省', city: '淄博市', banktype: '中国农业银行' },
  { id: '15', code: '103453025819', name: '淄博丽景苑支行', province: '山东省', city: '淄博市', banktype: '中国农业银行' },
  { id: '16', code: '', name: '淄博理工大学支行', province: '山东省', city: '淄博市', banktype: '中国农业银行' },
  { id: '17', code: '103453022584', name: '淄博杨寨支行', province: '山东省', city: '淄博市', banktype: '中国农业银行' },
  { id: '18', code: '', name: '淄博文化路支行', province: '山东省', city: '淄博市', banktype: '中国农业银行' },
  { id: '19', code: '', name: '淄博胜利路支行', province: '山东省', city: '淄博市', banktype: '中国农业银行' },
  { id: '20', code: '103453022533', name: '淄博分行', province: '山东省', city: '淄博市', banktype: '中国农业银行' },
  { id: '290', code: '', name: '高新区支行', province: '山东省', city: '淄博市', banktype: '中国农业银行' },
  { id: '291', code: '', name: '长清分行', province: '山东省', city: '淄博市', banktype: '中国农业银行' },
  { id: '294', code: '', name: '联通路支行', province: '山东省', city: '淄博市', banktype: '中国农业银行' },
  // 浙江省
  // 义乌市
  { id: '21', code: '103338764550', name: '义乌上溪支行', province: '浙江省', city: '义乌市', banktype: '中国农业银行' },
  { id: '22', code: '103338764672', name: '义乌朝阳支行', province: '浙江省', city: '义乌市', banktype: '中国农业银行' },
  { id: '23', code: '103338764701', name: '义乌金穗支行', province: '浙江省', city: '义乌市', banktype: '中国农业银行' },
  { id: '24', code: '103338764664', name: '义乌商海支行', province: '浙江省', city: '义乌市', banktype: '中国农业银行' },
  { id: '25', code: '103338764777', name: '义乌东方支行', province: '浙江省', city: '义乌市', banktype: '中国农业银行' },
  { id: '26', code: '', name: '义乌新科支行', province: '浙江省', city: '义乌市', banktype: '中国农业银行' },
  // 杭州
  { id: '27', code: '103331002051', name: '杭州竞舟支行', province: '浙江省', city: '杭州市', banktype: '中国农业银行' },
  { id: '28', code: '103331001106', name: '杭州益乐支行', province: '浙江省', city: '杭州市', banktype: '中国农业银行' },
  { id: '29', code: '103331005327', name: '杭州临平商贸城支行', province: '浙江省', city: '杭州市', banktype: '中国农业银行' },
  { id: '30', code: '103331008559', name: '杭州河庄支行', province: '浙江省', city: '杭州市', banktype: '中国农业银行' },
  { id: '31', code: '103331003634', name: '杭州湖滨支行', province: '浙江省', city: '杭州市', banktype: '中国农业银行' },
  { id: '32', code: '103331008315', name: '杭州红山支行', province: '浙江省', city: '杭州市', banktype: '中国农业银行' },
  // 北京
  // 昌平区
  { id: '33', code: '103100008203', name: '北京念头支行', province: '北京市', city: '昌平区', banktype: '中国农业银行' },
  { id: '34', code: '102100029236', name: '北京北七家支行', province: '北京市', city: '昌平区', banktype: '中国农业银行' },
  { id: '35', code: '103100008287', name: '北京科技园区支行', province: '北京市', city: '昌平区', banktype: '中国农业银行' },
  { id: '36', code: '103100025155', name: '北京西三旗桥北支行', province: '北京市', city: '昌平区', banktype: '中国农业银行' },
  { id: '37', code: '103100008254', name: '北京东关南里支行', province: '北京市', city: '昌平区', banktype: '中国农业银行' },
  { id: '38', code: '103100008140', name: '北京回龙观支行', province: '北京市', city: '昌平区', banktype: '中国农业银行' },
  // 上海市
  // 黄浦区
  { id: '39', code: '103290014018', name: '上海湖北路支行', province: '上海市', city: '黄浦区', banktype: '中国农业银行' },
  { id: '40', code: '103290039040', name: '上海南外滩支行', province: '上海市', city: '黄浦区', banktype: '中国农业银行' },
  { id: '41', code: '103290039154', name: '上海浦建路支行', province: '上海市', city: '黄浦区', banktype: '中国农业银行' },
  { id: '42', code: '103290039103', name: '上海西藏南路支行', province: '上海市', city: '黄浦区', banktype: '中国农业银行' },
  { id: '43', code: '103290039031', name: '上海陆家浜路支行', province: '上海市', city: '黄浦区', banktype: '中国农业银行' },
  { id: '44', code: '103290028033', name: '上海鲁班路支行', province: '上海市', city: '黄浦区', banktype: '中国农业银行' },
  // 广东省
  // 广州市
  { id: '45', code: '103581003719', name: '广州金鹰大厦支行', province: '广东省', city: '广州市', banktype: '中国农业银行' },
  { id: '46', code: '103581007078', name: '广州美博城支行', province: '广东省', city: '广州市', banktype: '中国农业银行' },
  { id: '47', code: '103581003331', name: '广州庙前直街支行', province: '广东省', city: '广州市', banktype: '中国农业银行' },
  { id: '48', code: '103581009635', name: '广州从化雅居乐支行', province: '广东省', city: '广州市', banktype: '中国农业银行' },
  { id: '49', code: '103581003438', name: '广州花城支行', province: '广东省', city: '广州市', banktype: '中国农业银行' },
  { id: '50', code: '103581008128', name: '广州番禺大学城支行', province: '广东省', city: '广州市', banktype: '中国农业银行' },
  // 深圳市
  { id: '51', code: '103584000373', name: '深圳福田口岸支行', province: '广东省', city: '深圳市', banktype: '中国农业银行' },
  { id: '52', code: '103584000734', name: '深圳新沙支行', province: '广东省', city: '深圳市', banktype: '中国农业银行' },
  { id: '53', code: '103584001108', name: '深圳宝安路支行', province: '广东省', city: '深圳市', banktype: '中国农业银行' },
  { id: '54', code: '103584003525', name: '深圳新岸线支行', province: '广东省', city: '深圳市', banktype: '中国农业银行' },
  { id: '55', code: '103584002088', name: '深圳公明支行', province: '广东省', city: '深圳市', banktype: '中国农业银行' },
  { id: '56', code: '103584002414', name: '深圳龙岗中心城支行', province: '广东省', city: '深圳市', banktype: '中国农业银行' },
  /* 中国银行系列 */
  // 山东省
  // 济南市
  { id: '57', code: '104451038774', name: '济南开元支行', province: '山东省', city: '济南市', banktype: '中国银行' },
  { id: '58', code: '104451041536', name: '济南泉星支行', province: '山东省', city: '济南市', banktype: '中国银行' },
  { id: '59', code: '104451041858', name: '济南旅游路支行', province: '山东省', city: '济南市', banktype: '中国银行' },
  { id: '60', code: '104451041866', name: '济南工业南路支行', province: '山东省', city: '济南市', banktype: '中国银行' },
  { id: '61', code: '104451041770', name: '济南高新支行', province: '山东省', city: '济南市', banktype: '中国银行' },
  { id: '62', code: '104451041405', name: '济南舜华路支行', province: '山东省', city: '济南市', banktype: '中国银行' },
  // 青岛市
  { id: '63', code: '104452000157', name: '青岛保税区支行', province: '山东省', city: '青岛市', banktype: '中国银行' },
  { id: '64', code: '104452007054', name: '青岛长江中路支行', province: '山东省', city: '青岛市', banktype: '中国银行' },
  { id: '65', code: '104452007038', name: '青岛长江东路支行', province: '山东省', city: '青岛市', banktype: '中国银行' },
  { id: '66', code: '314222000420', name: '青岛唐岛湾支行', province: '山东省', city: '青岛市', banktype: '中国银行' },
  { id: '67', code: '', name: '青岛西海岸新区分行', province: '山东省', city: '青岛市', banktype: '中国银行' },
  { id: '68', code: '', name: '青岛蓝色硅谷支行', province: '山东省', city: '青岛市', banktype: '中国银行' },
  // 淄博市
  { id: '69', code: '104453010076', name: '淄博张店支行', province: '山东省', city: '淄博市', banktype: '中国银行' },
  { id: '70', code: '104453010084', name: '淄博人民公园支行', province: '山东省', city: '淄博市', banktype: '中国银行' },
  { id: '71', code: '313453500001', name: '高青支行', province: '山东省', city: '淄博市', banktype: '中国银行' },
  { id: '72', code: '', name: '淄博黄金国际支行', province: '山东省', city: '淄博市', banktype: '中国银行' },
  { id: '73', code: '104453010113', name: '淄博金晶大道支行', province: '山东省', city: '淄博市', banktype: '中国银行' },
  { id: '74', code: '301453070024', name: '淄博华光路支行', province: '山东省', city: '淄博市', banktype: '中国银行' },
  // 北京市
  // 昌平区
  { id: '75', code: '', name: '北京回龙观南区支行', province: '北京市', city: '昌平区', banktype: '中国银行' },
  { id: '76', code: '102100029236', name: '北京北七家支行', province: '北京市', city: '昌平区', banktype: '中国银行' },
  { id: '77', code: '104100006239', name: '北京回龙观东区支行', province: '北京市', city: '昌平区', banktype: '中国银行' },
  { id: '78', code: '104100006054', name: '北京立汤南路支行', province: '北京市', city: '昌平区', banktype: '中国银行' },
  { id: '79', code: '104100005539', name: '北京天通苑支行', province: '北京市', city: '昌平区', banktype: '中国银行' },
  { id: '80', code: '104100005379', name: '北京西三旗支行', province: '北京市', city: '昌平区', banktype: '中国银行' },
  // 上海市
  // 黄浦区
  { id: '81', code: '104290060151', name: '上海市龙华东路支行', province: '上海市', city: '黄浦区', banktype: '中国银行' },
  { id: '82', code: '104290060143', name: '上海市人民路支行', province: '上海市', city: '黄浦区', banktype: '中国银行' },
  { id: '83', code: '104290060119', name: '上海市西藏南路支行', province: '上海市', city: '黄浦区', banktype: '中国银行' },
  { id: '84', code: '104290060080', name: '上海市斜土路支行', province: '上海市', city: '黄浦区', banktype: '中国银行' },
  { id: '85', code: '104290060098', name: '上海市中华路支行', province: '上海市', city: '黄浦区', banktype: '中国银行' },
  { id: '86', code: '104290060063', name: '上海市福州路支行', province: '上海市', city: '黄浦区', banktype: '中国银行' },
  // 广东省
  // 广州市
  { id: '87', code: '', name: '广州中海誉城支行', province: '广东省', city: '广州市', banktype: '中国银行' },
  { id: '88', code: '104301003505', name: '广州番禺富豪山庄支行', province: '广东省', city: '广州市', banktype: '中国银行' },
  { id: '89', code: '104581014166', name: '广州增城中新支行', province: '广东省', city: '广州市', banktype: '中国银行' },
  { id: '90', code: '104581014123', name: '广州增城新塘支行', province: '广东省', city: '广州市', banktype: '中国银行' },
  { id: '91', code: '104581014262', name: '广州增城荔乡路支行', province: '广东省', city: '广州市', banktype: '中国银行' },
  { id: '92', code: '104581014174', name: '广州增城石滩支行', province: '广东省', city: '广州市', banktype: '中国银行' },
  // 深圳市
  { id: '93', code: '104584001022', name: '深圳国贸支行', province: '广东省', city: '深圳市', banktype: '中国银行' },
  { id: '94', code: '104584001629', name: '深圳万象支行', province: '广东省', city: '深圳市', banktype: '中国银行' },
  { id: '95', code: '103581006384', name: '深圳西荟城支行', province: '广东省', city: '深圳市', banktype: '中国银行' },
  { id: '96', code: '104584079053', name: '深圳桥和支行', province: '广东省', city: '深圳市', banktype: '中国银行' },
  { id: '97', code: '104584002172', name: '深圳松岗东方支行', province: '广东省', city: '深圳市', banktype: '中国银行' },
  { id: '98', code: '104584001186', name: '深圳沙井支行', province: '广东省', city: '深圳市', banktype: '中国银行' },
  // 浙江省
  // 义乌市
  { id: '99', code: '104338753004', name: '义乌分行', province: '浙江省', city: '义乌市', banktype: '中国银行' },
  { id: '100', code: '402471000412', name: '湖西支行', province: '浙江省', city: '义乌市', banktype: '中国银行' },
  { id: '101', code: '104304047606', name: '万达支行', province: '浙江省', city: '义乌市', banktype: '中国银行' },
  { id: '102', code: '307331002451', name: '义乌篁园支行', province: '浙江省', city: '义乌市', banktype: '中国银行' },
  { id: '103', code: '', name: '义乌福通支行', province: '浙江省', city: '义乌市', banktype: '中国银行' },
  { id: '104', code: '', name: '义乌稠州支行', province: '浙江省', city: '义乌市', banktype: '中国银行' },
  { id: '105', code: '', name: '义乌双龙支行', province: '浙江省', city: '义乌市', banktype: '中国银行' },
  // 杭州市
  { id: '106', code: '104331052908', name: '杭州市钱塘支行', province: '浙江省', city: '杭州市', banktype: '中国银行' },
  { id: '107', code: '104554001031', name: '杭州大江东支行', province: '浙江省', city: '杭州市', banktype: '中国银行' },
  { id: '108', code: '313331005163', name: '杭州钱江新城支行', province: '浙江省', city: '杭州市', banktype: '中国银行' },
  { id: '109', code: '104331000132', name: '杭州杭大支行', province: '浙江省', city: '杭州市', banktype: '中国银行' },
  { id: '110', code: '103331007599', name: '淳安千岛湖支行', province: '浙江省', city: '杭州市', banktype: '中国银行' },
  { id: '111', code: '104331000989', name: '建德新广场支行', province: '浙江省', city: '杭州市', banktype: '中国银行' },
  { id: '112', code: '104331000591', name: '杭州余杭支行', province: '浙江省', city: '杭州市', banktype: '中国银行' },
  /* 交通银行系列 */
  // 山东省
  // 济南市
  { id: '113', code: '301451000365', name: '济南东城支行', province: '山东省', city: '济南市', banktype: '交通银行' },
  { id: '114', code: '301451000349', name: '济南科技支行', province: '山东省', city: '济南市', banktype: '交通银行' },
  { id: '115', code: '301451000068', name: '济南解放桥支行', province: '山东省', city: '济南市', banktype: '交通银行' },
  { id: '116', code: '', name: '济南文化东路支行', province: '山东省', city: '济南市', banktype: '交通银行' },
  { id: '117', code: '', name: '济南和平路支行', province: '山东省', city: '济南市', banktype: '交通银行' },
  { id: '118', code: '', name: '济南龙奥支行', province: '山东省', city: '济南市', banktype: '交通银行' },
  // 青岛市
  { id: '119', code: '', name: '青岛市南第二支行', province: '山东省', city: '青岛市', banktype: '交通银行' },
  { id: '120', code: '', name: '青岛江西路支行', province: '山东省', city: '青岛市', banktype: '交通银行' },
  { id: '121', code: '', name: '青岛东海一路支行', province: '山东省', city: '青岛市', banktype: '交通银行' },
  { id: '122', code: '', name: '青岛云南路支行', province: '山东省', city: '青岛市', banktype: '交通银行' },
  { id: '123', code: '', name: '青岛青铜峡路支行', province: '山东省', city: '青岛市', banktype: '交通银行' },
  { id: '124', code: '', name: '青岛市南第一支行', province: '山东省', city: '青岛市', banktype: '交通银行' },
  { id: '125', code: '301452033339', name: '青岛崂山分行', province: '山东省', city: '青岛市', banktype: '交通银行' },
  // 淄博市
  { id: '126', code: '', name: '淄博淄川开发区支行', province: '山东省', city: '淄博市', banktype: '交通银行' },
  { id: '127', code: '', name: '淄博淄川支行', province: '山东省', city: '淄博市', banktype: '交通银行' },
  { id: '128', code: '', name: '淄博淄川吉祥路支行', province: '山东省', city: '淄博市', banktype: '交通银行' },
  { id: '129', code: '', name: '淄博南定支行', province: '山东省', city: '淄博市', banktype: '交通银行' },
  { id: '130', code: '', name: '淄博体育馆支行', province: '山东省', city: '淄博市', banktype: '交通银行' },
  { id: '131', code: '', name: '淄博张店五里桥支行', province: '山东省', city: '淄博市', banktype: '交通银行' },
  // 北京市
  // 昌平区
  { id: '132', code: '', name: '北京天通苑支行', province: '北京市', city: '昌平区', banktype: '交通银行' },
  { id: '133', code: '', name: '北京北清路支行', province: '北京市', city: '昌平区', banktype: '交通银行' },
  { id: '134', code: '', name: '北京西三旗支行', province: '北京市', city: '昌平区', banktype: '交通银行' },
  { id: '135', code: '', name: '北京回龙观支行', province: '北京市', city: '昌平区', banktype: '交通银行' },
  // 上海市
  // 黄浦区
  { id: '136', code: '', name: '上海北京西路支行', province: '上海市', city: '黄浦区', banktype: '交通银行' },
  { id: '137', code: '', name: '上海第一支行', province: '上海市', city: '黄浦区', banktype: '交通银行' },
  { id: '138', code: '', name: '上海北京东路支行', province: '上海市', city: '黄浦区', banktype: '交通银行' },
  { id: '139', code: '', name: '上海大桥支行', province: '上海市', city: '黄浦区', banktype: '交通银行' },
  { id: '140', code: '', name: '上海新昌路支行', province: '上海市', city: '黄浦区', banktype: '交通银行' },
  { id: '141', code: '', name: '上海瑞南支行', province: '上海市', city: '黄浦区', banktype: '交通银行' },
  // 广东省
  // 广州市
  { id: '142', code: '', name: '广州康王城支行', province: '广东省', city: '广州市', banktype: '交通银行' },
  { id: '143', code: '', name: '广州龙津中支行', province: '广东省', city: '广州市', banktype: '交通银行' },
  { id: '144', code: '', name: '广州荔湾支行', province: '广东省', city: '广州市', banktype: '交通银行' },
  { id: '145', code: '', name: '广州芳村支行', province: '广东省', city: '广州市', banktype: '交通银行' },
  { id: '146', code: '', name: '广州南方茶市支行', province: '广东省', city: '广州市', banktype: '交通银行' },
  { id: '147', code: '', name: '广州鸿运支行', province: '广东省', city: '广州市', banktype: '交通银行' },
  // 深圳市
  { id: '148', code: '', name: '深圳深南中支行', province: '广东省', city: '深圳市', banktype: '交通银行' },
  { id: '149', code: '', name: '深圳金叶支行', province: '广东省', city: '深圳市', banktype: '交通银行' },
  { id: '150', code: '', name: '深圳罗湖支行', province: '广东省', city: '深圳市', banktype: '交通银行' },
  { id: '151', code: '', name: '深圳罗湖口岸支行', province: '广东省', city: '深圳市', banktype: '交通银行' },
  { id: '152', code: '', name: '深圳翠竹支行', province: '广东省', city: '深圳市', banktype: '交通银行' },
  { id: '153', code: '', name: '深圳东门支行', province: '广东省', city: '深圳市', banktype: '交通银行' },
  // 浙江省
  // 义乌市
  { id: '154', code: '', name: '金华婺州支行', province: '浙江省', city: '义乌市', banktype: '交通银行' },
  { id: '155', code: '', name: '义乌分行', province: '浙江省', city: '义乌市', banktype: '交通银行' },
  { id: '156', code: '', name: '有加利广场支行', province: '浙江省', city: '义乌市', banktype: '交通银行' },
  { id: '157', code: '', name: '金华东阳支行', province: '浙江省', city: '义乌市', banktype: '交通银行' },
  { id: '158', code: '', name: '金华东阳支行', province: '浙江省', city: '义乌市', banktype: '交通银行' },
  { id: '159', code: '', name: '金华武义支行', province: '浙江省', city: '义乌市', banktype: '交通银行' },
  // 杭州市
  { id: '160', code: '', name: '杭州浣纱支行', province: '浙江省', city: '杭州市', banktype: '交通银行' },
  { id: '161', code: '', name: '杭州城站支行', province: '浙江省', city: '杭州市', banktype: '交通银行' },
  { id: '162', code: '', name: '杭州众安支行', province: '浙江省', city: '杭州市', banktype: '交通银行' },
  { id: '163', code: '', name: '杭州西湖支行', province: '浙江省', city: '杭州市', banktype: '交通银行' },
  { id: '164', code: '', name: '杭州武林支行', province: '浙江省', city: '杭州市', banktype: '交通银行' },
  { id: '165', code: '', name: '杭州东新支行', province: '浙江省', city: '杭州市', banktype: '交通银行' },
  /* 中国建设银行系列 */
  // 山东省
  // 济南市
  { id: '166', code: '', name: '济南南仓支行', province: '山东省', city: '济南市', banktype: '中国建设银行' },
  { id: '167', code: '', name: '济南历下支行明湖支行', province: '山东省', city: '济南市', banktype: '中国建设银行' },
  { id: '168', code: '', name: '济南燕山支行', province: '山东省', city: '济南市', banktype: '中国建设银行' },
  { id: '169', code: '', name: '济南济阳支行', province: '山东省', city: '济南市', banktype: '中国建设银行' },
  { id: '170', code: '', name: '济南文苑支行', province: '山东省', city: '济南市', banktype: '中国建设银行' },
  { id: '171', code: '', name: '济南天桥支行', province: '山东省', city: '济南市', banktype: '中国建设银行' },
  { id: '172', code: '105451001046', name: '济南历城支行', province: '山东省', city: '济南市', banktype: '中国建设银行' },
  // 青岛市
  { id: '173', code: '', name: '青岛汉口路支行', province: '山东省', city: '青岛市', banktype: '中国建设银行' },
  { id: '174', code: '', name: '青岛金水路支行', province: '山东省', city: '青岛市', banktype: '中国建设银行' },
  { id: '175', code: '', name: '青岛香港中路支行', province: '山东省', city: '青岛市', banktype: '中国建设银行' },
  { id: '176', code: '', name: '青岛台东一路支行', province: '山东省', city: '青岛市', banktype: '中国建设银行' },
  { id: '177', code: '', name: '青岛同安路支行', province: '山东省', city: '青岛市', banktype: '中国建设银行' },
  { id: '178', code: '', name: '青岛宁夏路支行', province: '山东省', city: '青岛市', banktype: '中国建设银行' },
  // 淄博市
  { id: '179', code: '', name: '淄博齐园路支行', province: '山东省', city: '淄博市', banktype: '中国建设银行' },
  { id: '180', code: '', name: '淄博颜山支行', province: '山东省', city: '淄博市', banktype: '中国建设银行' },
  { id: '181', code: '', name: '淄博万杰支行', province: '山东省', city: '淄博市', banktype: '中国建设银行' },
  { id: '182', code: '', name: '淄博分行莲池支行', province: '山东省', city: '淄博市', banktype: '中国建设银行' },
  { id: '183', code: '', name: '淄博凤阳大厦支行', province: '山东省', city: '淄博市', banktype: '中国建设银行' },
  { id: '184', code: '', name: '淄博高新支行', province: '山东省', city: '淄博市', banktype: '中国建设银行' },
  // 北京市
  // 昌平区
  { id: '185', code: '', name: '北京南环路支行', province: '北京市', city: '昌平区', banktype: '中国建设银行' },
  { id: '186', code: '', name: '北京建材城西路支行', province: '北京市', city: '昌平区', banktype: '中国建设银行' },
  { id: '187', code: '', name: '北京生命园支行', province: '北京市', city: '昌平区', banktype: '中国建设银行' },
  { id: '188', code: '', name: '北京回龙观龙腾支行', province: '北京市', city: '昌平区', banktype: '中国建设银行' },
  { id: '189', code: '', name: '北京昌平回龙观支行', province: '北京市', city: '昌平区', banktype: '中国建设银行' },
  { id: '190', code: '', name: '北京昌平东关支行', province: '北京市', city: '昌平区', banktype: '中国建设银行' },
  // 上海市
  // 黄浦区
  { id: '191', code: '', name: '上海第五支行', province: '上海市', city: '黄浦区', banktype: '中国建设银行' },
  { id: '192', code: '', name: '上海第四支行', province: '上海市', city: '黄浦区', banktype: '中国建设银行' },
  { id: '193', code: '', name: '上海瞿溪路支行', province: '上海市', city: '黄浦区', banktype: '中国建设银行' },
  { id: '194', code: '', name: '上海福州路支行', province: '上海市', city: '黄浦区', banktype: '中国建设银行' },
  { id: '195', code: '', name: '上海黄河路支行', province: '上海市', city: '黄浦区', banktype: '中国建设银行' },
  { id: '196', code: '', name: '上海浙江路支行', province: '上海市', city: '黄浦区', banktype: '中国建设银行' },
  // 广东省
  // 广州市
  { id: '197', code: '', name: '增城新塘港口大道支行', province: '广东省', city: '广州市', banktype: '中国建设银行' },
  { id: '198', code: '', name: '增城石滩支行', province: '广东省', city: '广州市', banktype: '中国建设银行' },
  { id: '199', code: '', name: '广州增城翡翠支行', province: '广东省', city: '广州市', banktype: '中国建设银行' },
  { id: '200', code: '', name: '广州南方医院支行', province: '广东省', city: '广州市', banktype: '中国建设银行' },
  { id: '201', code: '', name: '广州执信路支行', province: '广东省', city: '广州市', banktype: '中国建设银行' },
  { id: '202', code: '', name: '广州国际金融广场支行', province: '广东省', city: '广州市', banktype: '中国建设银行' },
  // 深圳市
  { id: '203', code: '', name: '深圳东海支行', province: '广东省', city: '深圳市', banktype: '中国建设银行' },
  { id: '204', code: '', name: '深圳南山大道支行', province: '广东省', city: '深圳市', banktype: '中国建设银行' },
  { id: '205', code: '', name: '深圳铁路支行', province: '广东省', city: '深圳市', banktype: '中国建设银行' },
  { id: '206', code: '', name: '深圳深南中路支行', province: '广东省', city: '深圳市', banktype: '中国建设银行' },
  { id: '207', code: '', name: '深圳沙头角支行', province: '广东省', city: '深圳市', banktype: '中国建设银行' },
  { id: '208', code: '', name: '深圳国会大厦支行', province: '广东省', city: '深圳市', banktype: '中国建设银行' },
  // 浙江省
  // 义乌市
  { id: '209', code: '', name: '金东支行', province: '浙江省', city: '义乌市', banktype: '中国建设银行' },
  { id: '210', code: '', name: '义乌市支行', province: '浙江省', city: '义乌市', banktype: '中国建设银行' },
  { id: '211', code: '', name: '宾虹路支行', province: '浙江省', city: '义乌市', banktype: '中国建设银行' },
  { id: '212', code: '', name: '金华丹溪支行', province: '浙江省', city: '义乌市', banktype: '中国建设银行' },
  { id: '213', code: '', name: '金华江北支行', province: '浙江省', city: '义乌市', banktype: '中国建设银行' },
  { id: '214', code: '', name: '南国名城支行', province: '浙江省', city: '义乌市', banktype: '中国建设银行' },
  // 杭州市
  { id: '215', code: '', name: '临安喜运来支行', province: '浙江省', city: '杭州市', banktype: '中国建设银行' },
  { id: '216', code: '', name: '富阳新登支行', province: '浙江省', city: '杭州市', banktype: '中国建设银行' },
  { id: '217', code: '', name: '桐庐江南支行', province: '浙江省', city: '杭州市', banktype: '中国建设银行' },
  { id: '218', code: '', name: '桐庐新区支行', province: '浙江省', city: '杭州市', banktype: '中国建设银行' },
  { id: '219', code: '', name: '杭州河坊街支行', province: '浙江省', city: '杭州市', banktype: '中国建设银行' },
  { id: '220', code: '', name: '杭州美政桥支行', province: '浙江省', city: '杭州市', banktype: '中国建设银行' },
  /* 中国工商银行系列 */
  // 山东省
  // 济南市
  { id: '221', code: '', name: '济南城西支行', province: '山东省', city: '济南市', banktype: '中国工商银行' },
  { id: '222', code: '', name: '济南经十西路支行', province: '山东省', city: '济南市', banktype: '中国工商银行' },
  { id: '223', code: '', name: '济南纬六路支行', province: '山东省', city: '济南市', banktype: '中国工商银行' },
  { id: '224', code: '', name: '济南西站支行', province: '山东省', city: '济南市', banktype: '中国工商银行' },
  { id: '225', code: '', name: '济南辛庄西街支行', province: '山东省', city: '济南市', banktype: '中国工商银行' },
  { id: '226', code: '', name: '济南阳光新路支行', province: '山东省', city: '济南市', banktype: '中国工商银行' },
  // 青岛市
  { id: '227', code: '', name: '青岛昌乐路支行', province: '山东省', city: '青岛市', banktype: '中国工商银行' },
  { id: '228', code: '', name: '青岛辽宁路支行', province: '山东省', city: '青岛市', banktype: '中国工商银行' },
  { id: '229', code: '', name: '青岛辽阳路支行', province: '山东省', city: '青岛市', banktype: '中国工商银行' },
  { id: '230', code: '', name: '青岛台柳路支行', province: '山东省', city: '青岛市', banktype: '中国工商银行' },
  { id: '231', code: '', name: '青岛威海路支行', province: '山东省', city: '青岛市', banktype: '中国工商银行' },
  { id: '232', code: '', name: '青岛延安路支行', province: '山东省', city: '青岛市', banktype: '中国工商银行' },
  { id: '293', code: '', name: '中国工商银行海顺路支行', province: '山东省', city: '青岛市', banktype: '中国工商银行' },
  // 淄博市
  { id: '233', code: '', name: '淄博张店车站支行', province: '山东省', city: '淄博市', banktype: '中国工商银行' },
  { id: '234', code: '', name: '淄博张店凯瑞园支行', province: '山东省', city: '淄博市', banktype: '中国工商银行' },
  { id: '235', code: '', name: '淄博张店丽景苑支行', province: '山东省', city: '淄博市', banktype: '中国工商银行' },
  { id: '236', code: '', name: '淄博张店人民西路支行', province: '山东省', city: '淄博市', banktype: '中国工商银行' },
  { id: '237', code: '', name: '淄博张店王舍支行', province: '山东省', city: '淄博市', banktype: '中国工商银行' },
  { id: '238', code: '', name: '淄博张店西城支行', province: '山东省', city: '淄博市', banktype: '中国工商银行' },
  { id: '239', code: '102453016580', name: '淄博淄川分行', province: '山东省', city: '淄博市', banktype: '中国工商银行' },
  { id: '240', code: '102453003029', name: '淄博高新支行', province: '山东省', city: '淄博市', banktype: '中国工商银行' },
  { id: '292', code: '', name: '中国工商银行开发区支行', province: '山东省', city: '淄博市', banktype: '中国工商银行' },
  // 北京市
  // 昌平区
  { id: '241', code: '', name: '北京城关支行', province: '北京市', city: '昌平区', banktype: '中国工商银行' },
  { id: '242', code: '', name: '北京东小口支行', province: '北京市', city: '昌平区', banktype: '中国工商银行' },
  { id: '243', code: '', name: '北京回龙观支行', province: '北京市', city: '昌平区', banktype: '中国工商银行' },
  { id: '244', code: '', name: '北京南口支行', province: '北京市', city: '昌平区', banktype: '中国工商银行' },
  { id: '245', code: '', name: '北京沙河英才支行', province: '北京市', city: '昌平区', banktype: '中国工商银行' },
  { id: '246', code: '', name: '北京沙河支行', province: '北京市', city: '昌平区', banktype: '中国工商银行' },
  // 上海市
  // 黄浦区
  { id: '247', code: '', name: '上海市北京西路支行', province: '上海市', city: '黄浦区', banktype: '中国工商银行' },
  { id: '248', code: '', name: '上海市第二支行', province: '上海市', city: '黄浦区', banktype: '中国工商银行' },
  { id: '249', code: '', name: '上海市滇池路支行', province: '上海市', city: '黄浦区', banktype: '中国工商银行' },
  { id: '250', code: '', name: '上海市福州路第一支行', province: '上海市', city: '黄浦区', banktype: '中国工商银行' },
  { id: '251', code: '', name: '上海市福州路支行', province: '上海市', city: '黄浦区', banktype: '中国工商银行' },
  { id: '252', code: '', name: '上海市广东路支行', province: '上海市', city: '黄浦区', banktype: '中国工商银行' },
  // 广东省
  // 广州市
  { id: '253', code: '', name: '佛山南海藤厂支行', province: '广东省', city: '广州市', banktype: '中国工商银行' },
  { id: '254', code: '', name: '广州广源西路支行', province: '广东省', city: '广州市', banktype: '中国工商银行' },
  { id: '255', code: '', name: '广州黄石西路支行', province: '广东省', city: '广州市', banktype: '中国工商银行' },
  { id: '256', code: '', name: '广州江村支行', province: '广东省', city: '广州市', banktype: '中国工商银行' },
  { id: '257', code: '', name: '广州麒麟岗支行', province: '广东省', city: '广州市', banktype: '中国工商银行' },
  { id: '258', code: '', name: '广州石井支行', province: '广东省', city: '广州市', banktype: '中国工商银行' },
  // 深圳市
  { id: '259', code: '', name: '深圳臣田支行', province: '广东省', city: '深圳市', banktype: '中国工商银行' },
  { id: '260', code: '', name: '深圳公明支行', province: '广东省', city: '深圳市', banktype: '中国工商银行' },
  { id: '261', code: '', name: '深圳弘雅支行', province: '广东省', city: '深圳市', banktype: '中国工商银行' },
  { id: '262', code: '', name: '深圳丽景支行', province: '广东省', city: '深圳市', banktype: '中国工商银行' },
  { id: '263', code: '', name: '深圳沙井支行', province: '广东省', city: '深圳市', banktype: '中国工商银行' },
  { id: '264', code: '', name: '深圳上南支行', province: '广东省', city: '深圳市', banktype: '中国工商银行' },
  // 浙江省
  // 义乌市
  { id: '265', code: '', name: '义乌支行', province: '浙江省', city: '义乌市', banktype: '中国工商银行' },
  { id: '266', code: '', name: '金华商城支行', province: '浙江省', city: '义乌市', banktype: '中国工商银行' },
  { id: '267', code: '', name: '嘉和支行', province: '浙江省', city: '义乌市', banktype: '中国工商银行' },
  { id: '268', code: '', name: '贝村路支行', province: '浙江省', city: '义乌市', banktype: '中国工商银行' },
  { id: '269', code: '', name: '稠江支行', province: '浙江省', city: '义乌市', banktype: '中国工商银行' },
  { id: '270', code: '', name: '金东支行', province: '浙江省', city: '义乌市', banktype: '中国工商银行' },
  // 杭州市
  { id: '271', code: '', name: '杭州白马湖支行', province: '浙江省', city: '杭州市', banktype: '中国工商银行' },
  { id: '272', code: '', name: '杭州滨盛支行', province: '浙江省', city: '杭州市', banktype: '中国工商银行' },
  { id: '273', code: '', name: '杭州景江苑支行', province: '浙江省', city: '杭州市', banktype: '中国工商银行' },
  { id: '274', code: '', name: '杭州浦沿支行', province: '浙江省', city: '杭州市', banktype: '中国工商银行' },
  { id: '275', code: '', name: '杭州西兴支行', province: '浙江省', city: '杭州市', banktype: '中国工商银行' },
  { id: '276', code: '', name: '杭州彩虹城支行', province: '浙江省', city: '杭州市', banktype: '中国工商银行' },
  /* 齐鲁银行系列 */
  // 山东省
  // 济南市
  { id: '277', code: '', name: '白马山南路支行', province: '山东省', city: '济南市', banktype: '齐鲁银行' },
  { id: '278', code: '', name: '政务服务中心支行', province: '山东省', city: '济南市', banktype: '齐鲁银行' },
  { id: '279', code: '', name: '万紫巷支行', province: '山东省', city: '济南市', banktype: '齐鲁银行' },
  { id: '280', code: '', name: '经二路支行', province: '山东省', city: '济南市', banktype: '齐鲁银行' },
  { id: '281', code: '', name: '阳光舜城小微支行', province: '山东省', city: '济南市', banktype: '齐鲁银行' },
  { id: '282', code: '', name: '英雄山支行', province: '山东省', city: '济南市', banktype: '齐鲁银行' },
  // 青岛市
  { id: '283', code: '', name: '青岛分行', province: '山东省', city: '青岛市', banktype: '齐鲁银行' },
  { id: '284', code: '', name: '经济技术开发区支行', province: '山东省', city: '青岛市', banktype: '齐鲁银行' },
  { id: '285', code: '', name: '即墨支行', province: '山东省', city: '青岛市', banktype: '齐鲁银行' },
  { id: '286', code: '', name: '莱西支行', province: '山东省', city: '青岛市', banktype: '齐鲁银行' },
  { id: '287', code: '', name: '胶州支行', province: '山东省', city: '青岛市', banktype: '齐鲁银行' },
  { id: '288', code: '', name: '平度支行', province: '山东省', city: '青岛市', banktype: '齐鲁银行' },
  // 淄博市
  { id: '289', code: '313452000211', name: '淄博分行', province: '山东省', city: '淄博市', banktype: '齐鲁银行' }
]
let treeArray = []
let treeOneArray = []

//  取银行下面的省份
export function getProvince (bankName) {
  const province = []
  data.forEach(v => {
    if (v.banktype === bankName && province.indexOf(v.province) === -1) {
      province.push(v.province)
    }
  })
  return province
}

//  取银行省份下面的市
export function getCity (bankName, provinceName) {
  const city = []
  data.forEach(v => {
    if (v.banktype === bankName && v.province === provinceName && city.indexOf(v.city) === -1) {
      city.push(v.city)
    }
  })
  return city
}

// 取省+市+关键字符合条件的银行
export function getBank (bankName, provinceName, city, keywords) {
  const results = []
  data.forEach(v => {
    if (v.banktype === bankName && v.province === provinceName && v.city === city) {
      if (keywords) {
        if (v.code.indexOf(keywords) > -1 || v.name.indexOf(keywords) > -1) {
          results.push(v)
        }
      } else {
        results.push(v)
      }
    }
  })
  return results
}

export function resetArray () {
  treeArray = []
}
// 取收款方分组的id组成数组
export function getGroupIds (item) {
  if (Array.isArray(item) && item.length > 0) {
    item.forEach(v => {
      treeArray.push(v.id)
      getGroupIds(v.children)
    })
  } else {
    treeArray.sort()
  }
  return treeArray
}
// 取收款方分组的名字组成数组
export function getGroupNames (item) {
  if (Array.isArray(item) && item.length > 0) {
    item.forEach(v => {
      treeArray.push(v.label)
      getGroupNames(v.children)
    })
  } else {
    treeArray.sort()
  }
  return treeArray
}

// 保存新增用户分组
export function savePayeeGroup (data, parentGroupId, lastGroupId, groupName) {
  if (Array.isArray(data) && data.length > 0) {
    data.forEach(v => {
      if (parseInt(v.id) === parseInt(parentGroupId)) {
        if (!v.children) {
          Vue.set(v, 'children', [])
        }
        v.children.push({ id: lastGroupId + 1, label: groupName })
      } else {
        if (v.children) {
          savePayeeGroup(v.children, parentGroupId, lastGroupId, groupName)
        }
      }
    })
  }
}

// 保存编辑用户分组 editPayeeGroup
export function editPayeeGroup (data, id, groupName) {
  if (Array.isArray(data) && data.length > 0) {
    data.forEach(v => {
      if (parseInt(v.id) === parseInt(id)) {
        Vue.set(v, 'label', groupName)
      } else {
        if (v.children) {
          editPayeeGroup(v.children, id, groupName)
        }
      }
    })
  }
}

// 删除用户分组 delPayeeGroup
export function delPayeeGroup (data, id) {
  if (Array.isArray(data) && data.length > 0) {
    data.forEach((v, i) => {
      if (parseInt(v.id) === parseInt(id)) {
        if (v.children && v.children.length > 0) {
          return false
        } else {
          data.splice(i, 1)
        }
      } else {
        if (v.children) {
          delPayeeGroup(v.children, id)
        }
      }
    })
  }
}

/*
* 数组排序（按照里面每个对象的属性）
* */
export function arrSortByProps (props) {
  return function (a, b) {
    return a[props] - b[props]
  }
}

/*
* 树结构拆成按顺序排列的一维数组
* */
export function treeToOneArray (treeData) {
  if (treeData && Array.isArray(treeData)) {
    treeData.forEach(v => {
      if (v.id !== 1) {
        treeOneArray.push(v)
      }
      treeToOneArray(v.children)
    })
  }
  return treeOneArray
}

/*
* 初始化
* */
export function resetOneArray () {
  treeOneArray = []
}

/*
* 取当前时间字符串
* */
export function getDatetime () {
  const d = new Date()
  const year = d.getFullYear()
  const month = change(d.getMonth() + 1)
  const day = change(d.getDate())
  const hour = change(d.getHours())
  const minute = change(d.getMinutes())
  const second = change(d.getSeconds())

  function change (t) {
    if (t < 10) {
      return '0' + t
    } else {
      return t
    }
  }
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
}

/*
* 数字转大写
* */
export function numberToUpperCase (n) {
  if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) {
    return '数据非法' // 判断数据是否大于0
  }
  let unit = '千百拾亿千百拾万千百拾元角分'
  let str = ''
  n += '00'
  const indexpoint = n.indexOf('.') // 如果是小数，截取小数点前面的位数
  if (indexpoint >= 0) {
    n = n.substring(0, indexpoint) + n.substr(indexpoint + 1, 2) // 若为小数，截取需要使用的unit单位
  }
  unit = unit.substr(unit.length - n.length) // 若为整数，截取需要使用的unit单位
  for (let i = 0; i < n.length; i++) {
    str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i) // 遍历转化为大写的数字
  }
  return str.replace(/零(千|百|拾|角)/g, '零').replace(/(零)+/g, '零').replace(/零(万|亿|元)/g, '$1').replace(/(亿)万|壹(拾)/g, '$1$2').replace(/^元零?|零分/g, '').replace(/元$/g, '元整') // 替换掉数字里面的零字符，得到结果
}
