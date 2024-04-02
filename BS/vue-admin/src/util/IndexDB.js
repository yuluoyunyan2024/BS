// export function indexDB() {
//   //检查浏览器支持
//   if (indexedDB in window) {
//     //创建数据库连接
//     const request = window.indexedDB.open('myDB-01', 1)

//     //处理数据库版本变化
//     request.onupgradeneeded = function (event) {
//       const db = event.target.result

//       //创建对象存储
//       if (!db.objectStorageNames.contains('myObjectStore')) {
//         db.creatObjectStore('myObjectStore', { keyPath: 'id' })
//       }
//     }

//     //处理数据库打开成功事件
//     request.onsuccess = function (event) {
//       const db = event.target.result

//       //使用数据库
//       //执行数据库操作
//       const transaction = db.transaction('myObjectStore', 'readwrite')
//       const store = transaction.objectStore('myObjectStore')

//       //添加数据
//       const item = { id: '1', name: 'vue.js' }
//       const addRequest = store.add(item)

//       addRequest.onsuccess = function (event) {
//         console.log('数据添加成功！', event)
//       }

//       //读取数据
//       const getRequest = store.get('1')
//       getRequest.onsuccess = function (event) {
//         const data = event.target.result
//         console.log('读取的数据', data)
//       }

//       request.error = function (event) {
//         console.error('数据库打开失败！', event.target.errorCode)
//       }
//     }
//   } else {
//     console.error('无IndexedDB')
//   }
// }

//检查浏览器支持
if (!(indexedDB in window)) console.error('无IndexedDB')
else {
  //创建数据库连接
  const db = window.indexedDB.open('jwt')
  let connection

  db.onupgradeneeded = (e) => {
    connection = e.target.result
    connection.createObjectStore('admin', {
      keyPath: 'jwt_id'
    })
  }
  db.onsuccess = (e) => (connection = e.target.result)
  db.onerror = () => {}

  const tx = connection.transaction('jwt', 'readwrite')
  const store = tx.objectStore('jwt')

  //新增
  const addRequest = store.add({
    jwt_id: '1',
    jwt_value: '151515616515'
  })
  addRequest.onsuccess = () => console.log('新增成功！')

  //删除
  const removeRequest = store.delete('1')
  removeRequest.onsuccess = (e) => console.log('删除成功！', e)

  //修改
  const putRequest = store.put({
    jwt_id: '1',
    jwt_value: '100011111111'
  })
  putRequest.onsuccess = () => console.log('更新成功！')

  //读取
  const getRequest = store.get('1')
  getRequest.onsuccess = (e) => console.log('读取成功！', e.target.result)
}
