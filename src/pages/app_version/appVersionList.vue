<template>
    <div>
        <h2>AppVersion</h2>
        <div>
            <el-button type="primary">添加</el-button>
            <table>
                <thead>
                    <tr>
                        <th>版本名称</th>
                        <th>版本编号</th>
                        <th>安装包地址</th>
                        <th>更新描述</th>
                        <th>客户端类型</th>
                        <th>版本发布时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in dataList" :key="item.id">
                        <td>{{item.fdVerName}}</td>
                        <td>{{item.fdVerCode}}</td>
                        <td>{{item.fdUrl}}</td>
                        <td>{{item.fdDesc}}</td>
                        <td>{{item.fdAppType}}</td>
                        <td>{{item.fdPubDate}}</td>
                        <td>
                            <el-button type="primary" size="small">修改</el-button>
                            <el-button type="primary" size="small">删除</el-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'app-version-list',
  data () {
    return {
      dataList: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get('/appVersion/list').then(resp => {
        this.dataList = resp.data.data
      })
    }
  }
}
</script>

<style>
  .data-list thead th {
    font-size: 14px;
    background-color: #f8f8f8;
  }
  .data-list tbody td {
    font-size: 14px;
  }
  table {
    border-color: gray;
  }
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
</style>
