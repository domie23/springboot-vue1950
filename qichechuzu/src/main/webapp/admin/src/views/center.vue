<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
    >  
     <el-row>
                    <el-col :span="12">
           <el-form-item v-if="flag=='kehu'"  label='客户姓名' prop="kehuName">
               <el-input v-model="ruleForm.kehuName"  placeholder='客户姓名' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='kehu'"  label='客户手机号' prop="kehuPhone">
               <el-input v-model="ruleForm.kehuPhone"  placeholder='客户手机号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='kehu'"  label='客户身份证号' prop="kehuIdNumber">
               <el-input v-model="ruleForm.kehuIdNumber"  placeholder='客户身份证号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='kehu'" label='客户头像' prop="kehuPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.kehuPhoto?ruleForm.kehuPhoto:''"
                         @change="kehuPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='kehu'"  label='客户地址' prop="kehuAddress">
               <el-input v-model="ruleForm.kehuAddress"  placeholder='客户地址' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='kehu'"  label='客户职业' prop="kehuZhiye">
               <el-input v-model="ruleForm.kehuZhiye"  placeholder='客户职业' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='kehu'"  label='地区' prop="diquTypes">
                 <el-select v-model="ruleForm.diquTypes"  placeholder='请选择地区'>
                     <el-option
                             v-for="(item,index) in diquTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='kehu'"  label='电子邮箱' prop="kehuEmail">
               <el-input v-model="ruleForm.kehuEmail"  placeholder='电子邮箱' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='员工姓名' prop="yuangongName">
               <el-input v-model="ruleForm.yuangongName"  placeholder='员工姓名' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='员工手机号' prop="yuangongPhone">
               <el-input v-model="ruleForm.yuangongPhone"  placeholder='员工手机号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='员工身份证号' prop="yuangongIdNumber">
               <el-input v-model="ruleForm.yuangongIdNumber"  placeholder='员工身份证号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='yuangong'" label='员工头像' prop="yuangongPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.yuangongPhoto?ruleForm.yuangongPhoto:''"
                         @change="yuangongPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='员工地址' prop="yuangongAddress">
               <el-input v-model="ruleForm.yuangongAddress"  placeholder='员工地址' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='电子邮箱' prop="yuangongEmail">
               <el-input v-model="ruleForm.yuangongEmail"  placeholder='电子邮箱' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-form-item v-if="flag=='users'" label="用户名" prop="username">
             <el-input v-model="ruleForm.username"
                       placeholder="用户名"></el-input>
         </el-form-item>
         <el-col :span="12">
             <el-form-item v-if="flag!='users'"  label="性别" prop="sexTypes">
                 <el-select v-model="ruleForm.sexTypes" placeholder="请选择性别">
                     <el-option
                             v-for="(item,index) in sexTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="24">
             <el-form-item>
                 <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
             </el-form-item>
         </el-col>
     </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
        ruleForm: {},
        flag: '',
        usersFlag: false,
        // sexTypesOptions : [],
// 注册表 员工
    // 注册的类型字段 员工
        // 性别
        sexTypesOptions : [],
// 注册表 客户
    // 注册的类型字段 客户
        // 性别
        sexTypesOptions : [],
        // 地区
        diquTypesOptions : [],
    };
  },
  mounted() {
    //获取当前登录用户的信息
    var table = this.$storage.get("sessionTable");
    this.sessionTable = this.$storage.get("sessionTable");
    this.role = this.$storage.get("role");
    if (this.role != "管理员"){
    }

    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
// 注册表 员工
// 注册表 客户
      } else {
        this.$message.error(data.msg);
      }
    });

// 注册表 员工 的级联表
// 注册表 客户 的级联表

      this.$http({
          url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=sex_types`,
          method: "get"
      }).then(({ data }) => {
          if (data && data.code === 0) {
              this.sexTypesOptions = data.data.list;
          } else {
              this.$message.error(data.msg);
          }
      });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=diqu_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.diquTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
  },
  methods: {
    kehuPhotoUploadChange(fileUrls) {
        this.ruleForm.kehuPhoto = fileUrls;
    },
    yuangongPhotoUploadChange(fileUrls) {
        this.ruleForm.yuangongPhoto = fileUrls;
    },


    onUpdateHandler() {
                         if((!this.ruleForm.kehuName)&& 'kehu'==this.flag){
                             this.$message.error('客户姓名不能为空');
                             return
                         }

                             if( 'kehu' ==this.flag && this.ruleForm.kehuPhone&&(!isMobile(this.ruleForm.kehuPhone))){
                                 this.$message.error(`手机应输入手机格式`);
                                 return
                             }
                         if((!this.ruleForm.kehuIdNumber)&& 'kehu'==this.flag){
                             this.$message.error('客户身份证号不能为空');
                             return
                         }

                         if((!this.ruleForm.kehuPhoto)&& 'kehu'==this.flag){
                             this.$message.error('客户头像不能为空');
                             return
                         }

                         if((!this.ruleForm.kehuAddress)&& 'kehu'==this.flag){
                             this.$message.error('客户地址不能为空');
                             return
                         }

                         if((!this.ruleForm.kehuZhiye)&& 'kehu'==this.flag){
                             this.$message.error('客户职业不能为空');
                             return
                         }

                         if((!this.ruleForm.diquTypes)&& 'kehu'==this.flag){
                             this.$message.error('地区不能为空');
                             return
                         }

                             if( 'kehu' ==this.flag && this.ruleForm.kehuEmail&&(!isEmail(this.ruleForm.kehuEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.yuangongName)&& 'yuangong'==this.flag){
                             this.$message.error('员工姓名不能为空');
                             return
                         }

                             if( 'yuangong' ==this.flag && this.ruleForm.yuangongPhone&&(!isMobile(this.ruleForm.yuangongPhone))){
                                 this.$message.error(`手机应输入手机格式`);
                                 return
                             }
                         if((!this.ruleForm.yuangongIdNumber)&& 'yuangong'==this.flag){
                             this.$message.error('员工身份证号不能为空');
                             return
                         }

                         if((!this.ruleForm.yuangongPhoto)&& 'yuangong'==this.flag){
                             this.$message.error('员工头像不能为空');
                             return
                         }

                         if((!this.ruleForm.yuangongAddress)&& 'yuangong'==this.flag){
                             this.$message.error('员工地址不能为空');
                             return
                         }

                             if( 'yuangong' ==this.flag && this.ruleForm.yuangongEmail&&(!isEmail(this.ruleForm.yuangongEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
        if((!this.ruleForm.sexTypes) && this.flag!='users'){
            this.$message.error('性别不能为空');
            return
        }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
        this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
