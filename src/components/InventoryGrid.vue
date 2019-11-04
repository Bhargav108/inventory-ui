<template>
  <span>
    <el-table :data="tableData" :default-sort="{prop: 'title', order: 'descending'}">
      <el-table-column prop="title" label="title" sortable width="180"></el-table-column>
      <el-table-column prop="brand" label="Brand" width="180"></el-table-column>
      <el-table-column prop="image" label="Product Image" width="200">
        <template slot-scope="scope">
          <custom-image-cell :thumb="scope.row.image_url" :src-list="scope.row.imageSrcList"></custom-image-cell>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="price" label="Price">
        <template slot-scope="scope">
          <el-input :value="scope.row.salePrice"></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="salePrice" label="Sale Price">
        <template slot-scope="scope">
          <span>{{ scope.row.salePrice }}</span>
          <dialog-form :title="'Edit\t' + scope.row.title" :opened="openDialogId == scope.row._id">
            <el-form>
              <el-form-item>
                <el-input type="text" placeholder="Sale Price"></el-input>
              </el-form-item>
              <el-form-item>
                <el-date-picker type="date" placeholder="Sale Start Date"></el-date-picker>
              </el-form-item>
              <el-form-item>
                <el-date-picker type="date" placeholder="Sale End Date"></el-date-picker>
              </el-form-item>
              <el-button type="primary">Confirm</el-button>
            </el-form>
          </dialog-form>
          <el-button
            @click="openSaleEdit(scope.row._id)"
            size="small"
            icon="el-icon-edit"
            style="margin-left: 5px;"
          ></el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="stock" label="Stock">
        <template slot-scope="scope">
          <el-input :value="scope.row.stock"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <div class="paginate">
      <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
  </span>
</template>

<script>
import CustomImageCell from "./CustomImageCell.vue";
import DialogForm from "./DialogForm.vue";

export default {
  name: "inventory-grid",
  components: {
    CustomImageCell,
    DialogForm
  },
  data() {
    return {
      search: "",
      openDialogId: null,
      tableData: [
        {
          _id: 1,
          title: "Nike AirMax",
          brand: "Nike",
          image_url: "https://source.unsplash.com/100x100/?product",
          imageSrcList: ["https://source.unsplash.com/1366x768/?product"],
          price: "300",
          salePrice: "280",
          stock: 3000
        }
      ]
    };
  },
  methods: {
    formatter(row) {
      return row.address;
    },
    openSaleEdit(id) {
      this.openDialogId = id;
    }
  }
};
</script>

<style scoped="true">
.paginate {
  margin-top: 1.5rem;
  text-align: center;
}
</style>