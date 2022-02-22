// import mockjs from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '成功',
        data: {
          username: '369',
          age: 20,
          agent: '我真得再拉扯了'
        }
      }
    }
  },
  {
    url: '/api/table',
    method: 'get',
    response: ({ pageIndex = 1, pageSize = 10 } = {}) => {
      console.log(pageIndex, pageSize)
      return {
        code: 200,
        success: true,
        desc: '成功',
        data: [
          {
            id: 1,
            type: 'test'
          },
          {
            id: 2,
            type: 'test'
          },
          {
            id: 3,
            type: 'test'
          },
          {
            id: 4,
            type: 'test'
          },
          {
            id: 5,
            type: 'test'
          },
          {
            id: 6,
            type: 'test'
          },
          {
            id: 7,
            type: 'test'
          },
          {
            id: 8,
            type: 'test'
          },
          {
            id: 9,
            type: 'test'
          },
          {
            id: 10,
            type: 'test'
          }
        ],
        total: 10
      }
    }
  },
  {
    url: '/api/add',
    method: 'get',
    response: () => {
      return {
        migrationTask: {
          type: 1,
          executeType: 1,
          executeTime: '2022 - 02 - 09 11: 11: 12',
          name: '测试迁移任务',
          userId: 1,
          userName: '名称',
          status: 1,
          taskInfo: [
            {
              // sourceClusterInfo: {
              //   fileList: ['/distcp'],
              //   dataNodeList: '172.30.2.90',
              //   nameNodeInfo: ['172.30.2.83', '172.30.2.5']
              // },
              // targetClusterInfo: {
              //   region: ['/test'],
              //   dataNodeList: '172.30.2.90',
              //   nameNodeInfo: ['172.30.2.83', '172.30.2.5']
              // }
              sourceClusterInfoJson:
                "{/'dataNodeList/':[/'172.30.2.12:50010/',/'172.30.2.51:50010/'],/'fileList/':[/'/distcp/'],/'nameNodeInfo/':/'hdfs://172.30.2.81:9000'}",
              targetClusterInfoJson:
                "{/'dataNodeList/':[/'172.30.2.83:50010/',/'172.30.2.5:50010/'],/'nameNodeInfo/':/'hdfs://172.30.2.90:9000/',/'region/':/'ap-shanghai/'}"
            }
          ],
          taskParam: [
            {
              paramValue: 100,
              paramKey: '-bandwidth'
            },
            {
              paramValue: 20,
              paramKey: '-m'
            }
          ],
          taskLabel: [
            {
              value: 'Beckyguo',
              key: '标签值'
            }
          ]
        }
      }
    }
  }
] as MockMethod[]
