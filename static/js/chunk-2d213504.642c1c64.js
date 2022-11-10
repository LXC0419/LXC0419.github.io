(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213504"],{abc0:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-container"},[a("div",{staticClass:"app-container"},[a("el-card",[a("el-tabs",[a("el-tab-pane",{attrs:{label:"登录账户设置"}},[a("el-form",{staticStyle:{"margin-left":"120px","margin-top":"30px"},attrs:{"label-width":"120px",model:e.userInfo,rules:e.rules}},[a("el-form-item",{attrs:{label:"姓名:"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:e.userInfo.username,callback:function(t){e.$set(e.userInfo,"username",t)},expression:"userInfo.username"}})],1),a("el-form-item",{attrs:{label:"密码:"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{type:"password"},model:{value:e.userInfo.password,callback:function(t){e.$set(e.userInfo,"password",t)},expression:"userInfo.password"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onUpdate}},[e._v("更新")])],1)],1)],1),a("el-tab-pane",{attrs:{label:"个人详情"}},[a("UserInfo")],1),a("el-tab-pane",{attrs:{label:"岗位信息"}},[a("JobInfo")],1)],1)],1)],1)])},l=[],o=a("1da1"),n=(a("96cf"),a("365c")),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-info"},[a("el-form",{attrs:{"label-width":"220px"}},[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-tooltip",{attrs:{content:"打印个人基本信息"}},[a("router-link",{attrs:{to:"/employess/print/"+e.userId+"?type=personal"}},[a("i",{staticClass:"el-icon-printer"})])],1)],1),a("el-row",{staticClass:"inline-info"},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"工号"}},[a("el-input",{staticClass:"inputW",model:{value:e.userInfo.workNumber,callback:function(t){e.$set(e.userInfo,"workNumber",t)},expression:"userInfo.workNumber"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"入职时间"}},[a("el-date-picker",{staticClass:"inputW",attrs:{type:"date","value-format":"YYYY-MM-DD"},model:{value:e.userInfo.timeOfEntry,callback:function(t){e.$set(e.userInfo,"timeOfEntry",t)},expression:"userInfo.timeOfEntry"}})],1)],1)],1),a("el-row",{staticClass:"inline-info"},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{staticClass:"inputW",model:{value:e.userInfo.username,callback:function(t){e.$set(e.userInfo,"username",t)},expression:"userInfo.username"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"部门"}},[a("el-input",{staticClass:"inputW",model:{value:e.userInfo.departmentName,callback:function(t){e.$set(e.userInfo,"departmentName",t)},expression:"userInfo.departmentName"}})],1)],1)],1),a("el-row",{staticClass:"inline-info"},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"手机"}},[a("el-input",{model:{value:e.userInfo.mobile,callback:function(t){e.$set(e.userInfo,"mobile",t)},expression:"userInfo.mobile"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"聘用形式"}},[a("el-select",{staticClass:"inputW",model:{value:e.userInfo.formOfEmployment,callback:function(t){e.$set(e.userInfo,"formOfEmployment",t)},expression:"userInfo.formOfEmployment"}},e._l(e.EmployeeEnum.hireType,(function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})})),1)],1)],1)],1),a("el-row",{staticClass:"inline-info"},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"员工头像"}})],1)],1),a("el-row",{staticClass:"inline-info",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:12}},[a("el-button",{attrs:{type:"primary"},on:{click:e.saveUser}},[e._v("保存更新")]),a("el-button",{on:{click:function(t){return e.$router.back()}}},[e._v("返回")])],1)],1)],1),a("el-form",{attrs:{"label-width":"220px"}},[a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[e._v("基础信息")]),a("el-form-item",{attrs:{label:"最高学历"}},[a("el-select",{staticClass:"inputW2",model:{value:e.formData.theHighestDegreeOfEducation,callback:function(t){e.$set(e.formData,"theHighestDegreeOfEducation",t)},expression:"formData.theHighestDegreeOfEducation"}},e._l(e.EmployeeEnum.highestDegree,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"员工照片"}}),a("el-form-item",{attrs:{label:"国家/地区"}},[a("el-select",{staticClass:"inputW2",model:{value:e.formData.nationalArea,callback:function(t){e.$set(e.formData,"nationalArea",t)},expression:"formData.nationalArea"}},e._l(e.EmployeeEnum.isOverseas,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"护照号"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"正规护照格式"},model:{value:e.formData.passportNo,callback:function(t){e.$set(e.formData,"passportNo",t)},expression:"formData.passportNo"}})],1),a("el-form-item",{attrs:{label:"身份证号"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"正规身份证格式"},model:{value:e.formData.idNumber,callback:function(t){e.$set(e.formData,"idNumber",t)},expression:"formData.idNumber"}})],1),a("el-form-item",{attrs:{label:"籍贯"}},[a("el-input",{staticClass:"inputW5",attrs:{placeholder:"籍贯地址"},model:{value:e.formData.nativePlace,callback:function(t){e.$set(e.formData,"nativePlace",t)},expression:"formData.nativePlace"}})],1),a("el-form-item",{attrs:{label:"民族"}},[a("el-input",{staticClass:"inputW2",attrs:{placeholder:"请输入民族"},model:{value:e.formData.nation,callback:function(t){e.$set(e.formData,"nation",t)},expression:"formData.nation"}})],1),a("el-form-item",{attrs:{label:"婚姻状况"}},[a("el-select",{staticClass:"inputW2",model:{value:e.formData.maritalStatus,callback:function(t){e.$set(e.formData,"maritalStatus",t)},expression:"formData.maritalStatus"}},e._l(e.EmployeeEnum.maritaStatus,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"生日"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"示例 0323"},model:{value:e.formData.birthday,callback:function(t){e.$set(e.formData,"birthday",t)},expression:"formData.birthday"}})],1),a("el-form-item",{attrs:{label:"年龄"}},[a("el-input",{staticClass:"inputW2",attrs:{type:"number"},model:{value:e.formData.age,callback:function(t){e.$set(e.formData,"age",t)},expression:"formData.age"}})],1),a("el-form-item",{attrs:{label:"星座"}},[a("el-select",{staticClass:"inputW2",model:{value:e.formData.constellation,callback:function(t){e.$set(e.formData,"constellation",t)},expression:"formData.constellation"}},e._l(e.EmployeeEnum.constellation,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"血型"}},[a("el-select",{staticClass:"inputW2",model:{value:e.formData.bloodType,callback:function(t){e.$set(e.formData,"bloodType",t)},expression:"formData.bloodType"}},e._l(e.EmployeeEnum.bloodType,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"户籍所在地"}},[a("el-input",{staticClass:"inputW5",model:{value:e.formData.domicile,callback:function(t){e.$set(e.formData,"domicile",t)},expression:"formData.domicile"}})],1),a("el-form-item",{attrs:{label:"政治面貌"}},[a("el-input",{staticClass:"inputW2",model:{value:e.formData.politicalOutlook,callback:function(t){e.$set(e.formData,"politicalOutlook",t)},expression:"formData.politicalOutlook"}})],1),a("el-form-item",{attrs:{label:"入党时间"}},[a("el-date-picker",{staticClass:"inputW",attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.formData.timeToJoinTheParty,callback:function(t){e.$set(e.formData,"timeToJoinTheParty",t)},expression:"formData.timeToJoinTheParty"}})],1),a("el-form-item",{attrs:{label:"存档机构"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.archivingOrganization,callback:function(t){e.$set(e.formData,"archivingOrganization",t)},expression:"formData.archivingOrganization"}})],1),a("el-form-item",{attrs:{label:"子女状态"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.stateOfChildren,callback:function(t){e.$set(e.formData,"stateOfChildren",t)},expression:"formData.stateOfChildren"}})],1),a("el-form-item",{attrs:{label:"子女有无商业险"}},[a("el-radio-group",{model:{value:e.formData.doChildrenHaveCommercialInsurance,callback:function(t){e.$set(e.formData,"doChildrenHaveCommercialInsurance",t)},expression:"formData.doChildrenHaveCommercialInsurance"}},[a("el-radio",{attrs:{label:"1"}},[e._v("有")]),a("el-radio",{attrs:{label:"2"}},[e._v("无")])],1)],1),a("el-form-item",{attrs:{label:"有无违法违纪状态"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.isThereAnyViolationOfLawOrDiscipline,callback:function(t){e.$set(e.formData,"isThereAnyViolationOfLawOrDiscipline",t)},expression:"formData.isThereAnyViolationOfLawOrDiscipline"}})],1),a("el-form-item",{attrs:{label:"有无重大病史"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.areThereAnyMajorMedicalHistories,callback:function(t){e.$set(e.formData,"areThereAnyMajorMedicalHistories",t)},expression:"formData.areThereAnyMajorMedicalHistories"}})],1)],1),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[e._v("通讯信息")]),a("el-form-item",{attrs:{label:"QQ"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.qq,callback:function(t){e.$set(e.formData,"qq",t)},expression:"formData.qq"}})],1),a("el-form-item",{attrs:{label:"微信"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.wechat,callback:function(t){e.$set(e.formData,"wechat",t)},expression:"formData.wechat"}})],1),a("el-form-item",{attrs:{label:"现居住地"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.placeOfResidence,callback:function(t){e.$set(e.formData,"placeOfResidence",t)},expression:"formData.placeOfResidence"}})],1),a("el-form-item",{attrs:{label:"通讯地址"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.postalAddress,callback:function(t){e.$set(e.formData,"postalAddress",t)},expression:"formData.postalAddress"}})],1),a("el-form-item",{attrs:{label:"联系手机"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"11位字符",maxlength:"11"},nativeOn:{change:function(t){return e.handlePhone(2)}},model:{value:e.formData.contactTheMobilePhone,callback:function(t){e.$set(e.formData,"contactTheMobilePhone",t)},expression:"formData.contactTheMobilePhone"}})],1),a("el-form-item",{attrs:{label:"个人邮箱"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入",type:"mail"},model:{value:e.formData.personalMailbox,callback:function(t){e.$set(e.formData,"personalMailbox",t)},expression:"formData.personalMailbox"}})],1),a("el-form-item",{attrs:{label:"紧急联系人"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.emergencyContact,callback:function(t){e.$set(e.formData,"emergencyContact",t)},expression:"formData.emergencyContact"}})],1),a("el-form-item",{attrs:{label:"紧急联系电话"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"11位字符"},model:{value:e.formData.emergencyContactNumber,callback:function(t){e.$set(e.formData,"emergencyContactNumber",t)},expression:"formData.emergencyContactNumber"}})],1)],1),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[e._v("账号信息")]),a("el-form-item",{attrs:{label:"社保电脑号"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.socialSecurityComputerNumber,callback:function(t){e.$set(e.formData,"socialSecurityComputerNumber",t)},expression:"formData.socialSecurityComputerNumber"}})],1),a("el-form-item",{attrs:{label:"公积金账号"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.providentFundAccount,callback:function(t){e.$set(e.formData,"providentFundAccount",t)},expression:"formData.providentFundAccount"}})],1),a("el-form-item",{attrs:{label:"银行卡号"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.bankCardNumber,callback:function(t){e.$set(e.formData,"bankCardNumber",t)},expression:"formData.bankCardNumber"}})],1),a("el-form-item",{attrs:{label:"开户行"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.openingBank,callback:function(t){e.$set(e.formData,"openingBank",t)},expression:"formData.openingBank"}})],1)],1),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[e._v("教育信息")]),a("el-form-item",{attrs:{label:"学历类型"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.educationalType,callback:function(t){e.$set(e.formData,"educationalType",t)},expression:"formData.educationalType"}},e._l(e.EmployeeEnum.educationType,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"毕业学校"}},[a("el-input",{staticClass:"inputW2",attrs:{placeholder:"请输入"},model:{value:e.formData.graduateSchool,callback:function(t){e.$set(e.formData,"graduateSchool",t)},expression:"formData.graduateSchool"}})],1),a("el-form-item",{attrs:{label:"入学时间"}},[a("el-date-picker",{staticClass:"inputW",attrs:{type:"data",placeholder:"请输入时间","value-format":"yyyy-MM-dd"},model:{value:e.formData.enrolmentTime,callback:function(t){e.$set(e.formData,"enrolmentTime",t)},expression:"formData.enrolmentTime"}})],1),a("el-form-item",{attrs:{label:"毕业时间"}},[a("el-date-picker",{staticClass:"inputW",attrs:{type:"data",placeholder:"请输入时间","value-format":"yyyy-MM-dd"},model:{value:e.formData.graduationTime,callback:function(t){e.$set(e.formData,"graduationTime",t)},expression:"formData.graduationTime"}})],1),a("el-form-item",{attrs:{label:"专业"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.major,callback:function(t){e.$set(e.formData,"major",t)},expression:"formData.major"}})],1)],1),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[e._v("从业信息")]),a("el-form-item",{attrs:{label:"上家公司"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.homeCompany,callback:function(t){e.$set(e.formData,"homeCompany",t)},expression:"formData.homeCompany"}})],1),a("el-form-item",{attrs:{label:"职称"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}})],1),a("el-form-item",{attrs:{label:"有无竞业限制"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入"},model:{value:e.formData.isThereAnyCompetitionRestriction,callback:function(t){e.$set(e.formData,"isThereAnyCompetitionRestriction",t)},expression:"formData.isThereAnyCompetitionRestriction"}})],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:e.formData.remarks,callback:function(t){e.$set(e.formData,"remarks",t)},expression:"formData.remarks"}})],1),a("el-row",{staticClass:"inline-info",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:12}},[a("el-button",{attrs:{type:"primary"},on:{click:e.savePersonal}},[e._v("保存更新")]),a("el-button",{on:{click:function(t){return e.$router.back()}}},[e._v("返回")])],1)],1)],1)])],1)},i=[],c=a("01f5"),m={data:function(){return{userId:this.$route.params.id,EmployeeEnum:c["a"],userInfo:{},formData:{userId:"",username:"",sex:"",mobile:"",companyId:"",departmentName:"",dateOfBirth:"",timeOfEntry:"",theHighestDegreeOfEducation:"",nationalArea:"",passportNo:"",idNumber:"",idCardPhotoPositive:"",idCardPhotoBack:"",nativePlace:"",nation:"",englishName:"",maritalStatus:"",staffPhoto:"",birthday:"",zodiac:"",age:"",constellation:"",bloodType:"",domicile:"",politicalOutlook:"",timeToJoinTheParty:"",archivingOrganization:"",stateOfChildren:"",doChildrenHaveCommercialInsurance:"1",isThereAnyViolationOfLawOrDiscipline:"",areThereAnyMajorMedicalHistories:"",qq:"",wechat:"",residenceCardCity:"",dateOfResidencePermit:"",residencePermitDeadline:"",placeOfResidence:"",postalAddress:"",contactTheMobilePhone:"",personalMailbox:"",emergencyContact:"",emergencyContactNumber:"",socialSecurityComputerNumber:"",providentFundAccount:"",bankCardNumber:"",openingBank:"",educationalType:"",graduateSchool:"",enrolmentTime:"",graduationTime:"",major:"",graduationCertificate:"",certificateOfAcademicDegree:"",homeCompany:"",title:"",resume:"",isThereAnyCompetitionRestriction:"",proofOfDepartureOfFormerCompany:"",remarks:""}}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["j"])(e.userId);case 2:return e.userInfo=t.sent,t.next=5,Object(n["n"])(e.userId);case 5:e.formData=t.sent;case 6:case"end":return t.stop()}}),t)})))()},methods:{saveUser:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["t"])(e.userInfo);case 2:e.$message.success("操作成功");case 3:case"end":return t.stop()}}),t)})))()},savePersonal:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["w"])(e.formData);case 2:e.$message.success("操作成功");case 3:case"end":return t.stop()}}),t)})))()}}},u=m,f=a("2877"),p=Object(f["a"])(u,s,i,!1,null,null,null),d=p.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"job-info"},[a("el-form",{attrs:{"label-width":"220px"}},[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-tooltip",{attrs:{content:"打印岗位信息"}},[a("router-link",{attrs:{to:"/employess/print/"+e.userId+"?type=job"}},[a("i",{staticClass:"el-icon-printer"})])],1)],1),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[e._v("基础信息")]),a("el-form-item",{attrs:{label:"岗位"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.post,callback:function(t){e.$set(e.formData,"post",t)},expression:"formData.post"}})],1),a("el-form-item",{attrs:{label:"转正状态"}},[a("el-select",{attrs:{placeholder:"请选择",disabled:""},model:{value:e.formData.stateOfCorrection,callback:function(t){e.$set(e.formData,"stateOfCorrection",t)},expression:"formData.stateOfCorrection"}},e._l(e.EmployeeEnum.stateOfCorrection,(function(e){return a("el-option",{key:e.value,attrs:{value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"职级"}},[a("el-input",{staticClass:"inputW",model:{value:e.formData.rank,callback:function(t){e.$set(e.formData,"rank",t)},expression:"formData.rank"}})],1),a("el-form-item",{attrs:{label:"转正评价"}},[a("el-input",{attrs:{type:"textarea",placeholder:"1-300位字符"},model:{value:e.formData.correctionEvaluation,callback:function(t){e.$set(e.formData,"correctionEvaluation",t)},expression:"formData.correctionEvaluation"}})],1),a("el-form-item",{attrs:{label:"汇报对象"}},[a("el-select",{staticClass:"inputW",attrs:{filterable:"",placeholder:"请选择"},model:{value:e.formData.reportId,callback:function(t){e.$set(e.formData,"reportId",t)},expression:"formData.reportId"}},e._l(e.depts,(function(e){return a("el-option",{key:e.id,attrs:{label:e.username,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"HRBP"}},[a("el-select",{staticClass:"inputW",attrs:{filterable:"",placeholder:"请选择"},model:{value:e.formData.hrbp,callback:function(t){e.$set(e.formData,"hrbp",t)},expression:"formData.hrbp"}},e._l(e.depts,(function(e){return a("el-option",{key:e.id,staticClass:"inputW",attrs:{label:e.username,value:e.id}})})),1)],1),a("el-form-item",{staticClass:"formInfo",attrs:{label:"调整司龄(天)："}},[a("el-input",{staticClass:"inputW",attrs:{type:"number",placeholder:"请输入"},model:{value:e.formData.adjustmentAgedays,callback:function(t){e.$set(e.formData,"adjustmentAgedays",t)},expression:"formData.adjustmentAgedays"}})],1),a("el-form-item",{attrs:{label:"首次参加工作时间"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.formData.workingTimeForTheFirstTime,callback:function(t){e.$set(e.formData,"workingTimeForTheFirstTime",t)},expression:"formData.workingTimeForTheFirstTime"}})],1),a("el-form-item",{attrs:{label:"调整工龄"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"0.00年",disabled:""},model:{value:e.formData.adjustmentOfLengthOfService,callback:function(t){e.$set(e.formData,"adjustmentOfLengthOfService",t)},expression:"formData.adjustmentOfLengthOfService"}})],1)],1),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[e._v("合同信息")]),a("el-form-item",{staticClass:"formInfo",attrs:{label:"首次合同开始时间："}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.formData.initialContractStartTime,callback:function(t){e.$set(e.formData,"initialContractStartTime",t)},expression:"formData.initialContractStartTime"}})],1),a("el-form-item",{attrs:{label:"首次合同结束时间"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.formData.firstContractTerminationTime,callback:function(t){e.$set(e.formData,"firstContractTerminationTime",t)},expression:"formData.firstContractTerminationTime"}})],1),a("el-form-item",{attrs:{label:"现合同开始时间"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.formData.currentContractStartTime,callback:function(t){e.$set(e.formData,"currentContractStartTime",t)},expression:"formData.currentContractStartTime"}})],1),a("el-form-item",{attrs:{label:"现合同结束时间"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.formData.closingTimeOfCurrentContract,callback:function(t){e.$set(e.formData,"closingTimeOfCurrentContract",t)},expression:"formData.closingTimeOfCurrentContract\t"}})],1),a("el-form-item",{attrs:{label:"合同期限"}},[a("el-select",{staticClass:"filter-item",model:{value:e.formData.contractPeriod,callback:function(t){e.$set(e.formData,"contractPeriod",t)},expression:"formData.contractPeriod"}},e._l(e.EmployeeEnum.contractPeriod,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"续签次数"}},[a("el-select",{staticClass:"filter-item",model:{value:e.formData.renewalNumber,callback:function(t){e.$set(e.formData,"renewalNumber",t)},expression:"formData.renewalNumber"}},e._l(e.EmployeeEnum.renewalCount,(function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})})),1)],1)],1),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[e._v("招聘信息")]),a("el-form-item",{attrs:{label:"其他招聘渠道"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.otherRecruitmentChannels,callback:function(t){e.$set(e.formData,"otherRecruitmentChannels",t)},expression:"formData.otherRecruitmentChannels"}},e._l(e.EmployeeEnum.resumeSource,(function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"招聘渠道"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.recruitmentChannels,callback:function(t){e.$set(e.formData,"recruitmentChannels",t)},expression:"formData.recruitmentChannels"}},e._l(e.EmployeeEnum.resumeSource,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"社招/校招"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.socialRecruitment,callback:function(t){e.$set(e.formData,"socialRecruitment",t)},expression:"formData.socialRecruitment"}},e._l(e.EmployeeEnum.hireSourceType,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"推荐企业/人"}},[a("el-input",{staticClass:"infoPosition inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.recommenderBusinessPeople,callback:function(t){e.$set(e.formData,"recommenderBusinessPeople",t)},expression:"formData.recommenderBusinessPeople"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.saveJob}},[e._v("保存更新")]),a("el-button",{on:{click:function(t){return e.$router.back()}}},[e._v("返回")])],1)],1)],1)},v=[],D={data:function(){return{userId:this.$route.params.id,depts:[],EmployeeEnum:c["a"],formData:{adjustmentAgedays:"",adjustmentOfLengthOfService:"",closingTimeOfCurrentContract:"",companyId:"",contractDocuments:"",contractPeriod:"",correctionEvaluation:"",currentContractStartTime:"",firstContractTerminationTime:"",hrbp:"",initialContractStartTime:"",otherRecruitmentChannels:"",post:"",rank:null,recommenderBusinessPeople:"",recruitmentChannels:"",renewalNumber:"",reportId:"",reportName:null,socialRecruitment:"",stateOfCorrection:"",taxableCity:"",userId:"",workMailbox:"",workingCity:"",workingTimeForTheFirstTime:""}}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["m"])(e.userId);case 2:e.formData=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{saveJob:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["v"])(e.formData);case 2:e.$message.success("操作成功");case 3:case"end":return t.stop()}}),t)})))()}}},h=D,y=Object(f["a"])(h,b,v,!1,null,null,null),C=y.exports,k={name:"Detail",components:{UserInfo:d,JobInfo:C},data:function(){return{userInfo:{username:"",password:""},rules:{username:[{required:!0,message:"姓名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:9,message:"密码长度6-9位",trigger:"blur"}]}}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["j"])(e.$route.params.id);case 2:e.userInfo=t.sent;case 3:case"end":return t.stop()}}),t)})))()},mounted:function(){},methods:{onUpdate:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["t"])(e.userInfo);case 2:e.$message.success("操作成功");case 3:case"end":return t.stop()}}),t)})))()}}},x=k,g=Object(f["a"])(x,r,l,!1,null,"a393c78a",null);t["default"]=g.exports}}]);