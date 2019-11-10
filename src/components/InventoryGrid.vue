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
          <p v-show="!isInCurrentEditState(scope.row._id)">{{ scope.row.price }}</p>
          <span v-show="isInCurrentEditState(scope.row._id)">
            <el-input :value="scope.row.price"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="salePrice" label="Sale Price">
        <template slot-scope="scope">
          <span>{{ scope.row.sale_price }}</span>
          <dialog-form :title="scope.row.title" :opened="saleEditInfo._id === scope.row._id">
            <el-form>
              <el-form-item>
                <el-input type="text" :value="saleEditInfo.sale_price" placeholder="Sale Price"></el-input>
              </el-form-item>
              <el-form-item>
                <el-date-picker
                  v-model="saleEditInfo.saleStartDate"
                  type="date"
                  placeholder="Sale Start Date"
                ></el-date-picker>
              </el-form-item>
              <el-form-item>
                <el-date-picker
                  v-model="editInfo.saleEndDate"
                  type="date"
                  placeholder="Sale End Date"
                ></el-date-picker>
              </el-form-item>
              <el-button type="primary">Confirm</el-button>
            </el-form>
          </dialog-form>
          <el-button
            @click="openSaleEdit(scope.row)"
            size="small"
            icon="el-icon-edit"
            style="margin-left: 5px;"
          ></el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="stock" label="Stock">
        <template slot-scope="scope">
          <p v-show="!isInCurrentEditState(scope.row._id)">{{ scope.row.stock }}</p>
          <span v-show="isInCurrentEditState(scope.row._id)">
            <el-input :value="scope.row.stock"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="Operations" width="120" align="center">
        <template slot-scope="scope">
          <span v-show="!isInCurrentEditState(scope.row._id)">
            <el-button
              icon="el-icon-edit"
              @click="handleEdit(scope.row)"
              type="text"
              size="small"
            >Edit</el-button>
          </span>
          <span v-show="isInCurrentEditState(scope.row._id)">
            <el-button icon="el-icon-check" @click="handleSave" type="text" size="small">Save</el-button>
            <el-button icon="el-icon-close" @click="handleSave" type="text" size="small">Cancel</el-button>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <div class="paginate">
      <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
  </span>
</template>

<script>
import { mapActions } from "vuex";
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
      saleEditInfo: {
        _id: null,
        salePrice: null,
        saleStartDate: null,
        saleEndDate: null
      },
      editInfo: {
        _id: null
      }
    };
  },
  mounted() {
    this.fetchInventory().catch(err => {
      console.log(err);
    });
  },
  methods: {
    formatter(row) {
      return row.address;
    },
    openSaleEdit(row) {
      this.saleEditInfo = {
        ...row
      };
    },
    handleEdit(row) {
      this.editInfo = {
        ...row
      };
    },
    isInCurrentEditState(id) {
      return this.editInfo._id === id;
    },
    ...mapActions({
      fetchInventory: "inventory/fetchInventory"
    }),
    handleSave() {}
  },
  computed: {
    tableData() {
      return this.$store.getters["inventory/getAllProducts"];
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